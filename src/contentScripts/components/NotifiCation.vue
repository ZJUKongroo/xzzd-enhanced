<script lang="ts" setup>
import { ref } from 'vue'
import axios from '~/request'

const ntf = ref<NOTIFICATIONS> ({
  unread_count: 0,
  notifications: [],
})

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
    {{ JSON.stringify(ntf.notifications) }}
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
.notification-cell{
    border: 1px solid var(--xzzd-border-color);
    border-radius: 8px;
    margin: 10px;
    transition: .3s;
    overflow: hidden;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
}
.notification-cell:hover{
    cursor: pointer;
    filter: brightness(0.8);
}
.notification-cell:active{
    filter: brightness(0.7);
}
.notification-cell-wrapper{
    background: linear-gradient(90deg,var(--xzzd-bg-color-solid) 30%,transparent 100%);
    padding: 5px;
    height: 100%;
}
.notification-cell-name{
    font-size: 18px;
    font-weight: 600;
}
.notification-cell-department{
    font-size: 14px;
    font-weight: 500;
}
.notification-cell-class{
    font-size: 12px;
    font-weight: 300;
}
</style>
