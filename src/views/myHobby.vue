<template>
  <div class="main">
    <div class="left">
      <div class="centerContext" @click="redirectToMachine">
        <span>硬件</span>
      </div>
    </div>
    <div class="right">
      <div class="centerContext"  @click="redirectToMusic">
        <span>音乐</span>
      </div>
    </div>
  </div>
</template>

<script>
import MusicHobby from "@/views/musicHobby";
import machineHobby from "@/views/machineHobby";

export default {
  name: "myHobby",
  methods:{
    redirectToMachine(){
      this.$router.push(machineHobby,()=>{},()=>{})
    },
    redirectToMusic(){
      this.$router.push(MusicHobby,()=>{},()=>{})
    }
  }

}
</script>

<style lang="less" scoped>
.main{
  height: 92.6vh;
  width: 100%;
}
.left{
  width: 500px;
  height: 500px;
  background-color: skyblue;
  float: left;
  position: absolute;
  border-radius: 50%;
  left: 15%;
  top:25%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.right{
  width: 500px;
  height: 500px;
  background-color: orange;
  position: absolute;
  border-radius: 50%;
  left: 55%;
  top: 25%;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.centerContext{
  font-size: 70px;
  color: white;
}
</style>
