import {
   Button,
  Switch
} from "ant-design-vue";
let c = [
  Button,
  Switch
]
const ant = {
  install(Vue) {
    c.forEach(v => {
      Vue.component(v.name,v)
  })
  },
};
export default ant;