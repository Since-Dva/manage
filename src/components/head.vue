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
        this.$store.commit('openAccountModal')
      },
      pwdModal() {
        this.$store.commit('openPwdModal')
      },
      loginOut(){
        console.log(location);
        location.replace('/login')
      }
    },
  };
</script>

<style lang="scss">
  .el-header {
    height: 4.167vw !important;
    background: #3498db;
    margin-bottom: 1.042vw;
    padding: 0 1.823vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 1.146vw;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #ffffff;
    }
    > div {
      display: flex;
      align-items: center;
      position: relative;
      > div {
        height: 4.167vw;
        display: flex;
        align-items: center;
          cursor: pointer;
        img {
          display: block;
          width: 1.979vw;
          height: 1.979vw;
          border-radius: 50%;
          border: 0.052vw solid #000;
        }
        > span:nth-of-type(1) {
          font-size: 0.938vw;
          font-family: Microsoft YaHei;
          font-weight: bold;
          margin: 0 1.042vw;
          color: #ffffff;
        }
        > span:nth-of-type(2) {
          display: block;
          width: 1.042vw;
          height: 0.729vw;
          background: url("../assets/img/more.png") center no-repeat;
          background-size: 100%;
        }
      }
      ul {
        position: absolute;
        width: 4.896vw;
        height: 5.521vw;
        top: 4.479vw;
        right: 2.083vw;
        background: #ffffff;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0.208vw;
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
          line-height: 1.719vw;
          flex-grow: 1;
          font-size: 0.729vw;
          font-family: Microsoft YaHei;
          font-weight: 400;
          text-align: center;
          background: #ffffff;
          cursor: pointer;
          &:hover {
            background: #106caa;
            border-radius: 0.208vw;
            color: white;
          }
        }
      }
    }
  }
</style>