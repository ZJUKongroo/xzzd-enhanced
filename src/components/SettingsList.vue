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
  <div class="settings-container">
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
            <v-select
              v-model="$i18n.locale"
              density="compact"
              :placeholder="$t('message.select_prefer_language')"
              :items="$i18n.availableLocales"
              size="small"
              @update:model-value="locale_change"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.settings-container{
  padding: 40px;
}
.settings-header{
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 10px;
}
.settings-item-title{
  font-size: 1.3rem;
  font-weight: 500;
  padding-right: 15px;
}
</style>
