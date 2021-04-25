<!--
  demo
  <template>
    <h1 class="_h1">{{ hello }}</h1>
  </template>

  <script>
    export default {
    data() {
      return {
      hello: 'Hello world'
      }
      }
    }
  </script>

  <style scoped lang="scss">
    ._h1 {
    color: red;
    }
  </style>
-->
<template>
  <div class="remote-temp-wrap">
    <Vue3Codemirror ref="codemirror" class="editor-content" />
    <div class="render-btn" @click="remoteRender">render</div>
    <div id="render-content" class="render-content"></div>
  </div>
</template>

<script lang="ts">
import { renderTemplate } from '@/api/remote'
import { ref, defineComponent, createApp } from 'vue'
import Vue3Codemirror from '@/components/Vue3Codemirror/index.vue'

export default defineComponent({
  name: 'RemoteTemp',
  components: {
    Vue3Codemirror
  },
  setup() {
    const codemirror: any = ref(null)
    const isObject = (v: any) => {
      return Object.prototype.toString.call(v).includes('Object')
    }
    const parseObj: any = (data: any) => {
      if (Array.isArray(data)) return data.map(row => parseObj(row))
      if (isObject(data)) {
        const ret: any = {}
        for (const k in data) {
          ret[k] = parseObj(data[k])
        }
        return ret
      }
      try {
        const pattern: any = /function ([\w]+)\(\) \{ \[native code\] \}/
        if (pattern.test(data)) {
          return window[pattern.exec(data)[1]]
        } else {
          const evalData = eval(`(${data})`)
          return typeof evalData === 'function' ? evalData : data
        }
      } catch (err) {
        return data
      }
    }
    const appendSty = (css: any) => {
      // 生成组件样式
      const style = document.createElement('style')
      style.setAttribute('type', 'text/css')
      const cssText = document.createTextNode(css)
      style.appendChild(cssText)
      const head: any = document.querySelector('head')
      head.appendChild(style)
    }

    const remoteRender = () => {
      console.log(codemirror.value.getValue())
      renderTemplate(codemirror.value.getValue()).then(res => {
        console.log(res)
        const options = parseObj(res.data)
        options.styles.forEach((css: any) => appendSty(css))
        // remote = Vue.extend({
        //   ...options.script,
        //   name: options.script.name || '',
        //   template: options.template
        // })
        // _app.component('qqq', {
        //   render() {
        //     return h(options.template, {
        //       ...options.script,
        //       name: options.script.name || ''
        //     })
        //   }
        // })
        const _app = createApp({
          extends: {
            ...options.script,
            name: options.script.name || ''
            // template: options.template
          },
          template: options.template
        })
        console.log(_app)
        _app.mount('#render-content')
      })
    }
    return {
      codemirror,
      remoteRender
    }
  }
})
</script>

<style scoped lang="scss">
@import './index.scss';
</style>
