<template>
  <el-row>
    <el-col class="main" :span="21">
    <div class="mainBox">
      <el-card class="leftImage" :body-style="{ padding: '0px' }">
        <img src="../assets/1.jpg" class="image">
      </el-card>
      <el-card class="right" :body-style="{ padding: '0px' }">
        <div class="text">
          <div class="context">昵称：</div>
          <img class="authorAvatar" src="../assets/authorAvatar.jpg"/>
          <div class="context">hypekabuto</div>
          <div class="context">常驻地：</div>
          <div class="context">浙江省</div>
          <div class="context">个人简介：</div>
          <div class="context">一个新手编程师，对于计算机具有充足的热情，在网络以及开发方向都有一定的应用，目前仍是一名大学生，正在积极寻找工作中。。。</div>
        </div>
        <div class="tag">
          <div class="context">技术栈：</div>
          <el-tag class="tag_item" type="success">Spring Boot</el-tag>
          <el-tag class="tag_item" type="success">Mybatis</el-tag>
          <el-tag class="tag_item" type="success">MySQL</el-tag>
          <el-tag class="tag_item" type="warning">Vue.js</el-tag>
          <el-tag class="tag_item" type="warning">Element UI</el-tag>
          <el-tag class="tag_item">OpenWrt</el-tag>
        </div>
        <div class="LinkMe">
          <div class="context">联系我：</div>
          <div class="redirect">
            <div class="dropdown">
              <img style="width: 45px;height: 45px;border-radius: 50%" src="../assets/wxLogo.png"/>
              <div class="dropdown-image">
                <img style="width: 85px;height: auto" src="../assets/authorWechat.jpg">
              </div>
            </div>
            <div class="qqDropdown">
              <img style="width: 45px;height: 45px;border-radius: 50%" src="../assets/qqImage.jpg"/>
              <div class="dropdown-image">
                <img style="width: 85px;height: auto" src="../assets/qqAuthorImage.jpg">
              </div>
            </div>
            <div class="emailDropdown">
              <img style="width: 45px;height: 45px;border-radius: 50%" src="../assets/outlookImage.jpg"/>
              <div class="dropdown-email">
                <p>Mao492471757</p>
                <p>@outlook.com</p>
              </div>
            </div>
            <div class="github">
              <a href="https://github.com/hypekabuto"><img style="width: 45px;height: 45px;border-radius: 50%" src="../assets/githubImage.jpg"/></a>
            </div>
          </div>
        </div>
      </el-card>
    </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "linkMe",
  data(){
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
.main{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.mainBox{
  display: flex;
}
.image{
  height: 600px;
  width: auto;
}
.right{
  width: 80%;
}
.text{
  width: 600px;
  /*display: flex;*/
  /*flex-direction: column;*/
  margin-left: 5%;
  padding-bottom: 2%;
  border-bottom: 1px solid rgba(133, 132, 132, 0.77);
}
.LinkMe{
  margin-left: 5%;
  padding-bottom: 2%;
}
.context{
  margin-top: 1%;
  font-size: 28px;
}
.authorAvatar{
  position:absolute;
  width: 190px;
  height: 190px;
  border-radius: 50%;
  left: 67%;
  bottom: 65%;
}
.tag{
  width: 600px;
  margin-left: 5%;
  padding-bottom: 2%;
  border-bottom: 1px solid rgba(133, 132, 132, 0.77);
}
.tag_item{
  border-radius: 10%;
  margin-right: 4%;
  margin-top: 3%;
}
.image {
  width: 100%;
  display: block;
}
.dropdown{
  margin-top: 3%;
}
.dropdown-image{
  display:none;
  position:absolute;
  padding:0px 16px;
}
.dropdown:hover .dropdown-image{
  display: inline;
}
.redirect{
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
}
.github{
  margin-top: 3%;
  padding-left: 20%;
}
.emailDropdown{
  margin-top: 3%;
  padding-left: 20%;
  position: relative;
}
.dropdown-email{
  display:none;
  position:absolute;
  padding:0px 16px;
  bottom: 0;
}
.emailDropdown:hover .dropdown-email{
  display: block;
  position: absolute;
  top:40px;
  left: 83px;
}
.qqDropdown{
  margin-top: 3%;
  padding-left: 20%;
}
.dropdown-image{
  display:none;
}
.qqDropdown:hover .dropdown-image{
  display: inline;
}
</style>
