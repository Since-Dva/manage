<template>
  <div class="programme">
    <tabs></tabs>
    <div class="searchBar">
      <div class="row">
        <div>
          <span>友商ID：</span>
          <el-input v-model="number" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>友商名称：</span>
          <el-input v-model="name" placeholder="请输入内容"></el-input>
        </div>
        <div>
          <span>合作状态：</span>
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
        </div>
        <div>
          <span>创建人：</span>
          <el-input v-model="phone" placeholder="请输入内容"></el-input>
        </div>
        <div class="time">
          <span>创建时间：</span>
          <el-date-picker :clearable="false" v-model="startTime" type="date" placeholder="开始日期"></el-date-picker>
          <span>—</span>
          <el-date-picker :clearable="false" v-model="endTime" type="date" placeholder="结束日期"></el-date-picker>
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
            <a @click="showReModal(scope.row)">查看</a>
            <a @click="showDeleteModal(scope.row)">停用</a>
          </template>
        </el-table-column>
      </xybTable>
    </div>
    <!-- 停用 -->
    <el-dialog title="停用确认" :visible.sync="deleteModal" width="22.656vw">
      <span>是否确认停用当前账号？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 新增 -->
    <el-dialog custom-class="addmodal" title="新增友商" :visible.sync="addModal" width="30.26vw">
      <div>
        <div class="modaltitle">1.选择模型</div>
        <div class="dyrow">
          <div>
            <span class="title">选择保险机构：</span>
          </div>
          <div class="sel-200">
            <el-select v-model="add.value1">
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
            <span class="title">选择方案模型：</span>
            <span class="titTip">注：保修期限根据实际汽车车龄判断</span>
          </div>
        </div>
        <div class="item1">
          <div class="item1_1">
            <p class="title">模型一</p>
            <div>
              <div>
                <span>年限：</span>
                <span>不限</span>
              </div>
              <div>
                <span>包含：</span>
                <span>（3年以内、3-6 年、6-10年及10年以上）</span>
              </div>
              <div>
                <span>对关重件有要求：</span>
                <span>品牌件</span>
              </div>
              <div>
                <span>对关重件无要求：</span>
                <span>品牌件 注：（关注件包含动力车 身及底盘主体件）</span>
              </div>
            </div>
          </div>
          <div class="item1_1">
            <p class="title">模型一</p>
            <div>
              <div>
                <span>年限：</span>
                <span>不限</span>
              </div>
              <div>
                <span>包含：</span>
                <span>（3年以内、3-6 年、6-10年及10年以上）</span>
              </div>
              <div>
                <span>对关重件有要求：</span>
                <span>品牌件</span>
              </div>
              <div>
                <span>对关重件无要求：</span>
                <span>品牌件 注：（关注件包含动力车 身及底盘主体件）</span>
              </div>
            </div>
          </div>
          <div class="item1_1">
            <p class="title">自定义一</p>
            <div class="addicon">
              <i @click="show=true"></i>
              新增
            </div>
          </div>
        </div>
        <div class="dyrow">
          <div>
            <span class="title">方案说明：</span>
          </div>
        </div>
        <div class="table1">
          <div class="head">
            <div>关重件</div>
            <div>关重件</div>
          </div>
          <div class="tbody">
            <div>动力车、身及底盘主体件 电子控制单元</div>
            <div>
              发动机:缸体,气江盖曲轴、凸轮轴,连杆.飞轮、凸轮轴支擰盖，摇臂轴。C轮轴正时
              婚轮、进排气岐管。变速器:箱体铺入轴(MT)，输出转MT),主减遗齿轮。倒车档齿
              轮。线束总成(AT) ，变炬器总成。车身：前緘梁。后纵梁、前防檀梁。后防撞梁
              底盘:前桥圍车鄹)总成后桥总成。前转向节、燃油镇。平衡开。副车架。后轴焊接
              总成后镇支架总成发动机悬置支架、发动机罩锁体、身(包括车身骨架、车身钢饭.
              门:不含漆面)。电子控制单元ECU.传感出。
            </div>
          </div>
        </div>

        <!-- 动态展示部分 -->
        <div class="dyrow" v-if="show">
          <div>
            <span class="title">自定义询价方案：</span>
            <span class="titTip">注：多个分组组合后需满足自定义模型需求</span>
          </div>
        </div>
        <div class="item4">
          <div>分组一</div>
          <div>
            <div>
              <div>
                <span>年限：</span>
                <span>（支持多选）</span>
              </div>
              <div class="checkbox">
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="3年以内" disabled></el-checkbox>
                  <el-checkbox label="3年~6年"></el-checkbox>
                  <el-checkbox label="6年~10年"></el-checkbox>
                  <el-checkbox label="10年以上"></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div>
              <div>
                <span>对关重件有要求：</span>
                <span>（单选）</span>
              </div>
              <div class="checkbox">
                <el-radio v-model="add.radio" label="1">原厂件</el-radio>
                <el-radio v-model="add.radio" label="2">原厂件</el-radio>
                <el-radio v-model="add.radio" label="3">配套件</el-radio>
                <el-radio v-model="add.radio" label="4">认证件</el-radio>
                <el-radio v-model="add.radio" label="5">品牌件</el-radio>
              </div>
            </div>
            <div>
              <div>
                <span>对关重件有要求：</span>
                <span>（单选）</span>
              </div>
              <div class="checkbox">
                <el-radio v-model="add.radio1" label="1">原厂件</el-radio>
                <el-radio v-model="add.radio1" label="2">原厂件</el-radio>
                <el-radio v-model="add.radio1" label="3">配套件</el-radio>
                <el-radio v-model="add.radio1" label="4">认证件</el-radio>
                <el-radio v-model="add.radio1" label="5">品牌件</el-radio>
              </div>
            </div>
          </div>
        </div>

        <div class="item4" v-if="show">
          <div>分组二</div>
          <div>
            <div>
              <div>
                <span>年限：</span>
                <span>（支持多选）</span>
              </div>
              <div class="checkbox">
                <el-checkbox-group v-model="checkList1">
                  <el-checkbox label="3年以内" disabled></el-checkbox>
                  <el-checkbox label="3年~6年"></el-checkbox>
                  <el-checkbox label="6年~10年"></el-checkbox>
                  <el-checkbox label="10年以上"></el-checkbox>
                </el-checkbox-group>
              </div>
            </div>
            <div>
              <div>
                <span>对关重件有要求：</span>
                <span>（单选）</span>
              </div>
              <div class="checkbox">
                <el-radio v-model="add.radio3" label="1">原厂件</el-radio>
                <el-radio v-model="add.radio3" label="2">原厂件</el-radio>
                <el-radio v-model="add.radio3" label="3">配套件</el-radio>
                <el-radio v-model="add.radio3" label="4">认证件</el-radio>
                <el-radio v-model="add.radio3" label="4">品牌件</el-radio>
              </div>
            </div>
            <div>
              <div>
                <span>对关重件有要求：</span>
                <span>（单选）</span>
              </div>
              <div class="checkbox">
                <el-radio v-model="add.radio4" label="1">原厂件</el-radio>
                <el-radio v-model="add.radio4" label="2">原厂件</el-radio>
                <el-radio v-model="add.radio4" label="3">配套件</el-radio>
                <el-radio v-model="add.radio4" label="4">认证件</el-radio>
                <el-radio v-model="add.radio4" label="4">品牌件</el-radio>
              </div>
            </div>
          </div>
        </div>
        <div class="item4 kong" v-if="show">
          <i></i>
        </div>
        <!-- 动态展示部分 -->

        <div class="modaltitle">2、定损价浮动设置</div>
        <div class="dyrow">
          <div>
            <span class="title">利润增幅管控设置：</span>
          </div>
        </div>
        <div class="item2">
          <span>原厂件利润比：</span>
          <el-input></el-input>%
          <span>（注：原厂件的利润比为x）</span>
        </div>
        <div class="item2">
          <span>配套件利润增幅：</span>
          <el-input></el-input>%
          <span>（注：配套件的利润增幅为y1）</span>
        </div>
        <div class="item2">
          <span>认证件利润增幅：</span>
          <el-input></el-input>%
          <span>（注：配套件的利润增幅为y2）</span>
        </div>
        <div class="item2">
          <span>品牌件利润增幅：</span>
          <el-input></el-input>%
          <span>（注：配套件的利润增幅为y3）</span>
        </div>
        <i class="line"></i>
        <div class="dyrow">
          <div>
            <span class="title">配件价格参考设置</span>
            <span class="titTip">(实际汽配商报价要小于4s价的比例参考区间）</span>
          </div>
        </div>
        <div class="item2 item3">
          <span>原厂件价格参考区间：</span>
          <el-input></el-input>%
        </div>
        <div class="item2 item3">
          <span>配套件价格参考区间：</span>
          <el-input></el-input>%
        </div>
        <div class="item2 item3">
          <span>认证件价格参考区间：</span>
          <el-input></el-input>%
        </div>
        <div class="item2 item3">
          <span>品牌件价格参考区间：</span>
          <el-input></el-input>%
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
  import tabs from "../../../components/tabs";
  import xybTable from "../../../components/dytable";
  export default {
    components: {
      tabs,
      xybTable,
    },
    data() {
      return {
        number: null,
        name: null,
        phone: null,
        imageUrl: null,
        startTime: null,
        endTime: null,
        show:false,
        size: 10,
        count: 1,
        total: 0,
        checkList: [],
        checkList1: [],
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
        },
        sexs: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
        ],
        search: {
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
          { prop: "name", label: "名称", width: "300%" },
          { prop: "state", label: "合作状态" },
          { prop: "type", label: "模型类型" },
          { prop: "creater", label: "创建人" },
          { prop: "time", label: "创建时间" },
        ],
        tableData: [
          {
            index: 1,
            id: 10001,
            name: "太平洋保险公司（重庆分公司）",
            state: "启用中",
            type: "模型一",
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
      showReModal(info) {
        this.dataIdx = info.index;
        this.$store.commit("addTabMut", { title:'定损询价单详情', path:'/inquiry/prograDetail',type:'inquiry' });
        this.$router.push('/inquiry/prograDetail')
      },
      reModalOK() {
        this.reModal = false;
        this.tip = true;
        setTimeout(() => {
          this.tip = false;
        }, 2000);
      },
      //停用
      showDeleteModal(info) {
        console.log(info);
        this.deleteModal = true;
      },
      deleteModalOK() {
        // this.tableData.map((item, idx) => {
        //   if (item.index === this.dataIdx) {
        //     this.tableData.splice(idx, 1);
        //     return;
        //   }
        // });
        this.deleteModal = false;
      },
      //新增
      showAddModal() {
        this.addModal = true;
        this.postName = null;
        this.descript = null;
        this.show=false
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
  .programme {
    .searchBar {
      position: relative;
      .row {
        div + div {
          margin-left: 2.448vw;
        }
        .select {
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
      .el-dialog__body{
        height: 500px;
        overflow: scroll;
        scrollbar-width: none;
      }
      .modaltitle {
        font-size: 14px;
        font-weight: bold;
        color: #656565;
        margin-bottom: 24px;
      }
      .dyrow {
        margin-bottom: 20px;
        > div:nth-of-type(1) {
          display: flex;
          flex-direction: column;
          > .title {
            font-size: 14px;
            color: #656565;
          }
          .titTip {
            font-size: 12px;
            color: #999999;
            margin-top: 9px;
          }
        }
      }
      .item1 {
        display: flex;
        .item1_1 + .item1_1 {
          margin-left: 10px;
        }
        .item1_1 {
          width: 171px;
          height: 233px;
          background: #ededed;
          border-radius: 4px;
          margin-bottom: 20px;
          > .title {
            box-sizing: border-box;
            padding: 12px 20px;
            height: 39px;
            background: #cbcbcb;
            border-radius: 4px 4px 0px 0px;
            font-size: 14px;
            color: #656565;
          }
          > div {
            box-sizing: border-box;
            padding: 10px 20px;
            line-height: 18px;
            font-size: 12px;
            div {
              > span:nth-of-type(1) {
                font-weight: bolder;
              }
            }
          }
          .addicon {
            height: 193px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            i {
              height: 37px;
              width: 37px;
              display: block;
              background: url("../../../assets/img/upload.png") center no-repeat;
              background-size: 100%;
              margin-bottom: 15px;
              cursor: pointer;
            }
          }
        }
      }
      .table1 {
        .head {
          width: 532px;
          display: flex;
          justify-content: space-between;
          > div {
            font-size: 14px;
            color: white;
            background: #3397db;
            border: 1px solid #d9d9d9;
            width: 100%;
            height: 45px;
            line-height: 45px;
            text-align: center;
          }
          > div:nth-of-type(1) {
            width: 151px;
            flex-shrink: 0;
          }
          > div:nth-of-type(2) {
            flex-grow: 1;
          }
        }
        .tbody {
          width: 532px;
          display: flex;
          color: #999999;
          line-height: 20px;
          font-size: 10px;
          margin-bottom: 20px;
          div:nth-of-type(1) {
            border: 1px solid #d9d9d9;
            box-sizing: border-box;
            padding: 0 20px;
            width: 153px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
          }
          div:nth-of-type(2) {
            padding: 8px;
            flex-grow: 1;
            border: 1px solid #d9d9d9;
            border-left: none;
            border-top: none;
          }
        }
      }
      .item2 {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 20px;
        .el-input,
        .el-input__inner {
          width: 53px !important;
          height: 28px !important;
        }
        .el-input {
          margin: 0 8px 0 12px;
        }
        span:nth-of-type(1) {
          width: 115px;
          flex-shrink: 0;
          text-align: right;
          margin-left: 95px;
        }
        span:nth-of-type(2) {
          font-size: 12px;
          color: #999999;
          text-align: left;
        }
      }
      .item3 {
        span:nth-of-type(1) {
          width: 140px;
          flex-shrink: 0;
          text-align: right;
          margin-left: 95px;
        }
      }
      .item4 {
        margin-bottom: 20px;
        > div:nth-of-type(1) {
          width: 88px;
          height: 37px;
          line-height: 37px;
          text-align: center;
          background: #0f6ba9;
          border-radius: 4px 4px 0px 0px;
          color: white;
        }
        > div:nth-of-type(2) {
          box-sizing: border-box;
          width: 530px;
          height: 169px;
          padding: 20px;
          background: #ededed;
          border-radius: 0px 4px 4px 4px;
          > div {
            display: flex;
            margin-bottom: 20px;
            > div:nth-of-type(1) {
              display: flex;
              flex-direction: column;
              flex-shrink: 0;
              > span:nth-of-type(1) {
                padding-left: 7px;
              }
              > span:nth-of-type(2) {
                font-size: 10px;
                color: #999999;
              }
            }
          }
          .checkbox {
            .el-checkbox {
              margin-right: 10px;
            }
            .el-radio {
              margin-right: 6px;
            }
          }
        }
        &.kong {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 530px;
          height: 169px;
          background: #ededed;
          border-radius: 4px;

          i {
            display: block;
            width: 37px;
            height: 37px;
            background: url("../../../assets/img/upload.png") center no-repeat;
            background-size: 100%;
            cursor: pointer;
          }
        }
      }
      .line {
        display: block;
        width: 100%;
        height: 1px;
        background: #e5e5e5;
        margin-bottom: 20px;
      }
      .el-dialog__body {
        padding: 25px !important;
      }
    }
    .powerTitle {
      line-height: 1.563vw;
      margin-bottom: 1.042vw;
      display: flex;
      justify-content: space-between;
    }
  }
</style>