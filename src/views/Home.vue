<template>
  <div class="home">
    <div class="top">
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
    <div class="detail">
      <div class="title">平台公告</div>
      <div class="content">
        <div class="con new">
          <p @click="toDetail">《信宜保BOSS管理系统》1.1升级公告</p>
        </div>
        <div class="con new">
          <p @click="toDetail">《前端定损员小程序》2020年7月30日已上线！</p>
        </div>
        <div class="con">
          <p @click="toDetail">《运营人员话术标准 2.0》请各位运营人员严格按照话术标准执行</p>
        </div>
        <div class="con">
          <p @click="toDetail">2020年7月30日 祝贺！ 重庆量子信云成功与杭州太平洋保险公司达成战略合作</p>
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
  </div>
</template>

<script>
  export default {
    data() {
      return {
        size: 10,
        count: 1,
        total: 4,
        isArticle: false,
      };
    },
    methods: {
      toDetail(){
        this.$router.push('articleDetail')
      },
      sizeChange(e) {
        this.size = e;
      },
      pageChange(e) {
        this.count = e;
      },
    }
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
    
    .detail {
      background: rgba(255, 255, 255, 1);
      box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
      border-radius: 0.208vw;
      overflow: hidden;
      .articleDetail {
        height: 46.406vw !important;
        padding: 1.771vw 2.292vw;
        overflow: scroll;
        scrollbar-width: none;
      }
      .content {
        padding: 0 3.438vw 0 3.958vw;
        display: flex;
        flex-direction: column;
        background: rgba(255, 255, 255, 1);
        .con {
          width: 100%;
          height: 0.938vw;
          padding: 1.65vw 0;
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

  }
</style>