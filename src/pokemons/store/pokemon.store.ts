import { Module } from "vuex";
import { PokemonModel } from "../models/pokemon.model";
import axios from "axios";

export interface PokemonState {
  pokemons: Array<PokemonModel>;
}

export const PokemonStore: Module<PokemonState, any> = {
  namespaced: true,
  state: {
    pokemons: Array<PokemonModel>()
  },

  mutations: {
    setPokemons(state: PokemonState, pokemons: Array<PokemonModel>) {
      state.pokemons = pokemons;
    }
  },
  actions: {
    fetchPokemons(context, 
      /* payload // { region: us } */
    ) {
      if (context.state.pokemons && context.state.pokemons.length) {
        return;
      }
      axios
        .get('https://pokeapi.co/api/v2/pokemon')
        .then(response => {
          const pokemons: PokemonModel[] = (response.data.results as any[]).map((pokemon: { name: string }, index: number) => ({
            name: pokemon.name, id: index + 1
          }));
          context.commit("setPokemons", pokemons);
        });
    },
  },
  getters: {
    pokemons(state: PokemonState) {
      return state.pokemons;
    }
  }
};
