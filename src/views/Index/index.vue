<template>
  <el-container class="main">
    <el-header>Header</el-header>
    <el-container class="contain">
      <el-aside width="200px">Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {}
</script>
<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  min-width: 1000px;
  display: flex;
  flex-direction: column;
  .contain {
    flex: 1;
  }
}
.el-header {
  background-color: #373d41;
  color: #fff;
  text-align: center;
  line-height: 60px;
  font-size: 22px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
