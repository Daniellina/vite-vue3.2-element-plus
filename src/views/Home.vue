<template lang="pug">
.home(ref="home" v-if="route.path.indexOf('home')!==-1")
  .header
    img.logo(src="https://ydlunacommon-cdn.nosdn.127.net/2812f3f5e46d9f2683d1b13eab36d961.png")
    el-icon(v-show="screenVisible")
      full-screen(@click="screen")
  .main
    img.share(src="https://ydlunacommon-cdn.nosdn.127.net/071a22c84220ef3bf8d7d1cce42fb741.png")
    .info
      h1 vue3.2 - vite - Element Plus
      .tags
        el-tag.tag(effect="dark" color="#303133") 分享人：李娜
        el-tag.tag(effect="dark" color="#303133") 时间：2021-12-27
  .bottom
    el-popover(
      placement="top-start"
      title="Icon 的区别"
      :width="200"
      trigger="hover"
      v-model="visible"
    )
      div(style="text-align:left; margin:0;")
        el-link(type="primary" @click="goIconDetail") 详情
      template(#reference)
        el-icon(@click="goPage")
          arrow-right-bold
  .more(id="more" v-show="visible")
    IconDetail
router-view

</template>

<script setup lang="ts">
import {
  ArrowRightBold,
  FullScreen,
  Edit
} from '@element-plus/icons-vue';
import IconDetail from '../components/IconDetail.vue';
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const home = ref()
const visible = ref(true)
const screenVisible = ref(true)
const router = useRouter()
const route = useRoute()

function goIconDetail() {
  const more = document.getElementById('more')
  if (more) {
    more.scrollIntoView(
      { behavior: 'smooth', block: 'start', inline: 'nearest' },
    );
  }
}

function screen() {
  let element = document.documentElement;
  element.requestFullscreen();
  screenVisible.value = false;
}

function goPage() {
  router.push('/onePage')
}

</script>
<style lang="stylus" scoped>
.home
  margin-top 60px
  overflow-x hidden
  .header
    display flex
    padding 20px 60px
    justify-content space-between
    .logo
      width 120px
    .el-icon
      cursor pointer
  .main
    width 100%
    margin-top 80px
    text-align center
    display flex
    align-items center
    justify-content space-around
    .share
      width 500px
    .info
      .tags
        .tag
          border none
          margin 0 4px
  .bottom
    text-align right
    padding 20px
    margin-bottom 60px
    .el-icon
      cursor pointer
  .more
    margin 40px 0
</style>