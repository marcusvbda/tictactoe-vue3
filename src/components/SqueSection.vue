<template>
  <div class="square" @click="handleClick">
    {{ current_value }}
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  props: {
    row: Number,
    column: Number,
  },
  name: "SquareSection",
  setup(props) {
    const store = useStore();
    const matrix = computed(() => store.state.game.matrix);

    const current_value = computed(() => matrix.value[props.row][props.column]);

    const current_player = computed(
      () => store.getters["game/getCurrentPlayer"]
    );

    const handleClick = () => {
      if (current_value.value) {
        return;
      }

      store.commit("game/setValue", {
        row: props.row,
        column: props.column,
        value: current_player.value,
      });
    };

    return { current_value, matrix, handleClick, current_player };
  },
};
</script>

<style lang="scss" scoped>
.square {
  cursor: pointer;
  height: 150px;
  width: 150px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  font-size: 100px;
}
</style>
