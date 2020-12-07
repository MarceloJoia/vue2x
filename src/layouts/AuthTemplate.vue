<template>
  <div>
    <!-- Page Content -->
    <div class="container container-body">
      <router-view></router-view>
    </div>
    <!-- Page Content -->
  </div>
</template>

<script>
  import "bootstrap";
  import "bootstrap/dist/css/bootstrap.min.css";
  //import LogoComponent from "./_partials/logo";
  
  export default {
    /* components: {
      LogoComponent
    }, */
  };
</script>

<style scoped>
@import url("../assets/css/auth.css");
@import url("../assets/css/reset.css");
</style>
