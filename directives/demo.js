import Vue from "vue";

Vue.directive("toggle", {
  bind: function(el, binding) {
    el.addEventListener("click", function() {
      if (el.classList.contains("active")) {
        el.classList.remove("active");
        binding.value(false);
      } else {
        el.classList.add("active");
        binding.value(true);
      }
    });
  },
});

// <button v-toggle="toggleHandler">Toggle me</button>

// Example 1
// Vue.directive("demo", function(el, binding) {
//   console.log(binding.value.color); // => "white"
//   console.log(binding.value.text); // => "hello!"
// });
// Wywołanie:
// v-demo="{ color: 'white', text: 'hello!' }"

// Example 2
Vue.directive("bg-color", function(el, binding) {
  el.style.backgroundColor = binding.value;
});
// Wywołanie:
// v-bg-color="red"
// red musimy zdefiniować w data
// lub
// v-bg-color="'red'" v-bg-color="'#ff0000'"

// Example 3
// Vue.directive("scroll", {
//   bind(el, binding, vnode) {
//     el.style.position = "fixed";
//     el.style.top = binding.value + "px";
//   },
// });
// v-scroll="170"

// Example 4
// Register a global custom directive called `v-focus`
// Vue.directive("focus", {
//   // When the bound element is inserted into the DOM...
//   inserted: function(el) {
//     // Focus the element
//     el.focus();
//   },
// });
// Wywołanie:
// v-focus

// Example 5
// Vue.directive("demo2", {
//   bind: function(el, binding, vnode) {
//     var s = JSON.stringify;
//     el.innerHTML =
//       "name: " +
//       s(binding.name) +
//       "<br>" +
//       "value: " +
//       s(binding.value) +
//       "<br>" +
//       "expression: " +
//       s(binding.expression) +
//       "<br>" +
//       "argument: " +
//       s(binding.arg) +
//       "<br>" +
//       "modifiers: " +
//       s(binding.modifiers) +
//       "<br>" +
//       "vnode keys: " +
//       Object.keys(vnode).join(", ");
//   },
// });
// Wywołanie:
// v-demo2:foo.a.b="message"
// Pod message możemy wstawić data lub computed
