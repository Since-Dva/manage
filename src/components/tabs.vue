<template>
  <ul class="container">
    <li 
        :class="[`item`, atcIdx===idx?'active':'']"
        v-for="(item,idx) in tabList" 
        :key="idx" 
        @click="changeTab(idx,item)"
    >
        {{item.title}}
        <i @click.stop="closeTab(idx)">×</i>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
      return {
          atcIdx:0
      }
  },
  methods: {
      changeTab(idx,item){
          this.atcIdx=idx
          this.$router.push(item.path)
      },
      closeTab(idx){
          this.$store.commit('deleteTabMut',idx)
          this.atcIdx=idx-1
          this.$router.push(this.tabList[this.atcIdx].path)
      }
  },
  computed: {
    tabList() {
      return this.$store.state.tabs;
    },
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