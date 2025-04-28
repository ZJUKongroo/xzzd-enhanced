<script lang="ts" setup>
import { useRouter } from 'vue-router'

defineProps({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
  },
})
const router = useRouter()
function openRoute(path: string | undefined) {
  if (path)
    router.push(path)
}
</script>

<template>
  <div class="sidebar-cell-wrapper" @click="openRoute(path)">
    <div class="sidebar-cell-icon">
      <slot name="icon" />
    </div>
    <div class="sidebar-cell-text">
      {{ $t(`message.${name}`) }}
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
    color: var(--xzzd-text-color);
}
.sidebar-cell-text{
    width: 80px;
    height: fit-content;
    font-size: 13px;
    color: var(--xzzd-text-color)
}
</style>
