<template>
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { appStore } from '@/store/modules/app'
import {
  tryOnMounted,
  useWindowSize,
  useEventListener,
  useThrottleFn
} from '@vueuse/core'

export default defineComponent({
  setup() {
    tryOnMounted(() => {
      const { width } = useWindowSize()
      appStore.setScreen(width.value)
      useEventListener(
        'resize',
        useThrottleFn(() => {
          appStore.setScreen(width.value)
        }, 300)
      )
    })
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  color: $color-text-primary;
}
</style>
