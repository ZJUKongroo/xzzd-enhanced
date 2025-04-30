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

const payload = ref<HOMEWORK_EXPIRING_TODAY>(props.data.payload as HOMEWORK_EXPIRING_TODAY)
</script>

<template>
  <CommonBody icon="mdi-clock-time-eleven-outline" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.homework_expiring_today') }}
    </template>
    <template #content>
      {{ $t('ntf.homework_expiring_today.0') }}
      <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>
      {{ $t('ntf.homework_expiring_today.1') }}
      <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{
        payload.homework_title
        }}</a>
      {{
        $t('ntf.homework_expiring_today.2', {
          time: new Date(payload.submit_closed_time).toLocaleString(),
        })
      }}
    </template>
  </CommonBody>
</template>
