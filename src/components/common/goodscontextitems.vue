<template>
  <div class="goodsitems">
    <div class="divs">
     <img src="./commonimg/手机(1).png">
    </div>
    <div class="div2">
     <span class="name">{{itemss.name}}</span>

     <span class="price">￥{{itemss.price}}</span>

   </div>
     <div class="div3">
     <span class="new">小米新品</span>
     <h1 class="Newham">来这里发现你的新品</h1>
    </div>
     <ul>
       <li style="color: chocolate">. 「全版本直降500元!最高享24期免息;高考生认证立减100元;全款支付送小米真无线耳机Air2 SE]</li>
       <li>1. [专业影像]超感光夜景相机+电影镜头VLOG模式</li>
       <li>2. [突破性能]全新骁龙888+新型散热材料+WiFi6增强版3【极速快充】5000mAh大电池+双67W快充+10W反向充电</li>
       <li>3.【极速快充】5000mAh大电池+双67W快充+10W反向充电</li>
    </ul>
   </div>
</template>

<script>
export default {
  name: "goodscontextitems",
  props:{
    itemss:{
      type:Object,
      default(){
        return{}
      }
    }
  },
  data(){
    return{

    }
  },
  created(){

  }
}
</script>

<style scoped>
.goodsitems{
  width: 100%;
  height: 400px;
}
.goodsitems .divs{
  text-align: center;
  width: 100%;
  height: 160px;
  margin-top: 40px;
}
.goodsitems div img{
  width: 100px;
  height: 100px;
}
.div2{
  height: 50px;
  width: 100%;
}
.price{
  float: right;
  color: red;
  font-size: 20px;
}
.name{
  float: left;
  color: black;
  ;
  font-size: 20px;
}
.new{
  width: 50px;
  height: 20px;
  background: rgba(9,10,11,0.85);
  border-radius: 10px;
  font-size: 10px;
  color: rgba(243,195,0,0.15);
  padding-top: 5px;

}
.Newham{
  font-size: 10px;
  margin-left: 5px;
}
.div3{
  display: flex;
  flex: 1;
}
.img1{
  width: 100%;
  height: 200px;
}
ul{
  padding-left: 0;
}
ul li{

  list-style: none;
  font-size: 10px;
}
</style>