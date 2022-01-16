<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Dolnald",
      }
    }
  }
}

</script>

<style scoped>
  h1 {
    color:red;
  }
</style>
