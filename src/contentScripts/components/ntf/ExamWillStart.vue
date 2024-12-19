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

const payload = ref<EXAM_WILL_START>(props.data.payload as EXAM_WILL_START)
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      {{ $t("message.exam_will_start") }}
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    {{ $t("ntf.exam_will_start.0") }} <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> {{ $t("ntf.exam_will_start.1") }} <a class="ntfc-link" @click="openActivity(payload.course_id, payload.exam_id)">{{ payload.exam_title }}</a> {{ $t("ntf.exam_will_start.2", {
      time: (new Date(payload.start_time)).toLocaleString(),
    }) }}
  </div>
</template>
