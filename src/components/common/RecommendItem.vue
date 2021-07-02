<template>
  <div class="Recom" >
      <span  v-for="(item,index) in itemss" :key="item" @click="itemclick1(index)" :class="{active:index === currentindex}">{{item}}</span>
  </div>
</template>

<script>
export default {
  name: "RecommendItem",
  props: {
    itemss:{
      type:Array,
      default(){
        return []
      }
    } ,
  },
  data(){
    return{
      currentindex:0
   }
  },


  methods:{
    itemclick1(index){
      this.currentindex =index
      this.$emit("itemclicks",index)
    }
  },

}

</script>

<style scoped>
.Recom{
  display: flex;
  width: 100%;
  height: 40px;
  background: white;
  margin-top: 20px;
  border-radius: 4px;
}
span{
  flex: 1;
  text-align: center;
  color:rgba(60,63,65,0.47) ;
  padding-top: 10px;

}
.active{
  color: red;
}
</style>