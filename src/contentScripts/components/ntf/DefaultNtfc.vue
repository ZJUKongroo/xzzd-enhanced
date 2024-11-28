<script lang="ts" setup>
import { ElMessage } from 'element-plus'
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
  ElMessage({
    type: 'success',
    message: '已复制到剪贴板',
  })
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
    {{ $t("ntf.default_ntfc.0") }} {{ payload }} <br>
  </div>
  <div class="ntfc-defaut-banner">
    {{ $t("ntf.default_ntfc.1") }}<span class="ntfc-default-button" @click="copyMessage">
      {{ $t("message.copy") }}
    </span>{{ $t("ntf.default_ntfc.2") }}
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
