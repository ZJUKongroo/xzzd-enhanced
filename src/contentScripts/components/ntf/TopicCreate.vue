<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<TOPIC_CREATE>(props.data.payload as TOPIC_CREATE)
</script>

<template>
  <div class="topic-create-header">
    <div class="topic-create-header-title">
      新帖子
    </div>
    <div class="topic-create-header-time">
      {{ (new Date(payload.start_time)).toLocaleString() }}
    </div>
  </div>
  <div class="topic-create-title">
    {{ payload.user_name }} 在课程 {{ payload.course_name }} 的讨论区 {{ payload.activity_title }}中发布了帖子
  </div>
  <div class="topic-create-main">
    <div class="topic-create-main-title">
      {{ payload.topic_title }}
    </div>
    <div class="topic-create-main-content" v-html="payload.topic_content" />
  </div>
</template>

<style>
.topic-create-header{
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}
.topic-create-header-title{
    font-weight: 600;
    font-size: 22px;
}
.topic-create-header-time{
    font-size: 14px;
    font-weight: 300;
    margin-left: 10px;
}
.topic-create-title{
    font-size: 16px;
}
.topic-create-main{
    border: 1px solid var(--xzzd-border-color);
    border-radius: 8px;
    padding: 5px;

}
.topic-create-main-title{
    font-size: 17px;
    font-weight: 600;
}
.topic-create-main-content{
    font-size: 13px;
}
</style>
