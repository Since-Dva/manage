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
  box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
  border-radius: 0.208vw;
  .articleDetail {
    height: 37vw !important;
    padding: 1.771vw 2.292vw;
    overflow: scroll;
  }
  .content {
    padding: 0 3.438vw 0 3.958vw;
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 1);
    .con {
      width: 100%;
      height: 0.938vw;
      padding: 1.771vw 0;
      border-bottom: 0.052vw solid #cccccc;
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
      margin-bottom: 1.042vw;
    }
  }
  .title {
      padding: 0 1.823vw;
      line-height: 3.4vw;
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
}
.article {
  h3 {
    font-size: 0.938vw;
    color: #333333;
    text-align: center;
  }
  .time {
    font-size: 0.729vw;
    color: #333333;
    text-align: right;
    margin: 0.5vw 0vw;
  }
  p {
    font-size: 0.833vw;
    color: #333333;
    line-height: 1.65vw;
    text-indent: 2em;
  }
  img {
    display: block;
    width: 100%;
    height: 13.958vw;
    margin: 1.927vw 0;
    border: 0.052vw solid #000;
  }
}
</style>