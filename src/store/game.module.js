export default {
  namespaced: true,
  state() {
    return {
      matrix: [
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ],
    };
  },
  getters: {
    matrix(state) {
      return state.matrix;
    },
  },
};
