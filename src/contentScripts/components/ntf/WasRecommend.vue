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

const payload = ref<HOMEWORK_IS_RECOMMENDED>(props.data.payload as HOMEWORK_IS_RECOMMENDED)
</script>

<template>
  <CommonBody icon="mdi-seal-variant" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.was_recommended') }}
    </template>
    <template #content>
      <template v-if="$i18n.locale === 'en'">
        {{ $t("ntf.was_recommended.0") }}<a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{ payload.homework_title }}</a>{{ $t("ntf.was_recommended.1") }}<a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>{{ $t("ntf.was_recommended.2") }}
      </template>
      <template v-else>
        {{ $t("ntf.was_recommended.0") }} <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> {{ $t("ntf.was_recommended.1") }} <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{ payload.homework_title }}</a> {{ $t("ntf.was_recommended.2") }}
      </template>
    </template>
  </CommonBody>
</template>
