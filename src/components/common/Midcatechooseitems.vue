<template>
<div>
  <div class="div1" v-for="(item,index) in items" :key="index" @click="incar(item)">
    <img src="../common/commonimg/手机(1).png" class="img2">
    <h1>{{item.name}}</h1>
    <h2> {{item.text}}</h2>
    <h3>{{item.price}}</h3>
    <span>入车吧</span>
  </div>
</div>
</template>

<script>
export default {
  name: "Midcatechooseitems",
  props:{
    items:{
      type:Array,
      default(){
        return {}
      }
    }
  },
  methods: {
    incar(item){
      this.$store.commit("setgoodsadd",item)
    }
  }
}
</script>

<style scoped>
.div1{
  margin: 0 auto;
  width: 95%;
  height: 80px;
  background: white;
  position: relative;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;

}
.img2{
  float: left;
  width: 100px;
  height: 80px;
}
h1{
  font-size: 15px;
  font-weight: bold;
  margin-top: 0px;
}
h2{
  font-size: 3px;
  color: dimgray;
}
h3{
  font-size: 10px;
  color: red;
}
span{
  font-size: 10px;
  position: absolute;
  bottom: 15px;
  right: 20px;
  background: darkorange;
  border-radius: 10px;
  color: white;
  font-weight: bold;
  width: 60px;
  text-align: center;
}
</style>