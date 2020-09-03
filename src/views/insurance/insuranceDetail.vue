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
                <h2>大地保险公司(重庆分公司)</h2>
                <h3>ID号：BX00001</h3>
              </div>
            </div>
            <a>编辑</a>
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
                <span>合作中</span>
              </div>
            </div>
            <div>
              <span>所在地区</span>
              <span>重庆 - 重庆 - 渝北</span>
            </div>
            <div>
              <span>详细地址</span>
              <span>重庆市渝北区仙桃数据谷C16-A2-2层</span>
            </div>
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>联系人信息</span>
            <el-button>＋新增</el-button>
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
            <el-table-column align="center" prop="email" label="邮箱" width="200%"></el-table-column>
            <el-table-column align="center" label="操作" width="280%">
              <template slot-scope="scope">
                <div>
                  <a @click="todedail(scope.row)">编辑</a>
                  <a v-if="!scope.row.ismain" @click="todedail(scope.row)">删除</a>
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
                  <a v-if="scope.row.show" @click="todedail(scope.row)">查看</a>
                  <a v-if="scope.row.show" @click="todedail(scope.row)">下载</a>
                  <a @click="todedail(scope.row)">编辑</a>
                </div>
              </template>
            </el-table-column>
          </el-table>
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
          <el-input v-if="addgj" type="textarea" :rows="4"></el-input>
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
              <span>2020/7/30/  16:43</span>
              <p>商务部黄蓉  刚查看了该详情 页</p>
            </div>
            <div>
              <span>2020/7/30/  16:43</span>
              <p>商务部黄蓉  刚新增了联系人 信息</p>
            </div>
            <div>
              <span>2020/7/30/  16:43</span>
              <p>商务部黄蓉  刚下载合同</p>
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
import tabs from "../../components/tabs";
export default {
  components: {
    tabs,
  },
  data() {
    return {
      addgj:false,
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
    addfollowup(){
      this.addgj=!this.addgj
    }
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
        padding: 1.094vw 1.823vw 1.094vw 0;
        .title {
          height: 1.9vw;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          margin-bottom: 1.302vw;
          padding-left: 1.823vw;
          ::after {
            content: "";
            display: block;
            width: 0.208vw;
            height: 1.667vw;
            background: #3498db;
            position: absolute;
            left: -0vw;
            top: 0.104vw;
          }
        }
        .el-table {
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
          top: 0.35vw;
        }
      }
    }
    .right {
      width: 19.115vw;
      height: 42vw;
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
        box-sizing: border-box;
        height: 5.573vw;
        padding: 1.406vw;
        position: relative;
        .triangle {
          width: 0;
          height: 0;
          border-top: 5.573vw solid #3498db;
          border-left: 5.573vw solid transparent;
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
        height: 486px;
        overflow: scroll;
        .title {
          box-sizing: border-box;
          height: 3vw;
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
            top: 1vw;
          }
          .el-button{
            padding: 0 10px !important;
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
          height: 5.5vw;
          overflow-x: hidden;
          overflow-y: scroll;
          background: #eeeeee;
          padding: 0.885vw 1.094vw;
          margin: 0.521vw auto;
          font-size: 0.729vw;
          p {
            line-height: 1.042vw;
          }
          p:nth-of-type(2){
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
        height: 14vw;
        overflow-x: hidden;
        overflow-y: scroll;
        .title {
          box-sizing: border-box;
          height: 3vw;
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
            top: 1vw;
          }
        }
        .con{
          padding: 0 26px;
          >div{
            display: flex;
            margin-bottom: 10px;
            span{
              flex-shrink: 0;
              margin-right: 10px;
            }
            p{
              line-height: 20px;
              margin-top: -3px;
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
}
</style>