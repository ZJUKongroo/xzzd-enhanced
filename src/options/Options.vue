<script setup lang="ts">
import { useVuetifyDarkmode } from '~/composables/useVuetifyDarkmode'

useVuetifyDarkmode()
</script>

<template>
  <main class="options-main">
    <SettingsList />
    <LicenseView />
  </main>
</template>

<style>
.options-main {
  padding: 20px;
}
#app {
  overflow: auto;
  background-color: var(--xzzd-bg-color-solid);
}
</style>
