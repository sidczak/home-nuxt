import { mount } from "@vue/test-utils";
import Main from "@/components/Main.vue";

describe("Main", () => {
  test("is a Vue instance Main", () => {
    const wrapper = mount(Main);
    expect(wrapper.vm).toBeTruthy();
  });
});
