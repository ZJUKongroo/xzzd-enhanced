<script lang="ts" setup>
import { ref } from 'vue'
import axios from '~/request'

const ntf = ref<NOTIFICATIONS> ({
  unread_count: 0,
  notifications: [],
})
// 动态导入 TopicCreate 组件，返回一个 Promise，加载对应的 Vue 组件。
const topic_create = defineAsyncComponent(() => import('./ntf/TopicCreate.vue'))
const homework_opened_for_submission = defineAsyncComponent(() => import('./ntf/HomeworkOpened.vue'))

// 定义一个组件映射表，键为组件名称（字符串），值为动态导入的 Promise 对象。
const component_map: { [key: string]: typeof topic_create } = {
  topic_create,
  homework_opened_for_submission,
}

/**
 * 根据组件名称从组件映射表中获取组件。
 * @param index - 组件名称的字符串索引，用于查找组件映射表中的对应值。
 * @returns 如果找到对应组件，则返回其动态导入的 Promise，否则返回 undefined。
 */
function getComponent(index: string) {
  return component_map[index]
}

onBeforeMount(async () => {
  let userId = localStorage.getItem('userId')
  if (!userId) {
    const findReg = /(?<=<span[^>]*\sid="userId"[^>]*\sdata-id=")[^"]+(?=")/g
    const page: string = (await axios.get('/user/index')).data
    const result = page.match(findReg)
    if (result && result.length) {
      userId = result[0]
      localStorage.setItem('userId', userId)
    }
  }
  if (userId) {
    axios.get(`/ntf/users/${userId}/notifications?limit=5&additionalFields=unread_count&removed=only_mobile`).then((res) => {
      ntf.value = JSON.parse(res.data) as NOTIFICATIONS
    })
  }
})
</script>

<template>
  <div class="notification-container">
    <div class="notification-header">
      通知
    </div>
    <div class="notification-unread">
      未读通知: {{ Math.floor(ntf.unread_count) }}
    </div>
    <div v-for="(notification, index) in ntf.notifications" :key="index" class="notification-cell">
      <component :is="getComponent(notification.type)" v-if="notification.type in component_map" :data="notification" />
    </div>
  </div>
</template>

<style>
.notification-container{
    border: solid 1px var(--xzzd-border-color);
    border-radius: 10px;
    padding: 6px;
    width: calc(100% - 12px);
    margin: 6px;
}
.notification-header{
    font-weight: 600;
    font-size: 23px;
    margin: 6px;
    margin-left: 10px;
}
.notification-unread{
  font-weight: 500;
  font-size: 16px;
  margin-left: 10px;
}
.notification-cell{
    border: 1px solid var(--xzzd-border-color);
    border-radius: 8px;
    margin: 10px;
    padding: 9px;
}
</style>
