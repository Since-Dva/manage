<template>
  <div>
    <tabs :list="tabList"></tabs>
    <div class="searchBar">
      <div>
        <span>标题：</span>
        <el-input v-model="title" placeholder="请输入内容"></el-input>
      </div>
      <div>
        <span>创建人：</span>
        <el-input v-model="createName" placeholder="请输入内容"></el-input>
      </div>
      <el-button>搜索</el-button>
      <el-button @click="clearCondition">清除</el-button>
      <el-button class="deep" @click="showAddModal">＋新增</el-button>
    </div>
    <div class="tableBox">
      <xybTable :tableCol="tableCol" :tableData="tableData">
        <el-table-column align="center" label="操作" width="200%">
          <template slot-scope="scope">
            <a @click="showPowerModal(scope.row)">权限分配</a>
            <a @click="showEditModal(scope.row)">编辑</a>
            <a @click="showDeleteModal(scope.row)">删除</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>
    <!-- 权限分配 -->
    <el-dialog title="权限分配" :visible.sync="powerModal" width="581px">
      <div class="powerTitle">
        <span class="require">职位名称：{{tableData[dataIdx-1]&&tableData[dataIdx-1].name}}</span>
        <span>权限描述：{{tableData[dataIdx-1]&&tableData[dataIdx-1].describe}}</span>
      </div>
      <el-transfer :titles="['可分配权限','已分配权限']" v-model="value" :data="dataList"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="powerModalOK">确 定</el-button>
        <el-button class="cancel" @click="powerModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="编辑职位权限" :visible.sync="editModal" width="435px">
      <div class="dyrow">
        <span class="require">职位名称：</span>
        <el-input type="text" v-model="postName" />
      </div>
      <div class="dyrow">
        <span class="require">权限描述：</span>
        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="descript"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editModalOK">确 定</el-button>
        <el-button class="cancel" @click="editModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog title="删除职位权限" :visible.sync="deleteModal" width="435px">
      <span>是否确认删除当前职位权限？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog title="新增职位权限" :visible.sync="addModal" width="435px">
      <div class="dyrow">
        <span class="require">职位名称：</span>
        <el-input type="text" v-model="postName" />
      </div>
      <div class="dyrow">
        <span class="require">权限描述：</span>
        <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="descript"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addModalOK">确 定</el-button>
        <el-button class="cancel" @click="addModalcancel">取 消</el-button>
      </span>
    </el-dialog>
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
      title: null,
      createName: null,
      dataIdx: null,//选中table序号
      powerModal: false,
      editModal: false,
      deleteModal: false,
      addModal: false,
      postName:null,//职位名称
      descript:null,//职位描述
      value:[],//权限分配
      dataList:[{key: 1,label: '备选项1'},{key: 2,label: '备选项2'},{key: 3,label: '备选项3'},],//权限分配
      tableCol: [
        { prop: "index", label: "序列号" },
        { prop: "id", label: "ID" },
        { prop: "name", label: "职位名称" },
        { prop: "describe", label: "职位描述", width: "500%" },
        { prop: "number", label: "现有职位数" },
        { prop: "creater", label: "创建人" },
        { prop: "time", label: "创建时间" },
      ],
      tableData: [
        {
          index: 1,
          id: 10001,
          name: "运营主管",
          describe: "业务相关菜单，查看，编辑，分配权限",
          number: 2,
          creater: "黄蓉",
          time: "2020/7/30 15:59",
        },
      ],
    };
  },
  methods: {
    clearCondition() {
      this.title = null;
      this.createName = null;
    },
    //权限分配
    showPowerModal(info) {
      this.dataIdx = info.index;
      this.powerModal = true;
    },
    powerModalOK() {
      this.powerModal = false;
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
    showAddModal(){
      this.addModal = true
      this.postName=null
      this.descript=null
    },
    addModalOK() {
      this.addModal = false;
    },
    addModalcancel(){
      this.addModal = false;
      this.postName=null
      this.descript=null
    }
  },
  computed: {
    tabList() {
      return this.$store.state.tabs;
    },
  },
};
</script>

<style lang='scss'>
.searchBar {
  position: relative;
  div + div {
    margin-left: 47px;
  }
  .el-button:nth-of-type(1) {
    margin-left: 73px;
  }
  .deep {
    position: absolute;
    right: 35px;
  }
}
.el-dialog__body .dyrow:nth-of-type(2){
  align-items: flex-start !important;
  margin-top: 20px;
}
.el-dialog__body .dyrow .el-input,
.el-dialog__body .dyrow .el-input .el-input__inner,
.el-dialog__body .dyrow .el-textarea,
.el-dialog__body .dyrow .el-textarea .el-textarea__inner {
  width: 220px !important;
}
.el-dialog:nth-of-type(1) .el-dialog__body{
  padding: 0 48px 35px 48px !important;
}
.powerTitle{
  line-height: 70px;
  display: flex;
  justify-content: space-between;
}
</style>