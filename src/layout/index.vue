<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <navbar class="navbar-container" />
      </div>
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