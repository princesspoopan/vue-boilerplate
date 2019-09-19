import { Module } from "vuex";
import { AbilityModel } from "../models/ability.model";
import axios from "axios";

export interface AbilityState {
  abilities: Array<AbilityModel>;
}

export const AbilityStore: Module<AbilityState, any> = {
  namespaced: true,
  state: {
    abilities: Array<AbilityModel>()
  },

  mutations: {
    setAbilities(state: AbilityState, abilities: Array<AbilityModel>) {
      state.abilities = abilities;
    }
  },
  actions: {
    fetchAbilities(context) {
      if (context.state.abilities && context.state.abilities.length) {
        return;
      }
      axios
        .get('https://pokeapi.co/api/v2/ability')
        .then(response => {
          const abilities = (response.data.results as any[]).map((ability: { name: string }, index) => {
            return { name: ability.name, id: index + 1 }
          });
          context.commit("setAbilities", abilities);
        });
    }
  },
  getters: {
    abilities(state: AbilityState) {
      return state.abilities;
    }
  }
};
