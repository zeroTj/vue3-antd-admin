<!--
import { setTimeout } from 'timers';
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-09-24 14:58:44
 * @LastEditors: zero
 * @LastEditTime: 2020-09-24 15:26:59
-->
<template>
  <section class="home" @click="loginout">

    home
  </section>
</template>
<script>
export default {
  name:'home',
  methods:{
    loginout (){
        this.$router.push({name:'index'})
        // setTimeout(() => {
        //       location.reload();
        //     }, 100);
    }
  }
}
</script>

