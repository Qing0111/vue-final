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
    pushMessage(res, data) {
      const { title = "更新", content, style = "success" } = data;
      if (res.data.success) {
        this.messages.push({ style, title: `${title}成功`, content });
      } else {
        this.messages.push({
          style: "danger",
          title: `${title}失敗`,
          content: message.join("、"),
        });
      }
    },
  },
});
