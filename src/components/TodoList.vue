<script lang="ts" setup>
import { ref } from 'vue'
import browser from 'webextension-polyfill/'
import axios from '~/request'

const todo_list = ref<TODO_LIST> ({
  todo_list: [],
})
const isLogin = ref(false)
// the original list of todos is disordered, sortItem ensures the order of todos
const sortedItem = computed(() => [...todo_list.value.todo_list].sort((x, y) => {
  return (new Date(x.end_time)).getTime() - (new Date(y.end_time)).getTime()
}))
// const requestTimeout = 5000

function isRunningInExtension() {
  return browser.sidePanel
}

async function getTodos() {
  let statusCode = await requestTodos()
  if (isRunningInExtension()) {
    if (statusCode < 500 && statusCode >= 300) {
      window.open('https://courses.zju.edu.cn/user/index')
      const interval = setInterval(async () => {
        statusCode = await requestTodos()
        if (statusCode < 300 && statusCode >= 200) {
          clearInterval(interval)
        }
      }, 300)
      // setTimeout(() => clearInterval(interval), requestTimeout)
    }
  }
}

function requestTodos() {
  return new Promise<number>((resolve, _) => {
    axios.get('/api/todos?no-intercept=true').then((res) => {
    // if response code isn't in the range, means cookie has been expired
      if (res.status >= 200 && res.status < 300) {
        todo_list.value = JSON.parse(res.data) as TODO_LIST
        isLogin.value = true
      }
      resolve(res.status)
    })
  })
}

onBeforeMount(() => getTodos())
</script>

<template>
  <div v-if="isLogin" class="todolist-container">
    <div class="todolist-header">
      {{ $t("message.todo") }}
    </div>
    <a v-for="(todo, index) in sortedItem" :key="index" class="todolist-cell" :href="`https://courses.zju.edu.cn/course/${todo.course_id}/learning-activity#/${todo.id}?&view=scores`">
      <div class="todolist-cell-name">
        {{ todo.course_name }}
        <div class="todolist-cell-type">
          {{ $t(`message.todo_type_${todo.type}`) }}
        </div>
      </div>
      <div class="todolist-cell-title ellipsis-text">
        {{ todo.title }}
      </div>
      <div class="todolist-cell-endtime">
        {{ $t("message.todo_endtime") }} {{ (new Date(todo.end_time)).toLocaleString() }}
      </div>
    </a>
  </div>
  <div v-else>
    {{ $t("error.no_login") }}
  </div>
</template>

<style>
.todolist-container{
    border: solid 1px var(--xzzd-border-color);
    border-radius: 10px;
    padding: 6px;
    width: calc(100% - 12px);
    margin: 6px;
    color: var(--xzzd-text-color)
}
.todolist-header{
    font-weight: 600;
    font-size: 23px;
    margin: 6px;
    margin-left: 10px;
}
.todolist-cell{
    border: 1px solid var(--xzzd-border-color);
    border-radius: 8px;
    padding: 5px;
    margin: 10px;
    transition: .3s;
    display: block;
}
.todolist-cell:hover{
    cursor: pointer;
    background-color: var(--xzzd-button-hover);
}
.todolist-cell:active{
    background-color: var(--xzzd-button-active);
}
.todolist-cell-name{
    font-size: 11px;
    font-weight: 500;
    display: flex;
    flex-direction: row;
}
.todolist-cell-title{
    font-size: 18px;
    font-weight: 600;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.todolist-cell-endtime{
    font-size: 12px;
    font-weight: 300;
}
.todolist-cell-type{
    font-size: 8px;
    border-radius: 5px;
    padding: 1px;
    padding-left: 2px;
    padding-right: 2px;
    border: 1px solid var(--xzzd-border-color);
    margin-left: 3px;
}
</style>
