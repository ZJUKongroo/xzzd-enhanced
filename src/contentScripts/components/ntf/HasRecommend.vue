<script lang="ts" setup>
import './ntfc.css'
import type { PropType } from 'vue'
import { openActivity, openCourse } from './openLink'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<HAS_RECOMMEND_HOMEWORK>(props.data.payload as HAS_RECOMMEND_HOMEWORK)
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      作业推荐
    </div>
    <div class="ntfc-header-time">
      {{ (new Date(props.data.timestamp)).toLocaleString() }}
    </div>
  </div>
  <div class="ntfc-title">
    课程 <a class="ntfc-link" @click="openCourse(payload.course_id)">{{ payload.course_name }}</a> 的作业 <a class="ntfc-link" @click="openActivity(payload.course_id, payload.homework_id)">{{ payload.homework_title }}</a> 得到了老师推荐
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
