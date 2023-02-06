<template>
  <Navbar></Navbar>
  <!-- <div class="container-fluid position-relative"> -->
    <!-- <ToastMessages></ToastMessages> -->
  <!-- </div> -->
  <router-view />
  <Footer></Footer>
</template>

<style lang="scss"></style>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import emitter from "@/methods/emitter";
// import ToastMessages from "@/components/ToastMessages.vue";

export default {
  components: {
    Navbar,
    // ToastMessages,
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
