<script setup lang="ts">
import { storage } from 'webextension-polyfill'
import { sendMessage } from 'webext-bridge/content-script'
import SidebarCell from './components/SidebarCell.vue'
import SettingsList from '~/components/SettingsList.vue'
// Iconify icons
import AntDesignHomeFilled from '~icons/ant-design/home-filled'
import AntDesignUnorderedList from '~icons/ant-design/unordered-list'
import AntDesignSettingFilled from '~icons/ant-design/setting-filled'

const settingsVisible = ref(false)
// Open settings page
function openSettings() {
  settingsVisible.value = true
}
// Save user cookie for side panel to use
function saveCookie() {
  if (document.cookie) {
    // storage use chrome.storage to ensure the accessibility of datas
    storage.local.set({ 'user-cookie': document.cookie })
  }
}
// In content script, we can't directly access to plugin's runtime
// We use message and open new page in background
function openOptionsPage() {
  sendMessage('open-settings', {}, 'background')
}
onMounted(() => saveCookie())
</script>

<template>
  <div class="app-container">
    <div class="app-sidebar-container">
      <div class="app-sidebar">
        <SidebarCell name="home" path="/user/index">
          <template #icon>
            <AntDesignHomeFilled />
          </template>
        </SidebarCell>
        <SidebarCell name="course" path="/user/course">
          <template #icon>
            <AntDesignUnorderedList />
          </template>
        </SidebarCell>
        <SidebarCell name="settings" @click="openSettings">
          <template #icon>
            <AntDesignSettingFilled />
          </template>
        </SidebarCell>
      </div>
    </div>
    <div class="app-main">
      <RouterView />
    </div>
    <CDialog v-model:visible="settingsVisible">
      <template #content>
        <SettingsList />
        <el-button style="margin-top: 10px;" @click="openOptionsPage">
          {{ $t("message.open_settings") }}
        </el-button>
      </template>
    </CDialog>
  </div>
</template>

<style>
.app-container{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  background-color: var(--xzzd-bg-color-solid);
}
.app-sidebar-container{
  height: 100%;
  width: 40px;
}
.app-sidebar{
  height: 100%;
  width: 40px;
  background-color: var(--xzzd-bg-color-alpha);
  border-right: solid 1px var(--xzzd-border-color);
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
  width: 100%;
  /* padding: 10px; */
  height: 100%;
  overflow: hidden;
}
</style>
