<template>
  <div>
   <HomeTopNar :tops="top" path="/Usernews"></HomeTopNar>
    <img src="../common/commonimg/手机会场.jpg" >
    <subpricephone :subgoods="subphone"></subpricephone>
 </div>
</template>

<script>

import HomeTopNar from "../../components/home/homechild/HomeTopNar";
import Subpricephone from "../../components/common/Subpricephone";
export default {
  name: "Phoneplace",
  data(){
    return{
      top:"手机会场",
      subphone: {
        "Note10": {
          name: "Note 10 pro",
          context:"天玑1100|67W闪充120Hz变速金刚屏",
          price: 1599,
        },
        "redmi k40":{
          name:"Redmi k40",
          context:"天玑1100|67W闪充120Hz变速金刚屏",
          price: 2499,
        },
        "xioami 11":{
          name:"xioami 11",
          context:"天玑1100|67W闪充120Hz变速金刚屏",
          price: 3999,
        }

      },

    }
  },
  components: {Subpricephone, HomeTopNar},
}
</script>

<style scoped>
img{
  width: 100%;
  height: 200px;
  margin-bottom: -4px;
}
</style>