<template>
  <div class="prograDetail">
    <tabs></tabs>
    <div class="content">
      <div class="left">
        <div class="arr">
          <div>解析需求</div>
          <div>汽配商报价</div>
          <div>生成报价方案</div>
          <div>审核定损</div>
        </div>
        <div class="left1">
          <div class="left1_2">
            <div class="title">
              <span>基本信息</span>
              <div>
                <span>订单状态</span>
                <span>未发布</span>
                <a @click="changeIsEdit">{{isEdit?'编辑':'保存'}}</a>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>保险机构：</span>
                <el-input v-model="base.value1">大地保险（重庆分公司）</el-input>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>VIN码：</span>
                <el-input :disabled="isEdit" v-model="base.value2">CQTPY20200721000001</el-input>
                <a>复制</a>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>车牌号：</span>
                <el-input :disabled="isEdit" v-model="base.value3">渝DN7688</el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>报案号：</span>
                <el-input v-model="base.value4">大地保险（重庆分公司）</el-input>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>车型：</span>
                <el-input :disabled="isEdit" v-model="base.value5">CQTPY20200721000001</el-input>
                <a>复制</a>
              </div>
              <div>
                <span>承修单位：</span>
                <el-input v-model="base.value6">渝DN7688</el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>定损员：</span>
                <el-input v-model="base.value7">大地保险（重庆分公司）</el-input>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>年龄：</span>
                <el-input v-model="base.value8"></el-input>
              </div>
              <div>
                <span>承修电话：</span>
                <el-input v-model="base.value9">渝DN7688</el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>询价单号：</span>
                <el-input v-model="base.value10"></el-input>
                <a>复制</a>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>提交时间：</span>
                <el-input v-model="base.value11"></el-input>
              </div>
            </div>

            <div @click="changeView" :class="['viewbtn',isView?'roate':'']">
              {{isView?'收起':'查看详情'}}
              <i></i>
            </div>

            <div v-if="isView" class="left_2">
              <div class="title">
                <span>受损信息</span>
              </div>
              <div class="left2main">
                <div class="left2_1">
                  <div class="select">
                    受损面：
                    <span>2面</span>
                  </div>
                  <div>
                    <span>备注：</span>
                    <span>具体零部件详情需要电话沟通</span>
                  </div>
                </div>
                <div class="left2_2">
                  <div>受损照片</div>
                  <div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                  </div>
                </div>
                <div class="left2_2box">
                  <div class="left2_2">
                    <div>维修清单</div>
                    <div>
                      <div class="imgbox">
                        <img src alt />
                        <span>本地上传</span>
                      </div>
                    </div>
                  </div>
                  <div class="left2_2 left2_2xs">
                    <div>行驶证</div>
                    <div>
                      <div class="imgbox">
                        <img src alt />
                        <span>本地上传</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>综合报价方案</span>
            <div>
              <div>
                <span>当前保险机构报价方案模型：</span>
                <span>自定义</span>
              </div>
              <el-button>保存</el-button>
            </div>
          </div>
          <div class="_tableBox">
            <div class="_thead">
              <div>排序</div>
              <div>零部件信息</div>
              <div>年限</div>
              <div>是否为关重件</div>
              <div>品质</div>
              <div>汽配商名称</div>
              <div>汽配商报价</div>
              <div>定损价</div>
              <div>利润</div>
            </div>
            <div class="_tr">
              <div>1</div>
              <div>
                <span>左大灯：X3</span>
                <span>OE码：3729525249</span>
                <span>4S价：¥ 710</span>
              </div>
              <div>3年</div>
              <div>否</div>
              <div>
                <div>
                  <el-radio v-model="radio1" label="原厂件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="配套件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="认证件" />
                </div>
                <div>
                  <el-radio class="tuijian" v-model="radio1" label="品牌件" />
                </div>
              </div>
              <div>
                <div>中南汽配商</div>
                <div>中南汽配商</div>
                <div class="blue">中南汽配商</div>
                <div>中南汽配商</div>
              </div>
              <div>
                <div>580</div>
                <div>580</div>
                <div class="blue">580</div>
                <div>
                  580
                  <span class="gth">
                    <span class="tip">当前报价已高于参考价格恒定区间值</span>
                  </span>
                </div>
              </div>
              <div>
                <div>670</div>
                <div>670</div>
                <div class="blue">670</div>
                <div>670</div>
              </div>
              <div>
                <div>90</div>
                <div>90</div>
                <div class="blue">90</div>
                <div>90</div>
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
        <div class="right4">
          <div class="title">
            <span>订单跟进</span>
          </div>
          <div>
            <el-button @click="changegenjin">{{!genjin?'添加跟进':'保存跟进'}}</el-button>
            <el-button class="gray">开启订单</el-button>
            <el-button @click="xiezhu=true">完成协助</el-button>
            <el-input v-if="genjin" type="textarea" v-model="textarea2" :rows="4"></el-input>
          </div>
        </div>
        <div class="right2">
          <div class="title">
            <span>跟进记录</span>
          </div>
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

    <!-- 未保存提示 -->
    <el-dialog title="保存确认" :visible.sync="saveModal" width="22.656vw">
      <span>当前页面未保存，请确认是否保存信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="saveModalOK">确 定</el-button>
        <el-button class="cancel" @click="saveModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 无权限提示 -->
    <el-dialog title="权限提示" :visible.sync="nopower" width="22.656vw">
      <span>您暂无权限操作该定损询价单</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="nopowerOK">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 订单关闭提示 -->
    <el-dialog title="操作提示" :visible.sync="dingdan" width="22.656vw">
      <span>当前订单已关闭，您的操作无效</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dingdanOK">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 关闭订单原因 -->
    <el-dialog title="关闭订单" :visible.sync="closedingdan" width="22.656vw">
      <el-input type="textarea" :rows="4" placeholder="请填写订单关闭原因  （必填）" v-model="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closedingdanOK">确 定</el-button>
        <el-button class="cancel" @click="closedingdan=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 完成协助 -->
    <el-dialog title="完成协助确认" :visible.sync="xiezhu" width="22.656vw">
      <el-input type="textarea" :rows="4" placeholder="请描述此次协助的过程  （必填）" v-model="textarea1"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="xiezhuOK">确 定</el-button>
        <el-button class="cancel" @click="xiezhu=false">取 消</el-button>
      </span>
    </el-dialog>
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
        saveModal: false,
        nopower: false,
        dingdan: false,
        closedingdan: false,
        xiezhu: false,
        shousun: null,
        textarea: null,
        textarea1: null,
        textarea2: null,
        input1: null,
        input2: null,
        select1: null,
        isView: false,
        radio1: null,
        fileList: [
          {
            name: "太平洋保险（重庆分公司）战略合作合同.pdf",
            url: "https://fuss10.elemecdn.com/3/63/",
          },
        ],
        isEdit: true,
        base: {
          value1: "大地保险（重庆分公司）",
          value2: "CQTPY20200721000001",
          value3: "渝DN7688",
          value4: "1186581481643CQ",
          value5: "大众汽车SVW71810BU",
          value6: "途虎养车（空港新城店）",
          value7: "郭靖",
          value8: "三年",
          value9: "17623888288",
          value10: "CQTPY20200721000001",
          value11: "2020年8月3日16:06:14",
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
          { label: "大众", value: 1 },
          { label: "奥迪", value: 2 },
        ],
        addgj: false,
        genjin: false,
      };
    },
    methods: {
      changeIsEdit() {
        this.isEdit = !this.isEdit;
      },
      saveModalOK() {
        this.isEdit = false;
        this.saveModal = false;
      },
      nopowerOK() {
        this.nopower = false;
      },
      dingdanOK() {
        this.dingdan = false;
      },
      closedingdanOK() {
        this.closedingdan = false;
      },
      xiezhuOK() {
        this.xiezhu = false;
      },
      changegenjin() {
        this.genjin = !this.genjin;
        this.textarea2 = null;
      },
      changeView() {
        this.isView = !this.isView;
      },
    },
  };
</script>

<style lang='scss'>
  .prograDetail {
    .content {
      display: flex;
      justify-content: space-between;
      .arr {
        width: 1253px;
        height: 90px;
        background: #ffffff;
        box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
        border-radius: 0px 4px 4px 4px;
        display: flex;
        align-items: center;
        > div {
          width: 336px;
          height: 50px;
          line-height: 50px;
          text-align: center;
          color: #656565;
        }
        > div:nth-of-type(1) {
          background: url("../../../assets/img/arratc.png") center no-repeat;
          background-size: 100%;
          color: white;
        }
        > div:nth-of-type(2) {
          background: url("../../../assets/img/arratc.png") center no-repeat;
          background-size: 100%;
          color: white;
        }
        > div:nth-of-type(3) {
          background: url("../../../assets/img/arr.png") center no-repeat;
          background-size: 100%;
        }
        > div:nth-of-type(4) {
          background: url("../../../assets/img/arrlast.png") center no-repeat;
          background-size: 100%;
        }
      }
      .title {
        height: 1.042vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding-bottom: 1.1vw;
        padding-left: 1.823vw;
        border-bottom: 1px solid #cbcbcb;
        > span:nth-of-type(1) {
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
      .left {
        width: 65.26vw;
        height: 40vw;
        border-radius: 4px;
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
          border-radius: 4px;
          padding: 20px 0 10px 0;
          position: relative;
          .viewbtn {
            position: absolute;
            height: 11px;
            font-size: 10px;
            color: #656565;
            background: white;
            padding: 5px 25px 5px 15px;
            left: 50%;
            border-radius: 0 0 4px 4px;
            bottom: -20px;
            cursor: pointer;
            box-shadow: 0vw 0.5vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
            i {
              width: 0;
              height: 0;
              border-left: 8px solid transparent;
              border-right: 8px solid transparent;
              border-top: 10px solid #cdcdcd;
              position: absolute;
              bottom: 4px;
              right: 7px;
            }
            &.roate {
              i {
                transform: rotate(180deg);
              }
            }
          }
          .left1_2 {
            .title {
              > div {
                margin-right: 36px;
                span:nth-of-type(1) {
                  font-size: 16px;
                  color: #999999;
                }
                span:nth-of-type(2) {
                  font-size: 16px;
                  color: #333333;
                  margin: 0 20px;
                }
                a {
                  cursor: pointer;
                }
              }
            }
            .left1_2_1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 30px;
              > div {
                width: 100%;
                display: flex;
                align-items: center;
                margin: 10px 0;
                .el-input,
                .el-input__inner {
                  width: 190px !important;
                  border: none;
                }
                .el-input.is-disabled .el-input__inner {
                  background: white;
                  color: #6a6a6a;
                  cursor: default;
                }
                > span {
                  display: block;
                  width: 80px;
                  text-align: right;
                }
                a {
                  cursor: pointer;
                }
              }
              .blue {
                .el-input,
                .el-input__inner {
                  color: #006cff !important;
                }
              }
            }
            .left1_2_2 {
              display: flex;
              > div:nth-of-type(1) {
                margin-right: 3.2vw;
              }
            }
          }
          .left_2 {
            .left2main {
              padding: 20px 30px;
            }
            .title {
              padding-top: 20px;
              ::after {
                content: "";
                opacity: 0;
              }
            }
            .left2_1 {
              display: flex;
              align-items: center;
              > div:nth-of-type(2) {
                margin-left: 180px;
                span:nth-of-type(2) {
                  margin-left: 10px;
                }
              }
            }

            .left2_2 {
              margin-top: 20px;
              div:nth-of-type(2) {
                display: flex;
                .imgbox {
                  width: 200px;
                  height: 178px;
                  border: 1px solid #cbcbcb;
                  border-radius: 4px;
                  margin-right: 20px;
                  margin-top: 15px;
                  position: relative;
                  img {
                    width: 100%;
                  }
                  span {
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    line-height: 40px;
                    background: #cbcbcb;
                    opacity: 0.4;
                    color: white;
                    border-radius: 0px 0px 4px 4px;
                  }
                }
              }
            }
            .left2_2box {
              display: flex;
            }
            .left2_2xs {
              div:nth-of-type(2) .imgbox {
                width: 362px;
                height: 178px;
                border-radius: 4px;
              }
            }
          }
        }
        .left2 {
          padding-bottom: 30px;
          .title {
            > div {
              width: 1070px;
              padding-right: 32px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              > div span:nth-of-type(1) {
                color: #999999;
              }
            }
          }
          ._tableBox {
            padding: 30px 30px 0 30px;
            ._thead,
            ._tr {
              > div {
                border: 1px solid #dcdcdc;
                border-right: transparent;
                border-bottom: transparent;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                > span {
                  box-sizing: content-box;
                  display: block;
                  width: 90%;
                  text-align: left;
                  margin: 5px 0;
                }
                .blue{
                  background: #d6eaf8;
                }
                > div {
                  width: 100%;
                  height: 25%;
                  line-height: 51px;
                  align-items: center;
                  text-align: center;
                  justify-content: center;
                  border-top: 1px solid #dcdcdc;
                  position: relative;
                  .el-radio {
                    position: relative;
                    margin-left: -10px;
                    &.tuijian {
                      &::after {
                        content: "(推荐)";
                        font-size: 12px;
                        color: #999999;
                        position: absolute;
                        right: -35px;
                      }
                    }
                  }
                  .gth {
                    display: block;
                    width: 15px;
                    height: 15px;
                    border-radius: 50%;
                    background: url("../../../assets/img/gth.png") center
                      no-repeat;
                    background-size: 100%;
                    position: absolute;
                    left: 70px;
                    bottom: 17px;
                    z-index: 999;
                    .tip {
                      padding: 1px 3px;
                      line-height: 12px;
                      position: absolute;
                      bottom: 0;
                      width: 200px;
                      font-size: 10px;
                      color: #999999;
                      bottom: -25px;
                      left: 0px;
                      background: #ededed;
                      border-radius: 2px;
                      &::before {
                        content: "";
                        position: absolute;
                        top: -10px;
                        width: 0;
                        height: 0;
                        border-width: 0 5px 10px;
                        border-style: solid;
                        border-color: transparent transparent #ededed;
                      }
                    }
                  }
                  // >span{
                  //   position: absolute;
                  //   font-size: 12px;
                  //   right: 15px;
                  //   top: 48%;
                  //   transform: translateY(-50%);
                  //   color: #999999;
                  // }
                }
                > div:nth-of-type(1) {
                  border-top: transparent;
                }
              }
              > div:nth-last-child(1) {
                border-right: 1px solid #dcdcdc;
              }
              > div:nth-of-type(1) {
                width: 99px;
              }
              > div:nth-of-type(2) {
                width: 179px;
              }
              > div:nth-of-type(3) {
                width: 100px;
              }
              > div:nth-of-type(4) {
                width: 129px;
              }
              > div:nth-of-type(5) {
                width: 149px;
              }
              > div:nth-of-type(6) {
                width: 217px;
              }
              > div:nth-of-type(7),
              > div:nth-of-type(8),
              > div:nth-of-type(9) {
                width: 100px;
              }
            }
            ._thead {
              display: flex;
              height: 45px;
              > div {
                color: #333333;
                line-height: 45px;
                text-align: center;
                background: #eeeeee;
              }
            }
            ._tr {
              display: flex;
              > div:nth-of-type(1),
              > div:nth-of-type(2),
              > div:nth-of-type(3),
              > div:nth-of-type(4) {
                height: 206px;
              }
            }
            ._tr:nth-last-child(1) {
              > div {
                border-bottom: 1px solid #dcdcdc;
              }
            }
          }
        }
      }
      .right {
        width: 19.115vw;
        height: 40vw;
        overflow: scroll;
        border-radius: 4px;
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
              border: 0.052vw solid #cbcbcb;
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
        .right4 {
          border-radius: 4px;
          > div:nth-of-type(2) {
            padding: 20px 30px;
          }
          .el-button {
            padding: 0 17px !important;
            margin-right: 7px !important;
            &.gray {
              background: #cccccc !important;
              color: white !important;
              cursor: not-allowed;
              outline: none !important;
              border: transparent !important;
              pointer-events: none;
            }
          }
          .el-button:nth-of-type(3) {
            margin-left: 0 !important;
            margin-top: 10px !important;
            margin-bottom: 15px !important;
          }
          .title {
            padding: 20px 30px;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: 13px;
            }
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
  }
</style>