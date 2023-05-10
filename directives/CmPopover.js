// Zaimportuj Vue
import Vue from "vue";

// Rejestracja dyrektywy
Vue.directive("cm-popover", {
    bind: function(el, binding) {
        const title = binding.modifiers.title ? binding.modifiers.title : "";

        var trigger = binding.modifiers.click; // Pobierz argument dyrektywy (trigger), domyślnie 'hover'
        var placement = binding.modifiers.top; // Pobierz modyfikator (placement), domyślnie 'right'
        var content = binding.value; // Pobierz zawartość popovera

        // Dodaj event listener na zdarzenie 'mouseenter'

        el.addEventListener("mouseenter", function() {
            // Stwórz nowy element div dla popovera
            var popover = document.createElement("div");
            console.log("title", title);
            console.log("trigger", trigger);
            console.log("placement", placement);
            console.log("content", content);

            // Ustaw zawartość popovera na wartość przekazaną jako argument dyrektywy
            popover.innerHTML = binding.value;

            // Stylizuj popover
            popover.classList.add("popover");
            // popover.style.position = "absolute";
            // popover.style.backgroundColor = "white";
            // popover.style.border = "1px solid #ccc";
            // popover.style.padding = "10px";
            // popover.style.zIndex = "9999";

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
