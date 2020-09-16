<template>
  <div class="box">
    <el-table
      :data="filterData"
      :border="true"
      :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'0.833vw',background:'#eeeeee'}"
      :row-style="{height:rowheight+'vw'}"
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
    <div v-if="pagination" class="pagin">
      <span>共有{{total}}条记录</span>
      <el-pagination
        @size-change="sizeChange"
        @current-change="pageChange"
        :page-sizes="[10, 50, 100, 200]"
        :page-size="size"
        :page-count="count"
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
        sizeChange: () => {},
      },
      pageChange: {
        type: Function,
        pageChange: () => {},
      },
      count: {
        type: Number,
        default: 1,
      },
      size: {
        type: Number,
        default: 10,
      },
      total: {
        type: Number,
        default: 0,
      },
      // maxHeight: {
      //   type: Number,
      //   default: 600,
      // },
      rowheight: {
        type: Number,
        default: 2.86,
      },
      pagination: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {};
    },
    computed: {
      filterData() {
        return this.tableData.slice(
          (this.count - 1) * this.size,
          this.count * this.size
        );
      },
    },
  };
</script>

<style lang="scss">
  .box {
    box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
    padding: 1.875vw;
    border-radius: 0.208vw;
    position: relative;
    background: white;
    .el-table {
      // margin-bottom: 2.604vw;
      .el-table__body-wrapper{
          height: 440px;
          overflow-y: scroll;
          }
      ::-webkit-scrollbar {
        width: 15px !important;
        height: 12px !important;
      }
      ::-webkit-scrollbar-track-piece {
        background-color: rgba(0, 0, 0, 0.2);
        // -webkit-border-radius: 0.313vw;
      }
      ::-webkit-scrollbar-thumb:vertical {
        height: 0.26vw;
        background-color: rgba(125, 125, 125, 0.5);
        // -webkit-border-radius: 0.313vw;
      }
      ::-webkit-scrollbar-thumb:horizontal {
        width: 0.26vw;
        background-color: rgba(125, 125, 125, 0.5);
        // -webkit-border-radius: 0.313vw;
      }
      overflow-y: scroll;
      .el-table__body-wrapper td,.el-table__body-wrapper th{
        padding: 0 !important;
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
      .el-table__row {
        &:hover {
          td {
            background: #d6eaf8;
          }
        }
      }
    }
  }
</style>