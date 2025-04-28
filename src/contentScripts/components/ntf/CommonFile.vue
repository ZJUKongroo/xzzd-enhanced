<script setup lang="ts">
import { openFile } from './openLink'

defineProps({
  files: {
    type: Object as PropType<UPLOAD[]>,
    required: true,
  },
  activityId: {
    type: Number,
    required: true,
  },
})
function toFileSizeString(fileSize: number) {
  if (fileSize < 1024) {
    return `${fileSize} B`
  }
  else if (fileSize < 1048576) {
    return `${(fileSize / 1024).toPrecision(3)} KB`
  }
  else {
    return `${(fileSize / 1048576).toPrecision(3)} MB`
  }
}
</script>

<template>
  <v-card
    v-for="(file, index) in files"
    :key="index" prepend-icon="mdi-file-document-outline" border flat link class="mt-2" @click="openFile(activityId, file.reference_id)"
  >
    <template #title>
      <span class="font-weight-black text-subtitle-1">
        {{ file.file_name }}
      </span>
    </template>
    <template #subtitle>
      <span class="text-subtitle-2">
        {{ toFileSizeString(file.file_size) }}
      </span>
      <span class="font-weight-light text-subtitle-2">
        - {{ file.type }}
      </span>
    </template>
  </v-card>
</template>
