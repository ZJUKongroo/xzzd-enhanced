<script lang="ts" setup>
import { ref } from 'vue'
import axios from '~/request'

const course_list = ref<RECENT_COURSE> ({
  visited_courses: [],
})

onBeforeMount(() => {
  axios.get('/api/user/recently-visited-courses').then((res) => {
    course_list.value = JSON.parse(res.data) as RECENT_COURSE
  })
})

function openUrl(course: COURSE) {
  window.location.href = `https://courses.zju.edu.cn/course/${course.id}/content#/`
}
</script>

<template>
  <div class="recent-course-container">
    <div class="recent-course-header">
      最近访问
    </div>
    <div
      v-for="(course, index) in course_list.visited_courses" :key="index" :style="{
        backgroundImage: `url(${course.cover})`,
      }" class="recent-course-cell" @click="openUrl(course)"
    >
      <div class="recent-course-cell-wrapper">
        <div class="recent-course-cell-name">
          {{ course.name }}
        </div>
        <div class="recent-course-cell-department">
          {{ course.department.name }}
        </div>
        <div class="recent-course-cell-class">
          {{ course.course_attributes.teaching_class_name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.recent-course-container{
    border: solid 1px var(--xzzd-border-color);
    border-radius: 10px;
    padding: 6px;
    width: calc(100% - 12px);
    margin: 6px;
}
.recent-course-header{
    font-weight: 600;
    font-size: 23px;
    margin: 6px;
    margin-left: 10px;
}
.recent-course-cell{
    border: 1px solid var(--xzzd-border-color);
    border-radius: 8px;
    margin: 10px;
    transition: .3s;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
}
.recent-course-cell:hover{
    cursor: pointer;
    filter: brightness(0.8);
}
.recent-course-cell:active{
    filter: brightness(0.7);
}
.recent-course-cell-wrapper{
    background: linear-gradient(90deg,var(--xzzd-bg-color-solid) 30%,transparent 100%);
    padding: 5px;
    height: 100%;
}
.recent-course-cell-name{
    font-size: 18px;
    font-weight: 600;
}
.recent-course-cell-department{
    font-size: 14px;
    font-weight: 500;
}
.recent-course-cell-class{
    font-size: 12px;
    font-weight: 300;
}
</style>
