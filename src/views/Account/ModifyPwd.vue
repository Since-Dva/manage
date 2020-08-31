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
  height: 850px;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
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
    }
  }
  ul:nth-of-type(2) {
    justify-content: flex-start;
    li {
      margin-right: 1.615vw;
    }
  }
}
</style>