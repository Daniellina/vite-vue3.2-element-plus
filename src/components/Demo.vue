<template lang="pug">
.demo
  .log-click(@click="log") {{ msg }}
  //- 响应式
  button(@click="count++") {{ count }}
  //- 动态组件
  component(:is="someCondition ? Foo : Bar" :foo="foo")
</template>

<script setup>
import { ref, watch } from 'vue'
import Foo from './demo/Foo.vue'
import Bar from './demo/Bar.vue'

// 变量
const msg = 'Hello!'
const count = ref(0)
const someCondition = ref(false)
const foo = ref('foo')
// Props
const props = defineProps({
  giveDemo: String
})
// Emit
const emit = defineEmits(['giveChild'])
// Expose
defineExpose({
  msg,
})

// 函数
function log() {
  alert(props.giveDemo)
}

watch(count, (newCount) => {
  if (newCount === 5) {
    someCondition.value = true
  }
  if (newCount === 7) {
    emit('giveChild')
  }
})
</script>

<style lang="stylus" scoped>
</style>