<template>
  <Navbar></Navbar>
  <router-view />
  <Footer></Footer>
</template>

<style lang="scss"></style>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import emitter from "@/methods/emitter";

export default {
  components: {
    Navbar,
    Footer,
  },
  provide() {
    return {
      emitter,
    };
  },
  created() {},
};
</script>
