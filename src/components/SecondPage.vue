<template lang="pug">
.second-page(ref="page")
  .header
    img.logo(src="https://ydlunacommon-cdn.nosdn.127.net/2812f3f5e46d9f2683d1b13eab36d961.png")
  .nuxt-content
    .title
      h1 Nuxt 项目优化
      img.draw(src="https://ydlunacommon-cdn.nosdn.127.net/e493a91608a39f1bae5c582be35b506e.png")
    .content
      h4 1. 性能优化
      ul
        li 图片大小压缩
          img.img(src="../assets/imgs/tiny.jpg")
        li 图片实现懒加载（vue-lazyload 插件 默认 scroll 时加载）
          el-row(:gutter="12")
            el-col(:span="8")
              img.lazy-img(src="../assets/imgs/v-lazy.png")
            el-col(:span="8")
              img.lazy-img(src="../assets/imgs/v-lazy-1.png")
            el-col(:span="8")
              img.lazy-img(src="../assets/imgs/v-lazy-2.png")
        li 引用插件使用 CDN 或者考虑引入 min 包
      h4 2. 打包体积优化
      ul
        li 优化前
        img.origin(src="https://ydlunacommon-cdn.nosdn.127.net/e31db8758d887a2c8252cbacdf7223bc.png")
        li 使用 splitChunks
        img.split(src="https://ydlunacommon-cdn.nosdn.127.net/199c277d67bbb8c667f7feb760e6ad5f.png")
        li 安装 compression-webpack-plugin，进行文件压缩
        img.compression(src="https://ydlunacommon-cdn.nosdn.127.net/bfd0f3bb2cd0a84bad25ad6fde17467f.png")
</template>
<script lang="ts">
</script>
<style lang="stylus" scoped>
.img
  width 85vw
.lazy-img
  width 28vw
.second-page
  .header
    padding 20px 60px
    .logo
      width 120px
  .nuxt-content
    margin-top 100px
    .title
      display flex
      justify-content center
      align-items center
      margin-bottom 250px
      .draw
        width 250px
        margin-left 20px
    .content
      padding 0 40px
      .origin, .split, .compression
        width 90vw
</style>