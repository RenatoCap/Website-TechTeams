import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    id: '',
    eventDrawer:true,
    config: {
      generalConfig: {
        socialLinks:{}
      },
      keysandsecurity: {},
      footerConfig: {},
    },
    items: [{
        text: 'Home',
        to: '/',
        icon: 'mdi-home',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Study Jams',
        to: '/study-Jams',
        icon: 'mdi-code-tags',
        meta: {
          showToolbar: true,
          showBottomNav: true
        }
      },
      {
        text: 'Codelab',
        to: '/codelab',
        icon: 'mdi-code-tags',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Demos',
        to: '/demos',
        icon:'mdi-code-tags',
        meta: {
          showToolbar: true,
          showBottomNav: true,
        }
      },
      // {
      //   text:'Solution Challenge',
      //   to: '/Solution-Challenge',
      //   icon: 'mdi-run',
      //   meta: {
      //     showToolbar: true,
      //     showBottomNav: true,
      //   }
      // },
      {
        text: 'About',
        to: '/about',
        icon: 'mdi-information-outline',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'FAQ',
        to: '/faq',
        icon: 'mdi-star-outline',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      },
    ],
  
  },
  getters: {
    links: (state) => {
      return state.items
    },
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    setId: (state, newId) => (state.id = newId),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setEventDrawer: (state, payload) => (state.eventDrawer = payload),
    toggleEventDrawer: state => (state.eventDrawer = !state.eventDrawer),
    setGeneralConfig: (state, payload) => (state.config.generalConfig = payload),
    setKeysAndSecutityConfig: (state, payload) => (state.config.keysandsecurity = payload),
    setFooterConfig: (state, payload) => (state.config.footerConfig = payload),
  },
  modules: {},
  actions: {}

})