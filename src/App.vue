<template>
<div>
  <LikeHeader></LikeHeader>
  <LikeNumber :totalNumber="number"></LikeNumber>
  <LikeNumber></LikeNumber>
</div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10,
    }
  },
  components: {
    LikeHeader
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
