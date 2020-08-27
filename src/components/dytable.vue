<template>
  <div class="box">
    <el-table
      :data="tableData"
      :border="true"
      :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'0.833vw',background:'#eeeeee'}"
      :row-style="{height:'2vw'}"
      style="width: 100%"
    >
      <el-table-column
        align="center"
        v-for="(item,index) in tableCol"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
      ></el-table-column>
      <slot></slot>
    </el-table>
    <div class="pagin">
      <span>共有{{total}}条记录</span>
      <el-pagination
        @size-change="sizeChange"
        @current-change="pageChange"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="10"
        :page-count='count'
        layout=" sizes, prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      tableCol: {
        type: Array,
      },
      tableData: {
        type: Array,
      },
      sizeChange: {
        type: Function,
      },
      pageChange: {
        type: Function,
      },
      count: {
        type: Number,
        default: 1,
      },
      total:{
        type: Number,
        default: 1,
      }
    },
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  .box {
    height: 30vw;
    overflow: scroll;
    background: white;
    box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
    padding: 1.875vw;
    border-radius: 0.208vw;
    position: relative;
    .el-table {
      margin-bottom: 2.604vw;
      .el-table__body-wrapper tbody {
        min-height: 29.792vw;
      }
      a {
        cursor: pointer;
      }
      a + a {
        margin-left: 0.521vw;
      }
      a:nth-of-type(n + 2) {
        &::before {
          content: "|";
          margin-right: 0.521vw;
        }
      }
    }
    .pagin {
      box-sizing: border-box;
      width: 85.2vw;
      height: 2.604vw;
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
          position: relative;
          top: -0.156vw;
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
        i{
          transform: scale(1.5);
        }
      }
      
      .el-pager{
        .number {
          padding: 0;
          width: 1.563vw;
          height:1.563vw;
          line-height: 1.563vw;
          border: 0.052vw solid #666666;
          border-radius: 0.208vw;
           margin-right: 0.521vw;
           &.active{
             color: white;
             background: #3498db;
             border: 0.052vw solid #3498db;
           }
        }

        }
    }
  }
</style>