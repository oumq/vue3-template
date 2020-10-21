<template>
  <div class="waterfall-wrapper">
    <!-- <section class="wf-column">
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
    </section>-->
    <section
      class="wf-column"
      :key="index"
      v-for="(list, index) in waterfallList"
    >
      <div
        class="wf-card"
        :style="{ height: item.height }"
        :key="item.id"
        v-for="item in list"
        >{{ item.content }}</div
      >
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useWaterfall } from './useWaterfall'

export default defineComponent({
  name: 'Waterfall',
  setup() {
    const list = [
      { id: 'a', height: '200px', content: 'aaa' },
      { id: 'b', height: '100px', content: 'bbb' },
      { id: 'c', height: '240px', content: 'ccc' },
      { id: 'd', height: '100px', content: 'ddd' },
      { id: 'e', height: '100px', content: 'eee' },
      { id: 'f', height: '290px', content: 'fff' },
      { id: 'g', height: '320px', content: 'ggg' },
      { id: 'h', height: '230px', content: 'hhh' },
      { id: 'i', height: '160px', content: 'iii' }
    ]
    const { waterfallList } = useWaterfall(list)
    return {
      waterfallList
    }
  }
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
