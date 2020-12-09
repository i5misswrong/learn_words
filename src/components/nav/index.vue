<template>

  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">Home</el-menu-item>
    <el-submenu index="2">
      <template slot="title">英语</template>
      <el-menu-item index="2-1">单词</el-menu-item>
      <el-menu-item index="2-2">阅读</el-menu-item>
      <el-menu-item index="2-3">听力</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">日语</template>
      <el-menu-item index="3-1">单词</el-menu-item>
      <el-menu-item index="3-2">阅读</el-menu-item>
      <el-menu-item index="3-3">听力</el-menu-item>
    </el-submenu>
    <el-menu-item index="4">关于</el-menu-item>
  </el-menu>
</template>

<script>
export default {
// name: "nav"
}
</script>

<style scoped>

</style>