<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SidebarCell from './SidebarCell.vue'
// import ExamCell from './ExamCell.vue'
import SidebarFooter from './SidebarFooter.vue'
// import { useMainStore } from '~/store/mainStore'
// import { entry } from '~/ts/entry'
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

// onMounted(() => {
//   const main = document.getElementById('sidebar-main')
//   if (main) {
//     entry('right', main, 50)
//   }
// })
</script>

<template>
  <div class="sidebar-main">
    <div class="sidebar-logo">
      <!-- <img v-if="store.isDarkMode" src="@/assets/img/logo-dark.png" alt="logo" />
      <img v-else src="@/assets/img/logo-light.png" alt="logo" /> -->
      <div class="sidebar-title">
        学在浙大
      </div>
      <div class="sidebar-subtitle">
        enhanced
      </div>
      <div class="sidebar-logo-version">
        v0.1.0
      </div>
    </div>
    <div class="sidebar-menu">
      <SidebarCell v-for="(option, index) in options" :key="index" v-ripple :name="option.name" :icon-class="option.iconClass" @click="open(option.path)" />
      <SidebarCell v-ripple name="设置" icon-class="mdi-cog" />
    </div>
    <!-- <div class="sidebar-exam">
      <template v-if="store.loading">
        <v-skeleton-loader v-for="n in 2" :key="n" type="list-item-two-line" class="mb-4" />
      </template>
      <template v-else>
        <div v-if="exams.length === 0">
          暂无考试
        </div>
        <ExamCell
          v-for="exam in exams" v-else v-ripple :info="exam" @click="open('/exam/review', {
            id: exam.id,
          })"
        />
      </template>
  </div> -->
    <div style="flex-grow:1;">
      <div />
    </div>
    <SidebarFooter />
  </div>
</template>
