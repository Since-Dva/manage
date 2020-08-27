<template>
  <div>
    <el-table
      :data="tableData"
      :border="true"
      :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'16px',background:'#eeeeee'}"
      :row-style="{height:'63px'}"
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
    <el-pagination
      @size-change="sizeChange"
      @current-change="pageChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100, 200]"
      :page-size="10"
      layout="total, sizes, prev, pager, next"
      :total="tableData.lenth"
    ></el-pagination>
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
    currentPage: {
      type: Number,
      default:1
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.el-table {
  margin-top: 20px;
  padding: 36px;
  box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  background: white;
  .el-table__body-wrapper tbody{
    min-height: 572px;
  }
  a {
    cursor: pointer;
  }
  a + a {
    margin-left: 10px;
  }
  a:nth-of-type(n + 2) {
    &::before {
      content: "|";
      margin-right: 10px;
    }
  }
}
</style>