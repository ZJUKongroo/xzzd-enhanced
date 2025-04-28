<script lang="ts" setup>
// import { computed, onMounted } from 'vue'
// import { usePreferredDark } from '@vueuse/core'
import Sidebar from '../components/Sidebar.vue'

// const font = computed(() => {
//   return {
//     color: usePreferredDark()
//       ? 'rgba(255, 255, 255, .05)'
//       : 'rgba(0, 0, 0, .08)',
//     size: 20,
//     weight: 600,
//   }
// })

// const store = useMainStore()

// onMounted(() => {
//   const main = document.getElementById('main-view-content')
//   if (main) {
//     entry('up', main, 50)
//   }
// })
</script>

<template>
  <div id="main-view">
    <div id="main-view-sidebar">
      <Sidebar />
    </div>
    <div id="main-view-content">
      <div id="main-view-wrapper">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style>
#main-view {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: var(--bg-color-shallow);
}
#main-view-sidebar {
  width: 200px;
  height: 100vh;
}
#main-view-content {
  flex-grow: 1;
  padding: 18px;
}
#main-view-wrapper {
  background-color: var(--bg-color-solid);
  box-sizing: border-box;
  height: 100%;
  /* padding: 20px; */
  overflow-y: auto;
  border-radius: 17px;
  box-shadow: var(--inset-shadow);
}
#main-view-header {
  height: 50px;
  text-align: right;
}
.main-view-user {
  font-size: 18px;
  font-weight: 500;
  color: var(--text-color);
  border-radius: 10px;
  width: 70px;
  padding: 5px;
  height: 40px;
  line-height: 30px;
  text-align: center;
  box-sizing: border-box;
  background-color: var(--bg-color-shallow);
}
.main-view-user:hover {
  cursor: pointer;
  background-color: var(--bg-color-solid);
}
</style>
