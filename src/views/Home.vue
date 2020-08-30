<template>
  <div class="home">
    <div v-if="!isArticle" class="top">
      <div class="title">数据概览</div>
      <div>
        <div class="item">
          <span>1331</span>
          <p>今日询价发布</p>
        </div>
        <div class="item">
          <span>199</span>
          <p>今日参与报价的汽配商</p>
        </div>
        <div class="item">
          <span>580</span>
          <p>今日完成报价方案</p>
        </div>
        <div class="item">
          <span>230</span>
          <p>今日完成方案定损</p>
        </div>
      </div>
    </div>
    <div v-if="!isArticle" class="detail">
      <div class="title">平台公告</div>
      <div class="content">
        <div class="con new">
          <p @click="isArticle=true">《信宜保BOSS管理系统》1.1升级公告</p>
        </div>
        <div class="con new">
          <p @click="isArticle=true">《前端定损员小程序》2020年7月30日已上线！</p>
        </div>
        <div class="con">
          <p @click="isArticle=true">《运营人员话术标准 2.0》请各位运营人员严格按照话术标准执行</p>
        </div>
        <div class="con">
          <p @click="isArticle=true">2020年7月30日 祝贺！ 重庆量子信云成功与杭州太平洋保险公司达成战略合作</p>
        </div>
        <div class="pagin">
          <span>共有{{total}}条记录</span>
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

    <div v-else class="detail article">
      <div class="title">平台公告</div>
      <div class="articleDetail">
        <h3>《信宜保BOSS管理系统》1.1升级公告</h3>
        <p class="time">2020年8月4日16:38:07</p>
        <p>c tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sedrhoncus pronin sapien nunc accuan eget.</p>
        <img src alt />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sictempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapiennunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sictempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapiennunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sictempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci</p>
      </div>
    </div>

    <div :class="['modal' ,accountModal?'active':'']" @click="closeAccountModal">
      <div @click.stop>
        <button class="save" @click="saveAccountModal">保存</button>
        <ul>
          <li>
            <span>员工工号</span>
            <el-input disabled></el-input>
          </li>
          <li>
            <span class="require">员工姓名</span>
            <el-input v-model="name"></el-input>
          </li>
          <li>
            <span class="require">性别</span>
            <div class="select">
              <select v-model="sex">
                <option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></option>
              </select>
            </div>
          </li>
          <li>
            <span>职位</span>
            <el-input disabled></el-input>
          </li>
        </ul>
        <ul>
          <li>
            <span class="require">手机号码</span>
            <el-input v-model="phone"></el-input>
          </li>
          <li>
            <span class="require">微信</span>
            <el-input></el-input>
          </li>
          <li>
            <span>邮箱</span>
            <el-input v-model="email"></el-input>
          </li>
        </ul>
      </div>
    </div>

    <div :class="['modal' ,pwdModal?'active':'']" @click="closepwdmodal">
      <div @click.stop>
        <button class="save" @click="savepwdmodal">保存</button>
        <div class="pwdbox">
          <div class="pwd">
            <span class="require">
              原密码
              <span v-show="error===1" class="tip">原密码输入错误，请重新输入</span>
            </span>
            <input type="password" v-model="oldpwd" placeholder="请输入原密码" />
          </div>
          <div class="pwd">
            <span class="require">
              新密码
              <span v-show="error===2" class="tip">请输入 6-12位新密码，包含数字和字母</span>
            </span>
            <input type="password" v-model="newpwd" placeholder="请输入6-12位新密码，包含数字和字母" />
          </div>
          <div class="pwd">
            <span class="require">
              再次输入
              <span v-show="error===3" class="tip">再次输入密码有误，请重新输入</span>
            </span>
            <input type="password" v-model="repwd" placeholder="请再次输入新密码" />
          </div>
        </div>
        <div class="tip" v-show="error===4">请输入原密码和新密码</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: null,
        sex: null,
        phone: null,
        email: null,
        article: true,
        isArticle: false,
        oldpwd: null,
        newpwd: null,
        repwd: null,
        error: 0,
        size: 10,
        count: 1,
        total: 4,
        options: [
          { label: "男", value: 1 },
          { label: "女", value: 2 },
        ],
      };
    },
    methods: {
      closeAccountModal() {
        this.$store.commit("closeAccountModal");
      },
      saveAccountModal() {
        this.$store.commit("closeAccountModal");
      },
      closepwdmodal() {
        this.$store.commit("closePwdModal");
      },
      savepwdmodal() {
        this.$store.commit("closePwdModal");
      },
      sizeChange(e) {
        this.size = e;
      },
      pageChange(e) {
        this.count = e;
      },
    },
    computed: {
      accountModal() {
        return this.$store.state.home.homeAccountModal;
      },
      pwdModal() {
        return this.$store.state.home.changePwdModal;
      },
    },
  };
</script>

<style lang="scss">
  .home {
    .title {
      padding: 0 1.823vw;
      line-height: 3.594vw;
      border-bottom: 0.052vw solid #e2e2e2;
      font-size: 0.938vw;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 0.26vw;
        height: 1.667vw;
        background: rgba(52, 152, 219, 1);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .top {
      height: 14.479vw;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
      border-radius: 0.208vw;
      margin-bottom: 1.042vw;
      > div:nth-of-type(2) {
        height: 10.833vw;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .item {
          box-sizing: border-box;
          width: 12.76vw;
          height: 6.667vw;
          padding: 1.563vw 1.615vw;
          > span {
            font-size: 2.188vw;
            font-family: Microsoft YaHei;
            font-weight: bold;
            color: rgba(255, 255, 255, 1);
          }
          > p {
            font-size: 0.833vw;
            margin-top: 0.729vw;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
          }
        }
        .item:nth-of-type(1) {
          background: url("../assets/img/item1.png") center no-repeat;
          background-size: 100%;
        }
        .item:nth-of-type(2) {
          background: url("../assets/img/item2.png") center no-repeat;
          background-size: 100%;
        }
        .item:nth-of-type(3) {
          background: url("../assets/img/item3.png") center no-repeat;
          background-size: 100%;
        }
        .item:nth-of-type(4) {
          background: url("../assets/img/item4.png") center no-repeat;
          background-size: 100%;
        }
      }
    }
    .article {
      height: 56.25vw !important;
      h3 {
        font-size: 0.938vw;
        color: #333333;
        text-align: center;
      }
      .time {
        font-size: 0.729vw;
        color: #333333;
        text-align: right;
        margin: 1.406vw 0vw 1.094vw 0;
      }
      p {
        font-size: 0.833vw;
        color: #333333;
        line-height: 1.667vw;
        text-indent: 2em;
      }
      img {
        display: block;
        width: 100%;
        height: 13.958vw;
        margin: 1.927vw 0;
        border: 0.052vw solid #000;
      }
    }
    .detail {
      height: 25.625vw;
      background: rgba(255, 255, 255, 1);
      box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
      border-radius: 0.208vw;
      .articleDetail {
        height: 46.406vw !important;
        padding: 1.771vw 2.292vw;
        overflow: scroll;
      }
      .content {
        padding: 0 3.438vw 0 3.958vw;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 1);
        .con {
          width: 100%;
          height: 0.938vw;
          padding: 1.771vw 0;
          border-bottom: 0.052vw solid #cccccc;
          position: relative;
          p {
            flex-grow: 0;
            cursor: pointer;
          }
          &.new {
            &::before {
              display: block;
              content: "";
              width: 1.667vw;
              height: 1.667vw;
              background: url("../assets/img/new.png") center no-repeat;
              background-size: 100%;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              left: -2.083vw;
            }
          }
        }
        .pagin {
          width: 100% !important;
          position: static !important;
          box-shadow: none !important;
          margin-bottom: 1.042vw;
        }
      }
    }
    .modal {
      width: 88vw;
      height: 62.5vw;
      background: #f1f1f1;
      position: fixed;
      z-index: -1;
      left: 15.625vw;
      top: 4.167vw;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      &.active {
        z-index: 900;
        opacity: 1;
      }
      .save {
        position: relative;
        left: 29.688vw;
      }
      > div {
        box-sizing: border-box;
        width: 42.292vw;
        height: 21.354vw;
        padding: 2.083vw 3.177vw 3.438vw 3.177vw;
        background: #ffffff;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0.208vw;
        position: relative;
        > .tip {
          font-size: 0.833vw;
          color: #fb665c;
          position: absolute;
          bottom: 1.302vw;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .pwdbox {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        height: 11.719vw;
        .pwd + .pwd {
          margin-top: 1.563vw;
        }
        .pwd {
          width: 15.104vw;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          span {
            font-size: 0.833vw;
            color: #666666;
            margin-bottom: 0.938vw;
            .tip {
              width: 15.625vw;
              font-size: 0.833vw;
              color: #fb665c;
              position: absolute;
              left: 2.865vw;
            }
          }

          input {
            padding: 0 0.781vw;
            width: 15.104vw;
            height: 1.458vw;
            border: 0.052vw solid #cccccc;
            border-radius: 0.208vw;
            outline: none;
            font-size: 0.729vw;
            color: #999999;
          }
        }
        .pwd:nth-of-type(3) .tip {
          left: 3.646vw;
        }
      }
      button {
        height: 1.875vw;
        line-height: 1.875vw;
        padding: 0 1.719vw;
        border: none;
        outline: none;
        border-radius: 0.313vw;
        background: #3498db;
        color: white;

        &:hover {
          background: #0f6baa;
          color: white;
        }
      }
      ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-top: 2.604vw;
        li {
          width: 7.813vw !important;
          span {
            display: block;
            color: #666666;
            margin-bottom: 0.99vw;
          }
          .el-input,
          .el-input__inner {
            height: 1.563vw;
            width: 7.813vw !important;
          }
          .el-input.is-disabled .el-input__inner {
            background-color: #cccccc !important;
          }
        }
        .select {
          width: 4.792vw;
          height: 1.563vw !important;
          position: relative;
          select {
            width: 7.813vw !important;
            border-radius: 0.208vw;
            border: 0.052vw solid #dcdfe6;
            outline: none;
            width: 4.792vw;
            height: 1.563vw;
            padding-left: 0.521vw;
            color: #666666;
            option {
              border: 0.052vw solid #dcdfe6 !important;
              background: white;
            }
          }
          &::after {
            content: "";
            display: block;
            width: 1.458vw;
            height: 1.458vw;
            border-radius: 0 0.208vw 0.208vw 0;
            background: #3498db url("../assets/img/bottomArr.png") center
              no-repeat;
            background-size: 100%;
            position: absolute;
            pointer-events: none;
            top: 0;
            right: -1.354vw !important;
            z-index: 999;
          }
        }
      }
      ul:nth-of-type(2) {
        justify-content: flex-start;
        li {
          margin-right: 1.615vw;
        }
      }
    }
  }
</style>