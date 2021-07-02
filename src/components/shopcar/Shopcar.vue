<template>
  <div>
    <HomeTopNar :tops="top" path="/Usernews" class="HomeTop"></HomeTopNar>
    <shopcaritem></shopcaritem>
    <Recommend></Recommend>
    <RecommendItem  :itemss="['猜你喜欢','推荐']"></RecommendItem>
    <Recommenditemgoods :goods="phonegoods"></Recommenditemgoods>
  </div>

</template>

<script>
import HomeTopNar from "../home/homechild/HomeTopNar";
import Recommend from "../common/Recommend";
import RecommendItem from "../common/RecommendItem";
import Recommenditemgoods from "../common/Recommenditemgoods";
import shopcaritem from "../shopcar/shopcarchild/shopcaritem";


export default {
  name: "Shopcar",
  data(){
    return{
      top:'购物车',
      phonegoods: {
        "xiaomi10": {
          price: 1999,
          img: require('./shopcarimg/Rotimg/OIP-C (1).jpg'),
          name: "小米10"
        },
        "redmi9": {
          price: 999,
          img: require('./shopcarimg/Rotimg/sj1 (1).jpg'),
          name: "红米9"
        },
        "K30": {
          price: 999,
          img: require('./shopcarimg/Rotimg/001.jpg'),
          name: "k30纪念版"
        },
        "redmi10x": {
          price: 999,
          img: require('./shopcarimg/Rotimg/OIP-C (3).jpg'),
          name: "红米10x"
        },
        "xiaomi9": {
          price: 999,
          img: require('./shopcarimg/Rotimg/OIP-C (4).jpg'),
          name: "小米9"
        },
        "redmik40": {
          price: 999,
          img: require('./shopcarimg/Rotimg/sj1 (1).jpg'),
          name: "红米k40"
        },
      },
    }
  },
  components: { shopcaritem, Recommenditemgoods, RecommendItem, Recommend, HomeTopNar}
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
</style>