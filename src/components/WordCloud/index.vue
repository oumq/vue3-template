<template>
  <canvas
    ref="canvas"
    style="width: 800px; height: 600px;"
    width="800"
    height="600"
  ></canvas>
</template>

<script>
import { getHotList } from '@/api/hot'
// import wordcloud from 'wordcloud'
import { ref, onMounted } from 'vue'
import { useWordCloud } from './useWordCloud'
export default {
  name: 'WordCloud',
  setup() {
    const canvas = ref(null)
    const options = {
      list: [],
      gridSize: 10, // 密集程度 数字越小越密集
      weightFactor: 13, // 字体大小=原始大小*weightFactor
      maxFontSize: 16, //最大字号
      minFontSize: 14, //最小字号
      fontWeight: 'normal', //字体粗细
      fontFamily: 'Times, serif', // 字体
      // color: 'random-dark', // 字体颜色 'random-dark' 或者 'random-light'
      // backgroundColor: '#333', // 背景颜色
      rotateRatio: 0 // 字体倾斜(旋转)概率，1代表总是倾斜(旋转)
    }
    const { setWordCloud } = useWordCloud(canvas, options)
    onMounted(async () => {
      const res = await getHotList()
      const arr = []
      const list = res.data
      list.forEach(element => {
        arr.push([element.hot_content, Number(element.hot_count) / 7000000])
      })
      setWordCloud(arr)
    })
    return {
      canvas
    }
  }
}
</script>

<style></style>
