<template>
  <div class="all">
    <el-container>
      <el-header>
        <commonHeader></commonHeader>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>

</template>

<script>
import commonHeader from "@/components/commonHeader";

export default {
  name: "mainIndex",
  components: {
    commonHeader,
  }
}
</script>

<style lang="less" scoped>
.all {
  //background-image: //linear-gradient(to bottom,
  ////rgba(255, 255, 255, 1),
  ////rgba(255, 255, 255, 0)),
  //    url("../assets/background3.jpg");
  background-size: cover;
  background-color: white;
}
.el-card__body, .el-main{
  padding: 0;
}
el-container {
  height: 100%;
}
</style>
