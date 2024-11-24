<script lang="ts" setup>
import { ref } from 'vue'
import axios from '~/request'

const todo = ref({})

onBeforeMount(() => {
  axios.get('/todos?no-intercept=true').then((res) => {
    todo.value = res.data
  })
})
</script>

<template>
  <div>{{ todo }}</div>
</template>
