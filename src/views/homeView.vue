<template>
  <div class="main">
    <div class="left">
      <div class="leftCard">
        <div class="avatar-container">
          <el-avatar :size="100" :src="authorAvatar"></el-avatar>
        </div>
        <div class="content">
          <div>欢迎来到</div>
          <div>hypekabuto的博客</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="navMenu">
        <span class="selectByTime">时间</span>
        <el-select @change="timeChange($event)" style="width: 120px" size="mini" v-model="timeValue" placeholder="倒叙">
        <el-option
            v-for="item in timeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
      </el-select>
        <span class="selectByTheme">主题</span>
        <el-select @change="themeChange($event)"  style="width: 120px" size="mini" v-model="themeValue" placeholder="请选择">
          <el-option
              v-for="item in themeOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="item" v-for="item in this.tableData" :key="item.articleId">
        <img :src="item.articleImg"/>
        <h3>{{item.articleTheme}}</h3>
        <p >{{item.articleTitle}}</p>
      </div>
      <div class="pagination">
        <el-pagination
            layout="prev, pager, next"
            :total="this.total"
            :page-size="8"
            @current-change="handlePage">
        </el-pagination>
      </div>
    </div>
  </div>

</template>
<script>
import {selectArticle} from "../api/index";
export default {
  name: "homeView",
  data() {
    return {
      authorAvatar:require('@/assets/authorAvatar.jpg'),
      timeOptions: [{
        value: '1',
        label: '倒叙'
      }, {
        value: '2',
        label: '升序'
      }],
      timeValue: '',
      themeOptions: [{
        value: 'all',
        label: '全部'
      },{
        value: 'java',
        label: 'java'
      }, {
        value: 'music',
        label: '音乐'
      },{
        value: 'netWork',
        label: '网络'
      }],
      themeValue: '',
      tableData:{
        articleId:'',
        articleImg:'',
        articleTheme:'',
        articleTime:'',
        articleTitle:'',
        caches:'',
        goods:'',
        userId:''
      },
      total:0
    };
  },
  methods:{
    timeChange(value){
      selectArticle(value,this.themeValue,null,8).then((data)=>{
        this.tableData = data.data.data.records;
        this.total = data.data.data.total;
        for (let tableDataKey in this.tableData) {
          this.tableData[tableDataKey].articleImg = require('@/image/projectItem/'+ this.tableData[tableDataKey].articleImg) ;
        }
      })
    },
    themeChange(value){
      selectArticle(this.timeValue,value,null,8,null).then((data)=>{
        this.tableData = data.data.data.records;
        this.total = data.data.data.total;
        for (let tableDataKey in this.tableData) {
          this.tableData[tableDataKey].articleImg = require('@/image/projectItem/'+ this.tableData[tableDataKey].articleImg) ;
        }
      })
    },
    handlePage(value){
      selectArticle(this.timeValue,this.themeValue,value,8,null).then((data)=>{
        this.tableData = data.data.data.records;
        this.total = data.data.data.total;
        for (let tableDataKey in this.tableData) {
          this.tableData[tableDataKey].articleImg = require('@/image/projectItem/'+ this.tableData[tableDataKey].articleImg) ;
        }
      })
    }
  },
  mounted() {
    selectArticle(null,null,null,8,null).then((data)=>{
      this.tableData = data.data.data.records;
      this.total = data.data.data.total;
      for (let tableDataKey in this.tableData) {
        this.tableData[tableDataKey].articleImg = require('@/image/projectItem/'+ this.tableData[tableDataKey].articleImg) ;
      }
    });
  }
}
</script>

<style scoped>
.left {
  position: fixed;
  top: 8%;
  left: 3%;
  height: 250px;
  margin-left: 3%;
  margin-top: 3%;
}

.right {
  width:1000px;
  height: 100%;
  margin-left: 20%;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: flex-start;
}
.navMenu{
  width: 100%;
  padding-left: 20px;
}
.selectByTime{
  margin-right: 15px;
  font-size: 15px;
  color: black;
}
.selectByTheme{
  margin-right: 15px;
  margin-left: 15px;
  font-size: 15px;
  color: black;
}
.leftCard{
  width: 180px;
  height: 250px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
}
.avatar-container{
  margin-bottom: 20px;
}
.content{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  font-size: 16px;
  font-weight: bold;
  color: rgba(128, 128, 128, 0.99);
}
.item {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-basis: 190px;
  margin: 10px;
  padding: 20px;
  background-color: transparent;
  border-radius: 5px;

}

.item img {
  width: 80%;
  height: auto;
  max-width: 100px;
  max-height: 100px;
  margin-bottom: 10px;
}

.item h3{
  width: 100%;
  text-align: center;
}
.item p{
  width: 100%;
  text-align: center;
}
.pagination{
  margin-top: 3%;
  margin-left: 35%;
  width: 50%;
}
</style>

