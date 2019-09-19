import Vuex from "vuex";
import { shallow, createLocalVue } from "vue-test-utils";
import PokemonList from "./pokemon-list.component.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
describe("pokemon-list", () => {
  let store: any;
  let mutations: any;
  beforeEach(() => {
    mutations = {
      MUTATION: jest.fn()
    };
    store = new Vuex.Store({
      mutations
    });
  });
  it("pokemon-list to render", () => {
    spyOn(store, "dispatch");
    const wrapper = shallow(PokemonList, {
      store,
      localVue,
      propsData: {}
    });

    expect(store.dispatch).toHaveBeenCalled();
  });
});
