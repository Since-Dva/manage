<template>
  <div class="workbench">
    <div class="top">
      <h2>我的工作台</h2>
      <div>
        <span>订单分配：</span>
        <div class="_switch">
          <el-switch v-model="switch1" @change="changeSwitch" active-color="#3498db" inactive-color="#cccccc"></el-switch>
          <span :class="switch1?'':'active'">{{switch1?'上线':'下线'}}</span>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="left">
        <div class="title">
          <div>待办事项<span>（当前状态已下线）</span></div>
          <span class="fresh"></span>
        </div>
        <ul class="tab" @click.stop='changeTab'>
          <li :idx='0' :class="['item',tabidx===0? 'active':'']">待受理<i :class="tabidx===0?'active':''">7</i></li>
          <li :idx='1' :class="['item',tabidx===1? 'active':'']">待跟进<i :class="tabidx===1?'active':''">7</i></li>
          <li :idx='2' :class="['item',tabidx===2? 'active':'']">待定损<i :class="tabidx===2?'active':''"></i></li>
          <li :idx='3' :class="['item',tabidx===3? 'active':'']">待协助<i :class="tabidx===3?'active':''">7</i></li>
          <li :idx='4' :class="['item',tabidx===4? 'active':'']">我的订单<i :class="tabidx===4?'active':''"></i></li>
        </ul>
        <div class="btns">
          <div :class="tabidx===0?'active':''">
            <div :class="itemidx===0?'active':''" @click="changeitem(0)">未受理（2）</div>
            <div :class="itemidx===1?'active':''" @click="changeitem(1)">受理超时（2）</div>
            <div :class="itemidx===2?'active':''" @click="changeitem(2)">未发布（2）</div>
            <div :class="itemidx===3?'active':''" @click="changeitem(3)">已发布（16）</div>
          </div>
          <div :class="tabidx===1?'active':''">
            <div :class="itemidx===0?'active':''" @click="changeitem(0)" >已报价（23）</div>
            <div :class="itemidx===1?'active':''" @click="changeitem(1)">已预警（2）</div>
            <div :class="itemidx===2?'active':''" @click="changeitem(2)">报价超时（16）</div>
          </div>
          <div :class="tabidx===2?'active':''">
            <div :class="itemidx===0?'active':''" @click="changeitem(0)" >未定损（3）</div>
            <div :class="itemidx===1?'active':''" @click="changeitem(1)">已定损（16）</div>
            <div :class="itemidx===2?'active':''" @click="changeitem(2)">已录入（4）</div>
          </div>
          <div :class="tabidx===3?'active':''">
            <div :class="itemidx===0?'active':''" @click="changeitem(0)" >关闭申请（3）</div>
            <div :class="itemidx===1?'active':''" @click="changeitem(1)">协助申请（3）</div>
          </div>
          <div :class="['_search', tabidx===4?'active':'']">
                <div class="_row">
                  <div>
                    <span>定损单号：</span>
                    <el-input v-model="value1"></el-input>
                  </div>
                  <div>
                    <span>保险机构：</span>
                    <el-input v-model="value2"></el-input>
                  </div>
                  <div>
                    <span>定损员：</span>
                    <el-input v-model="value3"></el-input>
                  </div>
                  <div>
                    <span>车型：</span>
                    <el-input v-model="value4"></el-input>
                  </div>
                  <div>
                    <span>承修单位：</span>
                    <el-input v-model="value5"></el-input>
                  </div>
                </div>
                <div class="_row">
                  <div>
                     <div>
                      <span>订单状态：</span>
                      <el-input v-model="value6"></el-input>
                    </div>
                    <div class="time">
                      <span>创建时间：</span>
                      <el-date-picker :clearable="false" v-model="value7" type="date" placeholder="开始日期"></el-date-picker>
                      <span>—</span>
                      <el-date-picker :clearable="false" v-model="value8" type="date" placeholder="结束日期"></el-date-picker>
                    </div>
                  </div>
                  <div>
                    <el-button>搜索</el-button>
                  <el-button @click="clearCondition">清除</el-button>
                  </div>
                </div>
            </div>
        </div>
        <div class="tablebox">
          <el-table
              :border="true"
              :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'0.833vw',background:'#eeeeee'}"
              :data="tableData"
              style="width: 100%"
            >
              <el-table-column width="170%" align="center" prop="id" label="定损单号">
                <template slot-scope="scope">
                  <div class="mytd">
                    <span><span v-if="scope.row.emergency" class="emergency">加急</span>{{scope.row.id}}</span>
                  </div>
                </template>
              </el-table-column>
              <el-table-column align="center" width="220%" prop="jigou" label="保险机构"></el-table-column>
              <el-table-column align="center" prop="name" label="定损员"></el-table-column>
              <el-table-column align="center" width="180%" prop="cartype" label="车型"></el-table-column>
              <el-table-column align="center" width="180%" prop="VIN" label="VIN码"></el-table-column>
              <el-table-column align="center" prop="time" label="创建时间" width="160%"></el-table-column>
              <el-table-column align="center" prop="creater" label="跟进人"></el-table-column>
              <el-table-column align="center" prop="state" label="订单状态" width="180%">
                 <template slot-scope="scope">
                  <div class="mytd">
                    <span>{{scope.row.state}}
                      <span :class="scope.row.timeout?'active':''">({{scope.row.time1}})</span>
                    </span>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <div class="pagin">
              共{{total}}条记录
              <el-pagination
              @size-change="sizeChange"
              @current-change="pageChange"
              :page-sizes="[10, 50, 100, 200]"
              :page-size="size"
              :page-count="count"
              layout=" sizes, prev, pager, next"
              :total="total"
              ></el-pagination>
            </div>
        </div>
      </div>
      <div class="right">
        <div class="right1">
          <div class="title">工作进度</div>
          <div>
            <div class="subTit">
              今日汇总
            </div>
            <div>
              <div>
                <span>39</span>
                <span>今日受理</span>
              </div>
              <div>
                <span>39</span>
                <span>今日发布</span>
              </div>
              <div>
                <span>39</span>
                <span>今日定损</span>
              </div>
              <div>
                <span>39</span>
                <span>今日协助</span>
              </div>
              <div>
                <span>39</span>
                <span>今日关闭</span>
              </div>
            </div>
          </div>
          <div>
            <div class="subTit">
              当月汇总
            </div>
            <div>
              <div>
                <span>39</span>
                <span>当月受理</span>
              </div>
              <div>
                <span>39</span>
                <span>当月发布</span>
              </div>
              <div>
                <span>39</span>
                <span>当月定损</span>
              </div>
              <div>
                <span>39</span>
                <span>当月协助</span>
              </div>
              <div>
                <span>39</span>
                <span>当月关闭</span>
              </div>
            </div>
          </div>
        </div>
        <div class="right2">
          <div class="title">当月业绩排名</div>
          <div>
            <div>
              <span>第一名</span>
              <img src="" alt="">
              <span>李华</span>
            </div>
            <span></span>
          </div>
          <div>
            <div>
              <span>第二名</span>
              <img src="" alt="">
              <span>李华</span>
            </div>
            <span></span>
          </div>
          <div>
            <div>
              <span>第三名</span>
              <img src="" alt="">
              <span>李华</span>
            </div>
            <span></span>
          </div>
          <div>
            <div>
              <span>第四名</span>
              <img src="" alt="">
              <span>李华</span>
            </div>
            <span></span>
          </div>
          <div>
            <div>
              <span>第五名</span>
              <img src="" alt="">
              <span>李华</span>
            </div>
            <span></span>
          </div>
        </div>
      </div>
    </div>

    <!-- 下线提示 -->
    <el-dialog title="上下线提示" :visible.sync="online" width="22.656vw">
      <span>当前最少上班人数为1人，系统不允许下线操作</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="confim">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        switch1: true,
        size:10,
        count:1,
        total:2,
        tabidx:0,
        itemidx:0,
        value1:null,
        value2:null,
        value3:null,
        value4:null,
        value5:null,
        value6:null,
        value7:null,
        value8:null,
        online:false,
        tableCol: [
          { prop: "id", label: "定损单号" },
          { prop: "jigou", label: "保险机构" },
          { prop: "name", label: "定损员"},
          { prop: "cartype", label: "车型" },
          { prop: "VIN", label: "VIN码" },
          { prop: "time", label: "创建时间" },
          { prop: "creater", label: "跟进人" },
          { prop: "state", label: "订单状态" },
        ],
        tableData: [
          {
            id: 118658128,
            jigou: "大地保险机构（重庆分公司）",
            name: "郭靖",
            cartype: "【宝马BMW7201DM】",
            VIN: "118658121231238",
            time: "2020/8/1  11:12:05",
            creater: "黄蓉",
            state: "未受理",
            time1:'08：30',
            emergency:true,
            timeout:true,
          },
          {
            id: 118658128,
            jigou: "大地保险机构（重庆分公司）",
            name: "郭靖",
            cartype: "【宝马BMW7201DM】",
            VIN: "118658121231238",
            time: "2020/8/1  11:12:05",
            creater: "黄蓉",
            state: "未受理",
            time1:'08：30',
            emergency:false,
            timeout:false,
          },
        ],
      };
    },
    methods: {
      clearCondition(){
        this.value1=null
        this.value2=null
        this.value3=null
        this.value4=null
        this.value5=null
        this.value6=null
        this.value7=null
        this.value8=null
      },
      changeTab(e){
        this.tabidx=e.target.getAttribute('idx')*1
        this.itemidx=0
      },
      changeitem(idx){
        this.itemidx=idx
      },
      changeSwitch(e){
        this.switch1=e
        this.online=true
      },
      confim(){
        this.online=false
        this.switch1=true
      },
      sizeChange(){

      },
      pageChange(){

      },
    },
  };
</script>

<style lang='scss'>
  .workbench {
    .top {
      display: flex;
      align-items: center;
      margin-bottom: 0.677vw;
      justify-content: space-between;
      h2 {
        font-size: 1.042vw;
        color: #333333;
        font-weight: bolder;
        
      }
      > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        >span {
          font-size: 0.833vw;
          font-weight: bold;
          color: #333333;
        }
        ._switch{
          position: relative;
          .el-switch {
            width: 5.208vw;
            height: 1.667vw;
            background: #cbcbcb;
            border-radius: 0.781vw;
            .el-switch__core {
              display: flex;
              width: 4.01vw !important;
              height: 1.458vw;
              background: #ffffff;
              border-radius: 0.729vw;
              &::after {
                width: 2.031vw;
                height: 1.458vw;
                background: #ffffff;
                border-radius: 0.729vw;
                top: -0.052vw;
              }
            }
            &.is-checked {
              background: #3498db;
            }
          }
          >span{
            position: absolute;
            left: 0.625vw;
            color: white;
            line-height: 1.667vw;
            font-size: 0.729vw;  
            z-index: 0;
            user-select: none;
            pointer-events: none;
            &.active{
              left: 2.604vw;
              color: #333333;
            }
          }
        }
      }
    }
    .container {
      display: flex;
      .title {
        font-size: 0.833vw;
        font-weight: bold;
        color: #333333;
        line-height: 2.396vw;
        padding: 0 1.042vw;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &::after {
          content: "";
          display: block;
          width: 0.104vw;
          height: 1.667vw;
          background: #3397db;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        div span{
          font-size: 0.625vw;
          color: #D52626;
        }
        .fresh {
          display: block;
          width: 1.667vw;
          height: 1.667vw;
          align-self: flex-end;
          background: url('../../../assets/img/shuaxin.png') center no-repeat;
          background-size: 95%;
          cursor: pointer;
        }
      }
      .left {
        width: 65.417vw;
        height: 40.104vw;
        background: #ffffff;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0.208vw;
        margin-right: 1.042vw;
        .tab {
          padding: 0 1.563vw;
          margin-top: 0.521vw;
          border-bottom: 0.052vw solid #CBCBCB;
          .item + .item {
            margin-left: 0.521vw;
          }
          .item {
            display: inline-block;
            line-height: 2.2vw;
            padding: 0 1.927vw;
            text-align: center;
            color: white;
            font-family: Microsoft YaHei;
            background: #3497da;
            border-radius: 0.313vw 0.313vw 0vw 0vw;
            position: relative;
            cursor: pointer;
            &.active {
              background: #0f6baa;
            }
            i {
              width: 1.354vw;
              line-height: 1.354vw;
              border-radius: 50%;
              color: white;
              background: #D52525;
              cursor: pointer;
              position: absolute;
              right: -0.417vw;
              top: -0.417vw;
              z-index: 100;
              opacity: 0;
              &.active{
                opacity: 1;
              }
            }
          }
        }
        .btns{
          padding-left: 1.563vw;
          padding-top: 0.938vw;
          >div{
            position: relative;
            display: flex;
            height: 0;
            // overflow: hidden;
            opacity: 0;
            z-index: -1;
            &.active{
              height: auto;
              z-index: 1;
              opacity: 1;
            }
            >div+div{
              margin-left: 0.521vw;
            }
            >div{
              height: 1.875vw;
              padding: 0 0.521vw;
              line-height: 1.875vw;
              text-align: center;
              border-radius: 0.26vw;
              cursor: pointer;
              &.active{
                background: #eaf4fb;
                color: #7cbbe7;
              }
            }
          }
          ._search{
            padding: 0 !important;
            padding-right: 1.563vw !important;
            box-shadow: none !important;
            display: flex;
            flex-direction: column;
            font-size: 0.729vw;
            ._row{
              display: flex;
              margin-left: 0vw;
              margin-top: 0.104vw;
              justify-content: space-between !important;
              .time{
                display: block !important;
              }
              >div{
                display: flex;
                justify-content: space-between;
              }
            }
            ._row:nth-of-type(2)>div>div{
              margin-right: 1.563vw;
            }
          }
        }
        .tablebox{
          margin-top: 1.042vw;
          .mytd>span{
            display: flex;
            justify-content: center;
            >span{
              margin-left: 0.26vw;
              &.active{
                color: red;
              }

            }
          }
          span{
            display: flex;
            .emergency{
              display: block;
              width: 2.031vw;
              height: 1.146vw;
              text-align: center;
              line-height:1.146vw;
              background: #D52525;
              color: white;
              border-radius: 0.104vw;
              margin-right: 0.26vw;
            }
          }
          .pagin .el-pagination{
            display: flex;
          }
        }
      }
      .right {
        .right1 {
          width: 19.115vw;
          height: 21.875vw;
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
          margin-bottom: 0.781vw;
          >div{
            .subTit{
              font-size: 0.833vw;
              color: #666666;
              line-height: 1.667vw;
              padding-left: 1.25vw;
              border-bottom: 0.052vw solid #e7e7e7;
            }
            >div:nth-of-type(2){
              display: flex;
              flex-wrap: wrap;
              justify-content: flex-start;
              padding-top: 0.521vw;
              >div{
                width: 4.531vw;
                height: 2.917vw;
                margin: 0.313vw 0.833vw;
                border-radius: 0.208vw;
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                color: white;
                span:nth-of-type(1){
                  line-height: 0.938vw;
                  font-size: 0.938vw;
                  font-weight: bolder;
                }
                span:nth-of-type(2){
                  line-height: 1.042vw;
                  font-size: 0.625vw;
                }
              }
              >div:nth-of-type(1){
                background: url('../../../assets/img/pic_1.png') center no-repeat;
                background-size: 100%;
              }
              >div:nth-of-type(2){
                background: url('../../../assets/img/pic_2.png') center no-repeat;
                background-size: 100%;
              }
              >div:nth-of-type(3){
                background: url('../../../assets/img/pic_3.png') center no-repeat;
                background-size: 100%;
              }
              >div:nth-of-type(4){
                background: url('../../../assets/img/pic_4.png') center no-repeat;
                background-size: 100%;
              }
              >div:nth-of-type(5){
                background: url('../../../assets/img/pic_5.png') center no-repeat;
                background-size: 100%;
              }
            }
          }
        }
        .right2 {
          width: 19.115vw;
          height: 17.448vw;
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
          >div:nth-of-type(2),div:nth-of-type(3),div:nth-of-type(4),div:nth-of-type(5),div:nth-of-type(6){
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 1.042vw 0 1.563vw;
            margin-top: 0.625vw;
            >div{
              display: flex;
              align-items: center;
              img{
              width: 2.083vw;
              height: 2.083vw;
              margin-right: 0.781vw;
              border-radius: 50%;
              overflow: hidden;
              border: 0.052vw solid #000;
              }
              span{
                font-size: 0.833vw;
                color: #666666;
                margin-right: 0.781vw;
              }
            }
            >span{
              display: block;
              width: 2.083vw;
              height: 2.083vw;
              
            }
          }
          >div:nth-of-type(2){
            >span{
              background: url('../../../assets/img/p1.png') center no-repeat;
              background-size: 95%;
            }
          }
          >div:nth-of-type(3){
            >span{
              background: url('../../../assets/img/p2.png') center no-repeat;
              background-size: 95%;
            }
          }
          >div:nth-of-type(4){
            >span{
              background: url('../../../assets/img/p3.png') center no-repeat;
              background-size: 95%;
            }
          }
          >div:nth-of-type(5){
            >span{
              background: url('../../../assets/img/p4.png') center no-repeat;
              background-size: 95%;
            }
          }
          >div:nth-of-type(6){
            >span{
              background: url('../../../assets/img/p4.png') center no-repeat;
              background-size: 95%;
            }
          }
        }
      }
    }
  }
</style>