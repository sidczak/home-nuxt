import Vue from "vue";

Vue.directive("cm-toggle", {
    bind: function(el, binding) {
        el.addEventListener("click", function() {
            const target = document.getElementById(binding.value);
            const accordion = target.getAttribute("accordion");
            if (accordion) {
                const collapesList = document.querySelectorAll(
                    `[accordion=${accordion}]`
                );
                for (let i = 0; i < collapesList.length; i++) {
                    if (
                        collapesList[i].id === target.id &&
                        "none" === target.style.display
                    ) {
                        animateOpen(collapesList[i], 350);
                    }
                    if (collapesList[i].classList.contains("show")) {
                        animateClose(collapesList[i], 350);
                    }
                }
            } else {
                if ("none" === target.style.display) {
                    animateOpen(target, 350);
                }
                if (target.classList.contains("show")) {
                    animateClose(target, 350);
                }
            }
        });
    },
});

function animateOpen(el, time) {
    el.classList.add("collapsing");
    el.style.display = "block";
    setTimeout(() => {
        const height = el.scrollHeight;
        el.style.height = height + "px";
        setTimeout(() => {
            el.classList.remove("collapsing");
            el.classList.add("show");
            el.style.removeProperty("height");
            el.style.display = "";
        }, time);
    }, 0);
}

function animateClose(el, time) {
    const height = el.scrollHeight;
    el.style.height = height + "px";
    setTimeout(() => {
        el.classList.add("collapsing");
        el.style.height = 0;
        setTimeout(() => {
            el.classList.remove("collapsing");
            el.classList.remove("show");
            el.style.removeProperty("height");
            el.style.display = "none";
        }, time);
    }, 0);
}
