<template>
  <div>
    <a-button type="primary" @click="linkto">Login</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { Button } from 'ant-design-vue'

export default defineComponent({
  name: 'Login',
  components: {
    AButton: Button
  },
  setup() {
    const router = useRouter()
    const linkto = () => {
      router.push('/header')
    }
    return {
      router,
      linkto
    }
  }
})
</script>
