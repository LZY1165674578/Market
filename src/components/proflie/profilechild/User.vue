<template>
  <div>
    <div class="User">
       <img src="../profileimg/个人中心.png">
       <h1>头像</h1>
     </div>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>
.User{
  width: 100%;
  height: 150px;
  text-align: center;
  background: coral;
  padding-top: 50px;
}
.User img{
  width: 45px;
  height: 45px;
}
.User h1{
  color: dimgray;
  font-size: 15px;
}

</style>