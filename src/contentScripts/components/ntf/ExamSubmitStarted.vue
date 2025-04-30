<script lang="ts" setup>
import './ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse } from './openLink'
import CommonBody from './CommonBody.vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<EXAM_SUBMIT_STARTED>(props.data.payload as EXAM_SUBMIT_STARTED)
</script>

<template>
  <CommonBody icon="mdi-clock-start" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.exam_submit_started') }}
    </template>
    <template #content>
      {{ $t('ntf.exam_submit_started.0') }}
      <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>
      {{ $t('ntf.exam_submit_started.1') }}
      <a class="ntfc-link" @click="openActivity(payload.course_id, payload.exam_id)">{{
        payload.exam_title
      }}</a>
      {{
        $t('ntf.exam_submit_started.2', {
          time: new Date(payload.start_time).toLocaleString(),
        })
      }}
    </template>
  </CommonBody>
</template>
