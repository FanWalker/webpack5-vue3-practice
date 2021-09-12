<template>
  <div class="container">
    <div>vue3练习</div>
    {{greeting}}
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      greeting: 'hello word',
    }
  },
  created() {
    console.log('created');
  }
})
</script>
<style lang="less" scoped>
.container {
  display: flex;
  background-color: aqua;
  height: 100%;
  justify-content: center;
}
</style>