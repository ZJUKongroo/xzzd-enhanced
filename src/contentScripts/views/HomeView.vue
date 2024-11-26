<script lang="ts" setup>
import TodoList from '../components/TodoList.vue'
import RecentCourse from '../components/RecentCourse.vue'
import NotifiCation from '../components/NotifiCation.vue'
</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <NotifiCation />
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
</style>
