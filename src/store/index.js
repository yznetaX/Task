import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [
      {
        name: "pizza",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos recusandae laboriosam praesentium accusantium inventore.",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      {
        name: "pizza",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos recusandae laboriosam praesentium accusantium inventore.",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      {
        name: "pizza",
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eos recusandae laboriosam praesentium accusantium inventore.",
        src: "https://cdn.vuetifyjs.com/images/cards/cooking.png"
      },
      
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
