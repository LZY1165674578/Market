<template>
  <div>
     <div>
       <img src="../common/commonimg/手机封面.jpg" class="img1">
        <div class="div1">
          <img src="../common/commonimg/OIP-C(1).jpg" class="img2">
           <h1>xiaomi 10 pro</h1>
           <h2>新品看点:是一个智能手机</h2>
           <h3>￥3499</h3>
           <span>入车吧</span>
        </div>
       <div class="div2">
         <h4>气人新品</h4>
         <h5> 跟着买就对了</h5>
       </div>
       <Midcatechooseitems :items="phonegoods" ></Midcatechooseitems>
     </div>
  </div>
</template>

<script>
import Midcatechooseitems from "../common/Midcatechooseitems";

export default {

  name: "Midcatechoose",
  components: {Midcatechooseitems},
  data(){
    return{
      phonegoods: {
        "xiaomi10": {
          price: 5999,
          text:'新品看点:是一个智能手机',
          name: "小米10"
        },
        "redmi9": {
          price: 1299,
          text:'新品看点:是一个智能手机',
          name: "红米9"
        },
        "K30": {
          price: 2999,
          text:'新品看点:是一个智能手机',
          name: "k30纪念版"
        },
        "redmi10x": {
          price: 1999,
          text:'新品看点:是一个智能手机',
          name: "红米10x"
        },
        "xiaomi9": {
          price: 999,
          text:'新品看点:是一个智能手机',
          name: "小米9"
        },
        "redmik40": {
          price: 1599,
          text:'新品看点:是一个智能手机',
          name: "红米k40"
        },
      }
    }
  }
}
</script>

<style scoped>
.img1{
  width: 100%;
  height: 200px;
}
.div1{
  margin: 0 auto;
  width: 80%;
  height: 80px;
  background: white;
  margin-top: -20px;
  position: relative;
  z-index: 2;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
}
.img2{
  float: left;
  width: 100px;
  height: 80px;
}
h1{
  font-size: 15px;
  font-weight: bold;
  margin-top: 0px;
}
h2{
  font-size: 3px;
  color: dimgray;
}
h3{
  font-size: 10px;
  color: red;
}
span{
  font-size: 10px;
  position: absolute;
  bottom: 15px;
  right: 20px;
  background: darkorange;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  width: 60px;
  text-align: center;
}
.div2{
  width: 100%;
  height: 50px;
}
h4{
  font-size: 15px;
  font-weight: bold;
  float: left;
  margin-top: 10px;
}
h5{
  margin-top: 15px;
  font-size: 7px;
  color: dimgray;
  width: 80px;
  height: 20px;
  float: left;
  margin-left: 5px;
  margin-bottom: 0px;
}
</style>