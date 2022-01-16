<template>
<div>
  <LikeHeader>
      <h3>初めまして</h3>
  </LikeHeader>
  <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

  <button @click="currentComponent = 'Home'">Home</button>
  <button @click="currentComponent = 'About'">About</button>
  <component :is="currentComponent"></component>
</div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  props: {

  },
  data() {
    return {
      number: 10,
      currentComponent: "Home",
    }
  },
  components: {
    LikeHeader,
    About,
    Home,
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
