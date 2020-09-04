<template>
  <div class="accountList">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>工号：</span>
          <el-input v-model="number" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>姓名：</span>
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>部门：</span>
          <div class="select">
            <el-select v-model="search.value1">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="select">
            <el-select v-model="search.value2">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="select">
            <el-select v-model="search.value3">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div>
          <span>联系电话：</span>
          <el-input v-model="phone" placeholder="请输入内容"></el-input>
        </div>
      </div>
      <div class="row">
        <div>
          <el-button>搜索</el-button>
          <el-button @click="clearCondition">清除</el-button>
        </div>
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
            <a @click="showReModal(scope.row)">重置密码</a>
            <a @click="showDeleteModal(scope.row)">删除账号</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>
    <!-- 重置 -->
    <el-dialog title="重置确认" :visible.sync="reModal" width="22.656vw">
      <span>是否确认重置？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="reModalOK">确 定</el-button>
        <el-button class="cancel" @click="reModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog title="删除确认" :visible.sync="deleteModal" width="22.656vw">
      <span>是否确认删除当前账号？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog custom-class="addmodal" title="新增账号" :visible.sync="addModal" width="30.26vw">
      <div class="dyrow">
        <div>
          <span class="require">姓名：</span>
        </div>
        <el-input type="text" v-model="postName" />
      </div>
      <div class="dyrow">
        <div>
          <span class="require">部门：</span>
        </div>
        <div class="select">
          <el-select v-model="add.value1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select">
          <el-select v-model="add.value2">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select">
          <el-select v-model="add.value3">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">职位：</span>
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
    <div :class="['tip',tip?'active':'' ]">重置成功</div>
  </div>
</template>

<script>
  import tabs from "../../../components/tabs";
  import xybTable from "../../../components/dytable";
  export default {
    components: {
      tabs,
      xybTable,
    },
    data() {
      return {
        tip:false,
        number: null,
        name: null,
        phone: null,
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
        reModal: false,
        editModal: false,
        deleteModal: false,
        addModal: false,
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
          { prop: "id", label: "工号" },
          { prop: "name", label: "姓名" },
          { prop: "describe", label: "部门" },
          { prop: "number", label: "职位" },
          { prop: "num", label: "账号" },
          { prop: "phone", label: "联系电话" },
          { prop: "creater", label: "创建人" },
          { prop: "time", label: "创建时间" },
        ],
        tableData: [
          {
            index: 1,
            id: 10001,
            name: "郭靖",
            describe: "运营部/运营一组",
            number: "运营主管",
            num: "17623888288",
            phone: "17623888288",
            creater: "黄蓉",
            time: "2020/7/30 15:59",
          },
        ],
      };
    },
    methods: {
      clearCondition() {
        this.number = null;
        this.name = null;
        this.phone = null;
        this.value1 = null;
        this.value2 = null;
        this.value3 = null;
      },
      //权限分配
      showReModal(info) {
        this.dataIdx = info.index;
        this.reModal = true;
      },
      reModalOK() {
        this.reModal = false;
        this.tip=true
        setTimeout(() => {
          this.tip=false
        }, 2000);
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
  .accountList {
    .searchBar {
      position: relative;
      .row {
        div + div {
          margin-left: 2.448vw;
        }
        .select{
          margin-left: 1vw;
        }
        .el-button:nth-of-type(1) {
          margin-left: 3.802vw;
        }
      }
      .row:nth-of-type(2) {
        display: flex;
        justify-content: space-between;
        > div {
          width: 11.458vw;
          > button:nth-of-type(1) {
            margin-left: 0;
          }
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
    .dyrow .select .el-select .el-input,
    .dyrow .select .el-select .el-input--suffix,
    .dyrow .select .el-select .el-input .el-input__inner {
      width: 5vw !important;
    }
    .addmodal {
      width: 30.26vw;
      .dyrow {
        width: 21vw;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > div:nth-of-type(1){
          width: 5vw !important;
          span{
            float: right;
          }
        }
        .select{
          margin-right: 0.521vw;
        }
      }
      .el-dialog__body {
        padding: 2.76vw 5.208vw !important;
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
    .tip {
      text-align: center;
      width: 189px;
      height: 42px;
      line-height: 42px;
      background: #cbcbcb;
      border-radius: 4px;
      position: fixed;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
      opacity: 0;
      &.active {
        z-index: 99;
        opacity: 1;
      }
    }
  }
</style>