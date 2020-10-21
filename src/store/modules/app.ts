import store from '@/store'
import { hotModuleUnregisterModule } from '@/utils/helper/vuexHelper'

import {
  Module,
  VuexModule,
  getModule,
  Mutation,
  Action
} from 'vuex-module-decorators'

import { ScreenEnum, ScreenSizeEnum } from '@/enums/appEnum'

const NAME = 'app'
hotModuleUnregisterModule(NAME)
@Module({
  dynamic: true,
  namespaced: true,
  stateFactory: true,
  store,
  name: NAME
})
class App extends VuexModule {
  private screen: ScreenEnum = ScreenEnum.XXL

  get getScreen() {
    return this.screen
  }

  @Mutation
  commitScreenSize(clientWidth: number): void {
    if (clientWidth < ScreenSizeEnum.XS) {
      this.screen = ScreenEnum.XS
    } else if (clientWidth < ScreenSizeEnum.SM) {
      this.screen = ScreenEnum.SM
    } else if (clientWidth < ScreenSizeEnum.MD) {
      this.screen = ScreenEnum.MD
    } else if (clientWidth < ScreenSizeEnum.LG) {
      this.screen = ScreenEnum.LG
    } else if (clientWidth < ScreenSizeEnum.XL) {
      this.screen = ScreenEnum.XL
    } else {
      this.screen = ScreenEnum.XXL
    }
  }

  @Action
  public async setScreen(clientWidth: number) {
    this.commitScreenSize(clientWidth)
  }
}

export { App }
export const appStore = getModule<App>(App)
