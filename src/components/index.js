import UnrestToolbar from './Toolbar.vue'
import ToolStorage from './ToolStorage'

export default {
  UnrestToolbar,
  ToolStorage,
  install(app) {
    app.component('UnrestToolbar', UnrestToolbar)
  }
}