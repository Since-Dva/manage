<template>
  <div class="systemNotice">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>公告ID：</span>
          <el-input v-model="id" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>标题：</span>
          <el-input v-model="title" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>创建人：</span>
          <el-input v-model="createName" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>后台系统：</span>
          <div class="select">
            <el-select v-model="system">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
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
      >
        <el-table-column align="center" label="操作" width="320%">
          <template slot-scope="scope">
            <a @click="showEditModal(scope.row)">编辑</a>
            <a @click="showDeleteModal(scope.row)">删除</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>

    <!-- 删除 -->
    <el-dialog title="删除确认" :visible.sync="deleteModal" width="22.656vw">
      <span>是否确认删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增/编辑 -->
    <el-dialog custom-class="addmodal" :title="type+'公告'" :visible.sync="addModal">
      <div class="dyrow">
        <div>
          <span class="require">后台系统：</span>
        </div>
        <div class="select">
          <el-select v-model="system">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="dyrow input-300">
        <div>
          <span class="require">标题：</span>
        </div>
        <el-input type="text" v-model="postTitle" />
      </div>
      <div class="dyrow">
        <div>
          <span class="require">内容：</span>
        </div>
        <editor ref="editor"></editor>
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
  import editor from "../../components/editor";
  export default {
    components: {
      tabs,
      xybTable,
      editor,
    },
    data() {
      return {
        id: null,
        title: null,
        createName: null,
        system: null,
        postTitle: null,
        descript: null,
        options: [
          { label: "全部", value: 1 },
          { label: "部门一", value: 2 },
        ],
        dataIdx: null, //选中table序号
        powerModal: false,
        deleteModal: false,
        addModal: false,
        type:'新增',
        size: 10,
        count: 1,
        total: 0,
        tableCol: [
          { prop: "index", label: "序列号" },
          { prop: "id", label: "ID" },
          { prop: "title", label: "标题", width: "400%" },
          { prop: "system", label: "后台系统" },
          { prop: "creater", label: "创建人" },
          { prop: "time", label: "创建时间" },
          { prop: "number", label: "阅读量" },
        ],
        defaultProps: {
          children: "children",
          label: "label",
        },
        tableData: [
          {
            index: 1,
            id: 10001,
            title: "关于《信宜保BOSS管理系统》1.1升级公告",
            system: "汽配商后台",
            creater: "黄蓉",
            time: "2020/7/30 15:59",
            number: 121,
          },
        ],
      };
    },
    methods: {
      clearCondition() {
        this.id = null;
        this.title = null;
        this.createName = null;
        this.system = null;
      },
      //编辑
      showEditModal(info) {
        this.type='编辑'
        this.dataIdx = info.index;
        this.postTitle = info.title;
        setTimeout(() => {
          this.$refs.editor._data.editor.txt.html(
            'c tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, <img src="http://img1.gtimg.com/rushidao/pics/hv1/20/108/1744/113431160.jpg">sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sedrhoncus pronin sapien nunc accuan eget.'
          );
        }, 10);
        this.addModal = true;
      },
      editModalOK() {},
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
        this.type='新增'
        setTimeout(() => {
          this.$refs.editor._data.editor.txt.html('');
        }, 10);
        this.addModal = true;
        this.postTitle = null;
        this.descript = null;
      },
      addModalOK() {
        this.addModal = false;
      },
      addModalcancel() {
        this.addModal = false;
        this.postTitle = null;
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
  .systemNotice {
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
      .row{
        .select{
          width: 9vw !important;
          .el-select{
            width: 9vw !important;
            .el-input{
              width: 9vw !important;
            }
          }
        }
      .select .el-select .el-input .el-input__inner,
      .select .el-select .el-input--suffix .el-input__inner {
        width: 9vw !important;
      }

      }
    }
    .el-dialog__body {
      padding-top: 1.042vw;
    }
    .el-dialog__body .dyrow:nth-of-type(2) {
      align-items: flex-start !important;
      margin-top: 1.042vw;
    }
    .addmodal .el-dialog__body {
      padding: 1.042vw 2.5vw 1.823vw 2.5vw !important;
    }
    .powerTitle {
      line-height: 1.563vw;
      padding-bottom: 1vw;
      display: flex;
      justify-content: space-between;
      border-bottom: 0.052vw solid #cbcbcb;
    }
    .addmodal {
      width: 30.26vw !important;
      .dyrow {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        > div {
          width: 4vw;
          display: flex;
          justify-content: flex-end;
          margin-right: 0.781vw;
        }
        .select,
        .select .el-select {
          width: 11.458vw !important;
        }
        #editorElem {
          width: 20.729vw !important;
          height: 12.76vw;
          // overflow: scroll;
          transform: translateX(16.765vw);
          .w-e-text-container {
            width: 20.729vw !important;
            height: 11.458vw !important;
          }
        }
      }
    }
  }
</style>