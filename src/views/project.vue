<template>
  <div class="projectMain">
    <div class="show">
      <el-carousel :interval="4000" type="card" height="230px">
        <el-carousel-item v-for="item in carouselData" :key="item.carouselId">
          <div class="carouseImgTitle">{{ item.carouselTitle }}</div>
          <img class="carouseImg" :src="item.carouselImg">
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="search">
      <div>
        <el-input v-model="searchText" placeholder="请输入内容" size="small"></el-input>
      </div>
      <div class="searchTest">
        <el-button size="small">搜索</el-button>
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

    <div class="main">
      <div class="main_item" v-for="item in tableData" :key="item.articleId">
        <div class="item_image">
          <img class="itemImage" :src="item.articleImg"/>
          <div class="itemText">
            {{item.articleTitle}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {selectArticle,selectCarousel} from "../api/index";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "project",
  data(){
    return {
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
      total:0,
      carouselData:{
        carouselId:'',
        carouselTitle:'',
        carouselImg:'',
        articleId:''
      },
      searchText:''
    }
  },
  methods:{
    handlePage(value){
      selectArticle(null,null,value,9,null).then((data)=>{
        console.log(data)
        this.tableData = data.data.data.records;
        this.total = data.data.data.total;
        for (let tableDataKey in this.tableData) {
          this.tableData[tableDataKey].articleImg = require('@/image/projectItem/'+ this.tableData[tableDataKey].articleImg);
        }
      });
    }
  },
  mounted() {
    selectArticle(null,null,null,9,null).then((data)=>{
      this.tableData = data.data.data.records;
      this.total = data.data.data.total;
      for (let tableDataKey in this.tableData) {
        this.tableData[tableDataKey].articleImg = require('@/image/projectItem/'+ this.tableData[tableDataKey].articleImg);
      }
    });
    selectCarousel().then((data)=>{
      var carouselData = data.data.data;
      this.carouselData = data.data.data;
      for (let tableDataKey in carouselData) {
        this.carouselData[tableDataKey].carouselImg = require('@/image/projectItem/'+ this.carouselData[tableDataKey].carouselImg);
      }
    })
  }
}
</script>

<style lang="less" scoped>
.projectMain{
  width: 100%;
}
.show{
  width: 65%;
  position: relative;
  margin-left: 20%;
}
.search{
  display: flex;
  width: 100%;
  margin-left: 18%;
}
.pagination{
  display: flex;;
  align-items: center;
  width: 16%;
}
.carouseImg{
  width: 100%;
  height: auto;
}
.carouseImgTitle{
  position: absolute;
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  bottom: 0;
  text-align: center;
}
.main{
  margin-top: 1%;
  margin-left: 15%;
  width:70%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  grid-gap: 50px;
  grid-template-rows: 195px 195px;
  justify-content: center;
}
.main_item{
  width: 260px;
  height: 220px;
}
.itemText{
  text-align: center;
  font-size: 15px;

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}
.searchTest{
  margin-left: 2%;
  width: 33%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.itemImage{
  border-radius: 3%;
  width: 100%;
  height: auto;
  max-height: 150px;
}
</style>
