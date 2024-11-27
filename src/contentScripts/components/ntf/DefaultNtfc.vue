<script lang="ts" setup>
import './ntfc.css'
import type { PropType } from 'vue'

const props = defineProps({
  data: {
    type: Object as PropType<NOTIFICATION>,
    required: true,
  },
})

const payload = ref<PAYLOAD>(props.data.payload as PAYLOAD)

function copyMessage() {
  navigator.clipboard.writeText(JSON.stringify(props.data))
}
</script>

<template>
  <div class="ntfc-header">
    <div class="ntfc-header-title">
      {{ props.data.type }}
    </div>
  </div>
  <div class="ntfc-header-time">
    {{ (new Date(props.data.timestamp)).toLocaleString() }}
  </div>
  <div class="ntfc-defaut-content">
    原始内容: {{ payload }} <br>
  </div>
  <div class="ntfc-defaut-banner">
    这个组件还未完成，点击<span class="ntfc-default-button" @click="copyMessage">
      复制
    </span>并发给开发者帮助开发进度
  </div>
</template>

<style>
.ntfc-defaut-content{
  font-size: 13px;
}
.ntfc-defaut-banner{
  font-size: 16px;
  font-weight: 300;
}
.ntfc-default-button{
  border: solid 1px var(--xzzd-border-color);
  border-radius: 2px;
  margin-left: 2px;
  margin-right: 2px;
  transition: .3s;
}
.ntfc-default-button:hover{
  background-color: var(--xzzd-button-hover);
  cursor: pointer;
}
.ntfc-default-button:active{
  background-color: var(--xzzd-button-ctive);
}
</style>
