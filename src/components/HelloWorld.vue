<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-09-19 11:12:30
 * @LastEditors: zero
 * @LastEditTime: 2020-09-24 15:00:22
-->
<template>
  <div class="hello">
    <p>组件测试</p>
    <a-button type="primary" @click="send">
      Primary
    </a-button>
    <a-button type="danger" @click="submitForm">
      submit
    </a-button>
    <a-button type="danger" @click="inc">
      {{count}}
    </a-button>
    <input type="text" :value="foo" @input="$emit('update:foo', $event.target.value)">
    <modal-button></modal-button>
     <a-button type="primary" @click="toHome">
      layout
    </a-button>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
import { ref } from 'vue'
export default {
  components: {
    modalButton: defineAsyncComponent(() => import('./ModalButton.vue'))
  },
  name: 'HelloWorld',
  props: {
    msg: String,
    foo: String
  },
  setup() {
    console.log('最先')
    const count = ref(0)
    const inc = () => count.value++
    return {
      count,
      inc,
    }
  },
  emits: {  //验证发射事件
    submit: ({ name }) => {
      console.log(name, 'name')
      if (name) {
        return true
      } else {
        console.warn('Invalid submit event payload!')
        return false
      }
    }
  },
  data() {
    return {
       color:'#ff6900'
    }
  },
  beforeUnmount (){
     console.log('beforeDestroy')
  },
  methods: {
    send() {
      this.$emit('my-event', 'test')
    },
    submitForm() {
      this.color='red';
      this.$emit('submit', { name: '123' })
    },
    toHome (){
      this.$router.push({name:'home'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less' vars="{color}">
.hello {
  color:var(--color);
}
</style>
