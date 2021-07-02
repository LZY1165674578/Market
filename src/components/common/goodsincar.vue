<template>
  <div>
    <div class="div1" >
      <div class="div2">
        <div class="div3">
           <img src="./commonimg/手机(1).png">
        </div>
        <h1>￥{{pushincar.price}}</h1>
        <h2> {{pushincar.name}} 6G+128G</h2>
        <span @click="isshow"> X </span>
      </div>
      <goodschoose :items="['8G+128G','8G+256G','8G+512G']" top="版本"></goodschoose>
      <goodschoose :items="['绿色','蓝色','紫色']" top="颜色"></goodschoose>
      <goodschoose :items="['标配','移动5G',]" top="套餐"></goodschoose>
      <goodschoose  top="小米服务"></goodschoose>
      <goodschoose :items="['意外保证','碎屏服务',]"></goodschoose>
      <goodschoose :items="['Micare']"></goodschoose>
      <div class="div4" @click="pushcar">加入购物车</div>
    </div>
  </div>
</template>

<script>
import goodschoose from "../common/goodschoose";

export default {
  name: "goodsincar",
  components: {goodschoose},
  data(){
    return{
      gooditem: {
        name:'',
        price:null,
        number:1
      }
    }
  },
  props:{
    pushincar:{
      type:Object,
      default(){
        return{}
      },
    },

  },
  methods: {
    isshow(){
      this.$emit("ifshow")
    },
    pushcar(){
      this.gooditem.name =this.pushincar.name
      this.gooditem.price = this.pushincar.price
      this.$store.commit("setgoodsadd", this.gooditem)
      console.log(this.$store.state.goods.number)
      this.$emit("ifshow")
    }

  },

}
</script>

<style scoped>

.div1{
  position: absolute;
  z-index: 3;
  right: 0px;
  width: 100%;
  height: 500px;
  border-top-right-radius: 40px;
  border-top-left-radius: 40px;
  background: white;
  bottom: -10px;
}
.div2{
  width: 100%;
  height: 80px;
  margin-left: 20px;
  box-shadow: 0px 0.1px 0px 0px dimgray;
}
.div3{
  height: 80px;
  width: 80px;

  float: left;

}
.div3 img{
  height: 60px;
  width: 60px;
}
.div2 h1{
  color: red;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 0px;

}
.div2 h2 {
  color: black;
  font-size: 10px;


}
span{
   position: absolute;
   border-radius: 50%;
  background: rgba(45,20,28,0.25);
  right: 20px;
  top: 20px;
  width: 20px;
  height: 15px;
  text-align: center;
  padding-bottom: 5px;
}
.div4{
  margin: 0 auto;
  width: 80%;
  border-radius: 20px;
  text-align: center;
  position: absolute;
  bottom: 34px;
  left: 0;
  right: 0;
  background: darkorange;
  color: white;
}
</style>