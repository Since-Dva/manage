<template>
  <ul class="container">
    <li 
        :class="[`item`, atcIdx===idx?'active':'']"
        v-for="(item,idx) in list" 
        :key="idx" 
        @click="changeTab(idx)"
    >
        {{item.title}}
        <i @click="deleteTab(idx)">×</i>
    </li>
  </ul>
</template>

<script>
export default {
  props:["list"],
  data() {
      return {
          atcIdx:0
      }
  },
  methods: {
      changeTab(idx){
          this.atcIdx=idx
      },
      deleteTab(idx){
          this.$store.commit('deleteTabMut',idx)
      }
  },
};
</script>

<style lang="scss">
.container {
    .item +.item {
        margin-left: 10px;
    }
  .item {
    display: inline-block;
    line-height: 46px;
    padding: 0 37px;
    text-align: center;
    color: white;
    font-family:Microsoft YaHei;
    background: #3497da;
    border-radius: 6px 6px 0px 0px;
    position: relative;
    cursor: pointer;
    &.active{
        background: #0f6baa;
    }
    &:hover i{
        z-index: 1;
        opacity: 1;
    }
    i{
        width: 16px;
        line-height: 16px;
        border-radius: 50%;
        color: #0f6baa;
        background: white;
        cursor: pointer;
        position: absolute;
        right: 2px;
        top: 2px;
        z-index: -1;
        opacity: 0;
        transition: all 0.4s;
    }
  }
}
</style>