import { positions } from "@helpers/componentsUtils";
import { hasValue } from "@helpers/utils";
import { createPopper } from "@popperjs/core";

export const HIDDEN_CLASS_NAME = "opacity-0";
export const VISIBLE_CLASS_NAME = "show";
export const DEFAULT_POSITION = "bottom";
export const DEFAULT_CLOSE_DELAY = 200;

export const instanceCache = {};
let tooltipsContainer = undefined;

const getBindingContent = (binding) => {
    return "object" === typeof binding.value
        ? binding.value.content
        : binding.value;
};

const getBindingPosition = (binding) => {
    if ("object" === typeof binding.value) {
        return binding.value.position;
    }
    return positions.find(
        (position) => binding.modifiers && binding.modifiers[position]
    );
};

const getBindingCloseDelay = (binding) => {
    if (
        "object" === typeof binding.value &&
        hasValue(binding.value.closeDelay)
    ) {
        return binding.value.closeDelay;
    }
    return binding.arg;
};

const getTooltipElement = (content, wrappingTag = "div") => {
    const element = document.createElement(wrappingTag);
    element.classList.add("tooltip", "fade", HIDDEN_CLASS_NAME);
    element.style.zIndex = 99999;
    const innerElement = document.createElement(wrappingTag);
    innerElement.classList.add("tooltip-inner");
    innerElement.innerHTML = content;

    element.appendChild(innerElement);
    return element;
};

const showTooltip = (tooltip) => {
    tooltip.classList.add(VISIBLE_CLASS_NAME);
    tooltip.classList.remove(HIDDEN_CLASS_NAME);
};

const hideTooltip = (tooltip, delay = DEFAULT_CLOSE_DELAY) => {
    setTimeout(() => {
        tooltip.classList.add(HIDDEN_CLASS_NAME);
        tooltip.classList.remove(VISIBLE_CLASS_NAME);
    }, delay);
};

const getPopper = (
    activatorElement,
    tooltipElement,
    position = DEFAULT_POSITION
) => {
    return createPopper(activatorElement, tooltipElement, {
        placement: position,
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 5],
                },
            },
        ],
    });
};

const createTooltip = (activatorElement, binding) => {
    if (!tooltipsContainer) {
        createTooltipsContainer();
    }
    const content = getBindingContent(binding);
    const position = getBindingPosition(binding);
    const closeDelay = getBindingCloseDelay(binding);

    const tooltipElement = getTooltipElement(content);

    const uniqueId = crypto.randomUUID();
    tooltipElement.dataset.tooltipId = uniqueId;
    activatorElement.dataset.tooltipId = uniqueId;

    const popper = getPopper(activatorElement, tooltipElement, position);

    const onMouseEnter = () => showTooltip(tooltipElement);
    const onMouseLeave = () => hideTooltip(tooltipElement, closeDelay);
    activatorElement.addEventListener("mouseenter", onMouseEnter);
    activatorElement.addEventListener("mouseleave", onMouseLeave);

    instanceCache[uniqueId] = {
        popper,
        tooltipElement,
        activatorElement,
        onMouseEnter,
        onMouseLeave,
    };

    tooltipsContainer.appendChild(tooltipElement);
    return tooltipElement;
};

const createTooltipsContainer = () => {
    if (tooltipsContainer) {
        return tooltipsContainer;
    }

    tooltipsContainer = document.createElement("div");
    tooltipsContainer.classList.add("tooltips__container");

    document.body.appendChild(tooltipsContainer);
};

const removeTooltipsContainer = () => {
    tooltipsContainer?.remove();
    tooltipsContainer = undefined;
};

const removeTooltip = (tooltipId) => {
    const {
        popper,
        tooltipElement,
        activatorElement,
        onMouseEnter,
        onMouseLeave,
    } = instanceCache[tooltipId];

    popper.destroy();
    tooltipElement.remove();

    activatorElement.removeEventListener("mouseenter", onMouseEnter);
    activatorElement.removeEventListener("mouseleave", onMouseLeave);

    delete instanceCache[tooltipId];
};

export default {
    inserted(activatorElement, binding) {
        createTooltip(activatorElement, binding);
    },
    componentUpdated(activatorElement, binding) {
        const { tooltipId } = activatorElement.dataset;

        if (instanceCache[tooltipId]) {
            removeTooltip(tooltipId);
        }
        createTooltip(activatorElement, binding);
    },
    unbind(el) {
        const { tooltipId } = el.dataset;
        const shouldRemoveContainer = 1 <= Object.keys(instanceCache).length;
        if (shouldRemoveContainer) {
            removeTooltipsContainer();
        }
        if (instanceCache[tooltipId]) {
            removeTooltip(tooltipId);
        }
    },
};
