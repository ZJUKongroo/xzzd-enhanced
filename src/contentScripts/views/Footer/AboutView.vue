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
      <h1 class="mb-4">
        关于我们
      </h1>
      <h2 class="mb-2">
        ACEE
      </h2>
    </section>
    <section>
      <p class="mb-4">
        <span
          style="color:cornflowerblue;"
        >浙江大学工程教育高级班，简称工高班(ACEE)，</span>旨在培养德智体美劳全面发展、能在未来学科前沿与重大工程科技领域发挥关键作用的高层次优秀人才。自1994年创办以来，工高班培养出了一批具有坚实的自然科学、工程理论基础，具有国际视野的交叉复合型工程技术领军人才。
      </p>
      <!-- <img :src="qrcodeImg" width="60%" class="mb-4" alt="ACEE" /> -->
    </section>
    <section>
      <h3 class="mb-4">
        招生条件
      </h3>
      <p>
        <strong>招生对象：</strong>浙江大学2024级理工科学生（包括工试、工信、理试、材化高、应生等大类）<br>
        <strong>招生人数：</strong>50人<br>
        <strong>基本要求：</strong>
      </p>
      <ol class="ml-8">
        <li>德智体美全面发展，品学兼优，综合素质高。</li>
        <li>学业优秀，所有课程累计平均绩点≧4.0，其中数理、外语、计算机等基础课程的成绩将重点考察。</li>
        <li>浙江大学教师推荐信一封（建议任课教师）。</li>
      </ol>
    </section>
    <section>
      <h3 class="mb-4">
        分流机制
      </h3>
      <p>学院考察学生的思想品德和学业水平等综合表现，在学生选拔进入辅修班级后的前两个学期内，与每长学期进行一次分流。</p>
      <h4 class="mb-2">
        Part1 评估标准
      </h4>
      <ol class="ml-8">
        <li>遵守校规校纪以及班规，品德优良。</li>
        <li>每长学期修读辅修课程学分需不少于已开课学分的80%。</li>
        <li>本学期辅修课程平均学分绩点不低于3.5。</li>
      </ol>
      <h4 class="mb-2">
        Part2 特殊情况
      </h4>
      <p>分流学生有特殊情况者，可在规定时间内向学院提出书面申请，并附上相关证明，学院经组织专家进行评定后决定是否分流。</p>
      <h4 class="mb-2">
        Part3 自愿退出
      </h4>
      <p class="mb-4">
        自愿退出竺可桢学院辅修班学习的学生，须在春学期或秋学期开学第一周向竺可桢学院提出书面申请，学院审核同意后按照以上流程办理。<br>
        <small>*详细文件参照《浙江大学竺可桢学院学生分流工作实施细则》（浙大本发（2018）47号）文件</small>
      </p>
    </section>
    <section>
      <h2 class="mb-2">
        ZJUKongroo
      </h2>
      <p class="mb-2">
        ZJUKongroo 工作室主要由 ACEE 的成员组成。我们的考试系统专为 ACEE 招生设计，旨在提供高效流畅一致的试题提交体验。
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
