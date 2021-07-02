<template>
 <div class="imgsss">
    <img v-for="(item,index) in imgpath" :src="item" alt="" :key="index">
 </div>
</template>

<script>
export default {
  name: "Homenewprice",
  props:{
    imgpath:Array
  }
}
</script>

<style scoped>
 .imgsss{
   width: 48%;
   height: 200px;
   display: flex;
   flex-wrap: wrap;
 }
 .imgsss img{
   width: 100%;
   height: 30%;
 }
</style>