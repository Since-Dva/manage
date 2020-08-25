<template>
  <div id="app">
      <dyheader></dyheader>
      <el-container>
        <dyaside></dyaside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>

<script>
import dyheader from'./components/head.vue'
import dyaside from'./components/aside.vue'
export default {
  components:{
    dyheader,
    dyaside
  }
}
</script>
<style lang="scss">
@import url('./assets/css/reset.css');
#app{
  display: flex;
  flex-direction: column;
}
</style>
