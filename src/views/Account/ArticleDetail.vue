<template>
  <div class="detail article">
    <div class="title">平台公告</div>
    <div class="articleDetail">
      <h3>《信宜保BOSS管理系统》1.1升级公告</h3>
      <p class="time">2020年8月4日16:38:07</p>
      <p>c tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien nunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sedrhoncus pronin sapien nunc accuan eget.</p>
      <img src alt />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sictempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapiennunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sictempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapiennunc accuan eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar sictempor. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang='scss'>
.detail {
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 12.998px 0px rgba(0, 0, 0, 0.1);
  border-radius: 3.994px;
  .articleDetail {
    height: 710.4px !important;
    padding: 34.003px 44.006px;
    overflow: scroll;
  }
  .content {
    padding: 0 66.01px 0 75.994px;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    .con {
      width: 100%;
      height: 18.01px;
      padding: 34.003px 0;
      border-bottom: 0.998px solid #cccccc;
      position: relative;
      p {
        flex-grow: 0;
        cursor: pointer;
      }
    }
    .pagin {
      width: 100% !important;
      position: static !important;
      box-shadow: none !important;
      margin-bottom: 20.006px;
    }
  }
  .title {
      padding: 0 35.002px;
      line-height: 65.28px;
      border-bottom: 0.998px solid #e2e2e2;
      font-size: 18.01px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: rgba(51, 51, 51, 1);
      position: relative;
      &::before {
        content: "";
        display: block;
        width: 4.992px;
        height: 32.006px;
        background: rgba(52, 152, 219, 1);
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
}
.article {
  h3 {
    font-size: 18.01px;
    color: #333333;
    text-align: center;
  }
  .time {
    font-size: 13.997px;
    color: #333333;
    text-align: right;
    margin: 9.6px 0px;
  }
  p {
    font-size: 15.994px;
    color: #333333;
    line-height: 31.68px;
    text-indent: 2em;
  }
  img {
    display: block;
    width: 100%;
    height: 267.994px;
    margin: 36.998px 0;
    border: 0.998px solid #000;
  }
}
</style>