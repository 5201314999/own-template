<!-- ts类型控制练习 -->
<template>
  <h1>{{ title }}</h1>
  <h3>{{ msg }}</h3>
  <input v-model="username" type="text" @blur="handleBlur($event)" @focus="handleFocus($event)" />
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  msg: string
  title?: string
}

// 设置默认值 编译器宏
withDefaults(defineProps<Props>(), {
  title: '默认标题',
  msg: ''
})

let username = ref<String>('')

// defineEmits 的类型声明 
const emit = defineEmits<{
  (e: 'on-blur1', username: string): void,
  (e: 'on-focus1', username: number): void
}>()

const handleBlur = (evt: any) => {
  const target = evt.target
  emit('on-blur1', target.value)
}

const handleFocus = (evt: any) => {
  console.log('focus')
  const { target } = evt
  emit('on-focus1', Number(target.value))
}

</script>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
