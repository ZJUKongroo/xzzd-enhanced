<script lang="ts" setup>
import '../../styles/ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse } from './openLink'
import CommonBody from './CommonBody.vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<EXAM_OPENED>(props.data.payload as EXAM_OPENED)
</script>

<template>
  <CommonBody icon="mdi-note-edit" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.exam_opened') }}
    </template>
    <template #content>
      {{ $t('ntf.exam_opened.0') }}
      <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>
      {{ $t('ntf.exam_opened.1') }}
      <a class="ntfc-link" @click="openActivity(payload.course_id, payload.exam_id)">{{
        payload.exam_title
      }}</a>
      {{
        $t('ntf.exam_opened.2', {
          time: new Date(payload.start_time).toLocaleString(),
        })
      }}
    </template>
  </CommonBody>
</template>
