<template>
 <div class="TopNar">
   <slot name="back"></slot>
   <div>{{tops}}</div>
   <div class="divimg">
     <span @click="itemclick"><img src="../../common/commonimg/消息(2).png"  ></span>
   </div>
 </div>
</template>

<script>
export default {
  name: "HomeTopNar",
   props:{
    tops:String,
     path:String
   },
  methods:{
    itemclick(){
      // this.isactive=false
      this.$router.push(this.path)
    }
  }

}

</script>

<style scoped>
.TopNar{
  height: 40px;
  width: 100%;
  background: lightsalmon ;
  color: white;
  text-align: center;
  padding-top: 12px;

}
.divimg{
  float: right;
  margin-top: -20px;
  margin-right: 10px;


}
.divimg span{
  height: 30px;
  width: 30px;

}
.divimg span img{
  width: 25px;
  height: 25px;
  color: white;
}




</style>