<script lang="ts" setup>
import { ref } from 'vue'
import axios from '~/request'

const todo_list = ref<TODO_LIST> ({
  todo_list: [],
})

onBeforeMount(() => {
  axios.get('/api/todos?no-intercept=true').then((res) => {
    todo_list.value = JSON.parse(res.data) as TODO_LIST
  })
})

function openUrl(todo: TODO) {
  window.location.href = `/course/${todo.course_id}/learning-activity#/${todo.id}?&view=scores`
}
</script>

<template>
  <div class="todolist-container">
    <div class="todolist-header">
      {{ $t("message.todo") }}
    </div>
    <div v-for="(todo, index) in todo_list.todo_list" :key="index" class="todolist-cell" @click="openUrl(todo)">
      <div class="todolist-cell-name">
        {{ todo.course_name }}
        <div class="todolist-cell-type">
          {{ $t(`message.todo_type_${todo.type}`) }}
        </div>
      </div>
      <div class="todolist-cell-title">
        {{ todo.title }}
      </div>
      <div class="todolist-cell-endtime">
        {{ $t("message.todo_endtime") }} {{ (new Date(todo.end_time)).toLocaleString() }}
      </div>
    </div>
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
