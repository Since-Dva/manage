<template>
  <div class="_list">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>定损单号：</span>
          <el-input v-model="accountId" @blur="check" placeholder="请输入单号"></el-input>
        </div>
        <div>
          <span>保险机构：</span>
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>定损员：</span>
          <el-input v-model="person" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>报案号：</span>
          <el-input v-model="baoan" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>车型：</span>
          <el-input v-model="cartype" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>车牌号：</span>
          <el-input v-model="carID" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>VIN号：</span>
          <el-input v-model="vinID" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="row">
        <div>
          <div>
            <span>承修单位：</span>
            <el-input v-model="repair" placeholder="请输入内容"></el-input>
          </div>
          <div class="time">
            <span>创建时间：</span>
            <el-date-picker :clearable="false" v-model="startTime" type="date" placeholder="开始日期"></el-date-picker>
            <span>—</span>
            <el-date-picker :clearable="false" v-model="endTime" type="date" placeholder="结束日期"></el-date-picker>
          </div>
          <div>
            <span>订单状态：</span>
            <el-input v-model="dingdan" placeholder="请输入内容"></el-input>
          </div>
          <div>
            <span>跟进人：</span>
            <el-input v-model="genjinname" placeholder="请输入内容"></el-input>
          </div>
        </div>
        <el-button>搜索</el-button>
        <el-button @click="clearCondition">清除</el-button>
        <el-button class="deep" @click="showOffModal">订单跟进管理</el-button>
      </div>
    </div>
    <div class="tableBox">
      <xybTable
        :tableCol="tableCol"
        :tableData="tableData"
        :sizeChange="sizeChange"
        :pageChange="pageChange"
        :size="size"
        :count="count"
        :total="total"
        :rowheight="2.15"
      >
      </xybTable>
    </div>
    <!-- 跟进管理 -->
    <el-dialog title="跟进管理" :visible.sync="offModal" width="40.677vw">
      <div class="top">
        <div>
          <span class="require">商务人员：</span>
          <el-select v-model="status1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div>
          <span class="require">商务人员：</span>
          <el-select v-model="status2">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="content1">
        <div>
          <div>
            <span>当前跟进中</span>
            <div>
              <el-input placeholder="输入友商名称" v-model="value1"></el-input>
              <el-button>搜索</el-button>
            </div>
          </div>
          <div>
            <span>当前跟进中</span>
            <div>
              <el-input placeholder="输入友商名称" v-model="value2"></el-input>
              <el-button>搜索</el-button>
            </div>
          </div>
        </div>
        <div class="transfer">
          <el-transfer :titles="['定损单号','定损单号']" v-model="transValue" :data="trans1"></el-transfer>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="offModalOK">确 定</el-button>
        <el-button class="cancel" @click="offModal=false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import tabs from "../../components/tabs";
  import xybTable from "../../components/dytable";
  export default {
    components: {
      tabs,
      xybTable,
    },
    data() {
      return {
        accountId: null,
        name: null,
        person: null,
        baoan: null,
        cartype: null,
        carID: null,
        vinID: null,
        repair: null,
        startTime: null,
        endTime: null,
        dingdan:null,
        genjinname:null,
        imageUrl: null,
        transValue: [],
        status1:null,
        status2:null,
        trans1: [
          { key: 1, label: "备选项1" },
          { key: 2, label: "备选项2" },
          { key: 3, label: "备选项3" },
          { key: 4, label: "备选项4" },
        ],
        size: 10,
        count: 1,
        total: 0,
        value1: null, //跟进管理过滤
        value2: null,
        search: {
          value1: null,
          value2: null,
          value3: null,
        },
        add: {
          value1: null,
          value2: null,
          value3: null,
          value4: null,
          value5: null,
          value6: null,
          value7: null,
          value8: null,
          value9: null,
          value10: null,
          value11: null,
          value12: null,
          value13: null,
          value14: null,
        },
        options: [
          { label: "全部", value: 1 },
          { label: "部门一", value: 2 },
        ],
        sexs: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
        ],
        dataIdx: null, //选中table序号
        reModal: false,
        offModal: false,
        deleteModal: false,
        postName: null, //姓名
        position: null, //职位
        value: [], //权限分配
        dataList: [
          { key: 1, label: "备选项1" },
          { key: 2, label: "备选项2" },
          { key: 3, label: "备选项3" },
        ], //权限分配
        tableCol: [
          { prop: "index", label: "序列号",width:'80%' },
          { prop: "id", label: "ID" ,width:'80%'},
          { prop: "name", label: "保险机构",width:'220%'},
          { prop: "person", label: "定损员"},
          { prop: "baoan", label: "报案号" },
          { prop: "cartype", label: "车型" ,width:'190%'},
          { prop: "carID", label: "车牌号" },
          { prop: "vinID", label: "VIN号" },
          { prop: "repair", label: "承修单位"},
          { prop: "time", label: "创建时间",width:'150%'},
          { prop: "state", label: "订单状态"},
          { prop: "genjin", label: "跟进人"},
        ],
        tableData: [
          {
            index: 1,
            id: "BX00001",
            name: "太平洋保险公司（重庆分公司）",
            person: "郭靖",
            baoan: "118685516186",
            cartype: "【宝马BMW7201DM】",
            carID: "渝DN7689",
            vinID: "118685516186",
            repair: "老杨修车",
            time: "2020/7/30 15:59",
            state: "未受理",
            genjin: "郭靖",
          },
        ],
      };
    },
    methods: {
      check(){
        let reg=/^[0-9a-zA-Z]*$/g
        if(!reg.test(this.accountId)){
            this.accountId=''
            this.$message.error('ID只能为数字或字母')
        }
      },
      clearCondition() {
        this.accountId = null;
        this.name = null;
        this.account = null;
        this.phone = null;
        this.createName = null;
        this.startTime = null;
        this.endTime = null;
      },
      showOffModal() {
        this.offModal = true;
      },
      editModalOK() {
        this.editModal = false;
      },
      offModalOK() {
        this.offModal = false;
      },
      sizeChange(e) {
        this.size = e;
      },
      pageChange(e) {
        this.count = e;
      },
    },
  };
</script>

<style lang='scss'>
  ._list {
    .searchBar {
      position: relative;
      .row {
        >div{
          .el-input,.el-input__inner{
            width: 5.729vw !important;
          }
        }
        div + div {
          margin-left: 2.448vw;
        }
        .el-button:nth-of-type(1) {
          margin-left: 3.802vw;
        }
        .select {
          margin-left: 1vw;
        }
      }
      .row:nth-of-type(2) {
        .time {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .el-input {
            width: 7.17vw !important;
            .el-input__inner {
              width: 7.17vw !important;
            }
          }
          > span:nth-of-type(2) {
            color: #d2d2d2;
            margin: 0 0.521vw;
          }
          .el-input__prefix {
            display: none;
          }
        }
      }
    }
    .el-dialog__body {
      padding-top: 1.042vw;
    }
    .el-dialog {
      .top {
        padding-bottom: 1.302vw;
        display: flex;
        justify-content: space-between;
        border-bottom: 0.052vw solid #f1f1f1;
        >div{
          width: 14.115vw;
        }
      }
      .content1 {
        > div:nth-of-type(1) {
          width: 100%;
          display: flex;
          justify-content: space-between;
          > div {
            width: 14.115vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            >div{
              width: 14.115vw;
              display: flex;
              justify-content: space-between;
            }
            > span {
              color: #666666;
              margin: 1.146vw 0;
            }
            .el-input,
            .el-input__inner {
              width: 8.854vw !important;
            }
            .el-button {
              padding: 0 !important;
              text-align: center;
              width: 4.167vw !important;
              height: 1.45vw !important;
              line-height: 1.45vw !important;
              margin-left: 1.042vw;
            }
          }
        }
        .transfer {
          width: 100%;
          margin-top: 1.042vw;
          .el-transfer {
            display: flex;
            justify-content: space-between;
          }
          .el-transfer-panel__header {
            .el-checkbox {
              padding-right: 6.25vw !important;
              color: #333333;
            }
          }
        }
      }
    }
    .el-dialog {
      .top {
      }
    }
    .el-dialog:nth-of-type(3) {
      padding: 2.24vw 5.729vw;
    }
    .powerTitle {
      line-height: 1.563vw;
      margin-bottom: 1.042vw;
      display: flex;
      justify-content: space-between;
    }
  }
</style>