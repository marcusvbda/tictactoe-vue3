import { processWinner } from "../helpers/gameHelpers";

export default {
  namespaced: true,
  state() {
    return {
      current_player: null,
      players: ["⭕", "✖️"],
      winner: null,
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
    getIsCompleted(state) {
      let counter = 0;
      state.matrix.forEach((row) => {
        row.forEach((cell) => {
          if (cell !== null) {
            counter++;
          }
        });
      });
      return 9 === counter;
    },
    getWinner(state) {
      return state.winner;
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
      state.winner = processWinner(state);
    },
  },
};
