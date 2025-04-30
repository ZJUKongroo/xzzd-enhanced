<script lang="ts" setup>
import '~/styles/ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse } from './openLink'
import CommonBody from './CommonBody.vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<HOMEWORK_OPENED_FOR_SUBMISSION>(
  props.data.payload as HOMEWORK_OPENED_FOR_SUBMISSION
)
</script>

<template>
  <CommonBody icon="mdi-clock-start" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.homework_opened') }}
    </template>
    <template #content>
      {{ $t('ntf.homework_opened.0') }}
      <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>
      {{ $t('ntf.homework_opened.1') }}
      <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{
        payload.homework_title
        }}</a>
      {{ $t('ntf.homework_opened.2') }}
    </template>
  </CommonBody>
</template>
