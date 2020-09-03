<template>
  <div id="app">
    <router-view name="Head"></router-view>
    <div class="content">
      <router-view name="Aside" />
      <el-main>
        <router-view />
      </el-main>
    </div>
  </div>
</template>

<script>
  export default {
    created() {
      if (localStorage.store) {
        this.$store.replaceState(JSON.parse(localStorage.store));
      }
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
    width: 1920px;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #efefef;
    font-family: Microsoft YaHei;
    font-size: 15.994px;
    color: rgba(102, 102, 102, 1);
    .content {
      display: flex;
      .el-main {
        box-sizing: border-box;
        padding: 0px 35.002px 0px 20.006px;
        .tableBox {
          margin-top: 20.006px;
          height: 738.01px;
          overflow: scroll;
        }
        .el-input .el-input__icon {
          transform: translateX(5px);
          border-radius: 0 4px 4px 0;
          background: #3498db url("./assets/img/bottomArr.png") center no-repeat;
        }
        .el-select,
        .el-input--suffix {
          width: 92.006px;
          height: 27.994px;
          position: relative;
          .el-input,
          .el-input__inner {
            width: 92.006px;
            height: 27.994px;
          }
        }
      }
      .searchBar {
        padding: 27.994px 35.002px;
        background: white;
        box-shadow: 0px 0px 12.998px 0px rgba(0, 0, 0, 0.1);
        border-radius: 3.994px;
        .row + .row {
          margin-top: 35.002px;
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
        padding: 0 33.005px;
        border-radius: 6.01px;
        background: #3498db;
        color: white;
        &.deep {
          background: #0f6baa;
        }
        &.cancel {
          background: white;
          color: #666666;
        }
        &:hover {
          background: #0f6baa;
          color: white;
        }
      }

      .el-input,
      .el-input__inner {
        width: 150.01px;
        height: 27.994px;
      }
      .dyrow + .dyrow {
        margin-top: 20.006px;
      }
      .dyrow {
        display: flex;
        align-items: center;
        > div:nth-of-type(1) {
          flex-shrink: 0;
          padding-top: 6px;
          align-self: start;
        }
        > span {
          flex-shrink: 0;
          margin-right: 14.995px;
        }
      }
    }
    .el-transfer {
      display: flex;
      .el-transfer-panel {
        width: 271px;
        border: none;
        .el-transfer-panel__header {
          height: 36.998px;
          background: rgba(238, 238, 238, 1);
          border: 0.998px solid rgba(204, 204, 204, 1);
          .el-checkbox {
            height: 36.998px;
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
          height: 288px;
          border: 0.998px solid #cecece;
        }
      }
      .el-transfer__buttons {
        padding: 0 10.003px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: rotate(180deg);
        .el-button + .el-button {
          margin-top: 18.01px;
        }
        .el-button {
          width: 78.01px;
          height: 32.006px;
          line-height: 32.006px;
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
    .require {
      position: relative;
      &::before {
        content: "*";
        color: red;
        margin-right: 1.997px;
        position: absolute;
        left: -8.006px;
        top: 2.995px;
      }
    }
    .pagin {
      box-sizing: border-box;
      width: 1635.84px;
      height: 57.6px;
      box-shadow: 0px 0px 12.998px 0px rgba(0, 0, 0, 0.1);
      background: white;
      position: fixed;
      z-index: 800;
      bottom: 0px;
      right: 39.36px;
      margin-top: 34.003px;
      padding-right: 18.01px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > span {
        color: #666666;
      }
    }
    .el-pagination {
      height: 30.01px;
      .el-pagination__sizes {
        height: 30.01px;
        margin-right: 20px;
        .el-select,
        .el-select--mini {
          height: 30.01px;
          .el-input,
          .el-input__inner {
            width: 96px !important;
            height: 30.01px !important;
            padding: 0;
            .el-input__suffix {
              display: none;
            }
          }
        }
      }
      button {
        padding: 0;
        margin-right: 10.003px;
        width: 30.01px;
        height: 30.01px;
        border: 0.998px solid #666666;
        border-radius: 3.994px;
        i {
          transform: scale(1.5);
        }
      }

      .el-pager {
        .number {
          padding: 0;
          width: 30.01px;
          height: 30.01px;
          line-height: 30.01px;
          border: 0.998px solid #666666;
          border-radius: 3.994px;
          margin-right: 10.003px;
          &.active {
            color: white;
            background: #3498db;
            border: 0.998px solid #3498db;
          }
        }
      }
    }
  }
  .el-dialog {
    min-height: 300px;
    border-radius: 3.994px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .el-dialog__header {
      height: 59.002px;
      line-height: 59.002px;
      padding: 0 30.01px;
      background: #3498db;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .el-dialog__title {
        color: white;
      }
      .el-dialog__headerbtn {
        position: static;
      }
      .el-dialog__close {
        width: 25.997px;
        line-height: 25.997px;
        background: white;
        border-radius: 50%;
      }
    }
    .el-dialog__body {
      padding: 47.002px 35.002px;
      flex-grow: 1;
    }
    .el-dialog__footer {
      padding: 20.006px 30.01px;
      border-top: 0.998px solid #cccccc;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
  .input-150 {
    .el-input,
    .el-input__inner {
      width: 150px !important;
    }
  }
  .input-300{
    .el-input,
    .el-input__inner {
      width: 300px !important;
    }
  }
  .sel-150 {
    .select,
    .el-select,
    .el-input,
    .el-input__inner {
      width: 150px !important;
    }
  }
  .sel-200 {
    .select,
    .el-select,
    .el-input,
    .el-input__inner {
      width: 200px !important;
    }
  }
</style>
