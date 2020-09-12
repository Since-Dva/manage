<template>
  <div class="prograDetailAuto">
    <tabs></tabs>
    <div class="content">
      <div class="left">
        <div class="arr">
          <div>解析需求</div>
          <div>汽配商报价</div>
          <div>生成报价方案</div>
          <div>审核定损</div>
        </div>
        <div class="left1">
          <div class="left1_2">
            <div class="title">
              <span>基本信息</span>
              <div>
                <span>订单状态</span>
                <span>未发布</span>
                <a @click="changeIsEdit">{{isEdit?'编辑':'保存'}}</a>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>保险机构：</span>
                <el-input v-model="base.value1">大地保险（重庆分公司）</el-input>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>VIN码：</span>
                <el-input :disabled="isEdit" v-model="base.value2">CQTPY20200721000001</el-input>
                <a @click="copyShaneUrl('CQTPY20200721000001')">复制</a>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>车牌号：</span>
                <el-input :disabled="isEdit" v-model="base.value3">渝DN7688</el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>报案号：</span>
                <el-input v-model="base.value4">大地保险（重庆分公司）</el-input>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>车型：</span>
                <el-input :disabled="isEdit" v-model="base.value5"></el-input>
                <a @click="copyShaneUrl(base.value5)">复制</a>
              </div>
              <div>
                <span>承修单位：</span>
                <el-input v-model="base.value6">渝DN7688</el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>定损员：</span>
                <el-input v-model="base.value7">大地保险（重庆分公司）</el-input>
              </div>
              <div :class="!isEdit?'blue':''">
                <span>年龄：</span>
                <el-input v-model="base.value8"></el-input>
              </div>
              <div>
                <span>承修电话：</span>
                <el-input v-model="base.value9">渝DN7688</el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>联系电话：</span>
                <el-input v-model="base.value10"></el-input>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>询价单号：</span>
                <el-input v-model="base.value11"></el-input>
                <a @click="copyShaneUrl(base.value11)">复制</a>
              </div>
            </div>
            <div class="left1_2_1">
              <div>
                <span>提交时间：</span>
                <el-input v-model="base.value12"></el-input>
              </div>
            </div>

            <div @click="changeView" :class="['viewbtn',isView?'roate':'']">
              {{isView?'收起':'查看详情'}}
              <i></i>
            </div>

            <div v-if="isView" class="left_2">
              <div class="title">
                <span>受损信息</span>
              </div>
              <div class="left2main">
                <div class="left2_1">
                  <div class="select">
                    受损面：
                    <span>2面</span>
                  </div>
                  <div>
                    <span>备注：</span>
                    <span>具体零部件详情需要电话沟通</span>
                  </div>
                </div>
                <div class="left2_2">
                  <div>受损照片</div>
                  <div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                    <div class="imgbox">
                      <img src alt />
                      <span>本地上传</span>
                    </div>
                  </div>
                </div>
                <div class="left2_2box">
                  <div class="left2_2">
                    <div>维修清单</div>
                    <div>
                      <div class="imgbox">
                        <img src alt />
                        <span>本地上传</span>
                      </div>
                    </div>
                  </div>
                  <div class="left2_2 left2_2xs">
                    <div>行驶证</div>
                    <div>
                      <div class="imgbox">
                        <img src alt />
                        <span>本地上传</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>综合报价方案</span>
            <div>
              <div>
                <span>当前保险机构报价方案模型：</span>
                <span>自定义</span>
              </div>
              <el-button>保存</el-button>
            </div>
          </div>
          <div class="_tableBox">
            <div :class="['fixd', isfixd?'active':'']" :style="{top:topnum+'px'}">
              <div>
                <div>汽配商名称</div>
                <div>
                  报价
                  <i @click="isfixd=false">×</i>
                </div>
              </div>
              <div @click="changeMoney(1)">
                <div>众宇汽配</div>
                <div>500</div>
              </div>
              <div @click="changeMoney(2)">
                <div>捷达汽配</div>
                <div>710</div>
              </div>
              <div @click="changeMoney(2)">
                <div>小众汽配</div>
                <div>430</div>
              </div>
            </div>
            <div class="_thead">
              <div>排序</div>
              <div>零部件信息</div>
              <div>年限</div>
              <div>是否为关重件</div>
              <div>品质</div>
              <div>汽配商名称</div>
              <div>汽配商报价</div>
              <div>定损价</div>
              <div>利润</div>
            </div>
            <div class="_tr">
              <div>1</div>
              <div>
                <span>左大灯：X3</span>
                <span>OE码：3729525249</span>
                <span>4S价：¥ 710</span>
              </div>
              <div>3年</div>
              <div>否</div>
              <div>
                <div>
                  <el-radio v-model="radio1" label="原厂件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="配套件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="认证件" />
                </div>
                <div>
                  <el-radio class="tuijian" v-model="radio1" label="品牌件" />
                </div>
              </div>
              <div>
                <div>
                  {{qipeishang[0].value1}}
                  <a class="a_active" @click="onchange(1)">更换</a>
                </div>
                <div>
                  {{qipeishang[1].value1}}
                  <a @click="onchange(2)">更换</a>
                </div>
                <div class="blue">
                  {{qipeishang[2].value1}}
                  <a @click="onchange(3)">更换</a>
                </div>
                <div>
                  {{qipeishang[3].value1}}
                  <a @click="onchange(4)">更换</a>
                </div>
              </div>
              <div>
                <div>{{qipeishang[0].num}}</div>
                <div>{{qipeishang[1].num}}</div>
                <div class="blue">{{qipeishang[2].num}}</div>
                <div>
                  {{qipeishang[3].num}}
                  <span class="gth">
                    <span class="tip">当前报价已高于参考价格恒定区间值</span>
                  </span>
                </div>
              </div>
              <div>
                <div>670</div>
                <div>670</div>
                <div class="blue">670</div>
                <div>670</div>
              </div>
              <div>
                <div>90</div>
                <div>90</div>
                <div class="blue">90</div>
                <div>90</div>
              </div>
            </div>
            <div class="_tr">
              <div>1</div>
              <div>
                <span>左大灯：X3</span>
                <span>OE码：3729525249</span>
                <span>4S价：¥ 710</span>
              </div>
              <div>3年</div>
              <div>否</div>
              <div>
                <div>
                  <el-radio v-model="radio1" label="原厂件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="配套件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="认证件" />
                </div>
                <div>
                  <el-radio class="tuijian" v-model="radio1" label="品牌件" />
                </div>
              </div>
              <div>
                <div>
                  {{qipeishang[4].value1}}
                  <a @click="onchange(5)">更换</a>
                </div>
                <div>
                  {{qipeishang[5].value1}}
                  <a @click="onchange(6)">更换</a>
                </div>
                <div class="blue">
                  {{qipeishang[6].value1}}
                  <a class="a_active" @click="onchange(7)">更换</a>
                </div>
                <div>
                  {{qipeishang[7].value1}}
                  <a @click="onchange(8)">更换</a>
                </div>
              </div>
              <div>
                <div>{{qipeishang[4].num}}</div>
                <div>{{qipeishang[5].num}}</div>
                <div class="blue">{{qipeishang[6].num}}</div>
                <div>
                  {{qipeishang[7].num}}
                  <span class="gth">
                    <span class="tip">当前报价已高于参考价格恒定区间值</span>
                  </span>
                </div>
              </div>
              <div>
                <div>670</div>
                <div>670</div>
                <div class="blue">670</div>
                <div>670</div>
              </div>
              <div>
                <div>90</div>
                <div>90</div>
                <div class="blue">90</div>
                <div>90</div>
              </div>
            </div>
            <div class="_tr">
              <div>1</div>
              <div>
                <span>左大灯：X3</span>
                <span>OE码：3729525249</span>
                <span>4S价：¥ 710</span>
              </div>
              <div>3年</div>
              <div>否</div>
              <div>
                <div>
                  <el-radio v-model="radio1" label="原厂件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="配套件" />
                </div>
                <div>
                  <el-radio v-model="radio1" label="认证件" />
                </div>
                <div>
                  <el-radio class="tuijian" v-model="radio1" label="品牌件" />
                </div>
              </div>
              <div>
                <div>
                  {{qipeishang[8].value1}}
                  <a @click="onchange(9)">更换</a>
                </div>
                <div>
                  {{qipeishang[9].value1}}
                  <a @click="onchange(10)">更换</a>
                </div>
                <div class="blue">
                  {{qipeishang[10].value1}}
                  <a @click="onchange(11)">更换</a>
                </div>
                <div>
                  {{qipeishang[11].value1}}
                  <a @click="onchange(12)">更换</a>
                </div>
              </div>
              <div>
                <div>{{qipeishang[8].num}}</div>
                <div>{{qipeishang[9].num}}</div>
                <div class="blue">{{qipeishang[10].num}}</div>
                <div>
                  {{qipeishang[11].num}}
                  <span class="gth">
                    <span class="tip">当前报价已高于参考价格恒定区间值</span>
                  </span>
                </div>
              </div>
              <div>
                <div>670</div>
                <div>670</div>
                <div class="blue">670</div>
                <div>670</div>
              </div>
              <div>
                <div>90</div>
                <div>90</div>
                <div class="blue">90</div>
                <div>90</div>
              </div>
            </div>
          </div>
          <div class="left3">
            <div class="left3_1">
              <p>保险机构方案</p>
              <p>（推荐）</p>
            </div>
            <div class="left3_2">
              <div>零部件总数</div>
              <div>
                <p>10个</p>
              </div>
            </div>
            <div class="left3_3">
              <div>当前选用品质</div>
              <div>
                <p>原厂件</p>
                <p>配套件</p>
                <p>品牌件</p>
              </div>
            </div>
            <div class="left3_4">
              <div>当前选用汽配商</div>
              <div>
                <p>1、中南汽配商 【¥1289】</p>
                <p>（左前大灯、右前大灯、刹车片）</p>
                <p>2、羽田汽配商【¥218】</p>
                <p>（车盖、前雨刮器、后雨刮器）</p>
                <p>2、羽田汽配商【¥218】</p>
                <p>（车盖、前雨刮器、后雨刮器）</p>
                <p>3、大众官方汽配【¥879】</p>
                <p>（前保险杠、后保险杠、左后视镜、右后视镜）</p>
                <p>4、蓝天汽配【¥29】</p>
                <p>（空气格滤芯）</p>
              </div>
            </div>
            <div class="left3_5">
              <div>总计</div>
              <div>
                <p>定损总价：¥ 5280</p>
                <p>采购总价：¥ 4280</p>
                <p>利润：¥ 600</p>
              </div>
            </div>
          </div>
          <div class="left3">
            <div class="left3_1">
              <p>保险机构方案</p>
              <p>（推荐）</p>
            </div>
            <div class="left3_2">
              <div>零部件总数</div>
              <div>
                <p>10个</p>
              </div>
            </div>
            <div class="left3_3">
              <div>当前选用品质</div>
              <div>
                <p>原厂件</p>
                <p>配套件</p>
                <p>品牌件</p>
              </div>
            </div>
            <div class="left3_4">
              <div>当前选用汽配商</div>
              <div>
                <p class="center">/</p>
              </div>
            </div>
            <div class="left3_5">
              <div>总计</div>
              <div>
                <p>定损总价：¥ 5280</p>
                <p>采购总价：¥ 4280</p>
                <p>利润：¥ 600</p>
              </div>
            </div>
          </div>
          <div class="left3">
            <div class="left3_1">
              <p>保险机构方案</p>
              <p>（推荐）</p>
            </div>
            <div class="left3_2">
              <div>零部件总数</div>
              <div>
                <p>10个</p>
              </div>
            </div>
            <div class="left3_3">
              <div>当前选用品质</div>
              <div>
                <p>原厂件</p>
                <p>配套件</p>
                <p>品牌件</p>
              </div>
            </div>
            <div class="left3_4">
              <div>当前选用汽配商</div>
              <div>
                <p>1、中南汽配商 【¥1289】</p>
                <p>（左前大灯、右前大灯、刹车片）</p>
                <p>2、羽田汽配商【¥218】</p>
                <p>（车盖、前雨刮器、后雨刮器）</p>
                <p>2、羽田汽配商【¥218】</p>
                <p>（车盖、前雨刮器、后雨刮器）</p>
                <p>3、大众官方汽配【¥879】</p>
                <p>（前保险杠、后保险杠、左后视镜、右后视镜）</p>
                <p>4、蓝天汽配【¥29】</p>
                <p>（空气格滤芯）</p>
              </div>
            </div>
            <div class="left3_5">
              <div>总计</div>
              <div>
                <p>定损总价：¥ 5280</p>
                <p>采购总价：¥ 4280</p>
                <p>利润：¥ 600</p>
              </div>
            </div>
          </div>
          <div class="btns">
            <el-button>联系汽配商</el-button>
            <el-button class="gray">生成报价</el-button>
          </div>
        </div>
        <div v-show="!isshowdingdan" class="left4">
          <span @click="isshowdingdan=true">
            查看详情
            <i></i>
          </span>
        </div>
        <div v-show="isshowdingdan" class="left5">
          <div class="title">
            <span>订单状态</span>
            <el-button @click="isshowdingdan=false">收起</el-button>
          </div>
          <div :class="['item', showItem.length?'active':'']">
            <div class="line">
              <img src alt />
              <i></i>
              <div></div>
            </div>
            <div class="_title">
              <span>已完成报价</span>
              <span>2020/8/4 12:08:35</span>
            </div>
            <div class="imgbox">
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>
                    <span>已参与报价：42</span>
                    <span>联系电话：17688888286</span>
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <span>2020/8/4 12:08:35</span>
            </div>
            <h3>TA的报价方案：</h3>
            <div class="tablebox">
              <div class="_thead">
                <div>报价单</div>
                <div>
                  <div>询价需求</div>
                  <div>报价</div>
                </div>
              </div>
              <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                <el-table-column prop="value1" align="center" label="排序"></el-table-column>
                <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
                <el-table-column prop="value3" align="center" label="OE码"></el-table-column>
                <el-table-column prop="value4" align="center" label="车型" width="180%"></el-table-column>
                <el-table-column prop="value5" align="center" label="数量"></el-table-column>
                <el-table-column prop="value6" align="center" label="原厂件"></el-table-column>
                <el-table-column prop="value7" align="center" label="配套件"></el-table-column>
                <el-table-column prop="value8" align="center" label="认证件"></el-table-column>
                <el-table-column prop="value9" align="center" label="品牌件"></el-table-column>
              </el-table>
            </div>
          </div>
          <div :class="['item', showItem.length?'active':'']">
            <div class="imgbox">
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>
                    <span>已参与报价：42</span>
                    <span>联系电话：17688888286</span>
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <span>2020/8/4 12:08:35</span>
            </div>
            <h3>TA的报价方案：</h3>
            <div class="tablebox">
              <div class="_thead">
                <div>报价单</div>
                <div>
                  <div>询价需求</div>
                  <div>报价</div>
                </div>
              </div>
              <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                <el-table-column prop="value1" align="center" label="排序"></el-table-column>
                <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
                <el-table-column prop="value3" align="center" label="OE码"></el-table-column>
                <el-table-column prop="value4" align="center" label="车型" width="180%"></el-table-column>
                <el-table-column prop="value5" align="center" label="数量"></el-table-column>
                <el-table-column prop="value6" align="center" label="原厂件"></el-table-column>
                <el-table-column prop="value7" align="center" label="配套件"></el-table-column>
                <el-table-column prop="value8" align="center" label="认证件"></el-table-column>
                <el-table-column prop="value9" align="center" label="品牌件"></el-table-column>
              </el-table>
            </div>
          </div>
          <div :class="['item', showItem.length>1?'active':'']">
            <div class="line">
              <div class="noShow"></div>
              <i></i>
              <div></div>
            </div>
            <div class="_title">
              <span>报价已超时</span>
              <span>2020/8/4 12:08:35</span>
            </div>
            <div class="imgbox">
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>
                    <span>已参与报价：42</span>
                    <span>联系电话：17688888286</span>
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <span>2020/8/4 12:08:35</span>
            </div>
            <h3>TA的报价方案：</h3>
            <div class="tablebox">
              <div class="_thead">
                <div>报价单</div>
                <div>
                  <div>询价需求</div>
                  <div>报价</div>
                </div>
              </div>
              <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                <el-table-column prop="value1" align="center" label="排序"></el-table-column>
                <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
                <el-table-column prop="value3" align="center" label="OE码"></el-table-column>
                <el-table-column prop="value4" align="center" label="车型" width="180%"></el-table-column>
                <el-table-column prop="value5" align="center" label="数量"></el-table-column>
                <el-table-column prop="value6" align="center" label="原厂件"></el-table-column>
                <el-table-column prop="value7" align="center" label="配套件"></el-table-column>
                <el-table-column prop="value8" align="center" label="认证件"></el-table-column>
                <el-table-column prop="value9" align="center" label="品牌件"></el-table-column>
              </el-table>
            </div>
          </div>
          <div :class="['item', showItem.length>1?'active':'']">
            <div class="imgbox">
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>
                    <span>已参与报价：42</span>
                    <span>联系电话：17688888286</span>
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <span>2020/8/4 12:08:35</span>
            </div>
            <h3>TA的报价方案：</h3>
            <div class="tablebox">
              <div class="_thead">
                <div>报价单</div>
                <div>
                  <div>询价需求</div>
                  <div>报价</div>
                </div>
              </div>
              <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                <el-table-column prop="value1" align="center" label="排序"></el-table-column>
                <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
                <el-table-column prop="value3" align="center" label="OE码"></el-table-column>
                <el-table-column prop="value4" align="center" label="车型" width="180%"></el-table-column>
                <el-table-column prop="value5" align="center" label="数量"></el-table-column>
                <el-table-column prop="value6" align="center" label="原厂件"></el-table-column>
                <el-table-column prop="value7" align="center" label="配套件"></el-table-column>
                <el-table-column prop="value8" align="center" label="认证件"></el-table-column>
                <el-table-column prop="value9" align="center" label="品牌件"></el-table-column>
              </el-table>
            </div>
          </div>
          <div :class="['item', showItem.length>2?'active':'']">
            <div class="line">
              <div class="noShow"></div>
              <i></i>
              <div></div>
            </div>
            <div class="_title">
              <span>已到达预警点</span>
              <span>2020/8/4 12:08:35</span>
            </div>
            <div class="imgbox">
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>
                    <span>已参与报价：42</span>
                    <span>联系电话：17688888286</span>
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <span>2020/8/4 12:08:35</span>
            </div>
            <h3>TA的报价方案：</h3>
            <div class="tablebox">
              <div class="_thead">
                <div>报价单</div>
                <div>
                  <div>询价需求</div>
                  <div>报价</div>
                </div>
              </div>
              <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                <el-table-column prop="value1" align="center" label="排序"></el-table-column>
                <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
                <el-table-column prop="value3" align="center" label="OE码"></el-table-column>
                <el-table-column prop="value4" align="center" label="车型" width="180%"></el-table-column>
                <el-table-column prop="value5" align="center" label="数量"></el-table-column>
                <el-table-column prop="value6" align="center" label="原厂件"></el-table-column>
                <el-table-column prop="value7" align="center" label="配套件"></el-table-column>
                <el-table-column prop="value8" align="center" label="认证件"></el-table-column>
                <el-table-column prop="value9" align="center" label="品牌件"></el-table-column>
              </el-table>
            </div>
          </div>
          <div :class="['item', showItem.length>2?'active':'']">
            <div class="imgbox">
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>
                    <span>已参与报价：42</span>
                    <span>联系电话：17688888286</span>
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <span>2020/8/4 12:08:35</span>
            </div>
            <h3>TA的报价方案：</h3>
            <div class="tablebox">
              <div class="_thead">
                <div>报价单</div>
                <div>
                  <div>询价需求</div>
                  <div>报价</div>
                </div>
              </div>
              <el-table :data="tableData" :span-method="arraySpanMethod" border style="width: 100%">
                <el-table-column prop="value1" align="center" label="排序"></el-table-column>
                <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
                <el-table-column prop="value3" align="center" label="OE码"></el-table-column>
                <el-table-column prop="value4" align="center" label="车型" width="180%"></el-table-column>
                <el-table-column prop="value5" align="center" label="数量"></el-table-column>
                <el-table-column prop="value6" align="center" label="原厂件"></el-table-column>
                <el-table-column prop="value7" align="center" label="配套件"></el-table-column>
                <el-table-column prop="value8" align="center" label="认证件"></el-table-column>
                <el-table-column prop="value9" align="center" label="品牌件"></el-table-column>
              </el-table>
            </div>
          </div>
          <div class="more">
            <div v-if="showItem.length>2">
              <h3>成功提交需求</h3>
              <span>2020/8/4 12:08:35</span>
            </div>
            <span @click="showmore">
              {{showItem.length>2?'收起':'查看详情'}}
              <i :class="showItem.length>2?'roate':''"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="right1">
          <div class="triangle"></div>
          <div class="right1_1">
            <img src alt />
            <div>
              <p>郭靖</p>
              <p>所属部门：商务部</p>
            </div>
          </div>
        </div>
        <div class="right4">
          <div class="title">
            <span>订单跟进</span>
          </div>
          <div>
            <el-button @click="changegenjin">{{!genjin?'添加跟进':'保存跟进'}}</el-button>
            <el-button class="gray">开启订单</el-button>
            <el-button @click="baojia=true">报价汇总</el-button>
            <el-button @click="xiezhu=true">完成协助</el-button>
            <el-input v-if="genjin" type="textarea" v-model="textarea2" :rows="4"></el-input>
          </div>
        </div>
        <div class="right2">
          <div class="title">
            <span>跟进记录</span>
          </div>
          <div class="gjcontent">
            <p>周一去和大地保险公司王总进行了沟通，确认合作签约时间在下周三，去的时候准备好需要提前准备好相关资料。</p>
            <p>2020/7/30/ 16:43</p>
          </div>
          <div class="gjcontent">
            <p>周一去和大地保险公司王总进行了沟通，确认合作签约时间在下周三，去的时候准备好需要提前准备好相关资料。</p>
            <p>2020/7/30/ 16:43</p>
          </div>
          <div class="gjcontent">
            <p>周一去和大地保险公司王总进行了沟通，确认合作签约时间在下周三，去的时候准备好需要提前准备好相关资料。</p>
            <p>2020/7/30/ 16:43</p>
          </div>
          <div class="pagina">
            <el-pagination background layout="prev, pager, next" :page-size="3" :total="3"></el-pagination>
          </div>
        </div>
        <div class="right3">
          <div class="title">
            <span>日志</span>
          </div>
          <div class="con">
            <div>
              <span>2020/7/30/ 16:43</span>
              <p>商务部黄蓉 刚查看了该详情 页</p>
            </div>
            <div>
              <span>2020/7/30/ 16:43</span>
              <p>商务部黄蓉 刚新增了联系人 信息</p>
            </div>
            <div>
              <span>2020/7/30/ 16:43</span>
              <p>商务部黄蓉 刚下载合同</p>
            </div>
          </div>
          <div class="pagina">
            <el-pagination background layout="prev, pager, next" :page-size="3" :total="3"></el-pagination>
          </div>
        </div>
      </div>
    </div>

    <!-- 未保存提示 -->
    <el-dialog title="保存确认" :visible.sync="saveModal" width="22.656vw">
      <span>当前页面未保存，请确认是否保存信息</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="saveModalOK">确 定</el-button>
        <el-button class="cancel" @click="saveModal=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 无权限提示 -->
    <el-dialog title="权限提示" :visible.sync="nopower" width="22.656vw">
      <span>您暂无权限操作该定损询价单</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="nopowerOK">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 报价提示 -->
    <el-dialog title="此次报价汇总数据" :visible.sync="baojia" width="22.656vw">
      <span>您暂无权限操作该定损询价单</span>
    </el-dialog>
    <!-- 修改关重件提示 -->
    <el-dialog title="修改关重件提示" :visible.sync="guanzhongjian" width="22.656vw">
      <span>当前零部件类型属于关重件要求范围，请谨慎修改</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="guanzhongjianOK">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 订单关闭提示 -->
    <el-dialog title="操作提示" :visible.sync="dingdan" width="22.656vw">
      <span>当前订单已关闭，您的操作无效</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dingdanOK">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 关闭订单原因 -->
    <el-dialog title="关闭订单" :visible.sync="closedingdan" width="22.656vw">
      <el-input type="textarea" :rows="4" placeholder="请填写订单关闭原因  （必填）" v-model="textarea"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closedingdanOK">确 定</el-button>
        <el-button class="cancel" @click="closedingdan=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 完成协助 -->
    <el-dialog title="完成协助确认" :visible.sync="xiezhu" width="22.656vw">
      <el-input type="textarea" :rows="4" placeholder="请描述此次协助的过程  （必填）" v-model="textarea1"></el-input>
      <span slot="footer" class="dialog-footer">
        <el-button @click="xiezhuOK">确 定</el-button>
        <el-button class="cancel" @click="xiezhu=false">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 此次报价汇总数据 -->
    <el-dialog custom-class="total" title="此次报价汇总数据" :visible.sync="dingdanTotal" width="61.667vw">
      <div class="tablebox">
        <el-table
          :header-cell-style="{color:'rgba(51,51,51,1)',background:'#eeeeee'}"
          :data="tableData2"
          :span-method="_arraySpanMethod"
          border
          style="width: 100%"
        >
          <el-table-column prop="value1" align="center" label="序号"></el-table-column>
          <el-table-column prop="value2" align="center" label="零部件名称"></el-table-column>
          <el-table-column prop="value3" align="center" label="品质"></el-table-column>
          <el-table-column prop="value4" align="center" label="汽配商名称" width="300%"></el-table-column>
          <el-table-column prop="value5" align="center" label="报价"></el-table-column>
        </el-table>
      </div>
    </el-dialog>
    <!-- 汽配商信息 -->
    <el-dialog custom-class="qipei" title="汽配商信息" :visible.sync="qipei" width="57.292vw">
      <div class="title">
        <span>当前车型：大众汽车SVW71810BU</span>
        <span>当前报价异常零部件包含：刹车片、车盖</span>
      </div>
      <div class="_content">
        <div class="item">
          <div class="subTit">
            零部件类型：底盘件/左后/
            <span>刹车片</span>
          </div>
          <div>
            <h4>未参与此次报价</h4>
            <div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>已参与此次报价</h4>
            <div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="item">
          <div class="subTit">
            零部件类型：外观件/正钱/
            <span>车盖</span>
          </div>
          <div>
            <h4>未参与此次报价</h4>
            <div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>已参与此次报价</h4>
            <div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
              <div>
                <img src alt />
                <div>
                  <p>
                    <span>中南汽配（重庆分公司）</span>已参与报价：42 联系电话：17688888286
                  </p>
                  <p>入驻品牌：奥迪、奔驰、长安、大众</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="qipei=false">确认联系</el-button>
      </span>
    </el-dialog>
  </div>
</template>




<script>
  import tabs from "../../../components/tabs";
  export default {
    components: {
      tabs,
    },
    data() {
      return {
        saveModal: false,
        nopower: false,
        dingdan: false,
        baojia: false,
        closedingdan: false,
        guanzhongjian: false,
        rexunjiadan: false,
        dingdanTotal: false,
        isshowdingdan: false,
        isfixd: false,
        qipei: false,
        topnum: 0,//弹窗定位
        num: 0,//更换价格当前行
        xiezhu: false,
        shousun: null,
        textarea: null,
        showItem: [1],
        textarea1: null,
        textarea2: null,
        input1: null,
        input2: null,
        select1: null,
        isView: false,
        huizong: false,
        radio1: null,
        qipeishang:[
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
          {value1:'中南汽配商',num:520},
        ],
        tableData: [
          {
            value1: "1",
            value2: "车盖",
            value3: "21312412",
            value4: "大众汽车SVW718108U",
            value5: "1",
            value6: "",
            value7: "150",
            value8: "",
            value9: "",
          },
          {
            value1: "2",
            value2: "车盖",
            value3: "21312412",
            value4: "2",
            value5: "",
            value6: "150",
            value7: "",
            value8: "",
          },
          {
            value1: "2",
            value2: "车盖",
            value3: "21312412",
            value4: "2",
            value5: "1040",
            value6: "150",
            value7: "",
            value8: "",
          },
          {
            value1: "2",
            value2: "车盖",
            value3: "21312412",
            value4: "2",
            value5: "",
            value6: "150",
            value7: "190",
            value8: "",
          },
          {
            value1: "2",
            value2: "车盖",
            value3: "21312412",
            value4: "2",
            value5: "",
            value6: "150",
            value7: "",
            value8: "540",
          },
        ],
        tableData2: [
          {
            value1: "1",
            value2: "车盖",
            value3: "原厂件",
            value4: "中南汽配商1",
            value5: "100",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "配套件",
            value2: "中南汽配商1",
            value3: "1234",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },

          {
            value1: "2",
            value2: "刹车片",
            value3: "原厂件",
            value4: "中南汽配商1",
            value5: "100",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "配套件",
            value2: "中南汽配商1",
            value3: "1234",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "3",
            value2: "喇叭",
            value3: "原厂件",
            value4: "中南汽配商1",
            value5: "100",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "配套件",
            value2: "中南汽配商1",
            value3: "1234",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
          {
            value1: "中南汽配商1",
            value2: "2131",
          },
        ],
        fileList: [
          {
            name: "太平洋保险（重庆分公司）战略合作合同.pdf",
            url: "https://fuss10.elemecdn.com/3/63/",
          },
        ],
        isEdit: true,
        base: {
          value1: "大地保险（重庆分公司）",
          value2: "CQTPY20200721000001",
          value3: "渝DN7688",
          value4: "1186581481643CQ",
          value5: "大众汽车SVW71810BU",
          value6: "途虎养车（空港新城店）",
          value7: "郭靖",
          value8: "三年",
          value9: "17623888288",
          value10: "17623888288",
          value11: "CQTPY20200721000001",
          value12: "2020年8月3日16:06:14",
        },
        addconcat: {
          name: null,
          sex: null,
          job: null,
          phone: null,
          wx: null,
          email: null,
          radio: 2,
        },
        mainPer: {
          name: null,
          sex: null,
          job: null,
          phone: null,
          wx: null,
          email: null,
          radio: 2,
        },
        options: [
          { label: "大众", value: 1 },
          { label: "奥迪", value: 2 },
        ],
        addgj: false,
        genjin: false,
      };
    },
    methods: {
      changeIsEdit() {
        this.isEdit = !this.isEdit;
      },
      saveModalOK() {
        this.isEdit = false;
        this.saveModal = false;
      },
      showmore() {
        if (this.showItem.length < 3) {
          this.showItem.push(1);
        } else {
          this.showItem = [1];
        }
      },
      nopowerOK() {
        this.nopower = false;
      },
      dingdanOK() {
        this.dingdan = false;
      },
      closedingdanOK() {
        this.closedingdan = false;
      },
      xiezhuOK() {
        this.xiezhu = false;
      },
      guanzhongjianOK() {
        this.guanzhongjian = false;
      },
      changegenjin() {
        this.genjin = !this.genjin;
        this.textarea2 = null;
      },
      changeView() {
        this.isView = !this.isView;
      },
      rexunjiadanOK() {
        this.rexunjiadan = false;
      },
      changeMoney(type){
        let name
        let money
        if(type===1){
          name='众宇汽配'
          money=500
        }else if(type===2){
          name='捷达汽配'
          money=710
        }else{
          name='小众汽配'
          money=430
        }
        let idx=this.num-1
        this.qipeishang[idx]={value1:name,num:money}
        this.isfixd = false;
      },
      onchange(num) {
        this.num=num
        this.isfixd = true;
        this.topnum = 75 + 52 * num;
      },
      arraySpanMethod({ rowIndex, columnIndex }) {
        if (columnIndex === 3 && rowIndex === 0) {
          return {
            rowspan: 6,
            colspan: 1,
          };
        }
      },
      _arraySpanMethod({ rowIndex, columnIndex }) {
        if ([0, 1].includes(columnIndex) && [0, 10, 20].includes(rowIndex)) {
          return {
            rowspan: 10,
            colspan: 1,
          };
        }
        if ([2].includes(columnIndex) && [0, 10, 20].includes(rowIndex)) {
          return {
            rowspan: 7,
            colspan: 1,
          };
        }
        if ([0].includes(columnIndex) && [7, 17, 27].includes(rowIndex)) {
          return {
            rowspan: 3,
            colspan: 1,
          };
        }
      },
      //复制
      copyShaneUrl(shareLink) {
        var input = document.createElement("input"); // 直接构建input
        input.value = shareLink; // 设置内容
        document.body.appendChild(input); // 添加临时实例
        input.select(); // 选择实例内容
        document.execCommand("Copy"); // 执行复制
        document.body.removeChild(input); // 删除临时实例
        this.$message.success("复制成功");
      },
    },
  };
</script>

<style lang='scss'>
  .prograDetailAuto {
    .content {
      display: flex;
      justify-content: space-between;
      .arr {
        width: 65.26vw;
        height: 4.688vw;
        background: #ffffff;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0vw 0.208vw 0.208vw 0.208vw;
        display: flex;
        align-items: center;
        > div {
          width: 17.5vw;
          height: 2.604vw;
          line-height: 2.604vw;
          text-align: center;
          color: #656565;
        }
        > div:nth-of-type(1) {
          background: url("../../../assets/img/arratc.png") center no-repeat;
          background-size: 100%;
          color: white;
        }
        > div:nth-of-type(2) {
          background: url("../../../assets/img/arratc.png") center no-repeat;
          background-size: 100%;
          color: white;
        }
        > div:nth-of-type(3) {
          background: url("../../../assets/img/arr.png") center no-repeat;
          background-size: 100%;
        }
        > div:nth-of-type(4) {
          background: url("../../../assets/img/arrlast.png") center no-repeat;
          background-size: 100%;
        }
      }
      .title {
        height: 1.042vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        padding-bottom: 1.1vw;
        padding-left: 1.823vw;
        border-bottom: 0.052vw solid #cbcbcb;
        > span:nth-of-type(1) {
          font-weight: bolder;
        }
        ::after {
          content: "";
          display: block;
          width: 0.208vw;
          height: 1.667vw;
          background: #3498db;
          position: absolute;
          left: -0vw;
          top: -0.26vw;
        }
      }
      .left {
        width: 65.26vw;
        height: 40vw;
        border-radius: 0.208vw;
        overflow: scroll;
        scrollbar-width: none;
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0vw 0.208vw 0.208vw 0.208vw;
          margin-bottom: 1.042vw;
        }
        .left1 {
          box-sizing: border-box;
          border-radius: 0.208vw;
          padding: 1.042vw 0 0.521vw 0;
          position: relative;
          .viewbtn {
            position: absolute;
            height: 0.573vw;
            font-size: 0.521vw;
            color: #656565;
            background: white;
            padding: 0.26vw 1.302vw 0.26vw 0.781vw;
            left: 50%;
            border-radius: 0 0 0.208vw 0.208vw;
            bottom: -1.042vw;
            cursor: pointer;
            transform: translateX(-50%);
            box-shadow: 0vw 0.5vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
            i {
              width: 0;
              height: 0;
              border-left: 0.417vw solid transparent;
              border-right: 0.417vw solid transparent;
              border-top: 0.521vw solid #cdcdcd;
              position: absolute;
              bottom: 0.208vw;
              right: 0.365vw;
            }
            &.roate {
              i {
                transform: rotate(180deg);
              }
            }
          }
          .left1_2 {
            .title {
              > div {
                margin-right: 1.875vw;
                span:nth-of-type(1) {
                  font-size: 0.833vw;
                  color: #999999;
                }
                span:nth-of-type(2) {
                  font-size: 0.833vw;
                  color: #333333;
                  margin: 0 1.042vw;
                }
                a {
                  cursor: pointer;
                }
              }
            }
            .left1_2_1 {
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 1.563vw;
              > div {
                width: 100%;
                display: flex;
                align-items: center;
                margin: 0.521vw 0;
                .el-input,
                .el-input__inner {
                  width: 9.896vw !important;
                  border: none;
                }
                .el-input.is-disabled .el-input__inner {
                  background: white;
                  color: #6a6a6a;
                  cursor: default;
                }
                > span {
                  display: block;
                  width: 4.167vw;
                  text-align: right;
                }
                a {
                  cursor: pointer;
                }
              }
              .blue {
                .el-input,
                .el-input__inner {
                  color: #006cff !important;
                }
              }
            }
            .left1_2_2 {
              display: flex;
              > div:nth-of-type(1) {
                margin-right: 3.2vw;
              }
            }
          }
          .left_2 {
            .left2main {
              padding: 1.042vw 1.563vw;
            }
            .title {
              padding-top: 1.042vw !important;
              ::after {
                content: "";
                opacity: 0;
              }
            }
            .left2_1 {
              display: flex;
              align-items: center;
              > div:nth-of-type(2) {
                margin-left: 9.375vw;
                span:nth-of-type(2) {
                  margin-left: 0.521vw;
                }
              }
            }

            .left2_2 {
              margin-top: 1.042vw;
              div:nth-of-type(2) {
                display: flex;
                .imgbox {
                  width: 10.417vw;
                  height: 9.271vw;
                  border: 0.052vw solid #cbcbcb;
                  border-radius: 0.208vw;
                  margin-right: 1.042vw;
                  margin-top: 0.781vw;
                  position: relative;
                  img {
                    width: 100%;
                  }
                  span {
                    width: 100%;
                    text-align: center;
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    line-height: 2.083vw;
                    background: #cbcbcb;
                    opacity: 0.4;
                    color: white;
                    border-radius: 0vw 0vw 0.208vw 0.208vw;
                  }
                }
              }
            }
            .left2_2box {
              display: flex;
            }
            .left2_2xs {
              div:nth-of-type(2) .imgbox {
                width: 18.854vw;
                height: 9.271vw;
                border-radius: 0.208vw;
              }
            }
          }
        }
        .left2 {
          padding-bottom: 1.563vw;
          padding-top: 1.042vw;

          .title {
            > div {
              width: 55.729vw;
              padding-right: 1.667vw;
              display: flex;
              align-items: center;
              justify-content: space-between;
              > div span:nth-of-type(1) {
                color: #999999;
              }
            }
          }
          ._tableBox {
            padding: 1.563vw 1.563vw 0 1.563vw;
            margin-bottom: 1.563vw;
            position: relative;
            .fixd {
              width: 17.031vw;
              background: #eeeeee;
              border: 0.052vw solid #d1d1d1;
              position: absolute;
              display: none;
              left: 35.99vw;
              z-index: 410;
              &.active {
                display: block;
              }
              > div:nth-last-child(1) {
                border-bottom: transparent;
              }
              > div:nth-of-type(1) {
                background: #cccccc;
              }
              > div {
                display: flex;
                border-bottom: 0.052vw solid #d1d1d1;
                &:hover{
                  background: #e6e6e6;
                }
                > div {
                  text-align: center;
                  line-height: 2.344vw;
                  i {
                    position: absolute;
                    width: 0.833vw;
                    text-align: center;
                    line-height: 0.833vw !important;
                    background: #3397db;
                    border-radius: 50%;
                    color: white;
                    right: 0.26vw;
                    top: 0.26vw;
                    cursor: pointer;
                  }
                }
                > div:nth-of-type(1) {
                  width: 11.354vw;
                  height: 2.344vw;
                  border-right: 0.052vw solid #d1d1d1;
                  cursor: pointer;
                }
                > div:nth-of-type(2) {
                  width: 5.781vw;
                  height: 2.344vw;
                  position: relative;
                }
              }
            }
            ._thead,
            ._tr {
              > div {
                border: 0.052vw solid #dcdcdc;
                border-right: transparent;
                border-bottom: transparent;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                > span {
                  box-sizing: content-box;
                  display: block;
                  width: 90%;
                  text-align: left;
                  margin: 0.26vw 0;
                }
                .blue {
                  background: #d6eaf8;
                }
                > div {
                  width: 100%;
                  height: 25%;
                  line-height: 2.656vw;
                  align-items: center;
                  text-align: center;
                  justify-content: center;
                  border-top: 0.052vw solid #dcdcdc;
                  position: relative;
                  .el-radio {
                    position: relative;
                    margin-left: -0.521vw;
                    &.tuijian {
                      &::after {
                        content: "(推荐)";
                        font-size: 0.625vw;
                        color: #999999;
                        position: absolute;
                        right: -1.823vw;
                      }
                    }
                  }
                  a {
                    position: absolute;
                    display: none;
                    right: 1.458vw;
                    cursor: pointer;
                    z-index: 10;
                    top: 0;
                    &.a_active {
                      cursor: pointer;
                      display: block;
                    }
                  }
                  .gth {
                    display: block;
                    width: 0.781vw;
                    height: 0.781vw;
                    border-radius: 50%;
                    background: url("../../../assets/img/gth.png") center
                      no-repeat;
                    background-size: 100%;
                    position: absolute;
                    left: 3.646vw;
                    bottom: 0.885vw;
                    z-index: 400;
                    .tip {
                      padding: 0.052vw 0.156vw;
                      line-height: 0.625vw;
                      position: absolute;
                      bottom: 0;
                      width: 10.417vw;
                      font-size: 0.521vw;
                      color: #999999;
                      bottom: -1.302vw;
                      left: 0vw;
                      background: #ededed;
                      border-radius: 0.104vw;
                      &::before {
                        content: "";
                        position: absolute;
                        top: -0.521vw;
                        width: 0;
                        height: 0;
                        border-width: 0 0.26vw 0.521vw;
                        border-style: solid;
                        border-color: transparent transparent #ededed;
                      }
                    }
                  }
                  // >span{
                  //   position: absolute;
                  //   font-size: 0.625vw;
                  //   right: 0.781vw;
                  //   top: 48%;
                  //   transform: translateY(-50%);
                  //   color: #999999;
                  // }
                }
                > div:nth-of-type(1) {
                  border-top: transparent;
                }
              }
              > div:nth-last-child(1) {
                border-right: 0.052vw solid #dcdcdc;
              }
              > div:nth-of-type(1) {
                width: 5.156vw;
              }
              > div:nth-of-type(2) {
                width: 9.323vw;
              }
              > div:nth-of-type(3) {
                width: 5.208vw;
              }
              > div:nth-of-type(4) {
                width: 6.719vw;
              }
              > div:nth-of-type(5) {
                width: 7.76vw;
              }
              > div:nth-of-type(6) {
                width: 11.302vw;
              }
              > div:nth-of-type(7),
              > div:nth-of-type(8),
              > div:nth-of-type(9) {
                width: 5.208vw;
              }
            }
            ._thead {
              display: flex;
              height: 2.344vw;
              > div {
                color: #333333;
                line-height: 2.344vw;
                text-align: center;
                background: #eeeeee;
              }
            }
            ._tr {
              display: flex;
              > div:nth-of-type(1),
              > div:nth-of-type(2),
              > div:nth-of-type(3),
              > div:nth-of-type(4) {
                height: 10.729vw;
              }
            }
            ._tr:nth-last-child(1) {
              > div {
                border-bottom: 0.052vw solid #dcdcdc;
              }
            }
          }
          .left3 {
            display: flex;
            margin-bottom: 1.042vw;
            margin-left: 1.563vw;
            .left3_1 {
              width: 7.448vw;
              height: 12.5vw;
              background: #3498db;
              border-radius: 0.313vw 0vw 0vw 0.313vw;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              color: white;
              p {
                line-height: 1.146vw;
              }
            }
            .left3_2 {
              width: 6.094vw;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              border: 0.052vw solid #cbcbcb;
              > div {
                width: 100%;
              }
              > div:nth-of-type(1) {
                height: 2.188vw;
                line-height: 2.188vw;
                border-bottom: 0.052vw solid #cbcbcb;
              }
              > div:nth-of-type(2) {
                flex-grow: 1;
                line-height: 10.156vw;
              }
            }
            .left3_3 {
              width: 13.49vw;
              text-align: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              border: 0.052vw solid #cbcbcb;
              border-left: transparent;
              > div {
                width: 100%;
              }
              > div:nth-of-type(1) {
                height: 2.188vw;
                line-height: 2.188vw;
                border-bottom: 0.052vw solid #cbcbcb;
              }
              > div:nth-of-type(2) {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
            }
            .left3_4 {
              width: 25.99vw;
              border: 0.052vw solid #cbcbcb;
              border-left: transparent;
              > div {
                width: 100%;
              }
              > div:nth-of-type(1) {
                height: 2.188vw;
                line-height: 2.188vw;
                text-align: center;
                border-bottom: 0.052vw solid #cbcbcb;
              }
              > div:nth-of-type(2) {
                box-sizing: content-box;
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 0.26vw 0.781vw 0 0.781vw;
                p {
                  line-height: 0.938vw;
                  &.center {
                    text-align: center;
                    margin-top: 4.167vw;
                  }
                }
              }
            }
            .left3_5 {
              width: 8.542vw;
              border: 0.052vw solid #cbcbcb;
              border-left: transparent;
              > div {
                width: 100%;
                text-align: center;
              }
              > div:nth-of-type(1) {
                height: 2.188vw;
                line-height: 2.188vw;
                border-bottom: 0.052vw solid #cbcbcb;
              }
              > div:nth-of-type(2) {
                flex-grow: 1;
                padding-top: 3.125vw;
                line-height: 1.042vw;
              }
            }
          }
          .btns {
            display: flex;
            justify-content: center;
            margin-bottom: 1.042vw;
            .el-button {
              width: 5.208vw;
              height: 1.875vw;
              padding: 0 !important;
              &.gray {
                background: #cccccc !important;
                color: white;
              }
            }
          }
        }
        .left4 {
          width: 65.26vw;
          height: 2.292vw;
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
          margin-top: 1.042vw;
          line-height: 2.292vw;
          text-align: center;
          span {
            position: relative;
            flex-grow: 0;
            cursor: pointer;
          }
          i {
            width: 0;
            height: 0;
            border-left: 0.417vw solid transparent;
            border-right: 0.417vw solid transparent;
            border-top: 0.469vw solid #cccccc;
            position: absolute;
            bottom: 0.208vw;
            right: -1.042vw;
          }
          &.roate {
            i {
              transform: rotate(180deg);
            }
          }
        }
        .left5 {
          padding-top: 1.042vw;
          border-radius: 0.208vw;
          padding-bottom: 2.604vw;
          position: relative;
          .title {
            padding-right: 1.563vw;
            margin-bottom: 1.563vw;
          }
          .more {
            width: 100%;
            position: absolute;
            left: 50%;
            color: #3498db;
            transform: translateX(-50%);
            bottom: 1.302vw;
            text-align: center;
            > div {
              color: #929292;
              display: flex;
              margin-left: 4.948vw;
              transform: translateY(0.521vw);
              align-items: center;
              h3 {
                color: #333333;
                margin-right: 1.563vw;
              }
              span {
                font-size: 0.729vw;
              }
            }
            > span {
              position: relative;
              cursor: pointer;
            }
            i {
              display: block;
              width: 0;
              height: 0;
              border-left: 0.417vw solid transparent;
              border-right: 0.417vw solid transparent;
              border-top: 0.469vw solid #cccccc;
              position: absolute;
              bottom: 0.208vw;
              right: -1.042vw;
              &.roate {
                transform: rotate(180deg) !important;
              }
            }
          }
          .item {
            position: relative;
            padding: 0;
            height: 0;
            overflow: hidden;
            &.active {
              height: auto;
              overflow: visible;
              padding: 0vw 5.104vw 0 5.104vw;
            }
            .line {
              position: absolute;
              left: 1.823vw;
              top: -0.521vw;
              img {
                width: 1.406vw;
                height: 1.406vw;
                border-radius: 50%;
                border: 0.052vw solid #000;
                overflow: hidden;
                margin: 0.26vw 0;
              }
              i {
                display: block;
                width: 0.104vw;
                height: 34.635vw;
                background: #3498db;
                margin-left: 0.677vw;
              }
              > div {
                width: 1.094vw;
                height: 1.094vw;
                border-radius: 50%;
                border: 0.156vw solid #3498db;
                margin: 0.26vw 0;
                &.noShow {
                  opacity: 0;
                  // height: 0.573vw;
                  height: 1.25vw;
                }
              }
            }
            ._title {
              margin-bottom: 1.042vw;
              margin-top: 0.573vw;
              span:nth-of-type(2) {
                color: #999999;
                margin-left: 1.563vw;
              }
            }
            .imgbox {
              display: flex;
              justify-content: space-between;
              > div {
                display: flex;
                img {
                  width: 3.229vw;
                  height: 3.229vw;
                  border-radius: 0.208vw;
                  margin-right: 0.729vw;
                }
                > div {
                  > p:nth-of-type(1) {
                    padding-top: 0.417vw;
                    span:nth-of-type(1) {
                      font-size: 0.729vw;
                      font-weight: bold;
                      color: #333333;
                    }
                    span:nth-of-type(2) {
                      margin-right: 0.781vw;
                    }
                    span:nth-of-type(2),
                    span:nth-of-type(3) {
                      color: #666666;
                    }
                  }
                  > p:nth-of-type(2) {
                    margin-top: 0.469vw;
                  }
                }
              }
              > span {
                margin-top: 1.823vw;
                font-size: 0.625vw;
                color: #999999;
              }
            }
            > h3 {
              margin: 0.573vw 0;
            }
            .tablebox {
              width: 55.677vw;
              margin-bottom: 1.042vw;
              ._thead {
                > div:nth-of-type(1) {
                  width: 55.677vw;
                  line-height: 1.458vw;
                  text-align: center;
                  background: #eeeeee;
                }
                > div:nth-of-type(2) {
                  display: flex;
                  justify-content: space-between;
                  > div {
                    text-align: center;
                    line-height: 1.406vw;
                    color: #929292;
                  }
                  > div:nth-of-type(1) {
                    width: 32.448vw !important;
                    border-right: 0.052vw solid #ebeef5;
                    border-left: 0.052vw solid #ebeef5;
                  }
                  > div:nth-of-type(2) {
                    flex-grow: 1;
                    border-right: 0.052vw solid #ebeef5;
                  }
                }
              }
              .el-table td,
              .el-table th {
                padding: 0.052vw 0 !important;
                color: #929292;
              }
            }
          }
        }
      }
      .right {
        width: 19.115vw;
        height: 40vw;
        border-radius: 0.208vw;
        overflow: scroll;
        scrollbar-width: none;
        > div + div {
          margin-top: 0.9vw;
        }
        > div {
          background: #ffffff;
          box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
          border-radius: 0.208vw;
        }
        .right1 {
          box-sizing: border-box;
          height: 5.208vw;
          padding: 1.406vw;
          position: relative;
          overflow: hidden;
          .triangle {
            width: 0;
            height: 0;
            border-top: 5.3vw solid #3498db;
            border-left: 5.3vw solid transparent;
            position: absolute;
            right: 0;
            top: 0;
            &::after {
              content: "跟进人";
              display: block;
              width: 3.125vw;
              color: white;
              position: absolute;
              right: -0.104vw;
              top: -4.323vw;
            }
          }
          .right1_1 {
            display: flex;
            img {
              width: 2.708vw;
              height: 2.708vw;
              border-radius: 50%;
              margin-right: 1.406vw;
              display: block;
              border: 0.052vw solid #cbcbcb;
              overflow: hidden;
            }
            div {
              p:nth-of-type(1) {
                font-weight: bolder;
                margin-bottom: 0.625vw;
              }
            }
          }
        }
        .right2 {
          height: 21.5vw;
          overflow: scroll;
          font-size: 0.729vw;
          scrollbar-width: none;
          .title {
            box-sizing: border-box;
            height: 2.604vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 1vw;
            padding: 0.99vw;
            border-bottom: 0.052vw solid #eeeeee;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: 0.521vw;
            }
            .el-button {
              padding: 0 0.521vw !important;
            }
          }
          .el-textarea {
            display: block;
            width: 17.031vw;
            margin: 0 auto;
          }
          .gjcontent {
            box-sizing: border-box;
            width: 17.031vw;
            height: 4.6vw;
            overflow-x: hidden;
            overflow-y: scroll;
            scrollbar-width: none;
            background: #eeeeee;
            padding: 0.5vw 1.094vw;
            margin: 0.521vw auto;
            font-size: 0.729vw;
            p {
              line-height: 0.95vw;
            }
            p:nth-of-type(2) {
              text-align: right;
            }
          }
          .pagina {
            display: inline-block;
            transform: scale(0.7);
            float: right;
          }
        }
        .right3 {
          box-sizing: border-box;
          height: 11.3vw;
          overflow-x: hidden;
          overflow-y: scroll;
          scrollbar-width: none;
          font-size: 0.729vw;
          .title {
            box-sizing: border-box;
            height: 2.5vw;
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            margin-bottom: 0.9vw;
            padding: 0.99vw;
            border-bottom: 0.052vw solid #eeeeee;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: 0.521vw;
            }
          }
          .con {
            padding: 0vw 1.354vw;
            > div {
              display: flex;
              margin-bottom: 0.26vw;
              span {
                flex-shrink: 0;
                margin-right: 0.521vw;
              }
              p {
                line-height: 0.938vw;
              }
            }
          }
          .pagina {
            display: inline-block;
            transform: scale(0.7);
            float: right;
          }
        }
        .right4 {
          border-radius: 0.208vw;
          > div:nth-of-type(2) {
            padding: 1.042vw 1.563vw;
          }
          .el-button {
            padding: 0 0.885vw !important;
            margin-right: 0.365vw !important;
            &.gray {
              background: #cccccc !important;
              color: white !important;
              cursor: not-allowed;
              outline: none !important;
              border: transparent !important;
              pointer-events: none;
            }
          }
          .el-button:nth-of-type(3) {
            margin-left: 0 !important;
            margin-top: 0.521vw !important;
            margin-bottom: 0.781vw !important;
          }
          .title {
            padding: 1.042vw 1.563vw;
            ::after {
              content: "";
              display: block;
              width: 0.208vw;
              height: 1.667vw;
              background: #3498db;
              position: absolute;
              left: -0vw;
              top: 0.677vw;
            }
          }
        }
      }
    }
    .basic {
      .el-dialog__body {
        padding: 1.823vw 3.542vw;
      }
      .dyrow {
        > div:nth-of-type(1) {
          width: 3.646vw;
          text-align: right;
        }
        .select {
          margin-right: 0.521vw;
        }
      }
      .dyrow1 {
        .el-input,
        .el-input__inner {
          width: 10.417vw !important;
        }
      }
      .dyrow3 {
        .el-input,
        .el-input__inner {
          width: 15.5vw !important;
        }
      }
      p {
        font-size: 0.625vw;
      }
    }

    .addconcat {
      .el-dialog__body {
        padding: 1.823vw 5vw;
      }

      .el-input,
      .el-input__inner {
        width: 10.417vw !important;
      }
      .sex {
        .el-input,
        .el-input__inner {
          width: 5vw !important;
        }
      }
      .dyrow {
        > div:nth-of-type(1) {
          width: 7vw;
          text-align: right;
        }
        .select {
          margin-right: 0.521vw;
        }
      }
    }

    .agreement {
      .el-dialog__body {
        height: 30vw;
        overflow: scroll;
        scrollbar-width: none;
        img {
          width: 100%;
        }
      }
    }
    .contract {
      .el-dialog__body {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 4vw 0;
        height: 5.208vw;
        .upload-demo {
          position: relative;
          display: flex;
          .el-upload {
            width: 3.646vw;
            height: 1.458vw !important;
            .el-button {
              padding: 0 !important;
              width: 3.646vw;
              height: 1.458vw !important;
              line-height: 1.458vw !important;
            }
          }
          .el-upload__tip {
            color: #999999;
          }
          .el-upload-list {
            width: 20.833vw;
            position: absolute;
            top: -2.604vw;
            left: 50%;
            transform: translate(-50%);
            text-align: center;
            .el-upload-list__item-name {
              color: #006cff;
            }
          }
        }
      }
    }
    .total .el-dialog__body {
      padding: 1.25vw;
      height: 31.302vw;
      overflow: scroll;
      scrollbar-width: none;
      .tablebox {
        margin-bottom: 1.042vw;
        ._thead {
          > div:nth-of-type(1) {
            width: 55.677vw;
            line-height: 1.458vw;
            text-align: center;
            background: #eeeeee;
          }
          > div:nth-of-type(2) {
            display: flex;
            justify-content: space-between;
            > div {
              text-align: center;
              line-height: 1.406vw;
              color: #929292;
            }
            > div:nth-of-type(1) {
              width: 32.448vw !important;
              border-right: 0.052vw solid #ebeef5;
              border-left: 0.052vw solid #ebeef5;
            }
            > div:nth-of-type(2) {
              flex-grow: 1;
              border-right: 0.052vw solid #ebeef5;
            }
          }
        }
        .el-table td,
        .el-table th {
          padding: 0.104vw 0 !important;
          color: #929292;
        }
      }
    }
    .qipei {
      .el-dialog__body {
        padding: 0 1.823vw 1.719vw 1.823vw;
        height: 26.042vw;
        overflow: scroll;
        scrollbar-width: none;
        position: relative;
        .title {
          width: 36.458vw;
          display: flex;
          justify-content: space-between;
          position: absolute;
          top: -1.823vw;
          left: 8.333vw;
          color: white;
        }
        ._content {
          .item {
            .subTit {
              font-size: 0.833vw;
              font-weight: bold;
              color: #333333;
              margin-bottom: 1.927vw;
              margin-top: 1.823vw;
              span {
                font-weight: bold;
                color: #df3210;
              }
            }
            > div {
              margin-bottom: 0.938vw;
              h4 {
                margin-bottom: 0.729vw;
              }
              > div {
                width: 100%;
                display: flex;
                // justify-content: space-between;
                > div:nth-of-type(1) {
                  margin-right: 1.25vw;
                }
                > div {
                  display: flex;
                  background: #eeeeee;
                  padding: 0.313vw 0.625vw;
                  border-radius: 0.208vw;

                  img {
                    display: block;
                    border: 0.052vw solid #000;
                    width: 3.229vw;
                    height: 3.229vw;
                    border-radius: 0.208vw;
                    margin-right: 0.625vw;
                  }
                  p {
                    line-height: 1.563vw;
                    > span {
                      font-weight: bold;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .el-dialog__footer {
        display: flex;
        justify-content: center;
        .el-button {
          padding: 0 1.042vw !important;
        }
      }
    }
  }
</style>