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
  <div class="sidepanel-page">
    <v-btn variant="tonal" class="sidepanel-button" @click="openOptionsPage">
      {{ $t("message.open_settings") }}
    </v-btn>
    <v-btn variant="tonal" class="sidepanel-button" @click="openXzzd">
      {{ $t("message.open_xzzd") }}
    </v-btn>
    <TodoList />
  </div>
</template>

<style>
.sidepanel-button{
    margin: 10px;
}
#app{
  overflow: auto;
}
.sidepanel-page{
  padding: 10px;
}
</style>
