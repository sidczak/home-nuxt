//ES6
const showPopover = (el, popover, placement) => {
    if (el._popoverElement) {
        hidePopover(el);
        return;
    }

    document.body.appendChild(popover);
    positionPopover(popover, el, placement);

    el._popoverElement = popover;

    document.addEventListener("click", handleClickOutside);
};

const hidePopover = (el) => {
    if (el._popoverElement) {
        document.body.removeChild(el._popoverElement);
        delete el._popoverElement;
    }

    document.removeEventListener("click", handleClickOutside);
};

const handleClickOutside = (event) => {
    const el = event.currentTarget;
    if (
        el._popoverElement &&
        !el.contains(event.target) &&
        !el._popoverElement.contains(event.target)
    ) {
        hidePopover(el);
    }
};

const positionPopover = (popover, targetElement, placement) => {
    const popoverRect = popover.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    const viewportWidth =
        window.innerWidth || document.documentElement.clientWidth;
    const viewportHeight =
        window.innerHeight || document.documentElement.clientHeight;

    const fitsOnTop = 0 < targetRect.top - popoverRect.height;
    const fitsOnRight = targetRect.right + popoverRect.width < viewportWidth;
    const fitsOnBottom =
        targetRect.bottom + popoverRect.height < viewportHeight;
    const fitsOnLeft = 0 < targetRect.left - popoverRect.width;

    let top, left;

    const calculateHorizontalCenter = () => {
        return targetRect.left + (targetRect.width - popoverRect.width) / 2;
    };

    const calculateVerticalCenter = () => {
        return targetRect.top + (targetRect.height - popoverRect.height) / 2;
    };

    if ("auto" === placement) {
        if (fitsOnTop) placement = "top";
        else if (fitsOnRight) placement = "right";
        else if (fitsOnBottom) placement = "bottom";
        else if (fitsOnLeft) placement = "left";
    }

    switch (placement) {
        case "top":
            top = fitsOnTop
                ? targetRect.top - popoverRect.height - 5
                : targetRect.bottom + 5;
            left = calculateHorizontalCenter();
            break;
        case "right":
            top = calculateVerticalCenter();
            left = fitsOnRight
                ? targetRect.right + 5
                : targetRect.left - popoverRect.width - 5;
            break;
        case "bottom":
            top = fitsOnBottom
                ? targetRect.bottom + 5
                : targetRect.top - popoverRect.height - 5;
            left = calculateHorizontalCenter();
            break;
        case "left":
            top = calculateVerticalCenter();
            left = fitsOnLeft
                ? targetRect.left - popoverRect.width - 5
                : targetRect.right + 5;
            break;
        default:
            top = targetRect.top + (targetRect.height - popoverRect.height) / 2;
            left =
                targetRect.left + targetRect.width / 2 - popoverRect.width / 2;
            break;
    }

    if (0 > top) {
        top = 5;
    } else if (top + popoverRect.height > viewportHeight) {
        top = viewportHeight - popoverRect.height - 5;
    }

    if (0 > left) {
        left = 5;
    } else if (left + popoverRect.width > viewportWidth) {
        left = viewportWidth - popoverRect.width - 5;
    }

    popover.style.top = `${top}px`;
    popover.style.left = `${left}px`;
};

export default {
    bind(el, binding) {
        const { value, modifiers } = binding;
        const content = value;
        const title = el.getAttribute("popoverTitle");

        const placement =
            Object.keys(modifiers).find((modifier) =>
                ["top", "right", "bottom", "left", "auto"].includes(modifier)
            ) || "auto";
        const trigger =
            Object.keys(modifiers).find((modifier) =>
                ["click", "hover"].includes(modifier)
            ) || "hover";

        const popover = document.createElement("div");
        popover.classList.add("popover");

        if (title) {
            popover.innerHTML = `<h3 class="popover-header">${title}</h3>`;
        }
        popover.innerHTML += `<div class="popover-body">${content}</div>`;

        if ("click" === trigger) {
            el.addEventListener("click", () =>
                showPopover(el, popover, placement)
            );
            el.addEventListener("blur", () => hidePopover(el));
        } else {
            el.addEventListener("mouseenter", () =>
                showPopover(el, popover, placement)
            );
            el.addEventListener("mouseleave", () => hidePopover(el));
        }
    },
};

// import Vue from "vue";

// Vue.directive("cm-popover", {
//     bind: function(el, binding) {
//         const { value, modifiers } = binding;
//         const content = value;
//         const title = el.getAttribute("popoverTitle");

//         const placement =
//             Object.keys(modifiers).find((modifier) =>
//                 ["top", "right", "bottom", "left", "auto"].includes(modifier)
//             ) || "auto";
//         const trigger =
//             Object.keys(modifiers).find((modifier) =>
//                 ["click", "hover"].includes(modifier)
//             ) || "hover";

//         let popover = document.createElement("div");
//         popover.classList.add("popover");

//         if (title) {
//             popover.innerHTML = `<h3 class="popover-header">${title}</h3>`;
//         }
//         popover.innerHTML += `<div class="popover-body">${content}</div>`;

//         if (trigger === "click") {
//             el.addEventListener("click", showPopover);
//             el.addEventListener("blur", hidePopover);
//         } else {
//             el.addEventListener("mouseenter", showPopover);
//             el.addEventListener("mouseleave", hidePopover);
//         }

//         function showPopover() {
//             if (el._popoverElement) {
//                 hidePopover();
//                 return;
//             }

//             document.body.appendChild(popover);
//             positionPopover(popover, el, placement);

//             el._popoverElement = popover;

//             document.addEventListener("click", handleClickOutside);
//         }

//         function hidePopover() {
//             if (el._popoverElement) {
//                 document.body.removeChild(el._popoverElement);
//                 delete el._popoverElement;
//             }

//             document.removeEventListener("click", handleClickOutside);
//         }

//         function handleClickOutside(event) {
//             if (
//                 el._popoverElement &&
//                 !el.contains(event.target) &&
//                 !el._popoverElement.contains(event.target)
//             ) {
//                 hidePopover();
//             }
//         }

//         function positionPopover(popover, targetElement, placement) {
//             const popoverRect = popover.getBoundingClientRect();
//             const targetRect = targetElement.getBoundingClientRect();
//             const viewportWidth =
//                 window.innerWidth || document.documentElement.clientWidth;
//             const viewportHeight =
//                 window.innerHeight || document.documentElement.clientHeight;

//             const fitsOnTop = 0 < targetRect.top - popoverRect.height;
//             const fitsOnRight =
//                 targetRect.right + popoverRect.width < viewportWidth;
//             const fitsOnBottom =
//                 targetRect.bottom + popoverRect.height < viewportHeight;
//             const fitsOnLeft = 0 < targetRect.left - popoverRect.width;

//             let top, left;

//             const calculateHorizontalCenter = () => {
//                 return (
//                     targetRect.left + (targetRect.width - popoverRect.width) / 2
//                 );
//             };

//             const calculateVerticalCenter = () => {
//                 return (
//                     targetRect.top +
//                     (targetRect.height - popoverRect.height) / 2
//                 );
//             };

//             if (placement === "auto") {
//                 if (fitsOnTop) placement = "top";
//                 else if (fitsOnRight) placement = "right";
//                 else if (fitsOnBottom) placement = "bottom";
//                 else if (fitsOnLeft) placement = "left";
//             }

//             switch (placement) {
//                 case "top":
//                     top = fitsOnTop
//                         ? targetRect.top - popoverRect.height - 5
//                         : targetRect.bottom + 5;
//                     left = calculateHorizontalCenter();
//                     break;
//                 case "right":
//                     top = calculateVerticalCenter();
//                     left = fitsOnRight
//                         ? targetRect.right + 5
//                         : targetRect.left - popoverRect.width - 5;
//                     break;
//                 case "bottom":
//                     top = fitsOnBottom
//                         ? targetRect.bottom + 5
//                         : targetRect.top - popoverRect.height - 5;
//                     left = calculateHorizontalCenter();
//                     break;
//                 case "left":
//                     top = calculateVerticalCenter();
//                     left = fitsOnLeft
//                         ? targetRect.left - popoverRect.width - 5
//                         : targetRect.right + 5;
//                     break;
//                 default:
//                     top =
//                         targetRect.top +
//                         (targetRect.height - popoverRect.height) / 2;
//                     left =
//                         targetRect.left +
//                         targetRect.width / 2 -
//                         popoverRect.width / 2;
//                     break;
//             }

//             if (top < 0) {
//                 top = 5;
//             } else if (top + popoverRect.height > viewportHeight) {
//                 top = viewportHeight - popoverRect.height - 5;
//             }

//             if (left < 0) {
//                 left = 5;
//             } else if (left + popoverRect.width > viewportWidth) {
//                 left = viewportWidth - popoverRect.width - 5;
//             }

//             popover.style.top = `${top}px`;
//             popover.style.left = `${left}px`;
//         }
//     },
// });
