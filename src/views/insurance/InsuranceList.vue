<template>
  <div class="insuranceList">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>友商ID：</span>
          <el-input v-model="accountId" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>友商名称：</span>
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>地区：</span>
          <div class="select">
            <select v-model="search.value1">
              <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></option>
            </select>
          </div>
          <div class="select">
            <select v-model="search.value2">
              <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></option>
            </select>
          </div>
          <div class="select">
            <select v-model="search.value3">
              <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></option>
            </select>
          </div>
        </div>
        <div>
          <span>合作状态：</span>
           <div class="select">
            <select v-model="status">
              <option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></option>
            </select>
          </div>
        </div>
      </div>
      <div class="row">
        <div>
          <div>
            <span>创建人：</span>
            <el-input v-model="createName" placeholder="请输入内容"></el-input>
          </div>
          <div>
            <span>跟进人：</span>
            <el-input v-model="otherName" placeholder="请输入内容"></el-input>
          </div>
          <div class="time">
            <span>创建时间：</span>
            <el-date-picker v-model="startTime" type="date" placeholder="选择开始日期"></el-date-picker>
            <span>—</span>
            <el-date-picker v-model="endTime" type="date" placeholder="选择结束日期"></el-date-picker>
          </div>
        </div>
        <el-button>搜索</el-button>
        <el-button @click="clearCondition">清除</el-button>
        <el-button class="deep" @click="showAddModal">跟进管理</el-button>
        <el-button class="deep" @click="showAddModal">＋新增</el-button>
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
        :rowheight="2.6"
      >
        <el-table-column align="center" label="操作" width="220%">
          <template slot-scope="scope">
            <a @click="todedail(scope.row)">查看详情</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>
    <!-- 跟进管理 -->
    <el-dialog title="停用确认" :visible.sync="offModal" width="22.656vw">
      <span>是否确认停用？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="offModalOK">确 定</el-button>
        <el-button class="cancel" @click="offModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog custom-class="addmodal" title="新增账号" :visible.sync="addModal">
      <div class="dyrow">
        <div>
          <span class="require">归属友商：</span>
        </div>
        <div class="select">
          <select v-model="add.value1">
            <option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></option>
          </select>
        </div>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">定损员名称：</span>
        </div>
        <el-input type="text" v-model="position" />
      </div>
      <div class="dyrow">
        <div>
          <span class="require">联系电话：</span>
        </div>
        <el-input type="text" v-model="position" />
      </div>
      <div class="dyrow">
        <div>
          <span class="require">账号：</span>
        </div>
        <el-input type="text" v-model="position" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addModalOK">确 定</el-button>
        <el-button class="cancel" @click="addModalcancel">取 消</el-button>
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
      ascription: null,
      account: null,
      phone: null,
      createName: null,
      otherName: null,
      state: null,
      status: null,
      startTime: null,
      endTime: null,
      size: 10,
      count: 1,
      total: 0,
      search: {
        value1: null,
        value2: null,
        value3: null,
      },
      add: {
        value1: null,
        value2: null,
        value3: null,
      },
      options: [
        { label: "全部", value: 1 },
        { label: "部门一", value: 2 },
      ],
      dataIdx: null, //选中table序号
      addModal: false,
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
        { prop: "index", label: "序列号" },
        { prop: "id", label: "ID" },
        { prop: "name", label: "友商名称" },
        { prop: "address", label: "地区" },
        { prop: "number", label: "定损员数"},
        { prop: "state", label: "合作状态" },
        { prop: "creater", label: "创建人" },
        { prop: "gjname", label: "跟进人" },
        { prop: "time", label: "创建时间" },
      ],
      tableData: [
        {
          index: 1,
          id: 'BX00001',
          name: "郭靖",
          ascription: "中南汽配（重庆分公司）",
          account: "17623888288",
          phone: "17623888288",
          state: "启用",
          creater: "黄蓉",
          time: "2020/7/30 15:59",
        },
      ],
    };
  },
  methods: {
    clearCondition() {
      this.accountId = null;
      this.name = null;
      this.ascription = null;
      this.account = null;
      this.phone = null;
      this.createName = null;
      this.state = null;
      this.startTime = null;
      this.endTime = null;
    },
    showReModal(info) {
      this.dataIdx = info.index;
      this.reModal = true;
    },
    showOffModal() {
      this.offModal=true
    },
    reModalOK() {
      this.reModal = false;
    },
    //编辑
    showEditModal(info) {
      this.dataIdx = info.index;
      this.postName = info.name;
      this.descript = info.describe;
      this.editModal = true;
    },
    editModalOK() {
      this.editModal = false;
    },
    //删除
    showDeleteModal(info) {
      this.dataIdx = info.index;
      this.deleteModal = true;
    },
    deleteModalOK() {
      this.tableData.map((item, idx) => {
        if (item.index === this.dataIdx) {
          this.tableData.splice(idx, 1);
          return;
        }
      });
      this.deleteModal = false;
    },
    //新增
    showAddModal() {
      this.addModal = true;
      this.postName = null;
      this.descript = null;
    },
    addModalOK() {
      this.addModal = false;
    },
    addModalcancel() {
      this.addModal = false;
      this.postName = null;
      this.descript = null;
    },
    offModalOK(){
      this.offModal=false
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
.insuranceList {
  .searchBar {
    position: relative;
    .row {
      div + div {
        margin-left: 2.448vw;
      }
      .el-button:nth-of-type(1) {
        margin-left: 3.802vw;
      }
    }
    .row:nth-of-type(2) {
      .time {
        display: flex;
        justify-content: space-between;
        align-items: center;
        > span:nth-of-type(2) {
          color: #d2d2d2;
          margin: 0 0.521vw;
        }
        .el-input__prefix {
          display: none;
        }
      }
      .deep {
        position: relative;
        right: -3.8vw;
      }
    }
  }
  .el-dialog__body {
    padding-top: 1.042vw;
  }
  .el-dialog__body .dyrow .el-input,
  .el-dialog__body .dyrow .el-input .el-input__inner,
  .el-dialog__body .dyrow .el-textarea,
  .el-dialog__body .dyrow .el-textarea .el-textarea__inner {
    width: 10.417vw !important;
  }
  .addmodal {
    width: 22.656vw;
    .select,select{
      width: 10.417vw !important;
    }
    .dyrow {
      >div{
        width: 4.688vw;
        display: flex;
        justify-content: flex-end;
        margin-right: 0.521vw;
      }
    }
    .el-dialog__body {
      padding: 2.24vw 2.552vw !important;
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