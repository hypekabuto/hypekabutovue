<template>
  <div class="headerContainer">
    <div class="logo">
      <img class="logoImage" src="../assets/logo.png">
    </div>
    <div class="menu">
      <el-menu style="background-color: transparent" :default-active="$router.path" class="el-menu-demo" mode="horizontal">
        <el-menu-item @click="clickMenu(item)" v-for="item in menuData" :key="item.name" :index="item.path">
          <span slot="title">{{item.label}}</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="search">
      <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
    </div>
    <div class="rightContent">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img class="userPhoto" src="../assets/authorAvatar.jpg"/>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="userCenter">登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "commonHeader",
  data() {
    return {
      menuData:[
        {
          path:'/homeView',
          name:'homeView',
          label:'首页',
          url:'HomeView/homeView'
        },
        {
          path:'/project',
          name:'project',
          label:'作品',
          url:'Project/project'
        },
        {
          path:'/myHobby',
          name:'myHobby',
          label:'兴趣',
          url:'MyHobby/myHobby'
        },
        {
          path:'/linkMe',
          name:'linkMe',
          label:'联系我',
          url:'LinkMe/linkMe'
        },
      ],
      input:""
    };
  },
  methods: {
    clickMenu(item){
      if (this.$route.path !== item.path) {
        this.$router.push(item.path);
      }
    }
  }
}
</script>

<style lang="less" scoped>
.headerContainer{
  padding:0;
  height:60px;
  display: flex;
  align-items: center;
}
.menu{
  margin-right: 17%;
  width: 18%;
  display: flex;
}
.logo{
  display: flex;
  margin-top: 1.2%;
  margin-left: 1.2%;
  width: 35%;
  align-items: center;
  .logoImage{
    width: 45px;
    height: 45px;
  }
}
.search{
  display: flex;
  margin-top: 1%;
  width: 12%;
  height: 50%;
  padding-right: 14%;
}
.userPhoto{
  width: 40px;
  height: 40px;
  margin-top: 10px;
  border-radius: 50%;
}
.el-menu--horizontal {
  display: flex;
}
el-dropdown-link {
  cursor: pointer;
  color: #409EFF;

}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
