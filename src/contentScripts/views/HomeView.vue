<script lang="ts" setup>
import TodoList from '../components/TodoList.vue'
import RecentCourse from '../components/RecentCourse.vue'
</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <div />
    </div>
    <div class="home-sidebar">
      <RecentCourse />
      <TodoList />
    </div>
  </div>
</template>

<style>
.home-container{
  width: 100%;
  display: flex;
  flex-direction: row;
}
.home-main{
  width: 60%;
}
.home-sidebar{
  width: 40%;
}
.hone-sidebar>*{
  margin-bottom: 15px;
}
</style>
