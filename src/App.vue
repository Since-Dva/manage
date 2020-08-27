<template>
  <div id="app">
    <dyheader></dyheader>
    <div class="content">
      <dyaside></dyaside>
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
import dyheader from "./components/head.vue";
import dyaside from "./components/aside.vue";
export default {
  components: {
    dyheader,
    dyaside,
  },
  computed: {
    tabs() {
      return this;
    },
  },
};
</script>
<style lang="scss">
@import url("./assets/css/reset.css");

#app {
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
  display: flex;
  flex-direction: column;
  background: #efefef;
  font-family: Microsoft YaHei;
  font-size: 16px;
  color: rgba(102, 102, 102, 1);
  .content {
    display: flex;
    .el-main {
      box-sizing: border-box;
      min-height: 738px;
      overflow: scroll;
      padding: 0px 35px 0px 20px;
      .el-input,
      .el-input__inner {
        width: 150px;
        height: 28px;
      }
      .select {
        width: 92px;
        height: 28px;
        position: relative;
        select {
          border-radius: 4px;
          border: 1px solid #dcdfe6;
          outline: none;
          width: 92px;
          height: 28px;
          padding-left: 10px;
          color: #666666;
          option {
            border: 1px solid #dcdfe6 !important;
            background: white;
          }
        }
        &::after {
          content: "";
          display: block;
          width: 28px;
          height: 28px;
          border-radius: 0 4px 4px 0;
          background: #3498db url("./assets/img/bottomArr.png") center no-repeat;
          background-size: 100%;
          position: absolute;
          top: 0;
          right: 0;
          z-index: 999;
        }
      }
    }
    .searchBar {
      padding: 28px 35px;
      background: white;
      box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      .row + .row {
        margin-top: 35px;
      }
      .row {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        > div {
          display: flex;
          align-items: center;
        }
      }
    }
    .el-button + .el-button {
      margin: 0 0 0 24px;
    }
    .el-button {
      height: 36px;
      line-height: 36px;
      padding: 0 33px;
      border-radius: 6px;
      background: #3498db;
      color: white;
      &.deep {
        background: #0f6baa;
      }
      &.cancel {
        background: white;
        color: #666666;
      }
    }

    .require {
      position: relative;
      &::before {
        content: "*";
        color: red;
        margin-right: 2px;
        position: absolute;
        left: -8px;
        top: 3px;
      }
    }
    .dyrow+.dyrow{
      margin-top: 20px;
    }
    .dyrow {
      display: flex;
      align-items: center;
      > span {
        flex-shrink: 0;
        margin-right: 15px;
      }
    }
  }
  .el-transfer {
    display: flex;
    .el-transfer-panel {
      width: 185px;
      border: none;
      .el-transfer-panel__header {
        height: 37px;
        background: rgba(238, 238, 238, 1);
        border: 1px solid rgba(204, 204, 204, 1);
        .el-checkbox {
          height: 37px;
          padding-right: 36px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          .el-checkbox__label span {
            display: none;
          }
        }
      }
      .el-transfer-panel__body {
        border: 1px solid #cecece;
        margin-top: 20px;
      }
    }
    .el-transfer__buttons {
      padding: 0 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      transform: rotate(180deg);
      .el-button + .el-button {
        margin-top: 18px;
      }
      .el-button {
        width: 78px;
        height: 32px;
        line-height: 32px;
        margin: 0;
        border: none;
        background: white url("./assets/img/btns.png") center no-repeat;
        background-size: 98%;
        i {
          display: none;
        }
        &.is-disabled {
        }
      }
      .el-button:nth-of-type(2) {
        transform: rotate(180deg);
      }
    }
  }
}
.el-dialog {
  min-height: 300px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  margin-top: 30vh !important;
  .el-dialog__header {
    height: 59px;
    line-height: 59px;
    padding: 0 30px;
    background: #3498db;
    display: flex;
    align-items: center;
    .el-dialog__title {
      color: white;
    }
    .el-dialog__close {
      width: 26px;
      line-height: 26px;
      background: white;
      border-radius: 50%;
    }
  }
  .el-dialog__body {
    padding: 47px 35px;
    flex-grow: 1;
  }
  .el-dialog__footer {
    padding: 20px 30px;
    border-top: 1px solid #cccccc;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
