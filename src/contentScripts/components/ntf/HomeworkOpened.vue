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
      {{ $t("message.homework_opened") }}
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    {{ $t("ntf.homework_opened.0") }} <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> {{ $t("ntf.homework_opened.1") }} <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{ payload.homework_title }}</a> {{ $t("ntf.homework_opened.2") }}
  </div>
</template>
