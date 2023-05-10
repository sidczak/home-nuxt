// Zaimportuj Vue
import Vue from "vue";

// Rejestracja dyrektywy
Vue.directive("cm-popover", {
    bind: function(el, binding) {
        const title = binding.modifiers.title ? binding.modifiers.title : "";

        // var trigger = binding.modifiers.click; // Pobierz argument dyrektywy (trigger), domyślnie 'hover'
        // var placement = binding.modifiers.top; // Pobierz modyfikator (placement), domyślnie 'right'
        var content = binding.value; // Pobierz zawartość popovera
        const modifiers = binding.modifiers;

        const placement =
            Object.keys(modifiers).find((modifier) =>
                ["top", "right", "bottom", "left", "auto"].includes(modifier)
            ) || "auto";

        const trigger =
            Object.keys(modifiers).find((modifier) =>
                ["click", "hover"].includes(modifier)
            ) || "hover";

        // const { modifiers, value } = binding;
        console.log("binding", binding);
        // const content = binding.value;

        // Dodaj event listener na zdarzenie 'mouseenter'

        el.addEventListener("mouseenter", function() {
            // Stwórz nowy element div dla popovera
            var popover = document.createElement("div");

            // Ustaw zawartość popovera na wartość przekazaną jako argument dyrektywy
            popover.innerHTML = binding.value;
            popover.innerHTML = `
        <h3 class="popover-header">${el.getAttribute("data-title")}

        </h3>
        <div class="popover-body">${content}</div>
      `;

            // Stylizuj popover
            popover.classList.add("popover");

            // Dodaj popover do body
            document.body.appendChild(popover);

            // Pozycjonuj popover względem elementu, na którym wywołano dyrektywę
            var rect = el.getBoundingClientRect();
            popover.style.top = 10 + rect.bottom + "px";
            popover.style.left = 10 + rect.left + "px";

            // Przypisz element popovera do właściwości elementu, aby można go było usunąć później
            el._popoverElement = popover;
        });

        // Dodaj event listener na zdarzenie 'mouseleave'
        el.addEventListener("mouseleave", function() {
            // Usuń element popovera z body
            if (el._popoverElement) {
                document.body.removeChild(el._popoverElement);
                delete el._popoverElement;
            }
        });
    },
});
