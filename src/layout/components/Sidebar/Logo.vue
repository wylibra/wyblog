<template>
  <div class="sidebar-logo-container">
    <transition>
      <router-link class="sidebar-logo-link" to="/">
        <img :src="logo" class="sidebar-logo" />
        <h1 class="sidebar-title">{{ title }}</h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
import logoImg from "@/assets/logo.png";

export default {
  name: "SidebarLogo",
  data() {
    return {
      title: "Lucia Project",
      logo: logoImg,
    };
  },
};
</script>

<style lang="less" scoped>
.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;
  .sidebar-logo-link {
    height: 100%;
    width: 100%;
    .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
      transform: scale(2);
      margin-top: 13px;
    }
    .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 50px;
      font-size: 14px;
      vertical-align: middle;
    }
  }
}
</style>
