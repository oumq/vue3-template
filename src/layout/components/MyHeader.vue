<template>
  <a-layout-header class="my-header">
    <ul class="header-menu">
      <li class="header-submenu" :key="item.link" v-for="item in tabList">
        {{ item.name }}
      </li>
    </ul>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { useRouter } from 'vue-router'
import { Layout } from 'ant-design-vue'

export default defineComponent({
  name: 'MyHeader',
  components: {
    ALayoutHeader: Layout.Header
  },
  setup() {
    const tabList = [
      { name: '前端', link: '/front' },
      { name: '后端', link: '/back' },
      { name: '数据库', link: '/db' },
      { name: '简介', link: '/introduction' }
    ]

    return {
      tabList
    }
  }
})
</script>

<style scoped lang="scss">
.my-header {
  background: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  .header-menu {
    box-sizing: border-box;
    list-style: none;
    .header-submenu {
      display: inline-block;
    }
  }
}
</style>
