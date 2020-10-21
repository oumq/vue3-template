<template>
  <a-layout-header class="my-header">
    <div class="header-wrapper">
      <div class="header-logo">
        <img src="@/assets/logo.png" />
      </div>
      <div class="header-seach">
        <a-input size="small" placeholder="在网站内搜索">
          <template v-slot:prefix>
            <SearchOutlined />
          </template>
        </a-input>
      </div>
      <ul class="header-menu">
        <template
          v-if="
            screen === ScreenEnum.LG ||
              screen === ScreenEnum.XL ||
              screen === ScreenEnum.XXL
          "
        >
          <li
            :class="[
              'header-submenu',
              activeTab === item.id ? 'header-submenu-focus' : ''
            ]"
            :key="item.link"
            v-for="item in tabList"
            @click="submenuClick(item.id)"
            >{{ item.name }}</li
          >
        </template>

        <a-dropdown
          v-else
          placement="bottomRight"
          overlayClassName="header-dropdown"
        >
          <li class="header-submenu">
            <UnorderedListOutlined />
          </li>
          <template v-slot:overlay>
            <a-menu>
              <a-menu-item v-for="item in tabList" :key="item.link">{{
                item.name
              }}</a-menu-item>
            </a-menu>
          </template>
        </a-dropdown>
      </ul>
    </div>
  </a-layout-header>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { Layout, Input, Dropdown, Menu } from 'ant-design-vue'
import { SearchOutlined, UnorderedListOutlined } from '@ant-design/icons-vue'

import { appStore } from '@/store/modules/app'

import { ScreenEnum } from '@/enums/appEnum'

export default defineComponent({
  name: 'MyHeader',
  components: {
    ALayoutHeader: Layout.Header,
    AInput: Input,
    ADropdown: Dropdown,
    AMenu: Menu,
    AMenuItem: Menu.Item,
    SearchOutlined,
    UnorderedListOutlined
  },
  setup() {
    const activeTab = ref('design')
    const screen = computed(() => {
      return appStore.getScreen
    })
    const tabList = [
      { id: 'design', name: '设计', link: '/front' },
      { id: 'document', name: '文档', link: '/back' },
      { id: 'component', name: '组件', link: '/db' },
      { id: 'resource', name: '资源', link: '/introduction' }
    ]

    const submenuClick = (id: string) => {
      activeTab.value = id
    }

    return {
      screen,
      ScreenEnum,
      tabList,
      activeTab,
      submenuClick
    }
  }
})
</script>

<style scoped lang="scss">
.my-header {
  box-sizing: border-box;
  background: #fff;
  // box-shadow: 0 2px 8px #f0f1f2;
  padding: 0;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  .header-wrapper {
    display: flex;
    align-items: center;
    max-width: $page-max-width;
    margin: 0 auto;
    .header-logo {
      box-sizing: border-box;
      flex-basis: 120px;
      height: 64px;
      img {
        height: 40px;
      }
    }
    .header-seach {
      flex: 1;
      ::v-deep .ant-input {
        border: 0;
        max-width: 200px;
      }
      ::v-deep .ant-input:focus {
        box-shadow: 0 0 0 0;
      }
    }
    .header-menu {
      box-sizing: border-box;
      list-style: none;
      margin: 0;
      padding: 0;
      .header-submenu {
        position: relative;
        box-sizing: border-box;
        height: 64px;
        border-top: 2px solid transparent;
        border-bottom: 2px solid transparent;
        min-width: 40px;
        margin: 0;
        padding: 0;
        display: inline-block;
        margin: 0 12px;
        transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
        cursor: pointer;
        &:hover {
          color: $color-text-primary-active;
          border-top-color: $color-text-primary-active;
        }
      }
      .header-submenu-focus {
        border-top-color: $color-text-primary-active;
      }
    }
  }
}
</style>
