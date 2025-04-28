<script lang="ts" setup>
import TodoList from '~/components/TodoList.vue'
import { useVuetifyDarkmode } from '~/composables/useVuetifyDarkmode'

useVuetifyDarkmode()

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
function openXzzd() {
  window.open('https://courses.zju.edu.cn/user/index')
}
</script>

<template>
  <v-btn class="sidepanel-button" @click="openOptionsPage">
    {{ $t("message.open_settings") }}
  </v-btn>
  <v-btn class="sidepanel-button" @click="openXzzd">
    {{ $t("message.open_xzzd") }}
  </v-btn>
  <div class="sidepanel-page">
    <TodoList />
  </div>
</template>

<style>
.sidepanel-button{
    margin: 10px;
    display: inline-block;
}
#app{
  overflow: auto;
}
.sidepanel-page{
  padding: 10px;
}
</style>
