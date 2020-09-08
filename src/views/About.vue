<template>
  <div class="about">
    <a-button type="primary">Primary</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'Home',
  components: {
    AButton: Button
  }
})
</script>
