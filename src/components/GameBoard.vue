<template>
  <ResultOverflow />
  <div class="gameboard">
    <div class="gameboard--row" v-for="(row, i) in matrix" :key="i">
      <SquareSection
        v-for="(col, y) in row"
        :key="`${i}_${y}`"
        :row="i"
        :column="y"
      />
    </div>
    <div class="gameboard--playername">
      <b>Próximo Jogador : </b> {{ current_player }}
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import SquareSection from "./SquareSection";
import ResultOverflow from "./ResultOverflow";

export default {
  name: "GameView",
  components: {
    SquareSection,
    ResultOverflow,
  },
  setup() {
    const store = useStore();
    const matrix = computed(() => store.state.game.matrix);

    const current_player = computed(
      () => store.getters["game/getCurrentPlayer"]
    );
    return { matrix, current_player };
  },
};
</script>
<style lang="scss" scoped>
.gameboard {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  .gameboard--playername {
    align-items: center;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    margin-bottom: 10px;
    b {
      margin-right: 5px;
    }
  }
  .gameboard--row {
    display: flex;
    flex-direction: row;
  }
}
</style>
