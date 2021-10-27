<template>
  <div class="square" :id="name">
    <!--  -->
  </div>
</template>

<script>
export default {
  props: {
    name: String,
  },
  name: "SquareSection",
};
</script>

<style lang="scss" scoped>
.square {
  height: 150px;
  width: 150px;
  border: 1px solid #000;
}
</style>
