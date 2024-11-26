<script lang="ts" setup>
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<TOPIC_CREATE>(props.data.payload as TOPIC_CREATE)
</script>

<template>
  <div>
    homework_opened_for_submission
    {{ payload.activity_id }}
  </div>
</template>
