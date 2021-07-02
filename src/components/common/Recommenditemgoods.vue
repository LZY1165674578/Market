<template>
  <div class="items">
    <ul class="itemsul">
      <li class="goods"  v-for="(item,index) in goods" :key="index" @click="ingoods(index)">
        <img :src="item.img">
        <span>{{item.name}}:</span>
        <span class="text">￥{{item.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Recommenditemgoods",
  props:{
     goods:{
         type:Object,
           default(){
           return{}
           }
         }
     },
  methods:{
    ingoods(index){
      this.$router.push( '/goodscontext/'+this.goods[index].name+"/"+this.goods[index].price)
    }
  }
  }

</script>

<style scoped>
.items{
  width: 100%;
  margin-top: -10px;
  background: white;

}
.itemsul{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-left: 0px;
}
li{
  list-style: none;
  width: 45%;
  height: 180px;
  background: white;
  border-radius: 10px;
  margin-top: 10px;
  box-shadow: 0.1px 0.1px 0px 0px dimgray;

}
li img{
  width: 100%;
  height: 150px;
  border-radius: 10px;

}
span{
  text-align: center;
  margin: 0 auto;
  padding-left: 5px;
  font-size: 14px;
}
.text{
  float: right;
  color: darkorange;

}
</style>