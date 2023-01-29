import { defineStore } from "pinia";

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
      if (res) {
        this.messages.push({ style, title: `${title}成功`, content });
      } else {
        this.messages.push({
          style: "danger",
          title: `${title}失敗`,
          content: message.join("、"),
        });
      }
      setTimeout(() => {
        this.messages.shift()
      }, 1600)
    },
  },
});
