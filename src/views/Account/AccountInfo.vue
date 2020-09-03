<template>
  <div class="accountInfo">
    <div>
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
      &::after {
        content: "";
        display: block;
        width: 27.994px;
        height: 27.994px;
        border-radius: 0 3.994px 3.994px 0;
        background: #3498db url("../../assets/img/bottomArr.png") center
          no-repeat;
        background-size: 100%;
        position: absolute;
        pointer-events: none;
        top: 0;
        right: -58.003px !important;
        z-index: 999;
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