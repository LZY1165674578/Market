<template>
    <div id="app">

      <router-view v-if="isRouterAlive"></router-view>
      <div class="div1ss" @click="back" title="返回上一级">
        <img src="../src/components/common/commonimg/返回(6).png">
      </div>
      <Mainbar class="navbar">
          <imgbar slot="home"  path="/home">
            <img slot="icon" src="./assets/img/home.svg">
            <img slot="icon1" src="./assets/img/home_active.svg">
            <div slot="text">首页</div>
          </imgbar>
          <imgbar slot="ceta"  path="/Category">
              <img slot="icon" src="./assets/img/category.svg">
              <img slot="icon1" src="./assets/img/category_active.svg">
            <div slot="text"> 分类</div>
          </imgbar>
          <imgbar  slot="shop" path="/Shopcar">
            <span class="span5" slot="num" v-if="this.$store.state.goods.length>0">{{this.$store.state.goods.length}}</span>
            <span class="span6" slot="num" v-else>{{this.$store.state.goods.length}}</span>
            <img slot="icon" src="./assets/img/shopcart.svg" class="carimg">
            <img  slot="icon1" src="./assets/img/shopcart_active.svg" class="carimg">
            <div slot="text" > 购物车</div>
          </imgbar >
          <imgbar slot="pro" path="/Profile" >
            <img slot="icon"   src="./assets/img/profile.svg">
            <img slot="icon1"  src="./assets/img/profile_active.svg">
            <div slot="text"> 我的</div>
          </imgbar>
      </Mainbar>
    </div>
</template>

<script>
import  Mainbar from './components/common/MainNavigationbar'
import imgbar from "@/components/common/imgbar"


export default {
  name: 'App',
  provide() { // 注册一个方法
    return {
      reload: this.reload
    }
  },
  data() {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    back(){
      this.$router.go(-1)
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  components: {
    Mainbar,
    imgbar,

  }
}
</script>

<style>
body{
  background: #eef0f4;
  padding: 0px;
  margin: 0px;
}
.navbar{
  width: 100%;
  height: 47px;
  background: lightsalmon;
  display: flex;
  position: fixed;
  flex: 1;
  flex-wrap: wrap;
  text-align: center;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0 -1px 1px dimgray;

}
.span5{
  background: red;
  float: right;
  border-radius: 7.5px;
  font-size: 1px;
  color: white;
  width: 15px;
  height: 15px;
  text-align: center;
  margin-right: 20px;

}
.span6{
  background: lightsalmon;
  float: right;
  border-radius: 7.5px;
  font-size: 1px;
  color: lightsalmon;
  width: 15px;
  height: 15px;
  text-align: center;
  margin-right: 20px;
}
.carimg {
  margin-left: 20px;
}
.div1ss{
  background: lightsalmon;
  height: 30px;
  width: 37px;
  position:  fixed;
  right: 10px;
  bottom: 80px;
  border-radius: 50%;
  text-align: center;
  padding-top: 5px;
}
.div1ss img{
  width: 25px;
  height: 25px;
}
</style>
