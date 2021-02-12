<template>
  <div class="vue-codemirror">
    <textarea ref="textarea"></textarea>
  </div>
</template>

<script lang="ts">
import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/idea.css'
import 'codemirror/theme/panda-syntax.css'
import 'codemirror/theme/panda-syntax.css'
import 'codemirror/addon/hint/show-hint.css'

import 'codemirror/addon/hint/show-hint'
import 'codemirror/mode/vue/vue.js'
import 'codemirror/addon/hint/html-hint'
import 'codemirror/addon/hint/javascript-hint'
import 'codemirror/addon/hint/css-hint'
import { ref, defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'Vue3Codemirror',
  setup() {
    const textarea = ref(null)
    const codemirror: any = ref(null)

    onMounted(() => {
      codemirror.value = CodeMirror.fromTextArea(textarea.value, {
        lineNumbers: true,
        theme: 'idea',
        indentWithTabs: true,
        mode: 'text/x-vue',
        smartIndent: true,
        indentUnit: 2,
        matchBrackets: true,
        hintOptions: {
          completeSingle: false
        }
      })
      // codemirror.value.on('inputRead', () => {
      //   // console.log(codemirror)
      //   codemirror.value.showHint()
      // })
    })

    const getValue = () => {
      return codemirror.value.getValue()
    }

    return {
      textarea,
      codemirror,
      getValue
    }
  }
})
</script>

<style scoped lang="scss">
.vue-codemirror {
  text-align: left;
}
</style>
