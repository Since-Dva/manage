<template>
  <div class="header">
    <el-header>
      <h1 @click.stop="toHome">信宜保BOSS管理系统</h1>
      <div>
        <div>
          <img src alt @click.stop='accountModal' />
          <span @click.stop='accountModal'>李华</span>
          <span @mouseenter="active=true" @mouseleave="active=false">
            <ul :class="active?'active':''">
            <li @click.stop="accountModal">账号资料</li>
            <li @click.stop="pwdModal">修改密码</li>
            <li @click.stop="loginOut">退出系统</li>
          </ul>
          </span>
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
        this.$router.replace('/login')
      },
      toHome(){
        this.$router.push('/')
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
      cursor:pointer;
    }
    > div {
      display: flex;
      align-items: center;
      position: relative;
      > div {
        height: 4.167vw;
        display: flex;
        align-items: center;
        padding-right: 0.729vw;
          cursor: pointer;
        img {
          display: block;
          width: 1.979vw;
          height: 1.979vw;
          border-radius: 50%;
          border: 0.052vw solid #000;
          overflow: hidden;
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
          position: relative;
        }
      }
      ul {
        position: absolute;
        width: 4.896vw;
        height: 5.521vw;
        top: 1.2vw;
        right: 0vw;
        background: #ffffff;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0.208vw;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        transition: all 0.3s;
        z-index: -1;
        opacity: 0;
        overflow: hidden;
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
            
            color: white;
          }
        }
      }
    }
  }
</style>