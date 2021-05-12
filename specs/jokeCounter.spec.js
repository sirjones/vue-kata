import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";

import JokeCounterComponent from "@/components/jokeCounter";
import JokeCounterStore from "@/store/jokeCounter";
import ajax from "../src/utils";
const ajaxStub = () => {
  return {
    id: '2',
    text: 'text'
  }
}

const VueWithVuex = createLocalVue();
VueWithVuex.use(Vuex);

test("Click add 1", () => {
  const store = new Vuex.Store(JokeCounterStore);
  const wrapper = mount(JokeCounterComponent, {
    localVue: VueWithVuex,
    store,
  });
  const buttons = wrapper.findAll("button");
  buttons.at(0).trigger("click");
  expect(wrapper.vm.countOrJoke).toEqual(1);
});
/* test("Click get joke", (done) => {
  const store = new Vuex.Store(JokeCounterStore);
  const wrapper = mount(JokeCounterComponent, {
    localVue: VueWithVuex,
    store,
  });
  const buttons = wrapper.findAll("button");
  buttons.at(4).trigger("click");
  setTimeout(() => {
    console.log('isNaN(wrapper.vm.countOrJoke): ', isNaN(wrapper.vm.countOrJoke))
    expect(isNaN(wrapper.vm.countOrJoke)).toEqual(true);
    done();
  }, 2000);
}); */

/* test("Click get joke 2", (done) => {
  const store = new Vuex.Store(JokeCounterStore);

  store.dispatch("getJoke");
  setTimeout(() => {
    expect(!!store.state.joke).toEqual(true);
    done();
  }, 2000);
}); */

test("Click get joke unit", (done) => {
  const store = new Vuex.Store(JokeCounterStore(ajax));

  setTimeout(() => {
    console.log('AJAX: ', ajaxResponse)
    expect(!!ajaxResponse.text).toEqual(true);
    done();
  }, 2000);
});

/* test("Click get joke 2", async (done) => {
  const ajaxResponse = await ajax();

  setTimeout(() => {
    console.log('AJAX: ', ajaxResponse)
    expect(!!ajaxResponse.text).toEqual(true);
    done();
  }, 2000);
}); */
