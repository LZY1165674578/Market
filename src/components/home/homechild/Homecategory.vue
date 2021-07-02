<template>
 <div class="phonecate">
    <div class="item2" @click="itemevent"  >
      <div v-for="(item3,index) in cateimg" :key="index" class="itemcate" @click="tocatefun">
        <img :src="item3" alt="">
      <h1 >{{titie[index]}}</h1>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  name: "Homecategory",
  props:{
    path: String,
    cateimg: {
      type: Array,
      default() {
        return [];
      }
    },
    titie: Array
  },
  methods:{
    itemevent(){
      this.$router.replace(this.path)
    },
    tocatefun(){
      this.$router.push("/Midcatechoose")
    }
  }

}
</script>

<style scoped>
.phonecate{
  width: 100%;
  height: 60px;
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
}
.item2{
  margin-top: 5px;
  display: flex;
  height: 80%;

  width: 100%;
  text-align: center;
}
.itemcate{
  flex: 1;
  height: 60px;
  width: 25%;
}
.itemcate img{
  width: 35%;
  height: 46%;
}
.itemcate h1{
  font-size: 14px;
  margin-top: 0px;
}


</style>