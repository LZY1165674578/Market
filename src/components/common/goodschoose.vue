<template>
  <div >
    <div class="div2">{{ top }}</div>
    <ul class="ul1">
      <li v-for="(item,index) in items" :key="index" :class="{active:index === currentindex}" @click="itemchoose(index)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "goodschoose",
  data(){
  return{
    currentindex : 0,
    choose:""
    }
  },

  props:{
     items:Array,
     top:String
  },
  methods:{
    itemchoose(index){
      this.currentindex = index
      this.$emit("indexof",index)
    }
  }
}
</script>

<style scoped>

.div2{
  width: 100%;
  height: 20px;
  font-size: 12px;
  margin-left: 15px;
  margin-top: 20px;
}
.ul1{
  list-style: none;
  margin-top: 0;
  display: flex;
  padding-left: 0;
}
.ul1 li{
  margin-left: 10px;
  height: 18px;
  width: 60px;
  font-size: 10px;
 
  border-radius: 10px;
  text-align: center;
  color: rgba(34,30,19,0.8);
}
.active{
  background: lightsalmon;
}
</style>