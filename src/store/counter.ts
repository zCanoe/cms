import { defineStore } from "pinia";

export default defineStore("counter", {
  state: () => ({
    count: 100,
  }),
  getters: {
    getDoubleCount(): number {
      return this.count << 1;
    },
  },
  actions: {
    changeCounter(changeNumber: number) {
      this.count = changeNumber;
    },
  },
});
