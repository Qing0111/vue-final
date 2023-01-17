<template>
  
  <div class="home">
  </div>
</template>

<script>

export default {
  name: "HomeView",
  components: {

  },
  created() {
    console.log(process.env.VUE_APP_API, process.env.VUE_APP_PATH);
  },
};
</script>
