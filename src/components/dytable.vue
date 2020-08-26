<template>
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
</template>

<script>
export default {
    props:{
        tableCol:{
            type:Array
        },
        tableData:{
            type:Array
        }
    },
  data() {
    return {

    };
  },
};
</script>

<style lang="scss">
.tableBox{
      margin-top: 20px;
      padding: 36px;
      box-shadow:0px 0px 13px 0px rgba(0, 0, 0, 0.1);
      border-radius:4px;
      background: white;
      a{
        cursor: pointer;
      }
      a+a{
        margin-left: 10px;
      }
      a:nth-of-type(n+2){
        &::before{
          content: '|';
          margin-right: 10px;
        }
      }
    }
</style>