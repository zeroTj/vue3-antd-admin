<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-09-19 11:12:30
 * @LastEditors: zero
 * @LastEditTime: 2020-09-19 12:32:45
-->
<template>
 <div class="hello">
  <a-button type="primary">按钮</a-button>
  
   <HomeOutlined />
    <SettingFilled />
    <SmileOutlined />
    <SyncOutlined spin />
    <SmileOutlined :rotate="180" />
    <LoadingOutlined />
    <a-switch v-model="checked" @change="onChange" />
</div>
</template>

<script>
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons-vue';

export default {
  name: 'App',
   components: {
    HomeOutlined,
    SettingFilled,
    SmileOutlined,
    SyncOutlined,
    LoadingOutlined,
  },
  data () {
    return {
      checked:true
    }
  },
  methods:{
    onChange (val){
      console.log(val,'val')
    }
  }
}
</script>

<style lang='less' scoped>
.hello {
  color:red;
}
</style>
