<template>
  <a-layout class="my-layout">
    <my-header />
    <my-content />
  </a-layout>
  <!-- <router-view></router-view> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyHeader from './components/MyHeader.vue'
import MyContent from './components/MyContent.vue'
import { Layout } from 'ant-design-vue'

export default defineComponent({
  name: 'Layout',
  components: {
    ALayout: Layout,
    MyHeader: MyHeader,
    MyContent: MyContent
  }
})
</script>

<style lang="scss" scoped>
.my-layout {
  background: #ffffff;
}
</style>
