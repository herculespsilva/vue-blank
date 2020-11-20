import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({ //plugin para manter os dados
  key: 'my-app',
  storage: localStorage
})

export default new Vuex.Store({
  plugins: [
    vuexPersist.plugin
  ],
  state: {
    numero1: 0,
    numero2: 0,
    permiteNavegacao: true
  },
  getters: {
    soma (state) {
      return state.numero1 * 1 + state.numero2 * 1
    },
    subtracao (state) {
      return state.numero1 - state.numero2
    },
    multiplicacao: state => {
      return state.numero1 * state.numero2
    }
  },
  mutations: {
      setNumero1 (state, valor) {
        state.numero1 = valor
      },
      setNumero2 (state, valor) {
        state.numero2 = valor
      },
      alteraPermiteNavegacao (state) {
        state.permiteNavegacao = !state.permiteNavegacao
      }

    },
  actions: {       //metodo assíncrono = espera um metodo terminar sua execução para rodar
      setNumero2Delay (context, valor) { //context é semelhante ao state, no entanto voltado para coisas assíncronas
        setTimeout(() => {
            context.commit('setNumero2', valor) // demora um segundo para salvar alteração - (Input/setNumero2Delay)
        }, 1000)
      }
  },
  modules: {
  }
})
