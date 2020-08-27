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
        margin-left: 0.521vw;
    }
  .item {
    display: inline-block;
    line-height: 2.396vw;
    padding: 0 1.927vw;
    text-align: center;
    color: white;
    font-family:Microsoft YaHei;
    background: #3497da;
    border-radius: 0.313vw 0.313vw 0vw 0vw;
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
        width: 0.833vw;
        line-height: 0.833vw;
        border-radius: 50%;
        color: #0f6baa;
        background: white;
        cursor: pointer;
        position: absolute;
        right: 0.104vw;
        top: 0.104vw;
        z-index: -1;
        opacity: 0;
        transition: all 0.4s;
    }
  }
}
</style>