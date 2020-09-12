<template>
  <div class="accountInfo">
    <div>
      <button class="save" @click="saveAccountModal">保存</button>
      <img class="touxiang" src="" alt="">
      <ul>
        <li>
          <span>员工工号</span>
          <el-input disabled></el-input>
        </li>
        <li>
          <span class="require">员工姓名</span>
          <el-input v-model="name" :maxlength='8'></el-input>
        </li>
        <li>
          <span class="require">性别</span>
          <div class="select">
            <el-select v-model="sex">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
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
          <el-input v-model="phone" :maxlength='11'></el-input>
        </li>
        <li>
          <span class="require">微信</span>
          <el-input disabled></el-input>
        </li>
        <li>
          <span>邮箱</span>
          <el-input v-model="email"></el-input>
        </li>
      </ul>
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
      options: [
        { label: "男", value: 1 },
        { label: "女", value: 2 },
      ],
    };
  },
  methods: {
    saveAccountModal() {
      this.$router.go(-1)
    },
  },
};
</script>

<style lang='scss'>
.accountInfo {
  height: 44.271vw;
  background: #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  .save {
    position: relative;
    left: 29.688vw;
  }
  .touxiang{
    display: block;
    border: 0.052vw solid #000;
    width: 6.302vw;
height: 6.302vw;
border-radius: 0.208vw;

  }
  > div {
    box-sizing: border-box;
    width: 42.292vw;
    height: 25.354vw;
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
      .el-select {
        border-radius: 0.208vw;
        outline: none;
        width: 4.792vw;
        height: 1.563vw;
        color: #666666;
        .el-input__suffix,.el-input__suffix-inner {
             width: 1.458vw;
              height: 1.458vw;
              transform: translateX(0.04vw);
        }
        option {
          border: 0.052vw solid #dcdfe6 !important;
          background: white;
        }
        .el-input .el-input__icon {
          transform: translateX(0.26vw);
          border-radius: 0 0.208vw 0.208vw 0;
          background: #3498db url("../../assets/img/bottomArr.png") center no-repeat;
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