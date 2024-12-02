<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { storage } from 'webextension-polyfill'

const i18n = useI18n()

function locale_change() {
  // use storage to remember user's language preference
  storage.local.set({ locale: i18n.locale.value })
}
</script>

<template>
  <div class="settings-header">
    {{ $t("message.settings") }}
  </div>
  <table>
    <tbody>
      <tr class="settings-locale-changer settings-item">
        <td class="settings-item-title">
          {{ $t('message.select_prefer_language') }}:
        </td>
        <td class="settings-item-main">
          <el-select v-model="$i18n.locale" :placeholder="$t('message.select_prefer_language')" style="width: 240px" @change="locale_change">
            <el-option
              v-for="locale in $i18n.availableLocales"
              :key="`locale-${locale}`"
              :label="locale"
              :value="locale"
            />
          </el-select>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
.settings-header{
  font-size: 23px;
  font-weight: 600;
  margin-bottom: 10px;
}
.settings-item-title{
  font-size: 17px;
  font-weight: 500;
  padding-right: 7px;
}
</style>
