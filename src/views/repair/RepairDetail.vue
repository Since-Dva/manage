<template>
  <div class="repairDetail">
    <tabs></tabs>
    <div class="content">
      <div class="left">
        <div class="left1">
          <div class="left1_1">
            <div>
              <img src alt />
              <div>
                <h2>{{base.title}}</h2>
                <h3>ID号：BX00001</h3>
              </div>
            </div>
            <a @click="basicModal=true">编辑</a>
          </div>
          <div class="left1_2">
            <div class="left1_2_1">
              <div>
                <span>等级：</span>
                <span>{{base.gread}}</span>
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
                <span>合作中</span>
              </div>
            </div>
            <div>
              <span>合作保险机构：</span>
              <span>大地保险公司（重庆分公司）、阳光保险公司、人保重庆分公司</span>
            </div>
            <div class="left1_2_2">
              <div>
                <span>所在地区：</span>
                <span>重庆 - 重庆 - 渝北</span>
              </div>
              <div>
                <span>详细地址：</span>
                <span>重庆市渝北区仙桃数据谷C16-A2-2层</span>
              </div>
            </div>
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>联系人信息</span>
            <el-button @click="addconcatModal=true">＋新增</el-button>
          </div>
          <div class="tablebox">
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
              <el-table-column align="center" prop="email" label="邮箱" width="200%"></el-table-column>
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
        </div>
        <div class="left3">
          <div class="title">
            <span>合作信息</span>
          </div>
          <div class="tablebox">
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
      </div>
      <div class="right">
        <div class="right1">
          <div class="triangle"></div>
          <div class="right1_1">
            <img src alt />
            <div>
              <p>郭靖</p>
              <p>所属部门：商务部</p>
            </div>
          </div>
        </div>
        <div class="right2">
          <div class="title">
            <span>跟进记录</span>
            <el-button @click="addfollowup">{{addgj?'保存跟进':'新增跟进'}}</el-button>
          </div>
          <el-input v-if="addgj" type="textarea" v-model="genjin" :rows="4"></el-input>
          <div class="gjcontent">
            <p>周一去和大地保险公司王总进行了沟通，确认合作签约时间在下周三，去的时候准备好需要提前准备好相关资料。</p>
            <p>2020/7/30/ 16:43</p>
          </div>
          <div class="gjcontent">
            <p>周一去和大地保险公司王总进行了沟通，确认合作签约时间在下周三，去的时候准备好需要提前准备好相关资料。</p>
            <p>2020/7/30/ 16:43</p>
          </div>
          <div class="gjcontent">
            <p>周一去和大地保险公司王总进行了沟通，确认合作签约时间在下周三，去的时候准备好需要提前准备好相关资料。</p>
            <p>2020/7/30/ 16:43</p>
          </div>
          <div class="pagina">
            <el-pagination background layout="prev, pager, next" :page-size="3" :total="3"></el-pagination>
          </div>
        </div>
        <div class="right3">
          <div class="title">
            <span>日志</span>
          </div>
          <div class="con">
            <div>
              <span>2020/7/30/ 16:43</span>
              <p>商务部黄蓉 刚查看了该详情 页</p>
            </div>
            <div>
              <span>2020/7/30/ 16:43</span>
              <p>商务部黄蓉 刚新增了联系人 信息</p>
            </div>
            <div>
              <span>2020/7/30/ 16:43</span>
              <p>商务部黄蓉 刚下载合同</p>
            </div>
          </div>
          <div class="pagina">
            <el-pagination background layout="prev, pager, next" :page-size="3" :total="3"></el-pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- 修改基本信息 -->
    <el-dialog custom-class="basic" title="修改基本信息" :visible.sync="basicModal" width="30.729vw">
      <div class="dyrow dyrow1">
        <div>
          <span class="require">名称：</span>
        </div>
        <el-input v-model="base.name"></el-input>
      </div>
      <div class="dyrow state">
        <div>
          <span class="require">合作状态：</span>
        </div>
        <el-radio v-model="radio" label="1">皇冠</el-radio>
        <el-radio v-model="radio" label="2">钻石</el-radio>
        <el-radio v-model="radio" label="3">白金</el-radio>
        <el-radio v-model="radio" label="4">黄金</el-radio>
        <el-radio v-model="radio" label="5">白银</el-radio>
      </div>
      <div class="dyrow compare">
          <div>
            <span class="require">添加合作保险机构：</span>
          </div>
          <div class="select">
            <el-select v-model="value2">
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
      <div class="dyrow">
        <div></div>
        <p>注：合作状态修改为已暂停或已取消，保险友商对应旗下的所有定损员账号全部停用</p>
      </div>
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
      :title="'修改'+(this.mainPer.ismain?'':'非') +'主要联系人'"
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
      <div v-if="!this.mainPer.ismain" class="dyrow">
        <div>
          <span class="require">是否为主要联系人：</span>
        </div>
        <el-radio v-model="addconcat.radio" label="1">是</el-radio>
        <el-radio v-model="addconcat.radio" label="2">否</el-radio>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="mainPerOK">确 定</el-button>
        <el-button class="cancel" @click="mainPerModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑合同信息 -->
    <el-dialog
      title="编辑合同信息"
      custom-class="contract"
      :visible.sync="contractModal"
      width="30.26vw"
    >
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
            url: "https://fuss10.elemecdn.com/3/63/",
          },
        ],
        base: {
          title: "途虎（空港新城店）",
          gread: "皇冠",
          name: "郭靖",
          time: "2020/7/30/   16:43",
          state: "合作中",
          jigou: "大地保险公司（重庆分公司）、阳光保险公司、人保重庆分公司",
          select1: null,
          select2: null,
          select3: null,
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
        sexs: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
        ],
        addgj: false,
        genjin: null,
        list1:['暂无','太平洋保险（重庆分公司）','太平洋保险（重庆分公司）','太平洋保险（重庆分公司）'],
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
        radio:null,
        value2:null,
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
      addfollowup() {
        this.addgj = !this.addgj;
      },
      deleteList(idx){
        this.list1.splice(idx,1)
      },
      handlePreview() {},
      handleRemove() {
        this.fileList = [];
      },
      beforeRemove() {},
      handleExceed() {},
    },
  };
</script>

<style lang='scss'>
  .repairDetail {
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        width: 65.26vw;
        height: 40vw;
        overflow: scroll;
        scrollbar-width: none;
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0vw 0.208vw 0.208vw 0.208vw;
          margin-bottom: 1.042vw;
        }
        .left1 {
          box-sizing: border-box;
          padding: 1vw 1.667vw 0.26vw 1.667vw;
          .left1_1 {
            box-sizing: border-box;
            padding: 0.677vw 2.656vw 0.677vw 0.677vw;
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
                margin: 0.5vw 0;
              }
              h3 {
                margin-top: 0.8vw;
              }
              img {
                width: 4vw;
                height: 4vw;
                display: block;
                border: 0.052vw solid rgb(160, 160, 160);
                margin-right: 2.083vw;
                overflow: hidden;
              }
            }
          }
          .left1_2 {
            > div {
              padding: 0 2.813vw;
              margin: 1.2vw 0;
            }
            .left1_2_1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .left1_2_2{
              display: flex;
              >div:nth-of-type(1){
                margin-right: 3.2vw;
              }
            }
          }
        }
        .left2,
        .left3 {
          box-sizing: border-box;
          padding: 0.99vw 1.823vw 0.99vw 0;
          border-radius: 0.208vw;
          .title {
            height: 1.042vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 1.302vw;
            padding-left: 1.823vw;
            >span:nth-of-type(1){
              font-weight: bolder;
            }
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: -0.26vw;
            }
          }
          .tablebox {
            padding-left: 1.823vw;
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
            top: 0.625vw;
          }
        }
        .left3{
          margin: 0;
        }
      }
      .right {
        width: 19.115vw;
        height: 40vw;
        overflow: scroll;
        scrollbar-width: none;
        > div + div {
          margin-top: 0.9vw;
        }
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
        }
        .right1 {
          box-sizing: border-box;
          height: 5.208vw;
          padding: 1.406vw;
          position: relative;
          overflow: hidden;
          .triangle {
            width: 0;
            height: 0;
            border-top: 5.3vw solid #3498db;
            border-left: 5.3vw solid transparent;
            position: absolute;
            right: 0;
            top: 0;
            &::after {
              content: "跟进人";
              display: block;
              width: 3.125vw;
              color: white;
              position: absolute;
              right: -0.104vw;
              top: -4.323vw;
            }
          }
          .right1_1 {
            display: flex;
            img {
              width: 2.708vw;
              height: 2.708vw;
              border-radius: 50%;
              margin-right: 1.406vw;
              display: block;
              border: 0.052vw solid #000;
              overflow: hidden;
            }
            div {
              p:nth-of-type(1) {
                font-weight: bolder;
                margin-bottom: 0.625vw;
              }
            }
          }
        }
        .right2 {
          height: 21.5vw;
          overflow: scroll;
          font-size: 0.729vw;
          scrollbar-width: none;
          .title {
            box-sizing: border-box;
            height: 2.604vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 1vw;
            padding: 0.99vw;
            border-bottom: 0.052vw solid #eeeeee;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: 0.521vw;
            }
            .el-button {
              padding: 0 0.521vw !important;
            }
          }
          .el-textarea {
            display: block;
            width: 17.031vw;
            margin: 0 auto;
          }
          .gjcontent {
            box-sizing: border-box;
            width: 17.031vw;
            height: 4.6vw;
            overflow-x: hidden;
            overflow-y: scroll;
            scrollbar-width: none;
            background: #eeeeee;
            padding: 0.5vw 1.094vw;
            margin: 0.521vw auto;
            font-size: 0.729vw;
            p {
              line-height: 0.95vw;
            }
            p:nth-of-type(2) {
              text-align: right;
            }
          }
          .pagina {
            display: inline-block;
            transform: scale(0.7);
            float: right;
          }
        }
        .right3 {
          box-sizing: border-box;
          height: 11.3vw;
          overflow-x: hidden;
          overflow-y: scroll;
          scrollbar-width: none;
          font-size: 0.729vw;
          .title {
            box-sizing: border-box;
            height: 2.5vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 0.9vw;
            padding: 0.99vw;
            border-bottom: 0.052vw solid #eeeeee;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: 0.521vw;
            }
          }
          .con {
            padding: 0vw 1.354vw;
            > div {
              display: flex;
              margin-bottom: 0.26vw;
              span {
                flex-shrink: 0;
                margin-right: 0.521vw;
              }
              p {
                line-height: 0.938vw;
              }
            }
          }
          .pagina {
            display: inline-block;
            transform: scale(0.7);
            float: right;
          }
        }
      }
    }
    .basic {
      .el-dialog__body {
        padding: 1.823vw 3.542vw;
      }
      .dyrow {
        > div:nth-of-type(1) {
          width: 6.771vw;
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
        font-size: 0.625vw;
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

    .addconcat {
      .el-dialog__body {
        padding: 1.823vw 5vw;
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
        height: 30vw;
        overflow: scroll;
        scrollbar-width: none;
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
          .el-upload__tip {
            color: #999999;
          }
          .el-upload-list {
            width: 20.833vw;
            position: absolute;
            top: -2.604vw;
            left: 50%;
            transform: translate(-50%);
            text-align: center;
            .el-upload-list__item-name {
              color: #006cff;
            }
          }
        }
      }
    }
  }
</style>