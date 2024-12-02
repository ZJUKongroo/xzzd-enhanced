<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { entry } from '~/composables/entry'
import cast1e from '~/assets/developerAvatar/cast1e.jpg'

onMounted(() => {
  const container = document.getElementById('license-container')
  if (container)
    entry('left', container, 70)
})
interface Project {
  name: string
  license: string
  licenseUrl: string
}

function open(url: string) {
  window.open(url, '_blank')
}

const usedProjects = ref<Project[]>([{
  name: 'vue',
  license: 'MIT',
  licenseUrl: 'https://github.com/vuejs/vue?tab=MIT-1-ov-file#readme',
}, {
  name: 'TypeScript',
  license: 'Apache-2.0 license',
  licenseUrl: 'https://github.com/microsoft/TypeScript?tab=Apache-2.0-1-ov-file#readme',
}, {
  name: 'element-plus',
  license: 'MIT',
  licenseUrl: 'https://github.com/element-plus/element-plus?tab=MIT-1-ov-file#readme',
}, {
  name: 'vue-router',
  license: 'MIT',
  licenseUrl: 'https://github.com/vuejs/vue-router?tab=MIT-1-ov-file#readme',
}, {
  name: 'vite',
  license: 'MIT',
  licenseUrl: 'https://github.com/vitejs/vite?tab=MIT-1-ov-file#readme',
}])
</script>

<template>
  <div class="license-container">
    <h1>雪灾浙大 Enhanced</h1>
    <h3>By ZJUKongroo 工作室</h3>
    <h2>Developers 开发者</h2>
    <div class="colbox">
      <div class="developer-card colbox">
        <img :src="cast1e" class="developer-card-avatar">
        <div class="developer-card-info">
          <div class="colbox">
            <div class="developer-card-name">
              cast1e
            </div>
            <div class="developer-card-job">
              Leader
            </div>
          </div>
          <div class="developer-card-email">
            rooger@zju.edu.cn
          </div>
        </div>
      </div>
    </div>
    <div class="license-info">
      <el-alert show-icon :closable="false" type="info">
        开发者能力有限，如果遇到 Bug 请联系开发者修复
      </el-alert>
    </div>
    <h2>Licenses 使用的开源项目及协议</h2>
    <div class="project-card-container">
      <div
        v-for="project in usedProjects" :key="project.name" class="project-card"
        @click="open(project.licenseUrl)"
      >
        <div class="project-card-name">
          {{ project.name }}
        </div>
        <div class="project-card-license">
          {{ project.license }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.rowbox {
    display: flex;
    flex-direction: column;
}

.colbox {
    display: flex;
    flex-direction: row;
}

.license-container {
    height: 100%;
    width: 100%;
    font-size: 20px;
    margin-top: 20px;
    h1{
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 6px;
    }
    h2{
        font-size: 23px;
        font-weight: 500;
        margin-bottom: 20px;
    }
    h3{
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 5px;
    }
}

.license-info{
    margin-bottom: 20px;
}

.developer-card {
    box-sizing: content-box;
    border: 1px solid var(--xzzd-border-color);
    width: fit-content;
    height: 120px;
    padding: 10px 15px 10px 15px;
    border-radius: 10px;
    background-color: var(--xzzd-bg-color-solid);
    margin-right: 20px;
    margin-bottom: 20px;
}

.developer-card .developer-card-avatar {
    width: 80px;
    height: 80px;
    border-radius: 100%;
    align-self: center;
    margin-right: 20px;
}

.developer-card .developer-card-info {
    align-self: center;
    font-size: 17px;
}

.developer-card .developer-card-name {
    font-size: 30px;
    margin-bottom: 5px;
    margin-right: 8px;
}
.developer-card .developer-card-job{
    font-size: 13px;
}

.project-card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.project-card {
    box-sizing: content-box;
    border: 1px solid var(--xzzd-border-color);
    width: fit-content;
    height: 80px;
    padding: 20px 30px 20px 30px;
    border-radius: 10px;
    background-color: var(--xzzd-bg-color-solid);
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: .3s;
}

.project-card:hover {
    background-color: var(--xzzd-bg-color-alter);
}

.project-card:active {
    background-color: var(--xzzd-bg-color-alpha);
}

.project-card-name {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 5px;
}

.project-card-license {
    font-size: 14px;
}
</style>
