<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { animate, createSpring, stagger } from 'animejs'
import SidebarCell from './SidebarCell.vue'
import SidebarFooter from './SidebarFooter.vue'
import config from '@/../package.json'
import '../styles/sidebar.css'

const router = useRouter()
// const store = useMainStore()
const options = ref([
  { name: '主页', iconClass: 'mdi-home', path: '/user/index' },
  { name: '课程', iconClass: 'mdi-format-list-bulleted', path: '/user/course' },
])

// const exams = computed(() => store.examData)

function open(path: string, query?: any) {
  router.push({
    path,
    query,
  })
}

const settingsVisible = ref(false)
// Open settings page
function openSettings() {
  settingsVisible.value = true
}
// Save user cookie for side panel to use

onMounted(() => {
  nextTick(() => {
    animate('.sidebar-animate', {
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 100,
      delay: stagger(100),
      ease: createSpring(),
    })
  })
})
</script>

<template>
  <div class="sidebar-main">
    <div class="sidebar-logo sidebar-animate">
      <div class="sidebar-title">
        学在浙大
      </div>
      <div class="sidebar-subtitle">
        enhanced
      </div>
      <div class="sidebar-logo-version">
        {{ `v${config.version}` }}
      </div>
    </div>
    <div class="sidebar-menu sidebar-animate">
      <SidebarCell v-for="(option, index) in options" :key="index" v-ripple :name="option.name" :icon-class="option.iconClass" @click="open(option.path)" />
      <SidebarCell v-ripple name="设置" icon-class="mdi-cog" @click="openSettings" />
    </div>
    <div style="flex-grow:1;">
      <div />
    </div>
    <SidebarFooter class="sidebar-animate" />
  </div>
  <CDialog v-model:visible="settingsVisible" width="500px" height="400px">
    <template #content>
      <SettingsList />
    </template>
  </CDialog>
</template>
