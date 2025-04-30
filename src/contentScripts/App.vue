<script setup lang="ts">
import { storage } from 'webextension-polyfill'
import { useVuetifyDarkmode } from '../composables/useVuetifyDarkmode'
import MainView from './views/MainView.vue'

useVuetifyDarkmode()
// import SettingsList from '~/components/SettingsList.vue'

// const settingsVisible = ref(false)
// Open settings page
// function openSettings() {
//   settingsVisible.value = true
// }
// Save user cookie for side panel to use
function saveCookie() {
  if (document.cookie) {
    // storage use chrome.storage to ensure the accessibility of datas
    storage.local.set({ 'user-cookie': document.cookie })
  }
}
// In content script, we can't directly access to plugin's runtime
// We use message and open new page in background
// function openOptionsPage() {
//   sendMessage('open-settings', {}, 'background')
// }
onMounted(() => saveCookie())
</script>

<template>
  <MainView />
</template>

<style>
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--xzzd-bg-color-solid);
  color: var(--xzzd-text-color);
}
.app-sidebar-container {
  height: 100%;
  width: 40px;
}
.app-sidebar {
  height: 100%;
  width: 40px;
  background-color: var(--xzzd-bg-color-alpha);
  border-right: solid 1px var(--xzzd-border-color);
  transition: 0.5s;
  overflow: hidden;
}
.app-container .sidebar-cell-wrapper {
  margin-top: 10px;
}
.sidebar-cell-wrapper:first-child {
  margin-top: 30px;
}
.app-sidebar:hover {
  width: 120px;
  backdrop-filter: blur(30px);
}
.app-main {
  width: 100%;
  /* padding: 10px; */
  height: 100%;
  overflow: hidden;
}
</style>
