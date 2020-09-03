<template>
  <div class="modifyPwd">
    <div>
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
</template>

<script>
export default {
  data() {
    return {
      article: true,
      oldpwd: null,
      newpwd: null,
      repwd: null,
      error: 0,
    };
  },
  methods: {
    savepwdmodal() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss'>
.modifyPwd {
  height: 850.003px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  .save {
    position: relative;
    left: 570.01px;
  }
  > div {
    box-sizing: border-box;
    width: 812.006px;
    height: 409.997px;
    padding: 39.994px 60.998px 66.01px 60.998px;
    background: #ffffff;
    box-shadow: 0px 0px 12.998px 0px rgba(0, 0, 0, 0.1);
    border-radius: 3.994px;
    position: relative;
    > .tip {
      font-size: 15.994px;
      color: #fb665c;
      position: absolute;
      bottom: 24.998px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .pwdbox {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 225.005px;
    .pwd + .pwd {
      margin-top: 30.01px;
    }
    .pwd {
      width: 289.997px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      span {
        font-size: 15.994px;
        color: #666666;
        margin-bottom: 18.01px;
        .tip {
          width: 300px;
          font-size: 15.994px;
          color: #fb665c;
          position: absolute;
          left: 55.008px;
        }
      }

      input {
        padding: 0 14.995px;
        width: 289.997px;
        height: 27.994px;
        border: 0.998px solid #cccccc;
        border-radius: 3.994px;
        outline: none;
        font-size: 13.997px;
        color: #999999;
      }
    }
    .pwd:nth-of-type(3) .tip {
      left: 70.003px;
    }
  }
  button {
    height: 36px;
    line-height: 36px;
    padding: 0 33.005px;
    border: none;
    outline: none;
    border-radius: 6.01px;
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
    margin-top: 49.997px;
    li {
      width: 150.01px !important;
      span {
        display: block;
        color: #666666;
        margin-bottom: 19.008px;
      }
      .el-input,
      .el-input__inner {
        height: 30.01px;
        width: 150.01px !important;
      }
      .el-input.is-disabled .el-input__inner {
        background-color: #cccccc !important;
      }
    }
    .select {
      width: 92.006px;
      height: 30.01px !important;
      position: relative;
      select {
        width: 150.01px !important;
        border-radius: 3.994px;
        border: 0.998px solid #dcdfe6;
        outline: none;
        width: 92.006px;
        height: 30.01px;
        padding-left: 10.003px;
        color: #666666;
        option {
          border: 0.998px solid #dcdfe6 !important;
          background: white;
        }
      }
    }
  }
  ul:nth-of-type(2) {
    justify-content: flex-start;
    li {
      margin-right: 31.008px;
    }
  }
}
</style>