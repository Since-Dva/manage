<template>
  <el-aside>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :unique-opened="true"
      router
    >
      <div v-for="(item1,idx1) in menues" :key="idx1">
        <el-menu-item v-if="!item1.children" :index="item1.path">
          <i :class="item1.icon"></i>
          <span slot="title">{{item1.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="String(idx1)">
          <template slot="title">
            <i :class="item1.icon"></i>
            <span>{{item1.title}}</span>
          </template>
          <div v-for="(item2,idx2) in item1.children" :key="idx2">
            <el-menu-item v-if="!item2.children" :index="item2.path">{{item2.title}}</el-menu-item>
            <el-submenu v-else :index="String(idx2)">
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
    };
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style scoped lang="scss">
.el-aside {
  width: 225px;
  height: 960px;
  background: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  .el-menu-item {
    &:hover {
      background-color: #3498db !important;
      color: #ffffff;
    }
    &.is-active {
      background-color: #3498db !important;
      color: #ffffff;
    }
    .el-submenu__icon-arrow {
      font-size: 15px;
    }
  }
}
</style>