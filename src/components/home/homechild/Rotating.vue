<template>
  <div class="Roting">
    <img v-for="(item,index) in imgs" :key="index" :src="item" alt="" v-show="n === index" @click="tophoneplace" >
     <ul class="dots" slot="dot" >
      <li v-for="index in imgs.length" :key="index" @click="changeN(index)" :class="{isactive:n===index-1}"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "Rotating",
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    },
  },
  data(){
    return{
          n:0,
          sss:null
      }
    },
    methods:{
      imgrun(){
        setInterval(()=>{
          this.n++
          if (this.n>this.imgs.length-1)
          {
            this.n =0
          }
        },5000)
      },
      changeN(index){

        this.n=index-1;
      },
      tophoneplace(){
        this.$router.push("/Phoneplace")
      }

    },
  mounted() {
    this.imgrun()
    }
  }
</script>

<style scoped>

img{
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
.dots{
  height: 20px;
  width: 100px;
  margin-left:30%;
  position: absolute;
  z-index: 2;
  margin-top: -30px
;
}
.dots li{
  float: left;
  width: 10px;
  height: 20px;
  z-index: 2;
  margin-left: 3px;
  padding: 0px;




}
.isactive{
  color: #ffffff;
}
</style>