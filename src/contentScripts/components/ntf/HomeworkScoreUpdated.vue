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

const payload = ref<HOMEWORK_SCORE_UPDATED>(props.data.payload as HOMEWORK_SCORE_UPDATED)
</script>

<template>
  <CommonBody icon="mdi-update" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.homework_score_updated') }}
    </template>
    <template #content>
      {{ $t('ntf.homework_score_updated.0') }}
      <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>
      {{ $t('ntf.homework_score_updated.1') }}
      <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{
        payload.activity_title
        }}</a>
      {{ $t('ntf.homework_score_updated.2') }} {{ payload.score }}<br />
      {{ $t('ntf.homework_score_updated.3') }} {{ payload.instructor_comment }}
    </template>
  </CommonBody>
</template>
