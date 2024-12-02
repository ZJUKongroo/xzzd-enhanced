<script lang="ts" setup>
import TodoList from '~/components/TodoList.vue'
import { useWebExtensionStorage } from '~/composables/useWebExtensionStorage'

const cookie = useWebExtensionStorage('user-cookie', '')
onBeforeMount(() => {
  document.cookie = cookie.value
})
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <el-button class="sidepanel-button" @click="openOptionsPage">
    {{ $t("message.open_settings") }}
  </el-button>
  <TodoList />
</template>

<style>
.sidepanel-button{
    margin: 10px;
}
</style>
