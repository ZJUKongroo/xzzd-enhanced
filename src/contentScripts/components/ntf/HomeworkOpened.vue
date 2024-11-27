<script lang="ts" setup>
import './ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse } from './openLink'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<HOMEWORK_OPENED_FOR_SUBMISSION>(props.data.payload as HOMEWORK_OPENED_FOR_SUBMISSION)
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      作业发布
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    课程 <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> 的作业 <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{ payload.homework_title }}</a> 已经开始
  </div>
</template>
