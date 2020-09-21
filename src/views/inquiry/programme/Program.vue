<template>
  <div class="program">
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
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>方案信息</span>
            <el-button @click="this.changeEdit">{{isEdit?'保存':'编辑'}}</el-button>
          </div>
          <div class="left3">
            <div>
              <div class="modaltitle">1.模型</div>
              <div class="item1">
                <div class="item1_1">
                  <p
                    class="title"
                    :style="{background:blueType==1?'#0f6baa':'',color:blueType==1?'white':'#656565'}"
                  >模型一</p>
                  <div @click="showBlue(1)">
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
                  <span v-if="blueType==1">使用中</span>
                </div>
                <div class="item1_1">
                  <p
                    class="title"
                    :style="{background:blueType==2?'#0f6baa':'',color:blueType==2?'white':'#656565'}"
                  >模型二</p>
                  <div @click="showBlue(2)">
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
                  <span v-if="blueType==2">使用中</span>
                </div>
                <div class="item1_1">
                  <p
                    class="title"
                    :style="{background:blueType==3?'#0f6baa':'',color:blueType==3?'white':'#656565'}"
                  >自定义一</p>
                  <div class="addicon" @click="showBlue(3)">
                    <i></i>
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
              <div class="item4" v-show="show" v-for="(item,idx) in arr" :key="idx">
                <div>分组{{idx==0?'一':idx==1?'二':idx==2?'三':idx==3?'四':idx==4?'五':'六'}}</div>
                <div>
                  <div>
                    <div>
                      <span>年限：</span>
                      <span>（支持多选）</span>
                    </div>
                    <div class="checkbox">
                      <el-checkbox-group @change="changeYear" v-model="item.checkList">
                        <el-checkbox label="3年以内"></el-checkbox>
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
                      <el-radio v-model="item.radio" label="1">原厂件</el-radio>
                      <el-radio v-model="item.radio" label="2">原厂件</el-radio>
                      <el-radio v-model="item.radio" label="3">配套件</el-radio>
                      <el-radio v-model="item.radio" label="4">认证件</el-radio>
                      <el-radio v-model="item.radio" label="5">品牌件</el-radio>
                    </div>
                  </div>
                  <div>
                    <div>
                      <span>对关重件有要求：</span>
                      <span>（单选）</span>
                    </div>
                    <div class="checkbox">
                      <el-radio v-model="item.radio1" label="1">原厂件</el-radio>
                      <el-radio v-model="item.radio1" label="2">原厂件</el-radio>
                      <el-radio v-model="item.radio1" label="3">配套件</el-radio>
                      <el-radio v-model="item.radio1" label="4">认证件</el-radio>
                      <el-radio v-model="item.radio1" label="5">品牌件</el-radio>
                    </div>
                  </div>
                </div>
              </div>
              <div class="item4 kong" v-if="show&&arr.length<=3">
                <i @click="addone"></i>
              </div>
              <!-- 动态展示部分 -->

              <div class="modaltitle">2、定损价浮动设置</div>
              <div class="listbox">
                <div class="title">利润增幅管控设置</div>
                <div class="item2">
                  <span>原厂件利润比：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value1"></el-input>%
                  <span>（注：原厂件的利润比为x）</span>
                </div>
                <div class="item2">
                  <span>配套件利润增幅：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value2"></el-input>%
                  <span>（注：配套件的利润增幅为y1）</span>
                </div>
                <div class="item2">
                  <span>认证件利润增幅：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value3"></el-input>%
                  <span>（注：配套件的利润增幅为y2）</span>
                </div>
                <div class="item2">
                  <span>品牌件利润增幅：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value4"></el-input>%
                  <span>（注：配套件的利润增幅为y3）</span>
                </div>
              </div>
              <!-- <div class="dyrow">
                <div>
                  <span class="title">配件价格参考设置</span>
                  <span class="titTip">(实际汽配商报价要小于4s价的比例参考区间）</span>
                </div>
              </div>-->
              <div class="listbox">
                <div class="title">
                  配件价格参考设置
                  <span>(实际汽配商报价要小于4s价的比例参考区间）</span>
                </div>
                <div class="item2 item3">
                  <span>原厂件价格参考区间：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value5"></el-input>%
                </div>
                <div class="item2 item3">
                  <span>配套件价格参考区间：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value6"></el-input>%
                </div>
                <div class="item2 item3">
                  <span>认证件价格参考区间：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value7"></el-input>%
                </div>
                <div class="item2 item3">
                  <span>品牌件价格参考区间：</span>
                  <el-input :class="isEdit?'border':''" :disabled="!isEdit" v-model="value8"></el-input>%
                </div>
              </div>
            </div>
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
  </div>
</template>




<script>
  import tabs from "../../../components/tabs";
  export default {
    components: {
      tabs,
    },
    data() {
      return {
        fileList: [
          {
            name: "太平洋保险（重庆分公司）战略合作合同.pdf",
            url: "https://fuss10.elemecdn.com/3/63/",
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
        show: false,
        show1: false,
        checkList: [],
        checkList1: [],
        isEdit: false,
        blueType: 1,
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
        addconcat: {
          name: null,
          sex: null,
          job: null,
          phone: null,
          wx: null,
          email: null,
          radio: 2,
        },
        arr:[
          {radio:'',radio1:'',checkList:[]},
        ],
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
        value1: 5,
        value2: 70,
        value3: 60,
        value4: 50,
        value5: 90,
        value6: 80,
        value7: 70,
        value8: 60,
      };
    },
    methods: {
      addconcatModalOK() {
        this.addconcatModal = false;
      },
      showDownload() {
        this.download = true;
      },
      addModalOK() {},
      addModalcancel() {},
      showdelete() {
        this.deleteModal = true;
      },
      showAgreement() {
        this.agreement = true;
      },
       addone(){
        if(this.arr.length<=3){
          this.arr.push({radio:'',radio1:'',checkList:[]})
        }
      },
      downloadOK() {
        this.download = false;
      },
      deleteModalOK() {
        this.deleteModal = false;
      },
      addfollowup() {
        this.addgj = !this.addgj;
      },
      changeEdit() {
        //编辑/保存
        this.isEdit = !this.isEdit;
        if (!this.isEdit) {
          this.blueType = null;
          this.show = false;
        }
      },
      showBlue(type) {
        //点击弹窗分组交互色
        if (type !== this.blueType) {
          this.blueType = type;
        } else {
          if (this.blueType) {
            this.blueType = null;
          } else {
            this.blueType = type;
          }
        }
        if (type === 3) {
          this.show = true;
        } else {
          this.show = false;
        }
      },
    },
  };
</script>

<style lang='scss'>
  .program {
    .content {
      display: flex;
      justify-content: space-between;
      .left {
        width: 65.26vw;
        height: 700px;
        padding-top: 175px;
        overflow: scroll;
        scrollbar-width: none;
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0vw 0.208vw 0.208vw 0.208vw;
          margin-bottom: 1.042vw;
        }
        .left1 {
          width: 1253px;
          box-sizing: border-box;
          padding: 1.042vw 1.667vw;
          position: fixed;
          z-index: 400;
          top: 145px;
          border-radius: 4px;
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
                overflow: hidden;
              }
            }
          }
          .left1_2 {
            > div {
              padding: 0 2.813vw;
              margin: 1.458vw 0;
            }
            .left1_2_1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
            }
            .left1_2_2 {
              display: flex;
              > div {
                margin-right: 15.625vw;
              }
            }
          }
        }
        .left2 {
          box-sizing: border-box;
          padding: 0.99vw 1.823vw 3vw 0;
          border-radius: 4px;
          > .title {
            height: 1.042vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            padding-bottom: 1.302vw;
            padding-left: 1.823vw;
            border-bottom: 1px solid #f2f2f2;
            margin-bottom: 20px;
            span {
              font-weight: 1000;
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
      }
      .right {
        width: 19.115vw;
        height: 42vw;
        overflow: scroll;
        scrollbar-width: none;
        > div + div {
          margin-top: 1.042vw;
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
          .triangle {
            width: 0;
            height: 0;
            border-top: 5.208vw solid #3498db;
            border-left: 5.208vw solid transparent;
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
        .right3 {
          box-sizing: border-box;
          height: 14vw;
          overflow-x: hidden;
          overflow-y: scroll;
          scrollbar-width: none;
          font-size: 0.729vw;
          position: relative;
          .title {
            box-sizing: border-box;
            height: 2.604vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 1.302vw;
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
                line-height: 1.1vw;
                margin-top: -0.156vw;
              }
            }
          }
          .pagina {
            display: inline-block;
            transform: scale(0.7);
            float: right;
            position: absolute;
            bottom: 10px;
            right: 0px;
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
        font-size: 0.625vw;
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
    .left3 {
      > div {
        padding: 0 32px;
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
        margin-bottom: 20px;
        .item1_1 + .item1_1 {
          margin-left: 10px;
        }
        .item1_1 {
          position: relative;
          > span {
            position: absolute;
            bottom: -28px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 14px;
            font-weight: bold;
            color: #0f6baa;
          }
          cursor: pointer;
          width: 171px;
          height: 233px;
          background: #ededed;
          border-radius: 4px;
          margin-bottom: 30px;
          &:hover {
            > .title {
              color: white !important;
              background: #0f6baa;
            }
          }
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
          .use {
            font-size: 14px;
            font-weight: bold;
            color: #0f6baa;
            text-align: center;
            margin: 10px 0;
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
      .listbox {
        width: 532px;
        height: 255px;
        background: #eeeeee;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 20px;
        .title {
          padding-left: 33px;
          margin-bottom: 20px;
          > span {
            font-size: 12px;
            color: #999999;
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
            background: transparent !important;
            border: none;
            border-radius: 4px;
            &.border{
              border: 1px solid #dcdfe6;
            }
          }
          .el-input {
            margin: 0 8px 0 12px;
          }
          span:nth-of-type(1) {
            width: 140px;
            flex-shrink: 0;
            text-align: right;
            margin-left: 30px;
          }
          span:nth-of-type(2) {
            font-size: 12px;
            color: #999999;
            text-align: left;
          }
        }
        .item2:nth-last-child(1) {
          margin-bottom: 0;
        }
      }
      .item3 {
        span:nth-of-type(1) {
          width: 160px !important;
          flex-shrink: 0;
          text-align: right;
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
              margin-right: 4px;
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
    }
  }
</style>