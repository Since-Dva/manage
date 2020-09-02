<template>
  <div class="insuranceDetail">
    <tabs></tabs>
    <div class="content">
      <div class="left">
        <div class="left1">
          <div class="left1_1">
            <div>
              <img src alt />
              <div>
                <h2>{{base.name}}</h2>
                <h3>ID号：BX00001</h3>
              </div>
            </div>
            <a @click="basicModal=true">编辑</a>
          </div>
          <div class="left1_2">
            <div class="left1_2_1">
              <div>
                <span>定损员数：</span>
                <span>38</span>
              </div>
              <div>
                <span>创建人：</span>
                <span>郭靖</span>
              </div>
              <div>
                <span>创建时间：</span>
                <span>2020/7/30/ 16:43</span>
              </div>
              <div>
                <span>合作状态：</span>
                <span>{{base.state}}</span>
              </div>
            </div>
            <div>
              <span>所在地区</span>
              <span>{{base.address}}</span>
            </div>
            <div>
              <span>详细地址</span>
              <span>{{base.detail}}</span>
            </div>
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>联系人信息</span>
            <el-button @click="addconcatModal=true">＋新增</el-button>
          </div>
          <el-table
            :border="true"
            :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'0.833vw',background:'#eeeeee'}"
            :data="tableData1"
            style="width: 100%"
          >
            <el-table-column align="center" prop="name" label="联系人">
              <template slot-scope="scope">
                <div>
                  <span v-if="scope.row.ismain" class="main">主</span>
                  <span>{{scope.row.name}}</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="sex" label="性别"></el-table-column>
            <el-table-column align="center" prop="job" label="职位"></el-table-column>
            <el-table-column align="center" prop="phone" label="联系电话"></el-table-column>
            <el-table-column align="center" prop="wx" label="微信"></el-table-column>
            <el-table-column align="center" prop="email" label="邮箱"></el-table-column>
            <el-table-column align="center" label="操作" width="280%">
              <template slot-scope="scope">
                <div>
                  <a @click="showMainPer(scope.row)">编辑</a>
                  <a v-if="!scope.row.ismain" @click="showdelete(scope.row)">删除</a>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div class="left3">
          <div class="title">
            <span>合作信息</span>
          </div>
          <el-table
            :border="true"
            :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'0.833vw',background:'#eeeeee'}"
            :data="tableData2"
            style="width: 100%"
          >
            <el-table-column align="center" prop="type" label="类型"></el-table-column>
            <el-table-column align="center" prop="creater" label="创建人"></el-table-column>
            <el-table-column align="center" prop="createTime" label="创建时间"></el-table-column>
            <el-table-column align="center" prop="modify" label="修改人"></el-table-column>
            <el-table-column align="center" prop="time" label="修改时间"></el-table-column>
            <el-table-column align="center" label="操作" width="280%">
              <template slot-scope="scope">
                <div>
                  <a v-if="scope.row.show" @click="showAgreement(scope.row)">查看</a>
                  <a v-if="scope.row.show" @click="showDownload(scope.row)">下载</a>
                  <a @click="showcontract(scope.row)">编辑</a>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="right">
        <div class="right1"></div>
        <div class="right2"></div>
        <div class="right3"></div>
      </div>
    </div>
    <!-- 编辑基本信息 -->
    <el-dialog custom-class="basic" title="修改基本信息" :visible.sync="basicModal" width="30.26vw">
      <div class="dyrow dyrow1">
        <div>
          <span class="require">名称：</span>
        </div>
        <el-input v-model="base.name"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">地区：</span>
        </div>
        <div class="select">
          <el-select v-model="base.select1">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select">
          <el-select v-model="base.select2">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
        <div class="select">
          <el-select v-model="base.select3">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="dyrow dyrow3">
        <div>
          <span>详细地址：</span>
        </div>
        <el-input v-model="base.detail"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span>合作状态：</span>
        </div>
        <el-radio v-model="base.radio" label="1">合作中</el-radio>
        <el-radio v-model="base.radio" label="2">已暂停</el-radio>
        <el-radio v-model="base.radio" label="3">已取消</el-radio>
      </div>
      <p>注：合作状态修改为已暂停或已取消，保险友商对应旗下的所有定损员账号全部停用</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="basicModalOK">确 定</el-button>
        <el-button class="cancel" @click="basicModal=false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 新增联系人信息 -->
    <el-dialog
      custom-class="addconcat"
      title="新增联系人"
      :visible.sync="addconcatModal"
      width="30.26vw"
    >
      <div class="dyrow">
        <div>
          <span class="require">联系人：</span>
        </div>
        <el-input v-model="addconcat.name"></el-input>
      </div>
      <div class="dyrow sex">
        <div>
          <span class="require">性别：</span>
        </div>
        <div class="select">
          <el-select v-model="addconcat.sex">
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
        <el-input v-model="addconcat.job"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">联系电话：</span>
        </div>
        <el-input v-model="addconcat.phone"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span>微信：</span>
        </div>
        <el-input v-model="addconcat.wx"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span>邮箱：</span>
        </div>
        <el-input v-model="addconcat.email"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">是否为主要联系人：</span>
        </div>
        <el-radio v-model="addconcat.radio" label="1">是</el-radio>
        <el-radio v-model="addconcat.radio" label="2">否</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addconcatModalOK">确 定</el-button>
        <el-button class="cancel" @click="addconcatModal=false">取 消</el-button>
      </span>
    </el-dialog>

    <!-- 下载合作信息 -->
    <el-dialog title="下载" :visible.sync="download" width="22.656vw">
      <span>是否下载当前合作信息内容？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="downloadOK">确 定</el-button>
        <el-button class="cancel" @click="download=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除联系人 -->
    <el-dialog title="删除联系人" :visible.sync="deleteModal" width="22.656vw">
      <span>是否删除当前联系人？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 权限提示 -->
    <el-dialog title="权限提示" :visible.sync="powerModal" width="22.656vw">
      <span>您当前没有操作权限，请联系产品管理员</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="powerModal=false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 查看合作信息 -->
    <el-dialog title="协议相关" custom-class="agreement" :visible.sync="agreement" width="30vw">
      <img :src="require('../../assets/img/xieyi.png')" alt />
      <span slot="footer" class="dialog-footer"></span>
    </el-dialog>
    <!-- 修改主要联系人 -->
    <el-dialog
      custom-class="addconcat"
      title="修改主要联系人"
      :visible.sync="mainPerModal"
      width="30.26vw"
    >
      <div class="dyrow">
        <div>
          <span class="require">联系人：</span>
        </div>
        <el-input v-model="mainPer.name"></el-input>
      </div>
      <div class="dyrow sex">
        <div>
          <span class="require">性别：</span>
        </div>
        <div class="select">
          <el-select v-model="mainPer.sex">
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
        <el-input v-model="mainPer.job"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span class="require">联系电话：</span>
        </div>
        <el-input v-model="mainPer.phone"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span>微信：</span>
        </div>
        <el-input v-model="mainPer.wx"></el-input>
      </div>
      <div class="dyrow">
        <div>
          <span>邮箱：</span>
        </div>
        <el-input v-model="mainPer.email"></el-input>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="mainPerOK">确 定</el-button>
        <el-button class="cancel" @click="mainPerModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑合同信息 -->
    <el-dialog title="编辑合同信息" custom-class="contract" :visible.sync="contractModal" width="30.26vw">
      <span>合同：</span>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="1"
        :on-exceed="handleExceed"
        :file-list="fileList"
      >
        <el-button size="small" type="primary">{{fileList.length?'重新上传':'上传'}}</el-button>
        <div slot="tip" class="el-upload__tip">（仅支持 .pnf / .jpg 格式）</div>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="contractOK">确 定</el-button>
        <el-button class="cancel" @click="contractModal=false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import tabs from "../../components/tabs";
  export default {
    components: {
      tabs,
    },
    data() {
      return {
        basicModal: false,
        addconcatModal: false,
        download: false,
        deleteModal: false,
        powerModal: false,
        agreement: false,
        mainPerModal: false,
        contractModal: false,
        fileList: [
          {
            name: "太平洋保险（重庆分公司）战略合作合同.pdf",
            url:
              "https://fuss10.elemecdn.com/3/63/",
          },
        ],
        base: {
          name: "大地保险公司(重庆分公司)",
          select1: null,
          select2: null,
          select3: null,
          state: "合作中",
          address: "重庆 - 重庆 - 渝北",
          detail: "重庆市渝北区仙桃数据谷C16-A2-2层",
          radio: "1",
        },
        addconcat: {
          name: null,
          sex: null,
          job: null,
          phone: null,
          wx: null,
          email: null,
          radio: 2,
        },
        mainPer: {
          name: null,
          sex: null,
          job: null,
          phone: null,
          wx: null,
          email: null,
          radio: 2,
        },
        options: [
          { label: "全部", value: 1 },
          { label: "部门一", value: 2 },
        ],
        tableData1: [
          {
            name: "郭靖",
            sex: "男",
            job: "总经理",
            phone: "176****8288",
            wx: "176****8288",
            email: "664017710@qq.com",
            ismain: true,
          },
          {
            name: "郭靖",
            sex: "男",
            job: "总经理",
            phone: "176****8288",
            wx: "176****8288",
            email: "664017710@qq.com",
            ismain: false,
          },
        ],
        tableData2: [
          {
            type: "合同",
            creater: "郭靖",
            createTime: "2020/7/30/   16:43",
            modify: "郭靖",
            time: "2020/7/30/   16:43",
            show: true,
          },
          {
            type: "合同",
            creater: "郭靖",
            createTime: "2020/7/30/   16:43",
            modify: "/",
            time: "/",
            show: false,
          },
        ],
      };
    },
    methods: {
      basicModalOK() {
        this.basicModal = false;
      },
      addconcatModalOK() {
        this.addconcatModal = false;
      },
      showDownload() {
        this.download = true;
      },
      showdelete() {
        this.deleteModal = true;
      },
      showAgreement() {
        this.agreement = true;
      },
      showMainPer(info) {
        this.mainPer = info;
        this.mainPerModal = true;
      },
      showcontract() {
        this.contractModal = true;
      },
      downloadOK() {
        this.download = false;
      },
      deleteModalOK() {
        this.deleteModal = false;
      },
      contractOK() {
        this.contractModal = false;
      },
      mainPerOK() {
        this.mainPerModal = false;
      },
      handlePreview() {},
      handleRemove() {
        this.fileList=[]
      },
      beforeRemove() {},
      handleExceed() {},
    },
  };
</script>

<style lang='scss'>
  .insuranceDetail {
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        width: 65.26vw;
        height: 45vw;
        overflow: scroll;
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0vw 0.208vw 0.208vw 0.208vw;
          margin-bottom: 1.042vw;
        }
        .left1 {
          box-sizing: border-box;
          height: 19.167vw;
          padding: 1.563vw 1.667vw;
          .left1_1 {
            box-sizing: border-box;
            padding: 0.677vw 2.656vw 0.677vw 0.677vw;
            height: 5.938vw;
            background: #eeeeee;
            display: flex;
            justify-content: space-between;
            align-items: center;
            > a {
              flex-shrink: 0;
              cursor: pointer;
            }
            > div {
              width: 100%;
              display: flex;
              h2 {
                font-weight: bold;
                color: #333333;
                margin: 0.885vw 0;
              }
              h3 {
                margin-top: 1.198vw;
              }
              img {
                width: 4.635vw;
                height: 4.635vw;
                display: block;
                border: 0.052vw solid rgb(160, 160, 160);
                margin-right: 2.083vw;
              }
            }
          }
          .left1_2 {
            > div {
              padding: 0 2.813vw;
              margin: 2.083vw 0;
            }
            .left1_2_1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
          }
        }
        .left2,
        .left3 {
          box-sizing: border-box;
          padding: 1.094vw 1.823vw;
          .title {
            height: 1.5vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 1.302vw;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -1.35vw;
              top: 0.104vw;
            }
          }
          td {
            a {
              padding: 0 0.625vw;
              cursor: pointer;
            }
            a:nth-of-type(2),
            a:nth-of-type(3) {
              position: relative;
              &::after {
                content: "";
                display: block;
                width: 0.052vw;
                height: 0.938vw;
                background: #aeaeae;
                position: absolute;
                left: 0;
                top: 0.104vw;
              }
            }
          }
          .main {
            display: block;
            width: 1.1vw;
            height: 1.1vw;
            line-height: 1.1vw;
            background: #3498db;
            color: white;
            text-align: center;
            border-radius: 0.208vw;
            position: absolute;
            left: 1.146vw;
            top: 0.35vw;
          }
        }
      }
      .right {
        width: 19.115vw;
        height: 45vw;
        overflow: scroll;
        > div + div {
          margin-top: 1.042vw;
        }
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
        }
        .right1 {
          height: 5.573vw;
        }
        .right2 {
          height: 25.313vw;
        }
        .right3 {
          height: 15.156vw;
        }
      }
    }

    .basic {
      .el-dialog__body {
        padding: 1.823vw 3.542vw;
      }
      .dyrow {
        > div:nth-of-type(1) {
          width: 3.646vw;
          text-align: right;
        }
        .select {
          margin-right: 0.521vw;
        }
      }
      .dyrow1 {
        .el-input,
        .el-input__inner {
          width: 10.417vw !important;
        }
      }
      .dyrow3 {
        .el-input,
        .el-input__inner {
          width: 15.5vw !important;
        }
      }
      p {
        width: 600px;
        margin-top: 10px;
        padding-left: 55px;
        transform: scale(0.85);
      }
    }

    .addconcat {
      .el-dialog__body {
        padding: 35px 96px;
      }

      .el-input,
      .el-input__inner {
        width: 10.417vw !important;
      }
      .sex {
        .el-input,
        .el-input__inner {
          width: 5vw !important;
        }
      }
      .dyrow {
        > div:nth-of-type(1) {
          width: 7vw;
          text-align: right;
        }
        .select {
          margin-right: 0.521vw;
        }
      }
    }

    .agreement {
      .el-dialog__body {
        height: 700px;
        overflow: scroll;
        img {
          width: 100%;
        }
      }
    }
    .contract {
      .el-dialog__body {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4vw 0;
        height: 5.208vw;
        .upload-demo {
          position: relative;
          display: flex;
          .el-upload {
            width: 3.646vw;
            height: 1.458vw !important;
            .el-button {
              padding: 0 !important;
              width: 3.646vw;
              height: 1.458vw !important;
              line-height: 1.458vw !important;
            }
          }
          .el-upload__tip{
            color: #999999;
          }
          .el-upload-list{
            width: 400px;
            position: absolute;
            top: -50px;
            left: 50%;
            transform: translate(-50%);
            text-align: center;
            .el-upload-list__item-name{
              color: #006CFF;
            }
          }
        }
      }
    }
  }
</style>