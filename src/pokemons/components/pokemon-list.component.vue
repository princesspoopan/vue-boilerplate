<template>
  <div class="hello">
    List of Pokemons:
    <ul v-if="Pokemons && Pokemons.length">
      <li :key="item.id" v-for="item in Pokemons">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class PokemonList extends Vue {
  pokemons: any[] = [];

  mounted() {
    this.$store.dispatch("pokemon/fetchPokemons", { });
  }

  get Pokemons() {
    return this.$store.getters["pokemon/pokemons"];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
ul {
  padding-left: 20px;
}
li {
  margin: 10px;
  padding: 10px;
}
a {
  color: #42b983;
}
</style>
