<template>
  <a-layout-content class="my-layout">
    <section class="layout-wrapper">
      <!-- <Waterfall /> -->
      <WordCloud />
    </section>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import Waterfall from '@/components/Waterfall/index.vue'
import WordCloud from '@/components/WordCloud/index.vue'
import { Layout } from 'ant-design-vue'

export default defineComponent({
  name: 'MyContent',
  components: {
    ALayoutContent: Layout.Content,
    // Waterfall: Waterfall
    WordCloud: WordCloud
  }
})
</script>

<style scoped lang="scss">
.my-layout {
  .layout-wrapper {
    margin: 0 auto;
    max-width: $page-max-width;
  }
}
</style>
