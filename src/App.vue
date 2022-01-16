<template>
<div>
  <LikeHeader></LikeHeader>
  <h2>{{ number }}</h2>
  <LikeNumber :totalNumber="number" :testProps="hoge" @my-click="incrementNumber"></LikeNumber>
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
  },
  methods: {
    incrementNumber(value) {
      this.number = value;
    }
  }
}
</script>

<style scoped>
  div {
    border: 1px solid blue;
  }
</style>
