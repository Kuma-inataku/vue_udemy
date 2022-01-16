<template>
<div>
  <LikeHeader headerText="hello">
    <h2>みなさん</h2>
    <template v-slot:title>
      <h2>こんにちは</h2>
    </template>
    <h3>初めまして</h3>
    <p>よろしくお願いします</p>
    <template v-slot:number>
      <p>{{ number }}</p>
    </template>
  </LikeHeader>
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
