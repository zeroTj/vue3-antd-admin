<!--
 * @Description:
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-09-20 07:24:53
 * @LastEditors: zero
 * @LastEditTime: 2020-09-25 11:15:24
-->
<template>
  <section>
    <p>登陆页面</p>
    <hello-world @my-event='doSomething' :foo="bar" @submit='getValue'></hello-world>
   <transition name="mybox">
        <div class="box" v-show="show"></div>
    </transition>
    <button v-on:click="change">button</button>

  </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'login',
  components: {
    helloWorld: defineAsyncComponent(() => import('@/components/HelloWorld'))
  },
  data() {
    return {
      bar: '2321',
      show:true
    }
  },
  created() {
    console.log(process.env,'123456')
  },
  mounted() {
    history.pushState(null, null, document.URL);
    window.addEventListener("popstate", function () {
      history.pushState(null, null, document.URL);
    }, false);
  },

  watch: {
    bar(val) {
      console.log(val, 'watch')
    }
  },
  methods: {
      change: function(){
             this.show = !this.show;
        },
    doSomething(val) {
      console.log(val, '父子通信')
    },
    getValue(val) {
      console.log(val)
    }
  },
  beforeUnmount (){
     console.log('beforeUnmount')
  },
  unmounted (){
     console.log('unmounted')
  }
}
</script>
<style lang="less" scoped>
 .box{
            height:500px;
            background-color:black;
             overflow: hidden;
        }
       .mybox-leave-active,.mybox-enter-active{
            transition:  all 1s ease;
        }
        .mybox-leave-active,.mybox-enter{
            height:100px !important;
            width: 200px;
        }
        .mybox-leave,.mybox-enter-active{
            height: 500px;
        }
</style>
