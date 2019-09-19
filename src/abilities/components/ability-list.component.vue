<template>
  <div class="hello">
    List of Abilities:
    <ul v-if="Abilities && Abilities.length">
      <li :key="item.id" v-for="item in Abilities">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class AbilityList extends Vue {

  abilities: any[] = [];

  mounted() {
    this.$store.dispatch("ability/fetchAbilities");
  }

  get Abilities() {
    return this.$store.getters["ability/abilities"];
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
