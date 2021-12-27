<template lang="pug">
div
  el-dialog(
    v-model="props.dialogVisible"
    title="Part 1"
    width="30%"
  )
    span vue3.2.x 使用体验 O(∩_∩)O
    template(#footer)
      span.dialog-footer
        el-button(:disabled="close!==0" @click="$emit('changeDialogVisible', false)")
          span(v-show="close!==0") {{ close }}s
          span 关闭
</template>

<script setup>
import { onMounted, ref } from 'vue'
const props = defineProps({ dialogVisible: Boolean })
const close = ref(4)
const timer = ref(null)

function loading() {
  close.value--
}

function clearTimer(){
  //清除定时器
  clearInterval(timer.value);
  timer.value = null;
}

function sendCode() {
  loading();  //启动定时器
  timer.value = setInterval(() => {
    //创建定时器
    if(close.value === 1) {
      clearTimer();  //关闭定时器
      close.value = 0;
    } else {
      loading();
    }
  },1000);
}

onMounted(() => {
  sendCode()
})
</script>

<style lang="stylus" scoped>

</style>