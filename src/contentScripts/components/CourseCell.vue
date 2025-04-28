<script lang="ts" setup>
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
  <v-card class="course-cell-conatiner" link border flat @click="openCourse(data.id)">
    <div class="d-flex flex-no-wrap justify-space-between align-center">
      <div>
        <v-card-title class="text-h5">
          <div class="course-cell-main-title ellipsis-text">
            {{ data.display_name }}
          </div>
        </v-card-title>

        <v-card-subtitle>
          <div class="course-cell-main-attr ellipsis-text">
            <span>{{ data.department?.name }}</span>
            {{ $t("message.lesson_start") }} <span>{{ data.start_date }}</span>
          </div>
          <div class="course-cell-main-class ellipsis-text">
            {{ $t("message.course_class") }} {{ data.course_attributes?.teaching_class_name }}
          </div>
          <div class="course-cell-instuctors-wrapper ellipsis-text">
            {{ $t("message.course_instructor") }}
            <div v-for="(instructor, index) in data.instructors" :key="index" v-tooltip="instructor.name" class="course-cell-instuctors">
              <img class="course-cell-instuctors-img" :src="instructor.avatar_small_url">
            </div>
          </div>
        </v-card-subtitle>
      </div>

      <img class="course-cell-image" :src="data.cover ? data.cover : default_image">
    </div>
  </v-card>
</template>

<style>
.course-cell-conatiner{
    width: 100%;
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
    margin: 10px;
    height: 86px!important;
    width: 172px!important;
    border-radius: 5px;
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
    font-size: 19px;
    font-weight: 600;
}
.course-cell-main-attr{
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 5px;
}
.course-cell-main-class{
  font-size: 12px;
  font-weight: 300;
  line-height: 12px;
  margin-bottom: 6px;
}
.course-cell-instuctors-wrapper{
  font-size: 15px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.course-cell-instuctors-img{
  height: 18px;
  width: 18px;
  border-radius: 50%;
  margin-left: 7px;
}
</style>
