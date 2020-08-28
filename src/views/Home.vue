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
        <div class="new">
          <p>《信宜保BOSS管理系统》1.1升级公告</p>
        </div>
        <div class="new">
          <p>《前端定损员小程序》2020年7月30日已上线！</p>
        </div>
        <div>
          <p>《运营人员话术标准 2.0》请各位运营人员严格按照话术标准执行</p>
        </div>
        <div>
          <p>2020年7月30日 祝贺！ 重庆量子信云成功与杭州太平洋保险公司达成战略合作</p>
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
export default {};
</script>

<style lang="scss">
.home {
  .title {
    padding: 0 35px;
    line-height: 69px;
    border-bottom: 1px solid #e2e2e2;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    position: relative;
    &::before {
      content: "";
      display: block;
      width: 5px;
      height: 32px;
      background: rgba(52, 152, 219, 1);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .top {
    height: 278px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;

    > div:nth-of-type(2) {
      height: 208px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .item {
        box-sizing: border-box;
        width: 245px;
        height: 128px;
        padding: 30px 31px;
        > span {
          font-size: 42px;
          font-family: Microsoft YaHei;
          font-weight: bold;
          color: rgba(255, 255, 255, 1);
        }
        > p {
          font-size: 16px;
          margin-top: 14px;
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
    height: 492px;
    margin-top: 20px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 13px 0px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    .content {
      padding: 0 66px 0 76px;
      display: flex;
      flex-direction: column;
      > div {
        width: 100%;
        height: 18px;
        padding: 34px 0;
        border-bottom: 1px solid #cccccc;
        position: relative;
        p {
          flex-grow: 0;
          cursor: pointer;
        }
        &.new {
          &::before {
            display: block;
            content: "";
            width: 32px;
            height: 32px;
            background: url("../assets/img/new.png") center no-repeat;
            background-size: 100%;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: -40px;
          }
        }
      }
      .pagin{
        position: static;
      }
    }
  }
}
</style>