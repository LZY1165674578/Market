<template>
  <div class="caritems">
     <ul v-if="this.$store.state.goods.length>0" class="ul1">
        <li v-for="(item,index) in this.$store.state.goods" :key="index" >
             <input type="checkbox" class="input" v-model="choosegood" :value="item.name">
            <div class="imgdiv">
             <img src="../../common/commonimg/手机(1).png">
            </div>
            <span class="span1">{{item.name}}</span>
            <span class="spans">￥{{item.price*item.count}}</span>
          <div class="div3">
            <button @click="sub(item)">-</button>
            <span class="span3"> 数量:{{item.count}} </span>
            <button @click="add(item)">+</button>
           </div>
        </li>
    </ul>
    <div v-else class="caritems2" >
       <span><img src="../shopcarimg/Rotimg/购物车.png"></span>
       <h1>购物车空空如也~</h1>
    </div>
    <div  class="div2">
      <span class="span6" @click="del"> 清空购物车 </span>
      总金额:<span class="span4">  ￥{{sum}}</span>
      <button class="button1">结算（{{choosegood.length}}）</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopcaritem",
  inject: ['reload'],
  data(){
    return{
      sum:0,
      number:0,
      choosegood:[],



    }
  },
  mounted() {
    for (let item of this.$store.state.goods) {
        this.sum += parseInt(item.price)*item.count
    }

 },

 methods:{
     sub(item){
       this.$store.commit("setgoodssub", item)
       this.reload()
     },
     add (item){
       this.$store.commit("setgoodsadd", item)
       this.reload()
   },
   del(){
       this.$store.commit("delgoods")
      this.reload()
   }


}

}

</script>

<style scoped>
.input{
  float: left;
  margin-top:30px;
  border-radius: 50%;
}
.caritems{
  width: 100%;
  height: 500px;
  background: white;

}
.caritems li{
  list-style: none;
}
.caritems2{
  width: 200px;
  height: 200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 80px;
}

.caritems2 img{

  width: 30%;
  height: 30%;
}
.caritems2 h1{
  font-size: 10px;
  color: dimgray;
}
.ul1{
  margin: 0;
  padding: 0;
}
.ul1 li{
  width: 100%;
  height: 90px;
  background: white;
  position: relative;

}
.imgdiv{
  width: 70px;
  height: 70px;
  margin: 0;
  float: left;
  padding-top: 5px;
  padding-left: 10px;
  box-shadow: 0px 0.2px 0.5px 0px dimgray;

}
.ul1 li  img{
  width: 50px;
  height: 60px;

}
.ul1 li span{
  color: black;
}
.div2{
   background: white;
   position: fixed;
   bottom: 45px;
   left: 0;
   right: 0;
  width: 100%;
  height: 30px;
  text-align: center;
  padding-top: 10px;
  box-shadow: 0px 0px 1px 0px dimgray;

}
.span4{
  color: darkorange;
}
.button1{
  background: rgba(221,2,5,0.75);
  float: right;
  border: 0px;
  color: white;
  width: 30%;
  text-align: center;
  box-shadow: 0px 2px 0px 0px dimgray;
}
.spans{
  color: red;
  position: absolute;
  bottom: 15px;
  left: 160px;
}
.span1{
  font-size: 18px;
  color: red;

}
.div3{
  position: absolute;
  right: 0px;
  bottom: 15px;
}
button{
  background: rgba(221,2,5,0.75);
  box-shadow: 0px 0.2px 0px 0px dimgray;
  border: 0.2px;
}

.span6{
  float: left;
  background:white ;
  box-shadow: 0px 0px 0.5px 0.3px dimgray;
  border-radius: 10px;
  font-size: 2px;
  height: 20px;
  width: 78px;

}
</style>