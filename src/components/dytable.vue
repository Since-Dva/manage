<template>
  <div class="box">
    <el-table
      :data="filterData"
      :border="true"
      :max-height="maxHeight"
      :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'15.994px',background:'#eeeeee'}"
      :row-style="{height:rowheight+'vw'}"
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
        sizeChange:()=>{

        },
      },
      pageChange: {
        type: Function,
        pageChange:()=>{

        },
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
      maxHeight: {
        type: Number,
        default: 600,
      },
      rowheight: {
        type: Number,
        default: 2.86,
      },
      pagination:{
        type: Boolean,
        default: true,
      }
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
    box-shadow: 0px 0px 12.998px 0px rgba(0, 0, 0, 0.1);
    padding: 36px;
    border-radius: 3.994px;
    position: relative;
    background: white;
    .el-table {
      // margin-bottom: 49.997px;
      a {
        cursor: pointer;
      }
      a + a {
        margin-left: 10.003px;
      }
      a:nth-of-type(n + 2) {
        &::before {
          content: "|";
          margin-right: 10.003px;
        }
      }
      .el-table__row{
        &:hover{
          td{
            background: #d6eaf8;
          }
        }
      }
    }
  }
</style>