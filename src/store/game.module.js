export default {
  namespaced: true,
  state() {
    return {
      current_player: null,
      players: ["⭕", "✖️"],
      matrix: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    };
  },
  getters: {
    getCurrentPlayer(state) {
      if (state.current_player === null) {
        state.current_player = Math.floor(Math.random() * 2);
      }
      return state.players[state.current_player];
    },
  },
  mutations: {
    setCurrentPlayer(state, payload) {
      state.current_player = payload;
    },
    setValue(state, payload) {
      state.matrix[payload.row][payload.column] = payload.value;
      if (state.current_player === 0) {
        state.current_player = 1;
      } else {
        state.current_player = 0;
      }
    },
  },
};
