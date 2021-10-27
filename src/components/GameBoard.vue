<template>
  <div class="gameboard">
    <div
      class="gameboard--row"
      v-for="(row, i) in matrix"
      :key="i"
      :id="`row_${i}`"
    >
      <SquareSection
        v-for="(col, y) in row"
        :key="`${i}_${y}`"
        :name="`square_${i}_${y}`"
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
    const matrix = computed(() => store.getters["game/matrix"]);
    return { matrix };
  },
};
</script>
<style lang="scss" scoped>
.gameboard {
  display: flex;
  flex-direction: column;
  .gameboard--row {
    display: flex;
    flex-direction: row;
  }
}
</style>
