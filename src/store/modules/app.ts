import { ActionContext } from 'vuex'

export interface AppState {
  clientWidth?: number
}

const state: AppState = {
  clientWidth: 0
}

const mutations = {
  SET_CLIENTWIDTH: (state: AppState, clientWidth: number) => {
    state.clientWidth = clientWidth
  }
}

const actions = {
  setClientWidth(
    context: ActionContext<AppState, AppState>,
    clientWidth: number
  ) {
    context.commit('SET_CLIENTWIDTH', clientWidth)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
