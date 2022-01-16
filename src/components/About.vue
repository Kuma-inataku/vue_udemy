<template>
  <div>
    <p>about</p>
    <input type="text">
  </div>
</template>

<script>
export default {
  destroyed() {
    console.log('destroyed');
  }
}
</script>