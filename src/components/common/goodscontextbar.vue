<template>
  <div>
    <div class="div1">
      <span>
        <img src="./commonimg/客服.png">
        <h1>客服</h1>
      </span>
      <span @click="gocar">
        <img src="./commonimg/购物车(1).png">
        <h1>购物车</h1>
      </span>
      <span id="goods" @click="isshow">
        加入购物车
      </span>
      <span id ='pay'>
        购买
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "goodscontextbar",
  data(){
    return{

    }
  },
  props:{
    path:String
  },

  methods:{
    isshow(){
        this.$emit('isshows' )
         console.log("ss")
    },
    gocar(){
      this.$router.push(this.path)
    }
  }
}

</script>

<style scoped>
.div1{
  width: 100%;
  height: 44px;
  background: white;
  display: flex;
  position: fixed;
  flex: 1;
  flex-wrap: wrap;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 44px;

}
.div1 span{
  flex: 1;
  height: 44px;
}
.div1 h1{
  margin-top: -5px;
  color: dimgray;
  height: 10px;
  font-size: 5px;
}
.div1 img{
   width: 40px;
  height: 30px;
}
#goods{
  height: 25px;
  background: darkorange;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
  font-size: 10px;
  color: white;
  margin-top: 7px;

  padding-top: 5px;
}
#pay{
  height: 25px;
  background: red;
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
  font-size: 10px;
  color: white;
  margin-top: 7px;

  padding-top: 5px;
}
</style>