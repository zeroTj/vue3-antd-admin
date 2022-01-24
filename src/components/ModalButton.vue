<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: zero
 * @Date: 2020-09-23 12:04:38
 * @LastEditors: zero
 * @LastEditTime: 2020-09-23 13:45:11
-->
<template>
  <div>
    <button @click="modalOpen = true">
      Open full screen modal! (With teleport!)
    </button>

    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal!
          (My parent is "body")
          <button @click="modalOpen = false">
            Close
          </button>
        </div>
      </div>
    </teleport>
  </div>
</template>
<script>
export default {
  name:'modalButton',
  data (){
    return {
      modalOpen: false
    }
  }
}
</script>
<style lang="less" scoped>
.modal{
  width: 400px;
  height: 400px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center
}
</style>

