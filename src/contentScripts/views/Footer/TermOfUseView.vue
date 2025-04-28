<script setup lang="ts">
import { onMounted } from 'vue'
import { animate, createSpring, stagger } from 'animejs'

onMounted(() => {
  animate('#terms-container section', {
    opacity: [0, 1],
    ease: createSpring(),
    duration: 100,
    translateY: [-50, 0],
    delay: stagger(50),
  })
})
</script>

<template>
  <div id="terms-container">
    <section>
      <h1>使用条款</h1>
      <p>欢迎使用 ACEE 试题提交系统。在使用本网站之前，请仔细阅读以下使用条款。</p>
    </section>

    <section>
      <h2>1. 接受条款</h2>
      <p>通过访问和使用本网站，您表示同意遵守这些使用条款。如果您不同意这些条款，请勿使用本网站。</p>

      <h2>2. 用户行为</h2>
      <p>您同意在使用本网站时不会进行以下行为：</p>
      <ul>
        <li>破坏、篡改、损坏或以其他方式干扰网站的正常运行。</li>
        <li>未经授权访问、篡改或使用网站的后端系统或数据。</li>
      </ul>
      <p>如发现，我们将取消您的考试资格。</p>
    </section>

    <section>
      <h2>3. 免责声明</h2>
      <p>本网站及其内容按“现状”提供，不作任何明示或暗示的保证。我们不保证本网站的功能不受干扰或无错误。</p>

      <h2>4. 责任限制</h2>
      <p>在任何情况下，我们对于因自身原因无法使用本网站而引起的任何直接、间接、偶然、特殊或后果性损害不承担责任。</p>

      <h2>5. 修改条款</h2>
      <p>我们保留随时修改这些使用条款的权利。修改后的条款将在本网站上发布后立即生效。请定期查看这些条款以了解任何更改。</p>
    </section>
  </div>
</template>

<style>
#terms-container {
  font-size: 16px;
  box-sizing: border-box;
  padding: 40px;
  width: 100%;
  padding-left: 20%;
  padding-right: 20%;
}

#terms-container h1,
h2,
h3,
h4,
p,
ul,
li {
  margin-bottom: 10px;
}

#terms-container ul {
  padding-left: 40px;
}
</style>
