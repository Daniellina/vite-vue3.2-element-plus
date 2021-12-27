<template lang="pug">
h4 我是FOO {{ props.foo }}
</template>

<script setup lang="ts">
// 给 props 提供默认值的方式
interface Props {
  foo?: string,
}

const props = withDefaults(defineProps<Props>(), {
  foo: 'default'
})

const emit = defineEmits<{
  (e: 'giveFoo', id: '33'): void
}>()
</script>