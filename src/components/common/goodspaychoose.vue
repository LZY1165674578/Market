<template>
  <div>
    <div class="div1" >
      <div class="div2">
        <div class="div3">
          <img src="./commonimg/手机(1).png">
        </div>
        <h1>￥{{pushincar.price}}</h1>
        <h2> {{pushincar.name}} 6G+128G</h2>
        <span @click="isshow"> X </span>
      </div>
    </div>
    <goodschoose :items="chooseitem" class="goods" @indexof="indexof"></goodschoose>
  </div>
</template>

<script>
import goodschoose from "../common/goodschoose";
export default {
  name: "goodspaychoose",
  components: {goodschoose},
  data(){
    return{
       index:0
    }
  },
  props:{
    pushincar:{
      type:Object,
      default(){
        return{}
      },
    },
    chooseitem:Array

  },
  methods:{
    isshow(){
      this.$emit("ifshow2",this.index)

    },
    indexof(index){
      this.index =index
    }

  }
}
</script>

<style scoped>
.div1{
  position: absolute;
  z-index: 3;
  right: 0px;
  width: 100%;
  height: 200px;
  border-radius: 40px;
  background: white;
  bottom: 240px;
}
.div2{
  width: 100%;
  height: 80px;
  margin-left: 20px;
  box-shadow: 0px 0.1px 0px 0px dimgray;


}

.div3{
  height: 80px;
  width: 80px;

  float: left;

}
.div3 img{
  height: 60px;
  width: 60px;
}
.div2 h1{
  color: red;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 0px;

}
.div2 h2 {
  color: black;
  font-size: 10px;


}
span{
  position: absolute;
  border-radius: 50%;
  background: rgba(45,20,28,0.25);
  right: 20px;
  top: 20px;
  width: 20px;
  height: 15px;
  text-align: center;
  padding-bottom: 5px;
}
.goods{
  position: absolute;
  z-index: 3;
  bottom: 285px;
  left: 40px;
}
</style>