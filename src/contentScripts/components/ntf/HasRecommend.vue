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

const payload = ref<HAS_RECOMMEND_HOMEWORK>(props.data.payload as HAS_RECOMMEND_HOMEWORK)
</script>

<template>
  <CommonBody icon="mdi-seal-variant" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.has_recommended') }}
    </template>
    <template #content>
      {{ $t("ntf.has_recommended.0") }} <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> {{ $t("ntf.has_recommended.1") }} <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{ payload.homework_title }}</a> {{ $t("ntf.has_recommended.2") }}
    </template>
  </CommonBody>
</template>
