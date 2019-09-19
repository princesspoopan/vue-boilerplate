import Vue from "vue";
import Vuex from "vuex";
import { PokemonStore } from "./pokemons/store/pokemon.store";
import { AbilityStore } from "./abilities/store/ability.store";

Vue.use(Vuex);

const store = new Vuex.Store({});

store.registerModule("pokemon", PokemonStore);
store.registerModule("ability", AbilityStore);

export default store;
