<template>
<div>
  <LikeHeader>
      <h3>初めまして</h3>
  </LikeHeader>
  <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>

  <button @click="currentComponent = 'Home'">Home</button>
  <button @click="currentComponent = 'About'">About</button>
  <keep-alive>
    <component :is="currentComponent"></component>
  </keep-alive>
  <div>
    <h2>イベントのフォーム</h2>
    <label for="title">タイトル</label>
    <input
      id="title"
      type="text"
      v-model.lazy="eventData.title"
    >
    <pre>{{ eventData.title }}</pre>
    <label for="maxNumber">最大人数</label>
    <input
      id="maxNumber"
      type="number"
      v-model.number="eventData.maxNumber"
    >
    <pre>{{ eventData.maxNumber }}</pre>
    <label for="host">主催者</label>
    <input
      id="host"
      type="text"
      v-model.trim="eventData.host"
    >
    <pre>{{ eventData.host }}</pre>
    <label for="detail">イベントの内容</label>
    <textarea
      id="detail"
      v-model="eventData.detail"
    >
    </textarea>
    <pre>{{ eventData.detail }}</pre>
    <input
      type="checkbox"
      id="isPrivate"
      v-model="eventData.isPrivate"
    >
    <label for="isPrivate">非公開</label>
    <p>{{ eventData.isPrivate }}</p>
    <p>参加条件</p>
    <input
      type="checkbox"
      id="10"
      value="10代"
      v-model="eventData.target"
    >
    <label for="10">10代</label>
    <input
      type="checkbox"
      id="20"
      value="20代"
      v-model="eventData.target"
    >
    <label for="20">20代</label>
    <input
      type="checkbox"
      id="30"
      value="30代"
      v-model="eventData.target"
    >
    <label for="30">30代</label>
    <p>
      {{ eventData.target }}
    </p>
  </div>
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
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false,
        target: [],
      }
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
