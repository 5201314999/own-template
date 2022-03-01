<!-- 管理后台基本布局（验收，vue3 setup 语法糖入门收官）-->
<template>
  <!-- <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>-->
  <router-view />
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
console.log('router:', router)
</script>

<style scoped lang="scss">
</style>
