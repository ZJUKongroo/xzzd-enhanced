<script lang="ts" setup>
import { nextTick } from 'vue'
import '~/styles/cui.css'

const props = defineProps({
  width: String,
  height: String,
})
const bgRef = ref<HTMLDivElement | null>(null)

const visible = defineModel<boolean>('visible', {
  required: true,
  type: Boolean,
})

const visible_ = ref(false)

watch(visible, (val, _) => {
  if (val) {
    visible_.value = true
    nextTick(() => resize())
  } else {
    if (bgRef.value) bgRef.value.style.animation = 'cui-dialog-disappear .3s ease-in'
    setTimeout(() => {
      visible_.value = false
    }, 295)
  }
})

onMounted(() => {
  if (visible.value) nextTick(() => resize())
})

function handleClose() {
  visible.value = false
}
function resize() {
  if (bgRef.value) {
    bgRef.value.style.width = props.width || '500px'
    bgRef.value.style.height = props.height || '300px'
  }
}
</script>

<template>
  <div v-if="visible_" class="cui-dialog-mask" @click.self="handleClose">
    <div ref="bgRef" class="cui-dialog-bg">
      <div class="cui-dialog-content">
        <slot name="content" />
      </div>
      <div class="cui-dialog-close" @click="handleClose">
        <v-icon icon="mdi-close" />
      </div>
    </div>
  </div>
</template>

<style>
.cui-dialog-mask {
  z-index: 500;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  animation: cui-dialog-blur 0.6s;
}

.cui-dialog-bg {
  position: absolute;
  width: 500px;
  height: 300px;
  max-width: 80%;
  border: solid var(--xzzd-border-color) 1px;
  background-color: var(--bg-color-solid);
  border-radius: 8px;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  animation: cui-dialog-appear 0.6s cubic-bezier(0, 0.6, 0.2, 1);
}

.cui-dialog-content {
  padding: 20px;
  height: calc(100% - 40px);
  overflow: auto;
}

.cui-dialog-close {
  position: absolute;
  right: 0;
  top: 0;
  margin: 15px;
  cursor: pointer;
}
</style>
