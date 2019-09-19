<template>
  <div class="home">
    <ability-list />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AbilityList from "../components/ability-list.component.vue"; // @ is an alias to /src

@Component({
  components: {
    AbilityList
  }
})
export default class AbilityListPages extends Vue {}
</script>
