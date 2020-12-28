import { unref, Ref } from 'vue'
import wordcloud from 'wordcloud'

type WordCloudData = [string, number]

export const useWordCloud = (
  appendEl: Ref<HTMLElement | null>,
  options: any
) => {
  const setWordCloud = (array: Array<WordCloudData>) => {
    options.list = array
    const el = unref(appendEl)
    el && wordcloud(appendEl.value, options)
  }
  return {
    setWordCloud
  }
}
