<template>
  <div class="app-container">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <navbar class="navbar-container" />
      <app-main />
    </div>
  </div>
</template>

<script>
import { Sidebar, Navbar, AppMain } from "./components";
export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain,
  },
  methods: {},
};
</script>

<style lang="less">
</style>