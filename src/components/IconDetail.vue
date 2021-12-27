<template lang="pug">
transition(name="slide")
  .content
    img.vs(src="https://ydlunacommon-cdn.nosdn.127.net/4dced590f72d79d1a2d6c612c769ec89.png")
    el-row(:gutter="12")
      el-col(:span="12" v-for="(card, index) in cardList" :key="index")
        el-card(class="box-card")
          template(#header)
            .card-header
              span {{ card.name }}
          .desc(v-if="index===0" v-for="(desc, i) in card.desc" :key="i")
            p {{ desc.text }}
            img.img(:src="desc.pic")
          img(:src="card.pic")
</template>

<script setup lang="ts">
const cardList = [
  {
    name: 'Element Plus',
    
    desc: [
      {
        text: '1.安装',
        pic: 'https://ydlunacommon-cdn.nosdn.127.net/bd5086056eeb5e5a6f4b12bc80e3b0d5.jpg',
      },
      {
        text: '2.直接使用 SVG 格式',
        pic: 'https://ydlunacommon-cdn.nosdn.127.net/f9e8753fbe80c6b3e5640e6b4fb00d7b.jpg',
      },
      {
        text: '3.使用 el-icon 为 SVG 图标提供属性',
        pic:'https://ydlunacommon-cdn.nosdn.127.net/795b339f4bd544592e8ad0057e78e6f6.jpg'
      }
    ],
  },
  {
    name: 'Element',
    pic: 'https://ydlunacommon-cdn.nosdn.127.net/4e471bdae31903b51edd4b206d3d6d1b.jpg',
  }
]
</script>
<style lang="stylus" scoped>
.vs
  display block
  width 300px
  margin 0 auto 20px auto
.el-card
  .img
    width 300px
.slide-enter-active
  transition all .3s ease
.slide-leave-active
  transition all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)
.slide-enter,.slide-leave-active
  transform translateX(10px)
  opacity 0
</style>