<template>
  <div>
    <p v-border:solid.round.shadow="{width: '3px', color: 'red'}">{{ tmpData }}</p>
    <h2>{{ title | lowerCase }}</h2>
    <h2>{{ subTitle | upperCase }}</h2>
    <h2>{{ subTitle | upperCase | lowerCase }}</h2>

    <p>{{ number }}</p>
    <button
      @click="number++"
    >
      +1
    </button>
    <CounterNumber></CounterNumber>
  </div>
</template>

<script>
import CounterNumber from "./CountNumber.vue";
import { tokyoNumber } from "@/tokyoNumber";

export default {
  mixins: [tokyoNumber],
  data() {
    return {
      tmpData: "hello",
    }
  },
  components: {
    CounterNumber,
  },
  directives: {
    border(el, binding) {
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if (binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if (binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 1)";
      }
    }
  }
}
</script>