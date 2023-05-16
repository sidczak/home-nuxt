import Vue from "vue";

Vue.directive("cm-popover", {
    bind: function(el, binding) {
        const { value, modifiers } = binding;
        const content = value;

        const placement =
            Object.keys(modifiers).find((modifier) =>
                ["top", "right", "bottom", "left", "auto"].includes(modifier)
            ) || "auto";
        const trigger =
            Object.keys(modifiers).find((modifier) =>
                ["click", "hover"].includes(modifier)
            ) || "hover";

        function showPopover() {
            if (el._popoverElement) {
                hidePopover();
                return;
            }

            var popover = document.createElement("div");

            popover.innerHTML = `
        <h3 class="popover-header">${el.getAttribute("data-title")}</h3>
        <div class="popover-body">${content}</div>
      `;

            popover.classList.add("popover");

            document.body.appendChild(popover);

            var rect = el.getBoundingClientRect();
            popover.style.top = 5 + rect.bottom + "px";
            popover.style.left = 5 + rect.left + "px";

            el._popoverElement = popover;

            document.addEventListener("click", handleClickOutside);
        }

        function hidePopover() {
            if (el._popoverElement) {
                document.body.removeChild(el._popoverElement);
                delete el._popoverElement;
            }

            document.removeEventListener("click", handleClickOutside);
        }

        function handleClickOutside(event) {
            if (
                el._popoverElement &&
                !el.contains(event.target) &&
                !el._popoverElement.contains(event.target)
            ) {
                hidePopover();
            }
        }

        if (trigger === "click") {
            el.addEventListener("click", showPopover);
            el.addEventListener("blur", hidePopover);
        } else {
            el.addEventListener("mouseenter", showPopover);
            el.addEventListener("mouseleave", hidePopover);
        }
    },
});
