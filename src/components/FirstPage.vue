<template lang="pug">
.first-page_container
  .header
    img.logo(src="https://ydlunacommon-cdn.nosdn.127.net/2812f3f5e46d9f2683d1b13eab36d961.png")
  .description-area
    img.desc-img(src="https://ydlunacommon-cdn.nosdn.127.net/63b7e5963226003a389d53c9adc3e08a.png")
    h3.desc 8月5日, Vue.js 作者尤雨溪在博客上宣布 Vue.js 3.2 版本正式发布。此版本包括许多重要的新功能和性能改进，并且不包含重大更改。
      el-button(round @click="detailVisible= detailVisible === true ? false : true") Let's get it !
  .detail-area(v-if="detailVisible")
    .detail-content(v-for="(item, index) in detailList" :key="index")
      h1.title(v-if="item.title") {{ item.title }}
      .desc
        span.change-color(v-if="item.high" @click="color = color === 'rgba(249, 97, 160, 0.8)' ? 'rgba(63, 111, 213, 0.8)' : 'rgba(249, 97, 160, 0.8)'") {{ item.high }}
        span {{ item.desc }}
    .example
      Demo(ref="demo" :giveDemo="giveDemo" @giveChild="giveChild")
      button(@click="getChild") 获取子组件值
    .code-area
      el-row(:gutter="12")
        el-col(:span="6")
          p 当前页面
          img.demo-code_img(src="../assets/imgs/first-page-code.jpg")
        el-col(:span="6")
          p Demo(父组件)
          img.demo-code_img(src="../assets/imgs/demo-code.jpg")
        el-col(:span="6")
          p Foo(子组件)
          img.demo-code_img(src="../assets/imgs/foo-code.png")
        el-col(:span="6")
          p Bar(子组件)
          img.demo-code_img(src="../assets/imgs/bar-code.png")
    .detail-content(v-for="(item, index) in more" :key="index")
      h1.title(v-if="item.title") {{ item.title }}
      .desc
        span.change-color(@click="color = color === 'rgba(249, 97, 160, 0.8)' ? 'rgba(63, 111, 213, 0.8)' : 'rgba(249, 97, 160, 0.8)'") {{ item.high }}
        span(v-html="item.desc")
  Dialog(:dialogVisible="dialogVisible" @changeDialogVisible="changeDialogVisible")
  .bottom
    el-button(@click="goPage" round) next 
</template>

<script setup>
import Dialog from '../components/common/Dialog.vue'
import Demo from '../components/Demo.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const dialogVisible = ref(false);
const detailVisible = ref(false);
const color = ref('rgba(249, 97, 160, 0.8)')

const demo = ref()
const giveDemo = ref('父组件值')

function giveChild() {
  alert('父组件方法')
}

function getChild() {
  alert(demo.value.msg)
}

onMounted(() => {
  // dialogVisible.value = true;
})

function goPage() {
  router.push('/secondPage')
}

const detailList = [
  {
    title: '1. 新的SFC功能',
    high: '<script setup> ',
    desc: '是一种编译时语法糖，可在 SFC 内使用 Composition API 时极大地改善开发者体验。',
  },
  {
    high: '<style> v-bind ',
    desc: '在 SFC <style> 标签中启用组件状态驱动的动态 CSS 值。',
  }
]
const more = [
  {
    title: '2. 性能改进',
    desc: '更高效的 ref 实现（约 260% 的读取速度/约 50% 的写入速度）<br>提升约 40% 依赖项跟踪速度<br>内存使用量减少约 17%',
  },
  {
    title: '3. 服务端渲染',
    desc: '@vue/server-renderer3.2 中的包现在提供了一个 ES 模块构建，它也与 Node.js 内置模块分离。如此一来可以通过@vue/server-renderer在非 Node.js环境运行（例如CloudFlare Workers或 Service Workers）。',
  }
]
</script>

<style lang="stylus" scoped>
.first-page_container
  .header
    padding 20px 60px
    .logo
      width 120px
  .description-area
    padding 0 40px
    margin-top 60px
    display flex
    align-items center
    justify-content space-around
    .desc-img
      width 300px
    .desc
      width 60%
      margin-left 30px
      display flex
      flex-direction column
      align-items flex-start
      .el-button
        margin-top 40px
  .detail-area
    margin-top 60px
    padding 0 40px
    .detail-content
      margin 4px
      .change-color
        color v-bind(color)
        cursor pointer
      .desc
        line-height 150%
    .example
      margin 50px 0
      padding 10px
      border 1px solid #b5b5b5
    .code-area
      .demo-code_img
        width 100%
  .bottom
    text-align right
</style>
