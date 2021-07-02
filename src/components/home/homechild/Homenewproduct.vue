<template>
 <div class="newpro">
   <slot name="newimg"></slot>
   <span class="newprospan" >立刻预约</span>
 </div>
</template>

<script>
export default {
  name: "Homenewproduct"
}
</script>

<style scoped>
.newpro{
 width: 100%;
  height: 30px;

  margin-top: 40px;
  border-radius: 7px;
}
.newpro img{
  background-size: cover ;
  background: no-repeat;
}
.newprospan{
  background: aliceblue;
  float: right;
  height: 70%;
  width: 16%;
  border-radius: 7px;
  font-size: 5px;
  text-align: center;
  margin-top: 5px;
  margin-right: 4px;
  padding-top: 3px;
}

</style>