<template>
  <div class="catedivitem">
    <div class="catedivitem4">
      <ul class="cateulitem">
        <li class="cateliitem"  v-for="(item,index) in cateitems" :key="index" :class="{active:index===currentindex}"
        @click="itemcact(index)">{{item}}</li>
       </ul>
     </div>
    <div class="catedivitem2">
       <ul class="cateulitem2">
         <li class="cateliitem2" v-for="(item,index) in categoods" :key="index" @click="tochoose(index)">
           <img :src="item.img">
           <span>{{item.name}}</span>
         </li>
       </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cateitems",
  props:{
    cateitems:{
      type:Array,
      default() {
        return []
      }
    },
    categoods:{
      type:Object,
      default() {
        return []
      }
    }
  },
  data(){
    return{
      currentindex:0
    }
  },
  methods:{
    itemcact(index){
      this.currentindex =index
    },
    tochoose(index){
      this.$router.push( '/goodscontext/'+this.categoods[index].name+"/"+this.categoods[index].price)
    }
  }

}
</script>

<style scoped>
.catedivitem{
  display: flex;
}
.catedivitem4{
  width: 30%;
  position: sticky;
  top: 0;
}
.cateulitem{

  width: 100%;
  padding: 0;
  margin: 0;
  box-shadow: 0px 0px 0px 0px dimgray;
  position: sticky;
  top: 44px

}
.cateliitem{
  list-style: none;
  padding-top: 10px;
  width: 100%;
  background: white;
  text-align: center;
  height: 37px;

}
.catedivitem2{
  width: 70%;
  height: 2000px;
  background: white;
}
.cateulitem2{
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
}
.cateliitem2{
  list-style: none;
  width: 45%;
  height: 130px;
  text-align: center;

}
.cateliitem2 img{
  width: 80%;
  height: 65px;
  margin-left: 10px;
}
.active{
  color: lightsalmon;
}
</style>