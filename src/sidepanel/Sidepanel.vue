<script lang="ts" setup>
import TodoList from '~/components/TodoList.vue'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
function openXzzd() {
  window.open('https://courses.zju.edu.cn/user/index')
}
</script>

<template>
  <el-button class="sidepanel-button" @click="openOptionsPage">
    {{ $t("message.open_settings") }}
  </el-button>
  <el-button class="sidepanel-button" @click="openXzzd">
    {{ $t("message.open_xzzd") }}
  </el-button>
  <TodoList />
</template>

<style>
.sidepanel-button{
    margin: 10px;
    display: inline-block;
}
#app{
  overflow: auto;
}
</style>
