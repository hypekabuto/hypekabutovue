<template>
  <div class="bigBox">
    <el-card class="logInCard">
      <div class="logo">
        <img class="logInLogo" src="../assets/logo.png">
      </div>
      <el-form id="form">
        <el-form-item>
          <el-input class="input" size="medium" type="text" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="input" size="medium" type="password"  placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input class="input" size="medium" type="captcha"  placeholder="请输入验证码"></el-input>
        </el-form-item>
        <div>
          <img class="checkImg" src="../assets/logo.png">
        </div>
        <el-button type="primary" class="button">登陆</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "logIn"
}
</script>

<style lang="less" scoped>
.bigBox{
  background-image: url("../assets/background2.png");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  top:0;
  left:0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logInCard{
  width: 480px;
  height: 500px;
  opacity: 0.9;
  border-radius: 15px;

}
.logInLogo{
  width: 100px;
  height: auto;
  border-radius: 50%;

}
.logo{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input{
  width: 290px;
}
#form{
  text-align: center;
  padding-left: 15px;
  padding-right: 15px;
}
.checkImg{
  width: 100px;
  height: auto;
}
</style>
