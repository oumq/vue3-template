<template>
  <div class="waterfall-wrapper">
    <section class="wf-column">
      <div class="wf-card" style="height: 200px">aaa</div>
      <div class="wf-card" style="height: 100px">bbb</div>
      <div class="wf-card" style="height: 240px">ccc</div>
    </section>
    <section class="wf-column">
      <div class="wf-card" style="height: 100px">ddd</div>
      <div class="wf-card" style="height: 100px">eee</div>
      <div class="wf-card" style="height: 290px">fff</div>
    </section>
    <section class="wf-column">
      <div class="wf-card" style="height: 320px">ggg</div>
      <div class="wf-card" style="height: 230px">hhh</div>
      <div class="wf-card" style="height: 1600px">iii</div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useStore } from 'vuex'

export default defineComponent({
  name: 'Waterfall'
  // setup() {
  //   return {}
  // }
})
</script>

<style scoped lang="scss">
.waterfall-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .wf-column {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 10px;
    .wf-card {
      box-sizing: border-box;
      border: 1px solid black;
    }
  }
}
</style>
