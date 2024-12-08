import axios from 'axios';
import { defineStore } from 'pinia';

export const useVueJsStore = defineStore('useVueStore', {
  state: () => ({
    vueuse: []
  }),

  actions: {
    async fetchUse() {
      try {
        const response = await axios.get('https://95b8a1e50be5be01.mokky.dev/vueuse');
        this.vueuse = response.data;
      } catch (e) {
        console.log(e);
      }
    }
  }
});
