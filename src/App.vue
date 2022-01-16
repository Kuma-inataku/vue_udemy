<template>
<div>
  <LikeHeader></LikeHeader>
  <h2>{{ number }}</h2>
  <LikeNumber :totalNumber="number" :testProps="hoge"></LikeNumber>
  <LikeNumber></LikeNumber>
</div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  props: {
  },  data() {
    return {
      number: 10,
      hoge: "hoge"
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
