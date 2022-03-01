<!--
Description
@authors fanjr (1446418561@qq.com)
@date    2022-02-13 14:32:30
@version 1.0.0
-->

<template>
  <div>
    <h3>layout 头部</h3>
    <div style="margin-top: 60px">
      <div>
        <router-link to="/home">首页</router-link>
      </div>
      <div>
        <router-link to="/user">用户</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
</style>
