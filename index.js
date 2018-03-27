import Vue from 'vue'
import TestComp from './testcomp'

window._test = { comp: 'InsideComp' }

window._vueInstance = new Vue({
  el: '#app',
  data: window._test,
  render (h) {
    return h('TestComp', {
      attrs: { compName: this.comp }
    })
  },
  components: { TestComp }
})
