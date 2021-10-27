<template>
  <div class="result-overflow" v-if="is_finished">
    <div
      class="result-overflow--label"
      v-bind:class="{
        'has-winner': winner,
      }"
    >
      {{ label_text }}
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "@vue/reactivity";

export default {
  name: "ResultOverflow",
  setup() {
    const store = useStore();

    const is_completed = computed(() => store.getters["game/getIsCompleted"]);
    const winner = computed(() => store.getters["game/getWinner"]);
    const label_text = computed(() => {
      return winner.value ? `${winner.value} VENCEU` : "SEM VENCEDOR";
    });
    const is_finished = computed(() => {
      return is_completed.value || winner.value;
    });
    return { is_completed, label_text, is_finished, winner };
  },
};
</script>

<style lang="scss" scoped>
.result-overflow {
  position: absolute;
  background-color: #0000009e;
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 180px;

  .result-overflow--label {
    height: 120px;
    width: 100%;
    font-size: 80px;
    text-align: center;
    font-weight: bold;
    font-family: fantasy;
    background-color: white;
    color: #b12323;
    display: flex;
    align-items: center;
    justify-content: center;

    &.has-winner {
      color: #005e0b;
    }
  }
}
</style>
