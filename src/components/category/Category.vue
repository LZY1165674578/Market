<template>
  <div>
     <router-view></router-view>
     <HomeTopNar class="HomeTop" :tops="top" path="/Usernews"></HomeTopNar>
     <Cateitems :cateitems="cateitems" :categoods="goods.phonegoods"></Cateitems>

  </div>
</template>

<script>
import HomeTopNar from "../home/homechild/HomeTopNar";
import Cateitems from "../category/categorychild/Cateitems";


export default {
  name: "Category",
  data(){
    return{
      top:"分类",
      cateitems:["推荐","小米手机",'红米手机','游戏','智能','电脑办公','大家电','小家电','家具','户外','百货','儿童','出现'],
      goods: {
        phonegoods: {
          "xiaomi10": {
            price: 1999,
            img: require('./categoryimg/Rotimg/OIP-C (1).jpg'),
            name: "小米10"
          },
          "redmi9": {
            price: 999,
            img: require('./categoryimg/Rotimg/sj1 (1).jpg'),
            name: "红米9"
          },
          "K30": {
            price: 999,
            img: require('./categoryimg/Rotimg/001.jpg'),
            name: "k30纪念版"
          },
          "redmi10x": {
            price: 999,
            img: require('./categoryimg/Rotimg/OIP-C (3).jpg'),
            name: "红米10x"
          },
          "xiaomi9": {
            price: 999,
            img: require('./categoryimg/Rotimg/OIP-C (4).jpg'),
            name: "小米9"
          },
          "redmik40": {
            price: 999,
            img: require('./categoryimg/Rotimg/sj1 (1).jpg'),
            name: "红米k40"
          },
          "xiaomids": {
            price: 4999,
            img: require('./categoryimg/Rotimg/OIP.jpg'),
            name: "小米电视1"
          },
          "xiaomidians": {
            price: 1599,
            img: require('./categoryimg/Rotimg/056 (1).jpg'),
            name: "小米电视4A"
          },
          "K302": {
            price: 2399,
            img: require('./categoryimg/Rotimg/Newpro.png'),
            name: "小米电视3"
          },
          "redmi10x2": {
            price: 999,
            img: require('./categoryimg/Rotimg/056 (3).jpg'),
            name: "小米电视6"
          },
          "xiaomi92": {
            price: 1999,
            img: require('./categoryimg/Rotimg/056 (2).jpg'),
            name: "红米电视4A"
          },
          "redmik402": {
            price: 2999,
            img: require('./categoryimg/Rotimg/Newpro.png'),
            name: "红米电视k4"
          },
        },

      }

    }
  },
  components: {
    HomeTopNar,
    Cateitems,

  }
}
</script>

<style scoped>
.HomeTop{
  width: 100%;
  height: 34px;
  position: sticky;
  top: 0px;
  z-index: 3;
}
</style>