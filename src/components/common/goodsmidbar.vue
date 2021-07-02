<template>
  <div>
     <div class="div1" @click="itemchoose2">
       分期: {{Upaychoose}}
     </div>
     <div class="div2" @click="itemchoose">
       已选: {{Uchoose}}
     </div>
     <div class="div3">
       送至:
     </div>

  </div>
</template>

<script>
export default {
  name: "goodsmidbar",
  data(){
    return{

    }
  },
  props:{
    Uchoose:String,
    Upaychoose:String
  },
  methods:{
    itemchoose(){
      this.$emit("isshow2")
    },
    itemchoose2(){
      this.$emit("isshow3")
    }
  }
}
</script>

<style scoped>
.div1{
  width: 100%;
  height: 30px;
  margin-bottom: 15px;
  background: white;
  box-shadow: 0px 0px 0px 0.2px dimgray;
  padding-left: 10px;
  padding-top: 10px;
}
.div2{
  width: 100%;
  height: 30px;
  background: white;
  box-shadow: 0px 0px 0px 0.2px dimgray;
  padding-top: 10px;
  padding-left: 10px;
}
.div3{
  width: 100%;
  height: 30px;
  background: white;
  box-shadow: 0px 0px 0px 0.2px dimgray;
  padding-top: 10px;
  padding-left: 10px;
}
</style>