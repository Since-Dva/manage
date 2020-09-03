<template>
  <div class="login">
    <div>
      <h1>信宜保BOSS后台</h1>
      <h2>欢迎登陆一站式工作平台</h2>
      <div class="inputbox">
        <img src="../assets/img/user.png" alt />
        <el-input  v-model="phone" placeholder="请输入手机号"></el-input>
      </div>
      <div class="inputbox">
        <img src="../assets/img/pw.png" alt />
        <el-input v-model="pwd" placeholder="请输入密码"></el-input>
      </div>
      <div class="forget">
        <label for="pwd">
          <input v-model="value1" type="checkbox" id="pwd" />
          <span>保存密码</span>
        </label>
        <span>忘记密码</span>
      </div>
      <div class="free">
        <label for="free">
          <input v-model="value2" type="checkbox" id="free" />
          <span>七天免登录</span>
        </label>
      </div>
      <el-button @click="handlelogin">登录</el-button>
      <div class="tip">{{tip===1?'请输入账号和密码':tip===2?'忘记密码，请联系产品管理员':tip===3?'账号或密码错误，请重新输入':''}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        phone:null,
        pwd:null,
        value1:null,
        value2:null,
        tip:null,
      }
    },
    methods: {
      handlelogin(){
        this.$router.push('/')
      }
    },
  };
</script>

<style lang='scss'>
  .login {
    width: 1920px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/img/bg.png') center no-repeat;
    background-size: 100%;
    position: fixed;
    left: 0;
    top: 0;
    > div {
      box-sizing: border-box;
      width: 574.003px;
      height: 661.997px;
      padding: 97.997px 102.01px;
      background: #ffffff;
      border-radius: 10.003px;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 46.003px;
        font-weight: bold;
        color: #3498db;
      }
      h2 {
        font-size: 24px;
        font-weight: bold;
        color: #3498db;
        margin-top: 26.995px;
        margin-bottom: 72.998px;
      }
      label {
        display: flex;
        align-items: center;
      }
      .inputbox {
        position: relative;
        img {
          width: 23.002px;
          height: 21.005px;
          position: absolute;
          left: 20.006px;
          top: 10.003px;
          z-index: 600;
        }
      }
      .el-input:nth-of-type(1) {
        margin-bottom: 24.998px;
      }
      .el-input,
      .el-input__inner {
        width: 324.998px !important;
        height: 39.994px !important;
        border-radius: 3.994px;
        background: #eaf4fb;
        color: #9a9a9a;
        font-size: 18.01px;
      }
      .el-input__inner {
        padding-left: 58.003px;
      }
      input[type="checkbox"] {
        width: 20.006px;
        height: 20.006px;
        border: 0.998px solid #666666;
        border-radius: 0px 1.997px 1.997px 1.997px;
        margin-right: 4.992px;
      }
      .forget {
        width: 324.998px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        > div {
          span {
            color: #666666;
          }
        }
        > span {
          color: #3498db;
          cursor: pointer;
        }
      }
      .free {
        align-self: flex-start;
        margin-top: 23.002px;
        margin-bottom: 49.997px;
        position: relative;
        left: 23.002px;
      }
      .el-button {
        width: 324.998px;
        height: 39.994px;
        background: #3498dc;
        border-radius: 1.997px;
        font-size: 18.01px;
        letter-spacing: 54.01px;
        text-indent: 57.005px;
        &:hover {
          background: #106caa !important;
          color: white;
        }
      }
      .tip {
        margin-top: 24.998px;
        font-size: 18.01px;
        color: #fb665c;
      }
    }
  }
</style>