import { defineStore } from "pinia";
import "sweetalert2/dist/sweetalert2.min.css";
import Swal from "sweetalert2/dist/sweetalert2.js";

export default defineStore("statusStore", {
  state: () => {
    return {
      isLoading: false,
      cartLoading: "",
      messages: [],
    };
  },
  actions: {
    pushMessage(res = true, data) {
      const { title = "更新", content, style = "yellow" } = data;
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        showCloseButton: true,
        timer: 1600,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });

      if (res) {
        this.messages.push({ style, title: `${title}成功`, content });
        Toast.fire({
          icon: "success",
          title: `${title}成功`,
        });
      } else {
        this.messages.push({
          style: "danger",
          title: `${title}失敗`,
          content: this.message.join("、"),
        });
        Toast.fire({
          icon: "error",
          title: `${title}失敗`,
        });
      }
      // setTimeout(() => {
      //   this.messages.shift();
      // }, 1600);
    },
  },
});
