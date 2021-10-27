import { createStore } from "vuex";
import gameModule from "./game.module.js";

export default createStore({
  modules: {
    game: gameModule,
  },
});
