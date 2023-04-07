<template>
  <!-- // Przykład dyrektywy -->
  <div class="my-accordion">
    <div v-for="item in items" :key="item.id">
      <div class="header" v-toggle="item.id">{{ item.title }}</div>
      <div class="content" :id="item.id" v-show="activeId === item.id">
        {{ item.content }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-accordion",
  data() {
    return {
      items: [
        {
          id: "section1",
          title: "Section 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          id: "section2",
          title: "Section 2",
          content:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          id: "section3",
          title: "Section 3",
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
      ],
      activeId: null, // domyślnie nie ma aktywnych elementów
    };
  },
  directives: {
    toggle: {
      inserted: function(el, binding, vnode) {
        el.addEventListener("click", function() {
          const target = document.getElementById(binding.value);
          if (target.style.display === "none") {
            target.style.display = "block";
            vnode.context.activeId = binding.value; // aktualizujemy aktywny id w komponencie
          } else {
            target.style.display = "none";
            vnode.context.activeId = null; // wyłączamy aktywny element, gdy kliknięty ponownie
          }
        });
      },
    },
  },
};
</script>
