<script lang="ts" setup>
import TodoList from '../components/TodoList.vue'
import RecentCourse from '../components/RecentCourse.vue'
import NotifiCation from '../components/NotifiCation.vue'

const ntfRef = ref<InstanceType<typeof NotifiCation> | null>(null)
</script>

<template>
  <div class="home-container">
    <div class="home-main">
      <NotifiCation ref="ntfRef" />
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
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
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
