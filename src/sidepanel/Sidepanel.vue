<script setup lang="ts">
function openOptionsPage() {
  browser.runtime.openOptionsPage()
}
</script>

<template>
  <main>
    <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
    功能开发中
  </main>
</template>
