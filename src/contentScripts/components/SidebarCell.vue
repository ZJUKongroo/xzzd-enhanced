<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineProps({
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
})
const router = useRouter()
function openRoute(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="sidebar-cell-wrapper" @click="openRoute(path)">
    <div class="sidebar-cell-icon">
      <img :src="icon" style="color: var(--xzzd-text-color);">
    </div>
    <div class="sidebar-cell-text">
      {{ name }}
    </div>
  </div>
</template>

<style>
.sidebar-cell-wrapper{
    display: flex;
    flex-direction: row;
    width: 120px;
    align-items: center;
    transition: .3s;
}
.sidebar-cell-wrapper:hover{
    background-color: var(--xzzd-button-hover);
    cursor: pointer;
}
.sidebar-cell-wrapper:active{
    background-color: var(--xzzd-button-active);
}
.sidebar-cell-icon{
    height: 24px;
    width: 24px;
    margin: 8px;
}
.sidebar-cell-text{
    width: 80px;
    height: fit-content;
    font-size: 13px;
}
</style>
