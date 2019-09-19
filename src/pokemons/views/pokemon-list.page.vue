<template>
  <div class="home">
    <pokemon-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import PokemonList from "../components/pokemon-list.component.vue"; // @ is an alias to /src

@Component({
  components: {
    PokemonList
  }
})
export default class PokemonListPage extends Vue {}
</script>
