<template>
 <div>
   <div class="div1" v-for="(item,index) in subgoods" :key="index">
      <div class="div2">
        <div class="div3">
          <div class="div5">
          <img src="./commonimg/手机(1).png">
          </div>
          <h1>{{item.name}}</h1>
          <h2>{{item.context}}</h2>
          <h3>特价:￥{{item.price}}</h3>
          <span class="span1" @click="pushincar(item)">加入购物车</span>
        </div>
        <div class="div4">
          <img src="./commonimg/ooo.png">
        </div>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  name: "Subpricephone",
  props:{
     subgoods:{
       type:Array,
       default(){
         return {}
       }

     }
  },
  methods:{
    pushincar(item){
      this.$store.commit("setgoodsadd",item)
    }
  }
}
</script>

<style scoped>
.div1{
  background: rgba(86,169,254,1);
  width: 100%;
  height: 220px;
  padding-top: 15px;

}
.div2{
  width: 85%;
  height: 180px;

  margin: 0 auto;

}
.div3{
  width: 100%;
  background: white;
  height: 100px;
  border-radius: 10px;
  position: relative;


}
.div4{
  width: 100%;
  height: 80px;
  background: rgba(180,219,255,0.06) ;
}
.div5{
  height: 90px;
  width: 80px;
  float: left;
  padding: 10px;
  padding-bottom: 0px;
}
img{
  height: 70%;
  width: 70%;
}
h1{
  font-size: 15px;

  margin-top: 15px;
}
h2{
  font-size: 3px;
  color: dimgray;
}
h3{
  color: red;
  font-size: 10px;
}
.div4 img{
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.span1{
  position: absolute;
  bottom: 10px;
  right: 16px;
  width: 70px;
  text-align: center;
  border-radius: 10px;
  background: darkorange;
  font-size: 5px;
  color: white;
}
</style>