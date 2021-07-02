<template>
  <div class="Home">
    <router-view></router-view>
    <HomeTopNar class="HomeTop" :tops="top" path="/Usernews"></HomeTopNar>
    <Rotating  class="Rot" :imgs="imgs"></Rotating>
    <Homecategory class="Homecatetop" :cateimg="Homecatetopimg" :titie="['手机','新品','分类','更多']"></Homecategory>
    <Homecategory class="Homecatebot" :cateimg="Homecatebotimg" :titie="['秒杀','智能','电视','我的']"></Homecategory>
    <div class="Homenewprice">
       <Rotating class="Newimg" :imgs="Homenewimgs"></Rotating>
       <Homenewprice :imgpath="Homenewpriceimg"></Homenewprice>
    </div>
    <Recommend class="Recommmends" ></Recommend>
    <RecommendItem :itemss="['新品手机','新品电视']" @itemclicks ='itemclicks'></RecommendItem>
    <Recommenditemgoods :goods="cunrrentitem"  ></Recommenditemgoods>
    <Recommend class="Recommmends" ></Recommend>

  </div>
</template>
<script>
import HomeTopNar from './homechild/HomeTopNar';
import Rotating from "./homechild/Rotating";
import Homecategory from "./homechild/Homecategory";
import Homenewprice from "./homechild/Homenewprice";
import Recommend from "../common/Recommend"
import RecommendItem from "../common/RecommendItem";
import Recommenditemgoods from "./homechild/Recommenditemgoods";


export default {
  name: "Home",
  components:{
    RecommendItem,
    Recommend,
    Homenewprice,
    HomeTopNar,
    Rotating,
    Homecategory,
    Recommenditemgoods
  },

  data(){
    return{
      //没数据给我请求 只能用本地的模拟数据
      top:'首页',
      currtype:"phonegoods",
      imgs: [
        require('./Homeimg/Rotimg/001.jpg'),
        require('./Homeimg/Rotimg/Newpro.png'),
        require("./Homeimg/Rotimg/OIP.jpg"),
        require("./Homeimg/Rotimg/056 (1).jpg"),
        require("./Homeimg/Rotimg/056 (2).jpg")
      ],
      Homecatetopimg:[
        require ('./Homeimg/Homecateimg/手机.png'),
        require ('./Homeimg/Homecateimg/新品.png'),
        require ('./Homeimg/Homecateimg/分类.png'),
        require ('./Homeimg/Homecateimg/更多.png'),

      ],
      Homecatebotimg:[
        require ('./Homeimg/Homecateimg/秒杀.png'),
        require ('./Homeimg/Homecateimg/category_active.svg'),
        require ('./Homeimg/Homecateimg/电视.png'),
        require ('./Homeimg/Homecateimg/我的.png'),
      ],
      Homenewimgs:[
        require('./Homeimg/Rotimg/OIP-C (1).jpg'),
        require('./Homeimg/Rotimg/OIP-C (3).jpg'),

      ],
      Homenewpriceimg:[
        require('./Homeimg/Rotimg/sj1 (1).jpg'),
        require('./Homeimg/Rotimg/sj1 (2).jpg'),
        require('./Homeimg/Rotimg/sj1 (3).jpg'),
      ],
      goods: {
        phonegoods: {
          "xiaomi10": {
            price: 5999,
            img: require('./Homeimg/Rotimg/OIP-C (1).jpg'),
            name: "小米10"
          },
          "redmi9": {
            price: 1299,
            img: require('./Homeimg/Rotimg/sj1 (1).jpg'),
            name: "红米9"
          },
          "K30": {
            price: 2999,
            img: require('./Homeimg/Rotimg/001.jpg'),
            name: "k30纪念版"
          },
          "redmi10x": {
            price: 1999,
            img: require('./Homeimg/Rotimg/OIP-C (3).jpg'),
            name: "红米10x"
          },
          "xiaomi9": {
            price: 999,
            img: require('./Homeimg/Rotimg/OIP-C (4).jpg'),
            name: "小米9"
          },
          "redmik40": {
            price: 1599,
            img: require('./Homeimg/Rotimg/sj1 (1).jpg'),
            name: "红米k40"
          },
        },
        TVgoods:{
          "xiaomids": {
            price: 4999,
            img: require('./Homeimg/Rotimg/OIP.jpg'),
            name: "小米电视1"
          },
          "xiaomidians": {
            price: 1599,
            img: require('./Homeimg/Rotimg/056 (1).jpg'),
            name: "小米电视4A"
          },
          "K30": {
            price: 2399,
            img: require('./Homeimg/Rotimg/Newpro.png'),
            name: "小米电视3"
          },
          "redmi10x": {
            price: 999,
            img: require('./Homeimg/Rotimg/056 (3).jpg'),
            name: "小米电视6"
          },
          "xiaomi9": {
            price: 1999,
            img: require('./Homeimg/Rotimg/056 (2).jpg'),
            name: "红米电视4A"
          },
          "redmik40": {
            price: 2999,
            img: require('./Homeimg/Rotimg/Newpro.png'),
            name: "红米电视k4"
          },
        },
      }
      }

    },

  computed:{
    cunrrentitem(){
      return this.goods[this.currtype]
    }
  },
  methods:{
    itemclicks(index){
      if (index === 1) {
        this.currtype = "TVgoods";
      }else {
        this.currtype ="phonegoods"
      }
    }
  }
}
</script>

<style scoped>

.HomeTop{
  width: 100%;
  height: 34px;
  position: sticky;
  top: 0;
  z-index: 3;
}
.Rot{
  width: 100%;
  height: 200px;
}

.Homecatetop{
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  background: #ffffff;

}
.Homecatebot{
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  margin-top: 0;
  background: #ffffff;
  margin-bottom: 20px;
}
.Newimg{
  width: 48%;
  height: 120px;
}
.Newimg img{
  border-radius: 60px;
}
.Homenewprice{
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;

}



</style>