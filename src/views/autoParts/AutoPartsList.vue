<template>
  <div class="autoPartsList">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>友商ID：</span>
          <el-input v-model="accountId" @blur="check" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>入驻品牌：</span>
          <el-input v-model="brand" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>入驻类型：</span>
          <el-input v-model="type" placeholder="请输入内容"></el-input>
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
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="select">
            <el-select v-model="search.value2">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
          <div class="select">
            <el-select v-model="search.value3">
              <el-option
                v-for="item in options5"
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
          <span>合作状态：</span>
          <div class="select">
            <el-select v-model="status">
              <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </div>
        </div>
        <div>
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
        <div class="dyrow">
          <div>
            <span class="require">添加入驻品牌：</span>
          </div>
          <div class="select input-150">
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
        <div class="dyrow list1 list2">
          <div>
            <span class="require">添加入驻类型：</span>
          </div>
          <div>
            <div v-for="(item,index) in list2" :key="index">
              <span>{{item.name}}</span>
              <b v-show="item.tit"></b>
            </div>
            <el-button>确认添加</el-button>
          </div>
        </div>
        <div class="dyrow list1">
          <div>
            <span class="require">已添加列表：</span>
          </div>
          <div>
            <div v-for="(item,index) in list1" :key="index">
              <span>{{item}}</span>
              <i @click="deletelist(index)">×</i>
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
                  v-for="item in options3"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="select">
              <el-select v-model="add.value3">
                <el-option
                  v-for="item in options4"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
            <div class="select">
              <el-select v-model="add.value4">
                <el-option
                  v-for="item in options5"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="dyrow input-300">
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
                v-for="item in options2"
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
        brand: null,
        type: null,
        name: null,
        account: null,
        phone: null,
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
        list1: ["奥迪-外观件、底盘件、发动机件", "奥迪-外观件", "奔驰", "大众", "奔驰", "大众"],
        list2: [
          { name: "外观件", tit: true },
          { name: "外观件", tit: true },
          { name: "外观件", tit: false },
          { name: "外观件", tit: false },
          { name: "外观件", tit: true },
          { name: "外观件", tit: false },
        ],
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
        options: [],
        options1: [
          { label: "全部", value: 1 },
          { label: "合作中", value: 2 },
          { label: "已暂停", value: 3 },
          { label: "已取消", value: 4 },
        ],
        options2: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
        ],
        options3: [
          { label: "重庆", value: 1 },
          { label: "四川", value: 2 },
        ],
        options4: [{ label: "重庆", value: 1 }],
        options5: [
          { label: "渝中区", value: 1 },
          { label: "江北区", value: 2 },
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
          { prop: "brand", label: "入驻品牌", width: "200%" },
          { prop: "type", label: "入驻类型", width: "150%" },
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
            brand: "大众、奔驰、奥迪、长安...",
            type: "外观件、底盘件...",
            state: "合作中",
            creater: "黄蓉",
            gjname: "李华",
            time: "2020/7/30 15:59",
          },
          {
            index: 1,
            id: "BX00001",
            name: "途虎养车（空港新城店）",
            address: "重庆-重庆-渝北",
            brand: "大众、奔驰、奥迪、长安...",
            type: "外观件、底盘件...",
            state: "合作中",
            creater: "黄蓉",
            gjname: "李华",
            time: "2020/7/30 15:59",
          },
        ],
      };
    },
    methods: {
      check() {
        let reg = /^[0-9a-zA-Z]*$/g;
        if (!reg.test(this.accountId)) {
          this.accountId = "";
          this.$message.error("ID只能为数字或字母");
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
      deletelist(idx) {
        this.list1.splice(idx, 1);
      },
      todedail() {
        this.$store.commit("addTabMut", {
          title: "汽配友商详情页",
          path: "/autoParts/autoPartsDetail",
          type: "autoParts",
        });
        this.$router.push("/autoParts/autoPartsDetail");
      },
      //上传相关
      handlePreview() {},
      handleRemove() {},
      beforeRemove() {},
      handleExceed() {},
    },
  };
</script>

<style lang='scss'>
  .autoPartsList {
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
        > div {
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
            > div {
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
        > div {
          padding-bottom: 1.302vw;
          border-bottom: 0.052vw solid #cbcbcb;
          margin-bottom: 1.042vw;
        }
        > div:nth-of-type(3) {
          border: none;
        }
      }
      .modaltitle {
        font-weight: bold;
        color: #666666;
        margin-bottom: 1.042vw;
      }
      .list2 {
        > div:nth-of-type(2) > div {
          overflow: hidden;
        }
        .el-button {
          width: 70px;
          height: 28px !important;
          line-height: 28px !important;
          padding: 0 8px !important;
          font-size: 12px;
        }
      }
      .list1 {
        display: flex;
        position: relative;
        > div:nth-of-type(1) {
          padding-top: 0.313vw;
          align-self: start;
        }
        > div:nth-of-type(2) {
          display: flex;
          width: 16.563vw;
          justify-content: flex-start;
          flex-wrap: wrap;
          > div {
            // width: 5.208vw;
            padding: 0 29px;
            height: 1.458vw;
            flex-shrink: 0;
            line-height: 1.458vw;
            background: #ededed;
            border-radius: 0.208vw;
            text-align: center;
            position: relative;
            margin-bottom: 0.521vw;
            margin-right: 0.313vw;
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
            b {
              width: 0;
              height: 0;
              border-top: 1.042vw solid #3498db;
              border-left: 1.042vw solid transparent;
              position: absolute;
              top: 0;
              right: 0;
            }
          }
        }
      }
      width: 22.656vw;
      .el-dialog__body {
        height: 24.479vw;
        overflow: scroll;
      }
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
          width: 6vw;
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