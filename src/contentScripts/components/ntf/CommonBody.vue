<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  icon: {
    type: String,
    default: 'mdi-bell',
  },
  timeStamp: {
    type: Number,
    default: Date.now(),
  },
})
</script>

<template>
  <v-card class="mx-auto mt-2" :prepend-icon="icon" variants="tonal" border flat>
    <template #title>
      <span class="font-weight-black">
        <slot name="title" />
      </span>
    </template>
    <template #subtitle>
      <span class="font-weight-light">
        {{ new Date(timeStamp).toLocaleString() }}
      </span>
    </template>
    <v-divider />
    <v-card-text>
      <slot name="content" />
    </v-card-text>
  </v-card>
</template>
