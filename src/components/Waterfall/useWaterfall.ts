import { ref, computed, watchEffect } from 'vue'
import { appStore } from '@/store/modules/app'
import { ScreenEnum } from '@/enums/appEnum'

export const useWaterfall = (list: Array<any>) => {
  const waterfallList = ref(list)
  const screen = computed(() => {
    return appStore.getScreen
  })

  watchEffect(() => {
    let group = 1
    if (screen.value === ScreenEnum.XS || screen.value === ScreenEnum.SM) {
      group = 1
    } else if (
      screen.value === ScreenEnum.MD ||
      screen.value === ScreenEnum.LG
    ) {
      group = 2
    } else {
      group = 3
    }
    const groupNum = Math.floor(list.length / group)
    waterfallList.value = Array.from(Array(group)).map((_, i) => {
      if (group === i + 1) {
        return list.slice(i * groupNum, list.length)
      } else {
        return list.slice(i * groupNum, (i + 1) * groupNum)
      }
    })
  })

  return {
    waterfallList
  }
}
