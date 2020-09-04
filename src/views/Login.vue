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
        <el-input v-model="pwd" type='password' placeholder="请输入密码"></el-input>
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
    width: 100vw;
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
      width: 29.896vw;
      height: 34.479vw;
      padding: 5.104vw 5.313vw;
      background: #ffffff;
      border-radius: 0.521vw;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      h1 {
        font-size: 2.396vw;
        font-weight: bold;
        color: #3498db;
      }
      h2 {
        font-size: 1.25vw;
        font-weight: bold;
        color: #3498db;
        margin-top: 1.406vw;
        margin-bottom: 3.802vw;
      }
      label {
        display: flex;
        align-items: center;
      }
      .inputbox {
        position: relative;
        img {
          width: 1.198vw;
          height: 1.094vw;
          position: absolute;
          left: 1.042vw;
          top: 0.521vw;
          z-index: 600;
        }
      }
      .el-input:nth-of-type(1) {
        margin-bottom: 1.302vw;
      }
      .el-input,
      .el-input__inner {
        width: 16.927vw !important;
        height: 2.083vw !important;
        border-radius: 0.208vw;
        background: #eaf4fb;
        color: #9a9a9a;
        font-size: 0.938vw;
      }
      .el-input__inner {
        padding-left: 3.021vw;
      }
      input[type="checkbox"] {
        width: 1.042vw;
        height: 1.042vw;
        border: 0.052vw solid #666666;
        border-radius: 0vw 0.104vw 0.104vw 0.104vw;
        margin-right: 0.26vw;
      }
      .forget {
        width: 16.927vw;
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
        margin-top: 1.198vw;
        margin-bottom: 2.604vw;
        position: relative;
        left: 1.198vw;
      }
      .el-button {
        width: 16.927vw;
        height: 2.083vw;
        background: #3498dc;
        border-radius: 0.104vw;
        font-size: 0.938vw;
        letter-spacing: 2.813vw;
        text-indent: 2.969vw;
        &:hover {
          background: #106caa !important;
          color: white;
        }
      }
      .tip {
        margin-top: 1.302vw;
        font-size: 0.938vw;
        color: #fb665c;
      }
    }
  }
</style>