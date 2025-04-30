<script setup lang="ts">
import { useRouter } from 'vue-router'
import { openOptionsPage } from './ntf/openLink'

const router = useRouter()
function open(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="sidebar-footer">
    <v-btn size="small" variant="plain" @click="open('/about')">
      <v-icon left> mdi-license </v-icon>
      <div class="sidebar-footer-button-text">About</div>
    </v-btn>
    <v-btn size="small" variant="plain" @click="openOptionsPage">
      <v-icon left> mdi-file-document </v-icon>
      <div class="sidebar-footer-button-text">credits</div>
      <v-icon>mdi-open-in-new</v-icon>
    </v-btn>
    <div class="mt-2 sidebar-footer-copyright">&copy; 2025 ZJUKongroo</div>
  </div>
</template>

<style>
.sidebar-footer {
  width: 100%;
  padding: 16px;
  padding-top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.sidebar-footer .v-btn {
  width: fit-content;
}

.sidebar-footer-button-text {
  padding-left: 5px;
  padding-right: 7px;
}

.sidebar-footer-copyright {
  font-size: 12px;
  font-weight: 600;
  padding-left: 12px;
}
</style>
