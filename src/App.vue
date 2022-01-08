<template>
  <div id="app">
    <CollapseTable />
  </div>
</template>

<script>
import CollapseTable from "./components/CollapseTable.vue";

export default {
  name: "App",
  components: {
    CollapseTable,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
