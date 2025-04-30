<script setup lang="ts">
import { onMounted } from 'vue'
import { animate, createSpring, stagger } from 'animejs'
// import qrcodeImg from '~/assets/img/about/qrcode.webp';

onMounted(() => {
  animate('#about-container section', {
    opacity: [0, 1],
    ease: createSpring(),
    duration: 100,
    translateY: [-50, 0],
    delay: stagger(50),
  })
})
</script>

<template>
  <div id="about-container">
    <section>
      <h1 class="mb-4">关于我们</h1>
      <h2 class="mb-2">学在浙大 Enhanced</h2>
    </section>
    <section>
      <p class="mb-4">
        <span style="color: cornflowerblue">学在浙大 Enhanced</span>
        是一款浏览器插件，旨在优化和提升浙江大学学习平台"学在浙大"的使用体验。通过替换原有主页界面，并对功能进行全面优化，我们致力于为浙大师生提供更加高效、便捷的在线学习环境。
      </p>
    </section>
    <section>
      <h3 class="mb-4">主要功能</h3>
      <ol class="ml-8 mb-4">
        <li>全新设计的主页界面，更加美观与人性化</li>
        <li>优化的课程导航与资源获取流程</li>
        <li>增强的用户交互体验与响应速度</li>
        <li>更多实用工具与便捷功能的集成</li>
      </ol>
    </section>
    <section>
      <h3 class="mb-4">关于 ZJUKongroo</h3>
      <p class="mb-2">
        ZJUKongroo
        是我们的开发团队，由一群热爱技术、热爱创造的浙大学生组成。我们是一个兴趣驱动的社团，聚集在一起只为做一些有趣且有意义的项目。
      </p>
      <p class="mb-4">
        团队成员来自不同专业背景，但都有着共同的兴趣爱好——通过编程和开发解决实际问题，提升校园生活体验。我们相信技术的力量可以改变日常学习与生活，并乐于分享这些创新成果。
      </p>
    </section>
    <section>
      <h3 class="mb-2">加入我们</h3>
      <p class="mb-4">
        如果你对我们的项目感兴趣，或者有任何改进建议，欢迎通过
        <a href="https://github.com/ZJUKongroo">GitHub</a>
        与我们取得联系。我们期待更多志同道合的伙伴加入，一起打造更多有趣且实用的校园工具。
      </p>
    </section>
  </div>
</template>

<style>
#about-container {
  font-size: 16px;
  padding: 40px;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
}

#about-container img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
}

#about-container h1,
h2,
h3,
h4,
p {
  margin-bottom: 10px;
}
</style>
