<script lang="ts" setup>
import { ref } from 'vue'
import axios from '~/request'

const ntf = ref<NOTIFICATIONS> ({
  unread_count: 0,
  notifications: [],
})
const limit = 10
let offset = 0

// Dynamically import the components,
// returning a AsyncComponent instance that loads the corresponding Vue component.
const topic_create = defineAsyncComponent(() => import('./ntf/TopicCreate.vue'))
const homework_opened_for_submission = defineAsyncComponent(() => import('./ntf/HomeworkOpened.vue'))
const activity_expiring = defineAsyncComponent(() => import('./ntf/ActivityExpiring.vue'))
const activity_opened = defineAsyncComponent(() => import('./ntf/ActivityOpened.vue'))
const has_recommend_homework = defineAsyncComponent(() => import('./ntf/HasRecommend.vue'))
const default_nftc = defineAsyncComponent(() => import('./ntf/DefaultNtfc.vue'))
const homework_is_recommended = defineAsyncComponent(() => import('./ntf/WasRecommend.vue'))
const homework_expiring_today = defineAsyncComponent(() => import('./ntf/HomeworkExpiringToday.vue'))
const exam_score_updated = defineAsyncComponent(() => import('./ntf/ExamScoreUpdated.vue'))
const exam_submit_started = defineAsyncComponent(() => import('./ntf/ExamSubmitStarted.vue'))
const exam_expiring = defineAsyncComponent(() => import('./ntf/ExamExpiring.vue'))
const exam_will_start = defineAsyncComponent(() => import('./ntf/ExamWillStart.vue'))

// Define a component mapping table with keys as component names (strings) and values
// as dynamically imported Promise objects.
const component_map: { [key: string]: typeof topic_create } = {
  topic_create,
  homework_opened_for_submission,
  activity_expiring,
  has_recommend_homework,
  activity_opened,
  homework_is_recommended,
  homework_expiring_today,
  exam_score_updated,
  exam_submit_started,
  exam_expiring,
  exam_will_start,
}

/**
 * Gets the component from the component mapping table based on the component name.
 * @param index - String index of the component name, used to find the corresponding value in the component mapping table.
 * @returns Returns the dynamically imported Promise of the component if it is found, otherwise returns undefined.
 */
function getComponent(index: string) {
  if (index in component_map) {
    return component_map[index]
  }
  else {
    return default_nftc
  }
}

onBeforeMount(() => {
  getNotification()
})

async function getNotification() {
  let userId = localStorage.getItem('userId')
  if (!userId) {
    const findReg = /(?<=<span[^>]*\sid="userId"[^>]*\sdata-id=")[^"]+(?=")/g
    // part of learning of ZJU page is rendered by server, thus we need to get the original page.
    // because it's time wasting, thus we store id in localstorage.
    const page: string = (await axios.get('/user/index')).data
    const result = page.match(findReg)
    if (result && result.length) {
      userId = result[0]
      localStorage.setItem('userId', userId)
    }
  }
  if (userId) {
    const data = JSON.parse((await axios.get(`/ntf/users/${userId}/notifications?offset=${offset}&limit=${limit}&additionalFields=unread_count&removed=only_mobile`)).data) as NOTIFICATIONS
    if (ntf.value.notifications.length === 0) {
      ntf.value = data
    }
    else {
      ntf.value.notifications = ntf.value.notifications.concat(data.notifications)
    }
    offset += limit
  }
}

defineExpose({ getNotification })
</script>

<template>
  <div class="notification-container">
    <div
      class="notification-header" :class="{
        'notification-header-unread': ntf.unread_count > 0,
      }" :data-unread-count="Math.floor(ntf.unread_count)"
    >
      {{ $t("message.notification_title") }}
    </div>
    <div v-for="(notification, index) in ntf.notifications" :key="index" class="notification-cell">
      <component :is="getComponent(notification.type)" :data="notification" />
    </div>
    <div class="notification-load" @click="getNotification">
      {{ $t("message.notification_load") }}
    </div>
  </div>
</template>

<style>
.notification-container{
    /* border: solid 1px var(--xzzd-border-color); */
    border-radius: 10px;
    padding: 6px;
    width: calc(100% - 12px);
    margin: 6px;
    color: var(--xzzd-text-color)
}

.notification-header {
  position: relative; /* Required for absolute positioning of the pseudo-element */
  display: inline-block; /* Adjust display as needed for proper positioning */
  /* Existing styles below */
  font-weight: 600;
  font-size: 23px;
  margin: 6px;
  margin-left: 10px;
}

.notification-header-unread.notification-header[data-unread-count]::after {
  content: attr(data-unread-count); /* Display a dot, not the count. Use data-attribute for count. */
  position: absolute;
  top: 0; /* Position near the top edge */
  right: 0; /* Position near the right edge */
  font-size: 11px;
  transform: translate(70%, -10%); /* Adjust to position precisely at the top-right corner */
  width: 20px; /* Size of the dot */
  height: 20px; /* Size of the dot */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(180, 28, 28);
  border-radius: 50%;
}

/*.notification-cell{
    border: 1px solid var(--xzzd-border-color);
    border-radius: 8px;
    margin: 10px;
    padding: 9px;
}*/
.notification-load{
  border: 1px solid var(--xzzd-border-color);
  border-radius: 4px;
  font-size: 17px;
  transition: .3s;
  margin-left: 10px;
  width: 100px;
  text-align: center;
}
.notification-load:hover{
  cursor: pointer;
  background-color: var(--xzzd-button-hover);
}
.notification-load:active{
  background-color: var(--xzzd-button-active);
}
</style>
