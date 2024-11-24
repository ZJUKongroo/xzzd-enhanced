<script setup lang="ts">
import SidebarCell from './components/SidebarCell.vue'
import menu from '~/assets/menu.svg'
</script>

<template>
  <div class="app-container">
    <div class="app-sidebar-container">
      <div class="app-sidebar">
        <SidebarCell name="Home" path="/user/index" :icon="menu" />
        <SidebarCell name="Course" path="/user/course" :icon="menu" />
      </div>
    </div>
    <div class="app-main">
      <RouterView />
    </div>
  </div>
</template>

<style>
.app-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.app-sidebar-container{
  height: 100%;
  width: 40px;
}
.app-sidebar{
  height: 100%;
  width: 40px;
  background-color: var(--xzzd-bg-color-alpha);
  border: solid 1px var(--xzzd-border-color);
  transition: .5s;
  overflow: hidden;
}
.app-container .sidebar-cell-wrapper{
  margin-top: 10px;
}
.sidebar-cell-wrapper:first-child{
  margin-top: 30px;
}
.app-sidebar:hover{
  width: 120px;
  backdrop-filter: blur(30px);
}
.app-main{
  width: calc(100% - 40px);
  height: 100%;
}
</style>
