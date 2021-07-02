<template>
  <div class="navbar">
    <slot name="home"></slot>
    <slot name="ceta"></slot>
    <slot name="shop"></slot>
    <slot name="pro"></slot>
  </div>
</template>
<script>


export default {
  name: "MainNavigation bar"
}
</script>

<style scoped>
  .navbar{

  }
</style>