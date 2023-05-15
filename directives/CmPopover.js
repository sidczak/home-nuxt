// Zaimportuj Vue
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

        el.addEventListener("mouseenter", function() {
            var popover = document.createElement("div");

            popover.innerHTML = binding.value;
            popover.innerHTML = `
        <h3 class="popover-header">${el.getAttribute("data-title")}

        </h3>
        <div class="popover-body">${content}</div>
      `;

            popover.classList.add("popover");

            document.body.appendChild(popover);

            var rect = el.getBoundingClientRect();
            popover.style.top = 5 + rect.bottom + "px";
            popover.style.left = 5 + rect.left + "px";

            el._popoverElement = popover;
        });

        el.addEventListener("mouseleave", function() {
            if (el._popoverElement) {
                document.body.removeChild(el._popoverElement);
                delete el._popoverElement;
            }
        });
    },
});
