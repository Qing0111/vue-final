<template>
  <div class="toast-container position-absolute pe-3 top-0 end-0 mt-3">
    <Toast v-for="(msg, key) in messages" :key="key" :msg="msg"></Toast>
  </div>
</template>

<script>
import Toast from "@/components/Toast.vue";
import { mapState, mapActions } from "pinia";
import statusStore from "@/stores/statusStore";

export default {
  components: {
    Toast,
  },
  computed: {
    ...mapState(statusStore, ["messages"]),
  },
  methods: {
    ...mapActions(statusStore, ["pushMessage"]),
  },
  // data() {
  //   return {
  //     messages: [],
  //   };
  // },
  // inject: ["emitter"],
  // mounted() {
  //   this.emitter.on("push-message", (message) => {
  //     const { style = "success", title, content } = message;
  //     this.messages.push({ style, title, content });
  //   });
  // },
};
</script>
