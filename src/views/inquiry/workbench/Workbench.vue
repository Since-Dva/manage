<template>
  <div class="workbench">
    <div class="top">
      <h2>我的工作台</h2>
      <div>
        <span>订单分配：</span>
        <el-switch v-model="switch1" active-color="#3498db" inactive-color="#cccccc"></el-switch>
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
        </div>
        <div class="right2">
          <div class="title">当月业绩排名</div>
        </div>
      </div>
    </div>
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
      margin-bottom: 13px;
      h2 {
        font-size: 20px;
        color: #333333;
        font-weight: bolder;
        
      }
      display: flex;
      justify-content: space-between;
      > div {
        span {
          font-size: 16px;
          font-weight: bold;
          color: #333333;
        }
        .el-switch {
          width: 100px;
          height: 32px;
          background: #cbcbcb;
          border-radius: 15px;
          .el-switch__core {
            display: flex;
            width: 77px !important;
            height: 28px;
            background: #ffffff;
            border-radius: 14px;
            &::after {
              width: 39px;
              height: 28px;
              background: #ffffff;
              border-radius: 14px;
              top: -1px;
            }
          }
          &.is-checked {
            background: #3498db;
          }
        }
      }
    }
    .container {
      display: flex;
      .title {
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        line-height: 46px;
        padding: 0 20px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: space-between;
        &::after {
          content: "";
          display: block;
          width: 2px;
          height: 32px;
          background: #3397db;
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
        }
        div span{
          font-size: 12px;
          color: #D52626;
        }
        .fresh {
          display: block;
          width: 32px;
          height: 32px;
          border: 1px solid #000;
          align-self: flex-end;
        }
      }
      .left {
        width: 1256px;
        height: 770px;
        background: #ffffff;
        box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        margin-right: 20px;
        .tab {
          padding: 0 30px;
          margin-top: 10px;
          border-bottom: 1px solid #CBCBCB;
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
              width: 26px;
              line-height: 26px;
              border-radius: 50%;
              color: white;
              background: #D52525;
              cursor: pointer;
              position: absolute;
              right: -8px;
              top: -8px;
              z-index: 100;
              opacity: 0;
              &.active{
                opacity: 1;
              }
            }
          }
        }
        .btns{
          padding-left: 30px;
          padding-top: 18px;
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
              margin-left: 10px;
            }
            >div{
              height: 36px;
              padding: 0 10px;
              line-height: 36px;
              text-align: center;
              border-radius: 5px;
              cursor: pointer;
              &.active{
                background: #eaf4fb;
                color: #7cbbe7;
              }
            }
          }
          ._search{
            padding: 0 !important;
            padding-right: 30px !important;
            box-shadow: none !important;
            display: flex;
            flex-direction: column;
            font-size: 14px;
            ._row{
              display: flex;
              margin-left: 0px;
              margin-top: 2px;
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
              margin-right: 30px;
            }
          }
        }
        .tablebox{
          margin-top: 20px;
          .mytd>span{
            display: flex;
            justify-content: center;
            >span{
              margin-left: 5px;
              &.active{
                color: red;
              }

            }
          }
          span{
            display: flex;
            .emergency{
              display: block;
              width: 39px;
              height: 22px;
              text-align: center;
              line-height:22px;
              background: #D52525;
              color: white;
              border-radius: 2px;
              margin-right: 5px;
            }
          }
          .pagin .el-pagination{
            display: flex;
          }
        }
      }
      .right {
        .right1 {
          width: 367px;
          height: 410px;
          background: #ffffff;
          box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
          margin-bottom: 15px;
        }
        .right2 {
          width: 367px;
          height: 345px;
          background: #ffffff;
          box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
          border-radius: 4px;
        }
      }
    }
  }
</style>