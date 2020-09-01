<template>
  <div class="advert">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>广告ID：</span>
          <el-input v-model="id" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>位置：</span>
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
      >
        <el-table-column align="center" label="操作" width="320%">
          <template slot-scope="scope">
            <a @click="showEditModal(scope.row)">编辑</a>
            <a @click="showoffModal(scope.row)">启用</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>

    <!-- 启用/停用 -->
    <el-dialog title="启用确认" :visible.sync="offModal" width="22.656vw">
      <span>是否启用广告？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="offModalOK">确 定</el-button>
        <el-button class="cancel" @click="offModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog custom-class="addmodal" title="新增广告" :visible.sync="addModal">
      <div class="dyrow">
        <div>
          <span class="require">主题：</span>
        </div>
        <el-input type="text" v-model="theme" />
      </div>
      <div class="dyrow">
        <div>
          <span class="require">图片：</span>
        </div>
        <el-upload class="avatar-uploader" action :show-file-list="false">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">链接：</span>
        </div>
        <el-input type="text" v-model="link" />
      </div>
      <div class="dyrow">
        <div>
          <span class="require">位置：</span>
        </div>
        <div class="select">
          <el-select v-model="position">
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
          <span class="require">排序：</span>
        </div>
        <el-input type="text" v-model="idx" />
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
  import E from "wangeditor";
  export default {
    components: {
      tabs,
      xybTable,
    },
    data() {
      return {
        id: null,
        title: null,
        createName: null,
        dataIdx: null, //选中table序号
        powerModal: false,
        editModal: false,
        offModal: false,
        addModal: false,
        size: 10,
        count: 1,
        total: 0,
        options: [
          { label: "全部", value: 1 },
          { label: "部门一", value: 2 },
        ],
        theme: null,
        link: null,
        idx: null,
        imageUrl: null,
        position: null,
        tableCol: [
          { prop: "index", label: "序列号" },
          { prop: "id", label: "ID" },
          { prop: "theme", label: "主题" },
          { prop: "img", label: "图片" },
          { prop: "link", labidxel: "链接" },
          { prop: "position", label: "位置" },
          { prop: "idx", label: "排序" },
          { prop: "status", label: "停用中" },
          { prop: "creater", label: "创建人" },
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
            theme: "端午节活动",
            img: "",
            link: "www.baidu.com",
            position: "小程序首页banner",
            idx: "1",
            status: "停用中",
            creater: "郭靖",
            number: 12,
          },
        ],
      };
    },
    mounted() {
      var editor = new E("#editorElem");
      editor.customConfig.onchange = (html) => {
        this.editorContent = html;
      };
      editor.create();
    },
    methods: {
      clearCondition() {
        this.id = null;
        this.title = null;
        this.createName = null;
      },
      //编辑
      showEditModal(info) {
        console.log(info);
        this.dataIdx=info.index
        this.theme= info.theme
        this.imageUrl= info.imageUrl
        this.link= info.link
        this.idx= info.idx
        this.addModal = true;
      },
      //删除
      showoffModal(info) {
        this.dataIdx = info.index;
        this.offModal = true;
      },
      offModalOK() {
        this.offModal = false;
      },
      //新增
      showAddModal() {
        this.addModal = true;
        this.descript = null;
      },
      addModalOK() {
        this.addModal = false;
      },
      addModalcancel() {
        this.addModal = false;
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
  .advert {
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
      padding: 1.042vw 2.5vw 1.823vw 3.5vw !important;
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
          width: 3vw;
          display: flex;
          justify-content: flex-end;
          margin-right: 0.781vw;
        }
        .select,
        .select .el-select {
          width: 10.417vw !important;
        }
        .el-input{
          width: 10.417vw !important;
          .el-input__inner{
            width: 10.417vw !important;
          }
        }
        .avatar-uploader {
          width: 10.417vw;
          height: 9.271vw;
          border: 0.052vw solid #cbcbcb;
          border-radius: 0.208vw;
          position: relative;
          i{
            width: 2.031vw;
            height: 2.031vw;
            background: url('../../assets/img/upload.png') center no-repeat;
            background-size: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            &::before{
              content: '';
            }
          }
        }
      }
      .el-dialog__body {
        padding: 2.76vw 5.208vw !important;
      }
    }
  }
</style>