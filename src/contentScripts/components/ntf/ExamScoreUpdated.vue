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

const payload = ref<EXAM_SCORE_UPDATED>(props.data.payload as EXAM_SCORE_UPDATED)
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      {{ $t("message.exam_score_updated") }}
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    {{ $t("ntf.exam_score_updated.0") }} <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> {{ $t("ntf.exam_score_updated.1") }} <a class="ntfc-link" @click="openActivity(payload.course_id, payload.exam_id)">{{ payload.exam_title }}</a> {{ $t("ntf.exam_score_updated.2", {
      time: (new Date(payload.updated_time)).toLocaleString(),
    }) }}
  </div>
</template>
