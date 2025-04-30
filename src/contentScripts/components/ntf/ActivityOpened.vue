<script lang="ts" setup>
import '../../styles/ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse } from './openLink'
import CommonBody from './CommonBody.vue'
import CommonFile from './CommonFile.vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<ACTIVITY_EXPIRING>(props.data.payload as ACTIVITY_EXPIRING)
</script>

<template>
  <CommonBody icon="mdi-clock-time-one-outline" :time-stamp="props.data.timestamp">
    <template #title>
      {{ $t('message.activity_opened') }}
    </template>
    <template #content>
      <div class="ntfc-title">
        {{ $t('ntf.activity_expiring.0')
        }}<a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a>{{
          $t('ntf.activity_expiring.1')
        }}<a class="ntfc-link" @click="openActivity(payload.course_id, payload.activity_id)">{{
          payload.activity_title
        }}</a>{{ $t('ntf.activity_expiring.2') }}
      </div>
      <CommonFile :files="payload.uploads" :activity-id="payload.activity_id" />
    </template>
  </CommonBody>
</template>
