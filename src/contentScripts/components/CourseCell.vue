<script lang="ts" setup>
import { usePreferredDark } from '@vueuse/core'
import { openCourse } from './ntf/openLink'

defineProps({
  data: {
    type: Object as PropType<COURSE>,
    required: true,
  },
})
const default_image = 'https://courses.zju.edu.cn/static/assets/images/large/course-cover-default-74db89b7.png'
</script>

<template>
  <div class="course-cell-conatiner" @click="openCourse(data.id)">
    <img class="course-cell-image" :src="data.cover ? data.cover : default_image">
    <div class="course-cell-main">
      <div class="course-cell-main-title ellipsis-text">
        {{ data.display_name }}
      </div>
      <div class="course-cell-main-attr ellipsis-text">
        <span>{{ data.department.name }}</span>
        {{ $t("message.lesson_start") }} <span>{{ data.start_date }}</span>
      </div>
      <div class="course-cell-main-class ellipsis-text">
        {{ $t("message.course_class") }} {{ data.course_attributes.teaching_class_name }}
      </div>
      <div class="course-cell-instuctors-wrapper ellipsis-text">
        {{ $t("message.course_instructor") }}
        <el-tooltip v-for="(instructor, index) in data.instructors" :key="index" :effect="usePreferredDark() ? 'light' : 'dark'" class="course-cell-instuctors" :content="instructor.name">
          <img class="course-cell-instuctors-img" :src="instructor.avatar_small_url">
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<style>
.course-cell-conatiner{
    border: 1px solid var(--xzzd-border-color);
    height: 100px;
    width: 47%;
    margin: 6px;
    border-radius: 15px;
    padding: 7px;
    display: flex;
    flex-direction: row;
    color: var(--xzzd-text-color);
    transition: .3s;
    overflow: hidden;
}
.course-cell-conatiner:hover{
  background-color: var(--xzzd-button-hover);
  cursor: pointer;
}
.course-cell-conatiner:active{
  background-color: var(--xzzd-button-active);
}
.course-cell-image{
    height: 86px!important;
    width: 172px!important;
    border-radius: 10px;
}
.course-cell-main{
    width: calc(100% - 180px);
    text-align: left;
    margin-left: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.course-cell-main-title{
    font-size: 18px;
    font-weight: 600;
}
.course-cell-main-attr{
  font-size: 11px;
  font-weight: 500;
}
.course-cell-main-class{
  font-size: 10px;
  font-weight: 300;
  line-height: 12px;
}
.course-cell-instuctors-wrapper{
  font-size: 10px;
  display: flex;
  flex-direction: row;
}
.course-cell-instuctors-img{
  height: 14px;
  width: 14px;
  border-radius: 100%;
  margin-right: 3px;
}
</style>
