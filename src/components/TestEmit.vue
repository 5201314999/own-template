<!--
Description Vue3 setup 组合式api 语法糖练习
@authors Your Name (you@example.org)
@date    2022-02-10 22:02:42
@version 1.0.0
-->

<template>
    <div>
        <p>组件名字:{{ name }}</p>
        <p>父组件飞书: {{ props.book }}</p>
        <button @click="handleClick">触发父组件</button>

        <div style="margin-top: 30px">count值：{{ count }}</div>
        <button @click="add">count加1</button>
        <div>年纪：{{ person.age }}</div>
        <button @click="changeAge">改变年纪</button>

        <div v-for="(item, index) in arr" :key="index">{{ item }}</div>
        <div v-for="(item, index) in reactiveArr" :key="index">{{ item }}</div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watchEffect, watch } from 'vue'

interface Props {
    book: string
}

const props = withDefaults(defineProps<Props>(), {
    book: "我是默认值"
})

const name = ref("导航条2")

const emit = defineEmits(['on-change'])

const handleClick = () => {
    emit('on-change', '第一个菜单')
}
console.log(name.value)

defineExpose({
    name
})

// 值
const count = ref(1)

const add = () => {
    count.value++
}

// 对象
const person = reactive({
    age: '18岁'
})

// 数组
const arr = ref([1, 2, 3, 4])

// 这样定义，无法修改，所以reactive 用在对象就好了
let reactiveArr = reactive([1, 2, 3, 4])

const changeAge = () => {
    person.age = "19岁"
    arr.value = [5, 6, 7, 8]
    reactiveArr = [0, 0, 0, 0]
}
// watchEffect(()=> console.log("count watchEffect，促发:", count.value))

watch(count, (n, o) => {
    console.log("watch 测试", n)
    console.log("watch 测试", o)
}, { deep: true, immediate: true })

// watch 多个变量
watch([count, person.age], (n, o) => {
    console.log("watch 多个变量测试", n[0])
    console.log("watch 多个变量测试", n[1])
})

    // setup 最外层相当于created 生命周期

</script>

<style lang="scss" scoped>
</style>
