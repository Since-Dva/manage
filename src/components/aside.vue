<template>
  <el-container>
    <el-aside>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        router
      >
        <div v-for="(item1,idx1) in menues" :key="idx1">
          <el-menu-item v-if="!item1.children" :index="item1.path">
            <i :class="item1.icon"></i>
            <span slot="title">{{item1.title}}</span>
          </el-menu-item>
          <el-submenu v-else :index="idx1">
            <template slot="title">
              <i :class="item1.icon"></i>
              <span>{{item1.title}}</span>
            </template>
            <div v-for="(item2,idx2) in item1.children" :key="idx2">
              <el-menu-item v-if="!item2.children" :index="item2.path">{{item2.title}}</el-menu-item>
              <el-submenu v-else index="2-4">
                <template slot="title">{{item2.title}}</template>
                <el-menu-item
                  v-for="(item3,idx3) in item2.children"
                  :key="idx3"
                  :index="item3.path"
                >{{item3.title}}</el-menu-item>
              </el-submenu>
            </div>
          </el-submenu>
        </div>
      </el-menu>
    </el-aside>
  </el-container>
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

<style scoprd lang="scss">
.el-aside {
  width: 300px;
  height: 900px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>