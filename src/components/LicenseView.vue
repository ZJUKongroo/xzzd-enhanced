<script setup lang="ts">
import { animate, createSpring, stagger } from 'animejs'
import { onMounted, ref } from 'vue'

onMounted(() => {
  animate('.license-anime-element', {
    opacity: [0, 1],
    ease: createSpring(),
    duration: 100,
    translateX: [20, 0],
    delay: stagger(50),
  })
})
interface Project {
  name: string
  license: string
  licenseUrl: string
}

function openUrl(url: string) {
  window.open(url, '_blank')
}

function openEmail(email: string) {
  window.open(`mailto:${email}`)
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
  name: 'vue-router',
  license: 'MIT',
  licenseUrl: 'https://github.com/vuejs/vue-router?tab=MIT-1-ov-file#readme',
}, {
  name: 'animejs',
  license: 'MIT',
  licenseUrl: 'https://github.com/juliangarnier/anime/?tab=MIT-1-ov-file',
}, {
  name: 'axios',
  license: 'MIT',
  licenseUrl: 'https://github.com/axios/axios?tab=MIT-1-ov-file',
}, {
  name: 'pinia',
  license: 'MIT',
  licenseUrl: 'https://github.com/vuejs/pinia?tab=MIT-1-ov-file',
}, {
  name: 'vuetify',
  license: 'MIT',
  licenseUrl: 'https://github.com/vuetifyjs/vuetify?tab=MIT-1-ov-file',
}])
</script>

<template>
  <div id="license-container" class="container">
    <h1 class="mb-4 license-anime-element">
      学在浙大 Enhanced
    </h1>
    <h5 class="mb-2 license-anime-element">
      By ZJUKongroo 工作室
    </h5>
    <h2 class="mb-2 license-anime-element">
      Developers 开发者
    </h2>
    <div class="colbox license-anime-element">
      <div class="developer-card colbox" @click="openUrl('https://blog.cast1e.top')">
        <img src="@/assets/img/developer-avatar/cast1e.jpg" class="developer-card-avatar">
        <div class="developer-card-info">
          <div class="colbox">
            <div class="developer-card-name">
              cast1e
            </div>
            <div class="developer-card-job">
              开发
            </div>
          </div>
          <div class="developer-card-email" @click.stop="openEmail('rooger@zju.edu.cn')">
            rooger@zju.edu.cn
          </div>
        </div>
      </div>
    </div>
    <div class="mb-2 license-anime-element">
      <v-alert variant="tonal" show-icon :closable="false" type="info">
        开发者能力有限，如果遇到 Bug 请联系开发者修复
      </v-alert>
    </div>
    <h2 class="mb-4 license-anime-element">
      使用的开源项目及协议
    </h2>
    <div id="project-card-container" class="license-anime-element">
      <div
        v-for="project in usedProjects" :key="project.name" class="project-card"
        @click="openUrl(project.licenseUrl)"
      >
        <div class="project-card-name">
          {{ project.name }}
        </div>
        <div class="project-card-license">
          {{ project.license }}
        </div>
      </div>
    </div>
    <h2 class="mb-4 license-anime-element">
      致谢
    </h2>
    <div class="mb-4 license-anime-element">
      <v-alert
        title="致谢" variant="tonal" show-icon :closable="false"
        border="start"
        color="deep-purple-accent-2"
        icon="mdi-account-supervisor"
      >
        感谢 ZJUKongroo 提供的支持, 也感谢项目开发测试人员的辛勤付出。
      </v-alert>
    </div>
  </div>
</template>

<style>
#license-container {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 40px;
    padding-top: 0;
    overflow: hidden auto;
    width: 100%;
    font-size: 15px;
}

.developer-card {
    border: 1px solid var(--bd-color);
    width: fit-content;
    height: 120px;
    padding: 20px 30px 20px 30px;
    border-radius: 10px;
    background-color: var(--bg-color-solid);
    margin-right: 20px;
    margin-bottom: 20px;
    box-sizing: content-box;
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
}

.developer-card .developer-card-name {
    font-size: 35px;
    margin-bottom: 5px;
    margin-right: 8px;
}

.developer-card:hover {
    background-color: var(--bg-color-darker);
    cursor: pointer;
}

.developer-card:active{
    background-color: var(--bg-color-shallow);
}

.developer-card .developer-card-email:hover{
    text-decoration: underline;
}

#project-card-container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}

.project-card {
    border: 1px solid var(--bd-color);
    width: fit-content;
    height: 80px;
    padding: 20px 30px 20px 30px;
    border-radius: 10px;
    background-color: var(--bg-color-solid);
    margin-right: 20px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: .3s;
    box-sizing: content-box;
}

.project-card:hover {
    background-color: var(--bg-color-alter);
}

.project-card:active {
    background-color: var(--bg-color);
}

.project-card-name {
    font-size: 30px;
    margin-bottom: 5px;
}

.project-card-license {
    font-size: 16px;
}

.colbox {
    display: flex;
    flex-direction: row;
}

.rowbox {
    display: flex;
    flex-direction: column;
}
</style>
