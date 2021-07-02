<template>
  <div class="Hrs">
    <hr class="hr">
    <h1>为你推荐</h1>
    <hr class="hr">
  </div>
</template>

<script>
export default {
  name: "Recommend"
}
</script>

<style scoped>
.Hrs{
  display: flex;
  width: 100%;
  height: 40px;
  align-content: center;
  margin:0px auto;
  margin-top: 15px;

;
}
.hr{
  margin-top: 20px;
  width: 30%;
  height: 0.1px;
  background: rgba(60,63,65,0.01);
}
h1{
  font-size: 15px;
  color: rgba(60,63,65,0.47);
}
</style>