<script lang="ts" setup>
import './ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse, openTopic } from './openLink'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<TOPIC_CREATE>(props.data.payload as TOPIC_CREATE)
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      {{ $t("message.topic_create") }}
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    {{ payload.user_name }} {{ $t("ntf.topic_create.0") }} <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> {{ $t("ntf.topic_create.1") }}<a class="ntfc-link" @click="openActivity(payload.course_id, payload.activity_id)">{{ payload.activity_title }}</a> {{ $t("ntf.topic_create.2") }}
  </div>
  <div class="ntfc-main">
    <a class="ntfc-link topic-create-main-title" @click="openTopic(payload.course_id, payload.topic_id)">
      {{ payload.topic_title }}
    </a>
    <div class="topic-create-main-content" v-html="payload.topic_content" />
  </div>
</template>

<style>
.topic-create-main-title{
    font-size: 17px;
    font-weight: 600;
}
.topic-create-main-content{
    font-size: 13px;
    color: var(--xzzd-text-color);
    overflow: hidden;
}
</style>
