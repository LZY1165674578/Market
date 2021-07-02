<template>
   <div>
     <HomeTopNar :tops="top" path="/Usernews" class="protops"></HomeTopNar>
     <User></User>
     <Usercategory :cateimg="Usercatetopimg" :titie="['付款','待收货','订单','评价']" class="Usercategory"></Usercategory>
     <about-user :date="['个人资料','收货地址','用户资料']"></about-user>
   </div>
</template>

<script>
import HomeTopNar from "../home/homechild/HomeTopNar";
import User from "../proflie/profilechild/User";
import Usercategory from "../../components/home/homechild/Homecategory";
import aboutUser from "../proflie/profilechild/aboutUser";

export default {
  name: "profile",
  data(){
    return{
      top:'个人中心',
      Usercatetopimg:[
           require("../proflie/Proimg/付款.png"),
           require("../proflie/Proimg/待收货.png"),
           require("../proflie/Proimg/订单.png"),
           require("../proflie/Proimg/评价.png")
      ]
    }
  },
  components: {aboutUser, User, HomeTopNar,Usercategory}
}
</script>

<style scoped>

.Usercategory{
  margin-left: 8px;
  width: 95%;
  background: white;
  box-shadow: 0px 0.1px 0px 0px dimgray;
  border-radius: 10px;
  margin-top: -30px;
}
.protops{
  width: 100%;
  height: 34px;
  position: sticky;
  top: 0;
  z-index: 3;
}
</style>