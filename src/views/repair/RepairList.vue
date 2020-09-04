<template>
  <div class="repairList">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>友商ID：</span>
          <el-input v-model="accountId" @blur="check" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>等级：</span>
          <el-input v-model="grade" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>友商名称：</span>
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>地区：</span>
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
          <span>合作状态：</span>
          <div class="select">
            <el-select v-model="status">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
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
            <el-date-picker :clearable="false" v-model="startTime" type="date" placeholder="开始日期"></el-date-picker>
            <span>—</span>
            <el-date-picker :clearable="false" v-model="endTime" type="date" placeholder="结束日期"></el-date-picker>
          </div>
        </div>
        <el-button>搜索</el-button>
        <el-button @click="clearCondition">清除</el-button>
        <el-button class="deep" @click="showOffModal">跟进管理</el-button>
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
          <el-transfer :titles="['友商名称','友商名称']" v-model="transValue" :data="trans1"></el-transfer>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="offModalOK">确 定</el-button>
        <el-button class="cancel" @click="offModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog custom-class="addmodal" title="新增友商" :visible.sync="addModal" width="30.26vw">
      <div>
        <div class="modaltitle">基本信息</div>
        <div class="dyrow">
          <div>
            <span class="require">logo：</span>
          </div>
          <el-upload class="avatar-uploader" action :show-file-list="false">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="dyrow">
          <div>
            <span class="require">名称：</span>
          </div>
          <el-input type="text" v-model="add.value1" />
        </div>
        <div class="dyrow state">
          <div>
            <span class="require">合作状态：</span>
          </div>
          <el-radio v-model="add.radio" label="1">皇冠</el-radio>
          <el-radio v-model="add.radio" label="2">钻石</el-radio>
          <el-radio v-model="add.radio" label="3">白金</el-radio>
          <el-radio v-model="add.radio" label="4">黄金</el-radio>
          <el-radio v-model="add.radio" label="5">白银</el-radio>
        </div>
        <div class="dyrow compare">
          <div>
            <span class="require">添加合作保险机构：</span>
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
        </div>
        <div class="dyrow list">
          <div>
            <span class="require">已添加列表：</span>
          </div>
          <div>
            <div v-for="(item,idx) in list1" :key='idx'>
              <span>{{item}}</span>
              <i @click="deleteList(idx)">×</i>
            </div>
          </div>
        </div>
        <div class="dyrow address">
          <div>
            <span class="require">地区：</span>
          </div>
          <div class="selectBox">
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
            <div class="select">
              <el-select v-model="add.value4">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="dyrow">
          <div>
            <span>详细地址：</span>
          </div>
          <el-input type="text" v-model="add.value5" />
        </div>
      </div>
      <div>
        <div class="modaltitle">联系人信息</div>
        <div class="dyrow">
          <div>
            <span class="require">联系人：</span>
          </div>
          <el-input type="text" v-model="add.value8" />
        </div>
        <div class="dyrow address">
          <div>
            <span class="require">性别：</span>
          </div>
          <div class="select">
            <el-select v-model="add.value9">
              <el-option
                v-for="item in sexs"
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
          <el-input type="text" v-model="add.value10" />
        </div>
        <div class="dyrow">
          <div>
            <span class="require">联系电话：</span>
          </div>
          <el-input type="text" v-model="add.value11" />
        </div>
        <div class="dyrow">
          <div>
            <span>微信：</span>
          </div>
          <el-input type="text" v-model="add.value12" />
        </div>
        <div class="dyrow">
          <div>
            <span>邮箱：</span>
          </div>
          <el-input type="text" v-model="add.value13" />
        </div>
      </div>
      <div>
        <div class="modaltitle">签约信息</div>
        <div class="dyrow upload">
          <div>
            <span>合同：</span>
          </div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList1"
          >
            <el-button size="small" type="primary">上传</el-button>
            <div v-show="!fileList1.length" slot="tip" class="el-upload__tip">（仅支持 .pnf / .jpg 格式）</div>
          </el-upload>
        </div>
        <div class="dyrow upload">
          <div>
            <span>协议相关：</span>
          </div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList2"
          >
            <el-button size="small" type="primary">上传</el-button>
            <div v-show="!fileList2.length" slot="tip" class="el-upload__tip">（仅支持 .pnf / .jpg 格式）</div>
          </el-upload>
        </div>
        <div class="dyrow upload">
          <div>
            <span>资质相关：</span>
          </div>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="2"
            :on-exceed="handleExceed"
            :file-list="fileList3"
          >
            <el-button size="small" type="primary">上传</el-button>
            <div v-show="!fileList2.length" slot="tip" class="el-upload__tip">（仅支持 .pnf / .jpg 格式）</div>
          </el-upload>
        </div>
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
        grade: null,
        name: null,
        account: null,
        phone: null,
        createName: null,
        otherName: null,
        status: null,
        status1: null,
        status2: null,
        startTime: null,
        endTime: null,
        imageUrl: null,
        transValue: [],
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
          radio: null,
        },
        list1:['暂无','太平洋保险（重庆分公司）','太平洋保险（重庆分公司）','太平洋保险（重庆分公司）'],
        fileList1: [
          {
            name: "food.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
          {
            name: "food2.jpeg",
            url:
              "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100",
          },
        ],
        fileList2: [],
        fileList3: [],
        options: [
          { label: "全部", value: 1 },
          { label: "部门一", value: 2 },
        ],
        sexs: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
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
          { prop: "name", label: "友商名称", width: "200%" },
          { prop: "address", label: "地区", width: "150%" },
          { prop: "mechanism", label: "合作保险机构", width: "200%" },
          { prop: "grade", label: "等级" },
          { prop: "state", label: "合作状态" },
          { prop: "creater", label: "创建人" },
          { prop: "gjname", label: "跟进人" },
          { prop: "time", label: "创建时间", width: "150%" },
        ],
        tableData: [
          {
            index: 1,
            id: "BX00001",
            name: "途虎养车（空港新城店）",
            address: "重庆-重庆-渝北",
            mechanism: "大地保险公司、太平...",
            state: "合作中",
            grade: "皇冠",
            creater: "黄蓉",
            gjname: "李华",
            time: "2020/7/30 15:59",
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
      offModalOK() {
        this.offModal = false;
      },
      sizeChange(e) {
        this.size = e;
      },
      pageChange(e) {
        this.count = e;
      },
      todedail(info) {
        console.log(info)
        this.$store.commit("addTabMut", {
          title: "维修友商详情页",
          path: "/repair/repairDetail",
          type: "repair",
        });
        this.$router.push("/repair/repairDetail");
      },
      deleteList(idx){
        this.list1.splice(idx,1)
      },
      //上传相关
      handlePreview() {},
      handleRemove(e) {
        this.fileList1.map((item, idx) => {
          if (item.name === e.name) {
            this.fileList1.splice(idx, 1);
          }
        });
      },
      beforeRemove() {},
      handleExceed() {},
    },
  };
</script>

<style lang='scss'>
  .repairList {
    .searchBar {
      position: relative;
      .row {
        div + div {
          margin-left: 2.448vw;
        }
        .el-button:nth-of-type(1) {
          margin-left: 3.802vw;
        }
        .select + .select {
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
        .deep {
          position: relative;
          right: -3.8vw;
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
    .addmodal {
      .el-dialog__body {
        height: 24.479vw;
        overflow: scroll;
        > div {
          padding-bottom: 1.302vw;
          border-bottom: 0.052vw solid #cbcbcb;
          margin-bottom: 1.042vw;
        }
        > div:nth-of-type(3) {
          border: none;
        }
      }
      .state{
        .el-radio{
          margin-right: 0.781vw;
          .el-radio__label{
            padding-left: 0.26vw;
          }
        }
      }
      .compare {
        .el-input,
        .el-input__inner {
          width: 10.417vw !important;
        }
      }
      .modaltitle {
        font-weight: bold;
        color: #666666;
        margin-bottom: 1.042vw;
      }
      // width: 22.656vw;
      .select,
      .el-select {
        width: 10.417vw !important;
      }
      .upload {
        .upload-demo {
          width: 11vw;
          display: flex;
          justify-content: flex-start;
          .el-upload,
          .el-button {
            width: 3vw;
            height: 1.4vw !important;
            line-height: 1.4vw !important;
            padding: 0 !important;
            text-align: center;
          }
          .el-upload-list {
            display: flex;
            .el-upload-list__item {
              margin: 0;
            }
          }
        }
      }
      .dyrow {
        > div:nth-of-type(1) {
          width: 6.771vw;
          flex-shrink: 0;
          > span {
            float: right;
          }
        }

        .avatar-uploader {
          width: 6.823vw;
          height: 6.823vw;
          border: 0.052vw solid #cbcbcb;
          border-radius: 0.208vw;
          position: relative;
          i {
            width: 1.231vw;
            height: 1.231vw;
            background: url("../../assets/img/upload.png") center no-repeat;
            background-size: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            &::before {
              content: "";
            }
          }
        }
      }
      .address {
        .selectBox {
          display: flex;
          .select {
            margin-right: 0.521vw;
          }
        }
        .select,
        .el-select,
        .el-input,
        .el-input__inner {
          width: 5.208vw !important;
        }
      }
      .el-dialog__body {
        padding: 2.24vw 2.552vw 0 !important;
      }
      .list {
        > div:nth-of-type(2) {
          display: flex;
          flex-wrap: wrap;
          > div {
            width: 7.813vw;
            height: 1.458vw; 
            line-height: 1.458vw;
            background: #eeeeee;
            border-radius: 0.208vw;
            text-align: center;
            position: relative;
            margin-bottom: 0.521vw;
            margin-right: 0.521vw;
            span{
              font-size: 0.625vw;
              transform: scale(0.5);
            }
            i {
              position: absolute;
              width: 0.781vw;
              height: 0.781vw;
              text-align: center;
              line-height: 0.677vw;
              border-radius: 50%;
              background: #3498db;
              color: white;
              transform: scale(0.8);
              position: absolute;
              right: -0.26vw;
              top: -0.26vw;
              cursor: pointer;
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