<template>
  <el-aside>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      @select="handleSelect"
      :unique-opened="false"
      router
    >
      <div v-for="(item1,idx1) in menues" :key="idx1">
        <el-menu-item v-if="!item1.children" :index="item1.path">
          <i class="titleicon">
            <img :src="require(`../assets/img/${atc==='/'?item1.iconatc:item1.icon}.png`)" alt />
          </i>
          <span slot="title">{{item1.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="String(idx1)">
          <template slot="title">
            <i class="titleicon">
              <img :src="require(`../assets/img/${item1.icon}.png`)" alt />
            </i>
            <span>{{item1.title}}</span>
          </template>
          <div v-for="(item2,idx2) in item1.children" :key="idx2">
            <el-menu-item v-if="!item2.children" :index="item2.path">{{item2.title}}</el-menu-item>
            <el-submenu v-else :index="idx1+String(idx2)">
              <template slot="title">{{item2.title}}</template>
              <el-menu-item
                v-for="(item3,idx3) in item2.children"
                :key="idx3"
                :index="item3.path+''"
              >{{item3.title}}</el-menu-item>
            </el-submenu>
          </div>
        </el-submenu>
      </div>
    </el-menu>
  </el-aside>
</template>

<script>
  import menues from "../config/menu";
  export default {
    data() {
      return {
        menues,
        atc:'/',
      };
    },
    methods: {
      handleOpen() {
        // console.log(e);
      },
      handleClose() {},
      handleSelect(e) {
        this.atc=e
        let arr = e.split("/");
        let title;
        this.$router.options.routes.map((item) => {
          if (item.path === e) {
            title = item.name;
          }
        });
        if (e !== "/") {
          // this.$store.commit("clearTab");
          this.$store.commit("addTabMut", { title, path: e, type: arr[1] });
        }
      },
    },
    computed: {
      active() {
        let path;
        path = this.$route.path;
        return path;
      },
    },
  };
</script>

<style scoped lang="scss">
  .el-aside {
    width: 11.719vw !important;
    height: 44.531vw;
    background: #ffffff;
    overflow-y: scroll;
    overflow-x: hidden;
    scrollbar-width: none;
    box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
    margin-top: -1.042vw;
    padding-top: 1.042vw;
    .el-menu {
      width: 11.719vw;
      .titleicon {
        display: inline-block;
        width: 1.25vw;
        height: 1.25vw;
        background-size: 100%;
        position: relative;
        margin-right: 0.521vw;
        img {
          width: 1.25vw;
          height: 1.25vw;
          position: absolute;
          top: 0;
          left: 0;
          overflow: hidden;
        }
      }
      .el-icon-arrow-down,.el-submenu__icon-arrow{
        display: none;
        transform: rotate(90deg) !important;
      }
      .el-menu-item > span,
      .el-submenu__title > span {
        font-size: 0.833vw;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: rgba(51, 51, 51, 1);
      }
    }
    .el-menu-item {
      width: 11.719vw;
      min-width: 0;
      font-size: 0.729vw;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: rgba(102, 102, 102, 1);
      &.is-active {
        background-color: #3498db !important;
        color: #ffffff;
        span {
          background-color: #3498db !important;
          color: #ffffff;
        }
      }
      .el-submenu__icon-arrow {
        font-size: 0.781vw;
      }
    }
  }
</style>