<template>
  <div class="gameboard">
    <div class="gameboard--playername">
      <b>Próximo Jogador : </b> {{ current_player }}
    </div>
    <div class="gameboard--row" v-for="(row, i) in matrix" :key="i">
      <SquareSection
        v-for="(col, y) in row"
        :key="`${i}_${y}`"
        :row="i"
        :column="y"
      />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import SquareSection from "./SqueSection";
export default {
  name: "GameView",
  components: {
    SquareSection,
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
  .gameboard--playername {
    align-items: center;
    display: flex;
    flex-direction: row;
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
