<template>
 <div>
   <HomeTopNar class="HomeTopNar" :tops="top">
     <span slot="back" @click="backClick"><img src="./commonimg/返回(3).png" ></span>
   </HomeTopNar>
   <span v-if="news===null" class="divspan">
     <h1>没有消息噢~</h1>
   </span>
 </div>
</template>

<script>
import HomeTopNar from "../home/homechild/HomeTopNar";

export default {
  name: "Usernews",
  data(){
    return{
      top:"个人消息",
      news:null

    }
  },
  methods:{
    backClick() {
      this.$router.go(-1)
    }
  },
  components: {HomeTopNar}
}

</script>

<style scoped>
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
.divspan{
  text-align: center;
}
div span h1{
  color: dimgray;
  font-size: 10px;
}
</style>