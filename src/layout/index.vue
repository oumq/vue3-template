<template>
  <!-- <a-layout>
    <my-header />
  </a-layout>-->
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import MyHeader from './components/MyHeader.vue'
// import { Layout } from 'ant-design-vue'

export default defineComponent({
  name: 'Layout'
  // components: {
  //   ALayout: Layout,
  //   MyHeader: MyHeader
  // }
})
</script>
