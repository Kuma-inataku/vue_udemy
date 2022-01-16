<template>
  <div>
    <slot></slot>
    {{ headerText }}
  </div>
</template>

<script>
export default {
  props:{
    headerText: {
      type: String,
    }
  }
}
</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
