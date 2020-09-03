<template>
  <ul class="container">
    <li
      :class="[`item`, atcIdx===idx?'active':'']"
      v-for="(item,idx) in tabList"
      :key="idx"
      @click="changeTab({idx,item})"
    >
      {{item.title}}
      <i @click.stop="closeTab(idx)">×</i>
    </li>
  </ul>
</template>

<script>
  export default {
    methods: {
      changeTab(data) {
        this.$store.commit("changeTab", data);
        this.$router.push(data.item.path);
      },
      closeTab(idx) {
        if (this.tabList.length > 1) {
          this.$store.commit("deleteTabMut", idx);
          this.tabList.map((item,idx)=>{
            if(this.atcIdx===idx){
              this.$router.push(item.path);
            }
          })
        }
      },
    },
    computed: {
      tabList() {
        let type = this.$route.path.split("/")[1];
        if (type) {
          return this.$store.state.allTabs[type].tabs;
        } else {
          return [];
        }
      },
      atcIdx() {
        let type = this.$route.path.split("/")[1];
        if (type) {
          return this.$store.state.allTabs[type].activeIdx;
        } else {
          return 0;
        }
      },
    },
  };
</script>

<style lang="scss">
  .container {
    .item + .item {
      margin-left: 10.003px;
    }
    .item {
      display: inline-block;
      line-height: 46.003px;
      padding: 0 36.998px;
      text-align: center;
      color: white;
      font-family: Microsoft YaHei;
      background: #3497da;
      border-radius: 6.01px 6.01px 0px 0px;
      position: relative;
      cursor: pointer;
      &.active {
        background: #0f6baa;
      }
      &:hover i {
        z-index: 1;
        opacity: 1;
      }
      i {
        width: 15.994px;
        line-height: 15.994px;
        border-radius: 50%;
        color: #0f6baa;
        background: white;
        cursor: pointer;
        position: absolute;
        right: 1.997px;
        top: 1.997px;
        z-index: -1;
        opacity: 0;
        transition: all 0.4s;
      }
    }
  }
</style>