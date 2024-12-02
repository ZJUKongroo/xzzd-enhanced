<script setup lang="ts">
import SettingsList from '~/components/SettingsList.vue'
</script>

<template>
  <main class="options-main">
    <SettingsList />
    <LicenseAbout />
  </main>
</template>

<style>
.options-main{
  padding: 20px;
}
#app{
  overflow: auto;
}
</style>
