<template>
  <div>
    <ul>
      <li v-for="(item,index) in date" :key="item" :class="{active:index === currenindex}">
        {{item}}
        <span> <img src="../profileimg/右箭头.png"> </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "aboutUser",
  data(){
    return{
      currenindex:0
    }
  },
  props:{
    date:Array
  }
}
</script>

<style scoped>
div ul{
  padding-left: 0;
  width: 100%;
}
li{
  padding-top: 8px;
  padding-left: 5px;
  list-style: none;
  width: 100%;
  background: white;
  height: 35px;
  box-shadow: 0px 0px 0px 0.2px dimgray;
  color: dimgray;

}
span{
  float: right;
  margin-top: 2px;
}
img{
  width: 20px;
  height: 20px;
  color: rgba(163,165,166,0.47);
}
.active{
  margin-bottom: 10px;
}
</style>