<template>
  <div class="projectMain">
    <div class="search">
      <el-input v-model="input" placeholder="请输入内容" size="small"></el-input>
    </div>
    <div class="main">
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/background2.png"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/background.png"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java微软挖塞发我色弱我EREWQ练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
      <div class="main_item">
        <div class="item_image">
          <img class="itemImage" src="../assets/java.jpg"/>
          <div class="itemText">
            这是一个基础的Java练习项目
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <el-pagination
          layout="prev, pager, next"
          :total="50">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "machineHobby"
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
  display: inline-block;
  width: 13%;
  margin-left: 15%;
}
.pagination{
  display: inline-block;
  position: relative;
  left:37%;
  width: 20%;
}
.main{
  //margin-top: 1%;
  margin-left: 15%;
  width:70%;
  height: 50%;
  display: grid;
  grid-template-columns: repeat(3, 270px);
  grid-gap: 50px;
  grid-template-rows: 185px 185px;
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

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.itemImage{
  border-radius: 3%;
  width: 260px;
  height: 161px;
}
</style>
