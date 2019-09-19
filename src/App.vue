<template>
  <div id="app">
    <cs-label
      first="cs-materials"
      middle=","
      last="I will help you build the components you want"
    ></cs-label>
    <div id="nav">
      <router-link to="/pokemons">
        Pokemons
      </router-link>
      <router-link to="/abilities">
        Abilities
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  text-align: center;
  padding: 30px;
  > * {
    margin-right: 20px;
  }
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
