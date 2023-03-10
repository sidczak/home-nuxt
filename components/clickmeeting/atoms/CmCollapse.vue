<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <div @click="toggle(index)" class="accordion">
        <div>{{ item.title }}</div>
        <div v-if="item.isOpen"><i class="fa fa-caret-up"></i></div>
        <div v-else><i class="fa fa-caret-down"></i></div>
      </div>
      <div v-if="item.isOpen" class="panel" :class="{ show: item.isOpen }">
        <p>{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: "Section 1",
          content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          isOpen: false,
        },
        {
          title: "Section 2",
          content:
            "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          isOpen: false,
        },
        {
          title: "Section 3",
          content:
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          isOpen: false,
        },
      ],
    };
  },
  methods: {
    toggle(index) {
      this.items[index].isOpen = !this.items[index].isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active,
.accordion:hover {
  background-color: #ccc;
}

.panel {
  padding: 0 18px;
  background-color: white;
  display: none;
  overflow: hidden;
}

.panel.show {
  display: block;
}

.fa-caret-up {
  float: right;
  margin-top: 3px;
}

.fa-caret-down {
  float: right;
  margin-top: 3px;
  transform: rotate(180deg);
}
</style>
