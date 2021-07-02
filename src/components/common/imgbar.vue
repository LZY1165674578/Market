<template>
  <div class="img" @click="itemclick">
     <div ><slot name="num" class="span1"></slot></div>
    <div v-if="isactive" class="img2"><slot name="icon"></slot></div>
    <div v-else ><slot name="icon1" class="img2"></slot ></div>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: "imgbar",
  props:{
    path: String,
  },
  data(){
    return{
      //isactive:true

    }
  },
  methods:{
    itemclick(){
     // this.isactive=false
      this.$router.replace(this.path)
    }

  },
  computed:{
    isactive(){
        return this.$route.path.indexOf(this.path)
    }
  }
}
</script>

<style scoped>
.img{
  flex: 1;
  height: 49px;
  flex-wrap: wrap;

}
.img img{
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: -2px;

}
img2{

}
.span1{
  position: absolute;
  right: 0;
  bottom: 0;
}

</style>