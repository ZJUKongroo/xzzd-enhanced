<script lang="ts" setup>
import './ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse, openFile } from './openLink'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<ACTIVITY_EXPIRING>(props.data.payload as ACTIVITY_EXPIRING)
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      学习活动截止
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    课程 <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> 的学习活动 <a class="ntfc-link" @click="openActivity(payload.course_id, payload.activity_id)">{{ payload.activity_title }}</a> 即将截止
  </div>
  <div v-for="(file, index) in payload.uploads" :key="index" class="ntfc-main" style="cursor: pointer;" @click="openFile(payload.activity_id, file.reference_id)">
    <div class="activity-expiring-title">
      {{ file.file_name }}
      <div class="activity-expiring-type">
        {{ file.type }}
      </div>
    </div>
    <div class="activity-expiring-size">
      {{ file.file_size / 1024 }} KB
    </div>
  </div>
</template>

<style>
.activity-expiring-title{
    font-size: 17px;
    font-weight: 600;
    display: flex;
    flex-direction: row;
}
.activity-expiring-type{
    font-size: 11px;
    border: 1px solid var(--xzzd-border-color);
    border-radius: 2px;
    margin-left: 3px;
    height: fit-content;
    padding: 2px;
}
.activity-expiring-size{
  font-size: 15px;
  font-weight: 300;
}
</style>
