<template>
  <div class="rolepermission">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>职位名称：</span>
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
        <el-table-column align="center" label="操作" width="300%">
          <template slot-scope="scope">
            <a @click="showPowerModal(scope.row)">权限分配</a>
            <a @click="showEditModal(scope.row)">编辑</a>
            <a @click="showDeleteModal(scope.row)">删除</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>
    <!-- 权限分配 -->
    <el-dialog title="跟进管理" :visible.sync="powerModal" width="40.677vw">
      <div class="powerTitle">
        <span class="require">职位名称：{{tableData[dataIdx-1]&&tableData[dataIdx-1].name}}</span>
        <span>权限描述：{{tableData[dataIdx-1]&&tableData[dataIdx-1].describe}}</span>
      </div>
      <treeTransfer
        :title="['可分配权限','已分配权限']"
        :from_data='data'
        :to_data='toData'
        @addBtn='add'
        @removeBtn='remove'
        openAll
        :defaultProps="{label:'label'}"
        mode='transfer'
      ></treeTransfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="powerModalOK">确 定</el-button>
        <el-button class="cancel" @click="powerModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="编辑职位权限" :visible.sync="editModal" width="22.656vw">
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
    <el-dialog title="删除职位权限" :visible.sync="deleteModal" width="22.656vw">
      <span>是否确认删除当前职位权限？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog title="新增职位权限" :visible.sync="addModal" width="22.656vw">
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
  import treeTransfer from 'el-tree-transfer'
  export default {
    components: {
      tabs,
      xybTable,
      treeTransfer
    },
    data() {
      return {
        title: null,
        createName: null,
        dataIdx: null, //选中table序号
        powerModal: false,
        editModal: false,
        deleteModal: false,
        addModal: false,
        postName: null, //职位名称
        descript: null, //职位描述
        canData: "", //权限分配
        alreadyData: "", //权限分配
        value1: false,
        value2: false,
        size: 10,
        count: 1,
        total: 0,
         //权限分配
        tableCol: [
          { prop: "index", label: "序列号" },
          { prop: "id", label: "ID" },
          { prop: "name", label: "职位名称" },
          { prop: "describe", label: "职位描述", width: "300%" },
          { prop: "number", label: "现有职位数" },
          { prop: "creater", label: "创建人" },
          { prop: "time", label: "创建时间" },
        ],
        data:[
          {
            label: "量子信云（45）",
            id: '1',
            pid:'0',
            children: [
              {
                label: "商务部（5）",
                pid:'1',
                id: '1-1',
                children: [
                  {
                    label: "商务部1组",
                    pid:'1-1',
                    id: '1-1-1',
                  },
                ],
              },
              {
                label: "运营部（8）",
                id: '1-2',
                pid:'1',
                children: [
                  {
                    label: "运营部一组（4）",
                    pid:'1-2',
                    id: '1-2-1',
                    children: [
                      { label: "郭靖",pid:'1-2-1', id: '1-2-1-1' },
                      { label: "黄蓉",pid:'1-2-1', id: '1-2-1-2' },
                      { label: "小龙女", pid:'1-2-1',id: '1-2-1-3' },
                      { label: "杨过",pid:'1-2-1', id: '1-2-1-4' },
                    ],
                  },
                  {
                    label: "运营部二组（4）",
                    pid:'1-2',
                    id: '1-2-2',
                    children: [
                      { label: "郭靖1",pid:'1-2-2', id: '1-2-2-1' },
                      { label: "黄蓉2", pid:'1-2-2',id: '1-2-2-2' },
                      { label: "小龙女3", pid:'1-2-2',id: '1-2-2-3' },
                      { label: "杨过4",pid:'1-2-2', id: '1-2-2-4' },
                    ],
                  },
                ],
              },
            ],
          },
        ],
        toData: [],
        defaultProps: {
          children: "children",
          label: "label",
        },
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
      add(){
      },
      remove(){
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
  .rolepermission {
    .searchBar {
      position: relative;
      div + div {
        margin-left: 2.448vw;
      }
      .el-button:nth-of-type(1) {
        margin-left: 3.802vw;
      }
      .deep {
        position: absolute;
        right: 1.823vw;
      }
    }
    .el-dialog__body {
      padding-top: 1.042vw;
    }
    .el-dialog__body .dyrow:nth-of-type(2) {
      align-items: flex-start !important;
      margin-top: 1.042vw;
    }
    .el-dialog__body .dyrow .el-input,
    .el-dialog__body .dyrow .el-input .el-input__inner,
    .el-dialog__body .dyrow .el-textarea,
    .el-dialog__body .dyrow .el-textarea .el-textarea__inner {
      width: 11.458vw !important;
    }
    .el-dialog:nth-of-type(1) .el-dialog__body {
      padding: 1.042vw 2.5vw 1.823vw 2.5vw !important;
    }
    .powerTitle {
      line-height: 1.563vw;
      padding-bottom: 1vw;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.052vw solid #cbcbcb;
    }
      .wl-transfer{
        height: 18.229vw !important;
      }
    .transfer {
      width: 35.573vw !important;
      margin-top: 1.198vw;
      height: 19.792vw !important;
      .el-tree-node__content{
        padding: 0.26vw 0;
      }
      .transfer-left,.transfer-right{
        width: 14.115vw;
      }
    }
  }
</style>