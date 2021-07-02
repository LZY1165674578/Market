<template>
<div>
   <HomeTopNar :tops="top" class="HomeTopNar">
     <span slot="back" @click="backClick"><img src="./commonimg/返回(3).png" ></span>
   </HomeTopNar>
   <goodscontextitems :itemss="goods" >
   </goodscontextitems>
   <goodsmidbar @isshow2="isshow2" @isshow3="isshow3" :uchoose="chooseitem[index]" :upaychoose="choosepayitem[index1]"></goodsmidbar>
   <goodspaychoose :pushincar="goods" v-if="show2" @ifshow2="ifshow2" :chooseitem="chooseitem"></goodspaychoose>
   <goodspaychoose :pushincar="goods" v-if="show3" @ifshow2="ifshow3" :chooseitem="choosepayitem"></goodspaychoose>
   <goodsincar :pushincar="goods" v-if="show" @ifshow ="ifshow"></goodsincar>

   <goodscontextbar @isshows="isshow" path="/Shopcar"></goodscontextbar>
    <ul>
      <li><Recommend></Recommend></li>
    </ul>
</div>
</template>

<script>
import HomeTopNar from "../home/homechild/HomeTopNar";
import goodscontextitems from "../common/goodscontextitems";
import goodscontextbar from "../common/goodscontextbar";
import goodsincar from "../common/goodsincar";
import goodsmidbar from "../common/goodsmidbar";
import goodspaychoose from "../common/goodspaychoose";
import Recommend from "../common/Recommend";


export default {
  name: "goodscontext",
  data(){
    return{
      top:'商品详情',
      goods:{
        name:null,
        price:null,
      },
      show:false,
      show2:false,
      show3:false,
      chooseitem:["8G+128G"],
      choosepayitem:['449*6期'],
      index:0,
      index1:0,
      }

  },

  created() {
    this.goods.name =this.$route.params.name
    this.goods.price = this.$route.params.price

  },
  methods:{
    backClick() {
      this.$router.go(-1)
    },
    isshow(){
      this.show = true
      console.log(this.show)

    },
    isshow2(){
      this.chooseitem=["8G+128G","8G+256G","8G+512G"]
      this.show2 = true
    },
    isshow3(){
      this.choosepayitem=["449*6期","299*12期","149*24期"]
      this.show3 =true
    },
    ifshow(){

      this.show =false
    },
    ifshow2(index){
      this.index =index
      console.log(this.index)
      this.show3 =false
      this.show2 =false
    },
    ifshow3(index){
      this.index1 =index
      console.log(this.index)
      this.show3 =false
      this.show2 =false
    }
  },
  components: {goodspaychoose, goodsmidbar, goodsincar, goodscontextbar, goodscontextitems, HomeTopNar,Recommend}
}
</script>

<style scoped>
.HomeTopNar{
  width: 100%;
  height: 34px;
  position: sticky;
  top: 0;
  z-index: 3;
}
.HomeTopNar span{
  float: left;
  position: relative;
  left: 15px;
  top:5px;


}
.HomeTopNar img{
  width: 15px;
  height: 15px;

}
ul{
  height: 100px;
  padding: 0;
}
li{
  list-style: none;
}
</style>