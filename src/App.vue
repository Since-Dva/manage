<template>
  <div id="app">
    <dyheader v-if="$route.path!=='/login'"></dyheader>
    <div class="content">
      <dyaside v-if="$route.path!=='/login'"></dyaside>
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
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background: #efefef;
    font-family: Microsoft YaHei;
    font-size: 0.833vw;
    color: rgba(102, 102, 102, 1);
    .content {
      display: flex;
      .el-main {
        box-sizing: border-box;
        padding: 0vw 1.823vw 0vw 1.042vw;
        .tableBox {
          margin-top: 1.042vw;
          height: 38.438vw;
          overflow: scroll;
        }

        .el-select,
        .el-input--suffix {
          width: 4.792vw;
          height: 1.458vw;
          position: relative;
          .el-input,
          .el-input__inner {
            width: 4.792vw;
            height: 1.458vw;
          }
          // .el-select {
          //   border-radius: 0.208vw;
          //   border: 0.052vw solid #dcdfe6;
          //   outline: none;
          //   width: 4.792vw;
          //   height: 1.458vw;
          //   padding-left: 0.521vw;
          //   color: #666666;
          //   option {
          //     border: 0.052vw solid #dcdfe6 !important;
          //     background: white;
          //   }
          // }
          // &::after {
          //   content: "";
          //   display: block;
          //   width: 1.458vw;
          //   height: 1.458vw;
          //   border-radius: 0 0.208vw 0.208vw 0;
          //   background: #3498db url("./assets/img/bottomArr.png") center no-repeat;
          //   background-size: 100%;
          //    pointer-events: none;
          //   position: absolute;
          //   top: 0;
          //   right: 0;
          //   z-index: 999;
          // }
        }
      }
      .searchBar {
        padding: 1.458vw 1.823vw;
        background: white;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0.208vw;
        .row + .row {
          margin-top: 1.823vw;
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
        margin: 0 0 0 1.25vw;
      }
      .el-button {
        height: 1.875vw;
        line-height: 1.875vw;
        padding: 0 1.719vw;
        border-radius: 0.313vw;
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
        width: 7.813vw;
        height: 1.458vw;
      }
      .dyrow + .dyrow {
        margin-top: 1.042vw;
      }
      .dyrow {
        display: flex;
        align-items: center;
        > span {
          flex-shrink: 0;
          margin-right: 0.781vw;
        }
      }
    }
    .el-transfer {
      display: flex;
      .el-transfer-panel {
        width: 9.635vw;
        border: none;
        .el-transfer-panel__header {
          height: 1.927vw;
          background: rgba(238, 238, 238, 1);
          border: 0.052vw solid rgba(204, 204, 204, 1);
          .el-checkbox {
            height: 1.927vw;
            padding-right: 1.875vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .el-checkbox__label span {
              display: none;
            }
          }
        }
        .el-transfer-panel__body {
          height: 15vw;
          border: 0.052vw solid #cecece;
          margin-top: 1.042vw;
        }
      }
      .el-transfer__buttons {
        padding: 0 0.521vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: rotate(180deg);
        .el-button + .el-button {
          margin-top: 0.938vw;
        }
        .el-button {
          width: 4.063vw;
          height: 1.667vw;
          line-height: 1.667vw;
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
        margin-right: 0.104vw;
        position: absolute;
        left: -0.417vw;
        top: 0.156vw;
      }
    }
    .pagin {
      box-sizing: border-box;
      width: 85.2vw;
      height: 3vw;
      box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
      background: white;
      position: fixed;
      z-index: 800;
      bottom: 0vw;
      right: 2.05vw;
      margin-top: 1.771vw;
      padding-right: 0.938vw;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      > span {
        color: #666666;
      }
    }
    .el-pagination {
      height: 1.563vw;
      .el-pagination__sizes {
        height: 1.563vw;
        .el-select,
        .el-select--mini {
          height: 1.563vw;
          .el-input,
          .el-input__inner {
            width: 5vw !important;
            height: 1.563vw !important;
            padding: 0;
            .el-input__suffix {
              display: none;
            }
          }
        }
      }
      button {
        padding: 0;
        margin-right: 0.521vw;
        width: 1.563vw;
        height: 1.563vw;
        border: 0.052vw solid #666666;
        border-radius: 0.208vw;
        i {
          transform: scale(1.5);
        }
      }

      .el-pager {
        .number {
          padding: 0;
          width: 1.563vw;
          height: 1.563vw;
          line-height: 1.563vw;
          border: 0.052vw solid #666666;
          border-radius: 0.208vw;
          margin-right: 0.521vw;
          &.active {
            color: white;
            background: #3498db;
            border: 0.052vw solid #3498db;
          }
        }
      }
    }
  }
  .el-dialog {
    min-height: 15.625vw;
    border-radius: 0.208vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    .el-dialog__header {
      height: 3.073vw;
      line-height: 3.073vw;
      padding: 0 1.563vw;
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
        width: 1.354vw;
        line-height: 1.354vw;
        background: white;
        border-radius: 50%;
      }
    }
    .el-dialog__body {
      padding: 2.448vw 1.823vw;
      flex-grow: 1;
    }
    .el-dialog__footer {
      padding: 1.042vw 1.563vw;
      border-top: 0.052vw solid #cccccc;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }
  }
</style>
