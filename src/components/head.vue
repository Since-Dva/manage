<template>
  <div class="header">
    <el-header>
      <h1>信宜保BOSS管理系统</h1>
      <div>
        <div @mouseenter="active=true" @mouseleave="active=false">
          <img src alt />
          <span>李华</span>
          <span></span>
          <ul :class="active?'active':''">
            <li @click="accountModal">账号资料</li>
            <li @click="pwdModal">修改密码</li>
            <li @click="loginOut">退出系统</li>
          </ul>
        </div>
      </div>
    </el-header>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        active: false,
      };
    },
    methods: {
      accountModal() {
        this.$router.push('/accountInfo')
      },
      pwdModal() {
        this.$router.push('/modifyPwd')
      },
      loginOut(){
        location.replace('/login')
      }
    },
  };
</script>

<style lang="scss">
  .el-header {
    height: 80.006px !important;
    background: #3498db;
    margin-bottom: 20.006px;
    padding: 0 35.002px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 22.003px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
    }
    > div {
      display: flex;
      align-items: center;
      position: relative;
      > div {
        height: 80.006px;
        display: flex;
        align-items: center;
          cursor: pointer;
        img {
          display: block;
          width: 37.997px;
          height: 37.997px;
          border-radius: 50%;
          border: 0.998px solid #000;
          overflow: hidden;
        }
        > span:nth-of-type(1) {
          font-size: 18.01px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          margin: 0 20.006px;
          color: #ffffff;
        }
        > span:nth-of-type(2) {
          display: block;
          width: 20.006px;
          height: 13.997px;
          background: url("../assets/img/more.png") center no-repeat;
          background-size: 100%;
        }
      }
      ul {
        position: absolute;
        width: 94.003px;
        height: 106.003px;
        top: 85.997px;
        right: 28.8px;
        background: #ffffff;
        box-shadow: 0px 0px 12.998px 0px rgba(0, 0, 0, 0.1);
        border-radius: 3.994px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        transition: all 0.3s;
        z-index: -1;
        opacity: 0;
        &.active {
          z-index: 100;
          opacity: 1;
        }
        li {
          line-height: 33.005px;
          flex-grow: 1;
          font-size: 13.997px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          text-align: center;
          background: #ffffff;
          cursor: pointer;
          &:hover {
            background: #106caa;
            border-radius: 3.994px;
            color: white;
          }
        }
      }
    }
  }
</style>