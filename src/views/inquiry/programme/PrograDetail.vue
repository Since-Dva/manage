<template>
  <div class="prograDetail">
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
          </div>
        </div>
        <div class="left2">
          <div class="title">
            <span>受损信息</span>
          </div>
          <div class="left2main">
            <div class="left2_1">
              <div class="select">
                受损面：
                <el-select v-model="shousun">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div>
                <span>备注：</span>
                <span :class="!isEdit?'blue aaaaa':'aaaaa'">
                  <el-input :disabled="isEdit" v-model="base.value13"></el-input>
                </span>
              </div>
            </div>
            <div class="left2_2">
              <div>受损照片</div>
              <div>
                <div class="imgbox">
                  <img src alt />
                  <input v-if="!isEdit" disabled value="本地上传" />
                  <el-upload
                    v-if="!isEdit"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList1"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
                <div class="imgbox">
                  <img src alt />
                  <input v-if="!isEdit" disabled value="本地上传" />
                  <el-upload
                    v-if="!isEdit"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList2"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
                <div class="imgbox">
                  <img src alt />
                  <input v-if="!isEdit" disabled value="本地上传" />
                  <el-upload
                    v-if="!isEdit"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList3"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
                <div class="imgbox">
                  <img src alt />
                  <input v-if="!isEdit" disabled value="本地上传" />
                  <el-upload
                    v-if="!isEdit"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList4"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                </div>
              </div>
            </div>
            <div class="left2_2box">
              <div class="left2_2">
                <div>维修清单</div>
                <div>
                  <div class="imgbox">
                    <img src alt />
                    <input v-if="!isEdit" disabled value="本地上传" />
                    <el-upload
                    v-if="!isEdit"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList5"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                  </div>
                </div>
              </div>
              <div class="left2_2 left2_2xs">
                <div>行驶证</div>
                <div>
                  <div class="imgbox">
                    <img src alt />
                    <input v-if="!isEdit" disabled value="本地上传" />
                    <el-upload
                    v-if="!isEdit"
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :before-remove="beforeRemove"
                    multiple
                    :limit="3"
                    :on-exceed="handleExceed"
                    :file-list="fileList6"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                  </el-upload>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="left3">
          <div class="title">
            <span>配件清单</span>
            <el-button :disabled="!super1" @click="activeidx=1">新增</el-button>
          </div>
          <div class="tablebox">
            <span v-if="showTip" class="gth">
              <span class="tip">OE码与自有库零部件【右大灯】重合请重新选择该零部件</span>
            </span>
            <el-table
              :border="true"
              :header-cell-style="{color:'rgba(51,51,51,1)',fontSize:'0.833vw',background:'#eeeeee'}"
              :data="tableData"
              style="width: 100%"
              @cell-mouse-enter='hoverin'
              @cell-mouse-leave='hoverout'
            >
              <el-table-column align="center" prop="value1" label="排序">
                <template slot-scope="scope">
                  <span :class="scope.row.red?'red':''">{{scope.row.value1}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="value2" label="零部件名称">
                <template slot-scope="scope">
                  <span :class="scope.row.red?'red':''">{{scope.row.value2}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="value3" label="数量">
                <template slot-scope="scope">
                  <span :class="scope.row.red?'red':''">{{scope.row.value3}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="value4" label="品牌车型" width="200%">
                <template slot-scope="scope">
                  <span :class="scope.row.red?'red':''">{{scope.row.value4}}</span>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="value5" label="OE码">
                <template slot-scope="scope">
                  <div :class="scope.row.red?'red':''">
                    <span v-if="scope.row.value5">{{scope.row.value5}}</span>
                    <a v-else-if="!input3" @click="showInput('input3')">请填写OE码</a>
                    <el-input @blur="input3=false" v-model="input11" v-else />
                  </div>
                </template>
              </el-table-column>
              <el-table-column align="center" prop="value6" label="4S价" width="200%">
                <template slot-scope="scope">
                  <div :class="scope.row.red?'red':''">
                    <span v-if="scope.row.value6">{{scope.row.value6}}</span>
                    <a v-else-if="!input4" @click="showInput('input4')">请填写4S价</a>
                    <el-input @blur="input4=false" v-model="input12" v-else />
                  </div>
                </template>
              </el-table-column>
              <el-table-column align="center" label="操作">
                <template>
                  <div>
                    <a @click="deleteModal1">删除</a>
                  </div>
                </template>
              </el-table-column>
            </el-table>
            <div class="bth">
              <el-button :style="{background:'#cccccc'}" disabled>发布询价</el-button>
            </div>
          </div>
        </div>
        <div v-if="activeidx" class="left4">
          <div class="title">
            <span>新增零部件</span>
            <div>
              <img @click="changeidx" src="../../../assets/img/left.png" alt />
              <img @click="activeidx=null" src="../../../assets/img/cha.png" alt />
            </div>
          </div>
          <div :class="['left4_1', activeidx===1?'active':'']">
            <div class="_left">
              <span>维修清单</span>
              <div>
                <img src alt />
                <img
                  @click="showrotate"
                  src="../../../assets/img/xiangji.png"
                  alt
                  :class="[rotate?'xuanzhuan':'' ,'carme']"
                />
              </div>
            </div>
            <div class="_right">
              <div class="_top">
                <el-input v-model="input1"></el-input>
                <el-button>搜索</el-button>
              </div>
              <div class="middle">
                <div class="_left">
                  <p>已添加配件（3）</p>
                  <div v-if="aaa" class="_left1">
                    <span>左大灯</span>
                    <i @click="aaa=false">×</i>
                  </div>
                  <div v-if="bbb" class="_left1">
                    <span>左前大灯*2</span>
                    <i @click="bbb=false">×</i>
                  </div>
                </div>
                <div class="_right">
                  <p>配件搜索结果</p>
                  <div class="_right1">
                    <span>左大灯</span>
                    <b></b>
                  </div>
                  <div class="_right1">
                    <span>右大灯</span>
                  </div>
                  <div class="_right1">
                    <span>左前大灯</span>
                    <b></b>
                  </div>
                  <div class="_right1">
                    <span>右前大灯</span>
                  </div>
                  <div class="_right1">
                    <span>大灯</span>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <el-button>刷新</el-button>
                <el-button>确认添加</el-button>
              </div>
            </div>
          </div>
          <div :class="['left4_2',activeidx===2?'active':'']">
            <div class="_left">
              <p>维修清单</p>
              <div>
                <img src alt />
                <img
                  @click="showrotate"
                  src="../../../assets/img/xiangji.png"
                  alt
                  :class="[rotate?'xuanzhuan':'' ,'carme']"
                />
              </div>
            </div>
            <div class="_right">
              <div class="_right1">
                <p>一级类目</p>
                <div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                </div>
              </div>
              <div class="_right2">
                <p>二级类目</p>
                <div>
                  <div class="blue">正前</div>
                  <div>正前</div>
                  <div>正前</div>
                  <div>正前</div>
                  <div>正前</div>
                  <div>正前</div>
                  <div>正前</div>
                </div>
              </div>
              <div class="_right3">
                <p>三级类目</p>
                <div>
                  <div>
                    <span>前保险杠</span>
                    <b></b>
                  </div>
                  <div>
                    <span>前保险杠</span>
                    <b></b>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                </div>
                <div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                  <div>
                    <span>雨刮连动杆</span>
                  </div>
                </div>
              </div>
              <div class="_right3">
                <p>已添加零部件</p>
                <div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                  <div>
                    <span>前保险杠</span>
                  </div>
                </div>
              </div>
              <div class="_right4">
                <el-button>刷新</el-button>
                <el-button>确认添加</el-button>
              </div>
            </div>
          </div>
          <div :class="['left4_1' ,'left4_3',activeidx===3?'active':'']">
            <div class="_left">
              <span>维修清单</span>
              <div>
                <img src alt />
                <img
                  @click="showrotate"
                  src="../../../assets/img/xiangji.png"
                  alt
                  :class="[rotate?'xuanzhuan':'' ,'carme']"
                />
              </div>
            </div>
            <div class="_right">
              <div class="_top">
                <el-input v-model="input1"></el-input>
                <el-button>搜索</el-button>
              </div>
              <div class="middle">
                <div class="_left">
                  <p>已添加配件（0）</p>
                </div>
                <div class="_right">
                  <img src="../../../assets/img/none.png" alt />
                  <p>搜索无结果，请更换关键词重新搜索</p>
                  <p>注：查无此零部件，请联系供应链管理人员新增</p>
                </div>
              </div>
              <div class="bottom">
                <el-button class="gray">确认添加</el-button>
              </div>
            </div>
          </div>
          <div :class="['left4_1', 'left4_4',activeidx===4?'active':'']">
            <div class="_left">
              <span>维修清单</span>
              <div>
                <img src alt />
                <img
                  @click="showrotate"
                  src="../../../assets/img/xiangji.png"
                  alt
                  :class="[rotate?'xuanzhuan':'' ,'carme']"
                />
              </div>
            </div>
            <div class="_right">
              <div class="_top">
                <el-input v-model="input1"></el-input>
                <el-button>搜索</el-button>
              </div>
              <div class="middle">
                <div class="_left">
                  <p>已添加配件（0）</p>
                </div>
                <div class="_right">
                  <p>配件搜索结果</p>
                  <div class="_right1">
                    <span>左大灯</span>
                  </div>
                  <div class="_right1">
                    <span>右大灯</span>
                  </div>
                  <div class="_right1">
                    <span>左前大灯</span>
                  </div>
                  <div class="_right1">
                    <span>右前大灯</span>
                  </div>
                  <div class="_right1">
                    <span>大灯</span>
                  </div>
                  <div class="_right1">
                    <span>左大灯</span>
                  </div>
                  <div class="_right1">
                    <span>右大灯</span>
                  </div>
                  <div class="_right1">
                    <span>左前大灯</span>
                  </div>
                  <div class="_right1">
                    <span>右前大灯</span>
                  </div>
                  <div class="_right1">
                    <span>大灯</span>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <el-button class="gray">确认添加</el-button>
              </div>
            </div>
          </div>
          <div :class="['left4_2', 'left4_5',activeidx===5?'active':'']">
            <div class="_left">
              <p>维修清单</p>
              <div>
                <img src alt />
                <img
                  @click="showrotate"
                  src="../../../assets/img/xiangji.png"
                  alt
                  :class="[rotate?'xuanzhuan':'' ,'carme']"
                />
              </div>
            </div>
            <div class="_right">
              <div class="sel-150">
                <span>品牌：</span>
                <el-select v-model="select1">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </div>
              <div>
                品牌车型：
                <span class="gray">大众汽车SVW71810BU</span>
              </div>
              <div>
                <p>根据搜索添加零部件</p>
                <el-input v-model="input2" placeholder="输入配件名称"></el-input>
                <el-button>搜索</el-button>
              </div>
              <div>
                <p>根据类型选择添加零配件</p>
                <div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                </div>
                <div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                  <div>
                    <img src alt />
                    <span>外观件</span>
                  </div>
                </div>
              </div>
            </div>
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
            <el-button :disabled='!super1' @click="changegenjin">{{!genjin?'添加跟进':'保存跟进'}}</el-button>
            <el-button @click="changedingdan">{{super1?"关闭订单":'开启订单'}}</el-button>
            <el-button :disabled='!super1' @click="xiezhu=true">完成协助</el-button>
            <el-input v-if="genjin&&super1" type="textarea" v-model="textarea2" :rows="4"></el-input>
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
    <!-- 订单关闭提示 -->
    <el-dialog title="操作提示" :visible.sync="dingdan" width="22.656vw">
      <span>当前订单已关闭，您的操作无效</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dingdanOK">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 删除提示 -->
    <el-dialog title="删除确认" :visible.sync="deleteModal" width="22.656vw">
      <span>是否删除该零配件？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteModalOK">确 定</el-button>
        <el-button class="cancel" @click="deleteModal=false">取 消</el-button>
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
        closedingdan: false,
        deleteModal: false,
        xiezhu: false,
        shousun: null,
        textarea: null,
        textarea1: null,
        textarea2: null,
        input1: null,
        input2: null,
        input11:null,
        input12:null,
        select1: null,
        rotate: false,
        fileList1:[],
        fileList2:[],
        fileList3:[],
        fileList4:[],
        fileList5:[],
        fileList6:[],
        input3:false,
        input4:false,
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
          value10: "15223595900",
          value11: "CQTPY20200721000001",
          value12: "2020年8月3日16:06:14",
          value13: "具体零部件详情需要电话沟通",
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
        activeidx:null,
        options: [
          { label: "大众", value: 1 },
          { label: "奥迪", value: 2 },
        ],
        addgj: false,
        genjin: false,
        aaa: true,
        bbb: true,
        tableData: [
          {
            value1: "1",
            value2: "左大灯",
            value3: "X1",
            value4: "大众汽车SVW71810BU",
            value5: "2151252141234",
            value6: "¥ 4689",
            red: false,
          },
          {
            value1: "1",
            value2: "左大灯",
            value3: "X1",
            value4: "大众汽车SVW71810BU",
            value5: null,
            value6: null,
            red: false,
          },
          {
            value1: "1",
            value2: "左大灯",
            value3: "X1",
            value4: "大众汽车SVW71810BU",
            value5: "2151252141231",
            value6: 4689,
            red: true,
          },
        ],
        super1:false,
        showTip:false
      };
    },
    methods: {
      changeidx(){
        this.activeidx++
        if(this.activeidx>=6){
          this.activeidx=1
        }
      },
      changeIsEdit() {
        if(!this.super1){
          return
        }
        this.isEdit = !this.isEdit;
      },
      saveModalOK() {
        if(!this.super1){
          return
        }
        this.isEdit = false;
        this.saveModal = false;
      },
      nopowerOK() {
        if(!this.super1){
          return
        }
        this.nopower = false;
      },
      showrotate() {
        if(!this.super1){
          return
        }
        this.rotate = true;
        setTimeout(() => {
          this.rotate = false;
        }, 500);
      },
      dingdanOK() {
        if(!this.super1){
          return
        }
        this.dingdan = false;
      },
      closedingdanOK() {
        if(!this.super1){
          return
        }
        this.closedingdan = false;
      },
      deleteModal1(){
        if(!this.super1){
          return
        }
        this.deleteModal=true
      },
      deleteModalOK() {
        if(!this.super1){
          return
        }
        this.deleteModal = false;
      },
      xiezhuOK() {
        if(!this.super1){
          return
        }
        this.xiezhu = false;
      },
      changegenjin() {
        this.genjin = !this.genjin;
        this.textarea2 = null;
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
      //上传相关
      handlePreview(){

      },
      handleRemove(){

      },
      beforeRemove(){

      },
      handleExceed(){

      },
      //
      showInput(type){
        if(!this.super1){
          return
        }
        this[type]=true
      },
      changedingdan(){
        this.super1=!this.super1
        if(!this.super1){
          this.activeidx=null
        }
      },
      hoverin(e){
        if(e.red&&e.value5==='2151252141231'){
          this.showTip=true
        }
      },
      hoverout(){
        this.showTip=false
      }
    },
  };
</script>

<style lang='scss'>
  .prograDetail {
    .content {
      display: flex;
      justify-content: space-between;
      .arr {
        width: 65.26vw;
        height: 4.688vw;
        position: fixed;
        top: 7.604vw;
        background: #ffffff;
        box-shadow: 0vw 0vw 0.677vw 0vw rgba(0, 0, 0, 0.1);
        border-radius: 0vw 0.208vw 0.208vw 0.208vw;
        display: flex;
        z-index: 400;
        overflow: hidden;
        align-items: center;
        > div {
          width: 17.8vw;
          height: 2.604vw;
          line-height: 2.604vw;
          text-align: center;
          color: #656565;
          flex-shrink: 0;
        }
        > div:nth-of-type(1) {
          background: url("../../../assets/img/arratc.png") center no-repeat;
          background-size: 100%;
          color: white;
        }
        > div:nth-of-type(2) {
          background: url("../../../assets/img/arr.png") center no-repeat;
          background-size: 100%;
          margin-left: -35px;
        }
        > div:nth-of-type(3) {
          background: url("../../../assets/img/arr.png") center no-repeat;
          background-size: 100%;
          margin-left: -35px;
        }
        > div:nth-of-type(4) {
          background: url("../../../assets/img/arrlast.png") center no-repeat;
          background-size: 100%;
          margin-left: -35px;
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
        padding-top: 5.5vw;
        height: 35vw;
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
        }
        .left2 {
          border-radius: 0.208vw;
          .left2main {
            padding: 1.042vw 1.563vw;
          }
          .title {
            padding-top: 1.042vw;
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
          .left2_1 {
            display: flex;
            align-items: center;
            > div:nth-of-type(2) {
              margin-left: 9.375vw;
              span:nth-of-type(2) {
                margin-left: 0.521vw;
                // color: #006bff;
              }
            }
            .aaaaa {
              .el-input,
              .el-input__inner {
                width: 12vw !important;
                border: none;
              }
              .el-input.is-disabled .el-input__inner {
                background: white;
                color: #6a6a6a;
                cursor: default;
              }
            }
            .blue {
              .el-input,
              .el-input__inner {
                color: #006cff !important;
              }
            }
          }
          .left2_2 {
            margin-top: 1.5vw;
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
                .upload-demo {
                  width: 200px;
                  height: 2.083vw;
                  overflow: hidden;
                  position: absolute;
                  bottom: 0;
                  .el-button{
                    width: 270px !important;
                    opacity: 0;
                  }
                }
                input {
                  border: none;
                  outline: none;
                  width: 99%;
                  text-align: center;
                  position: absolute;
                  bottom: 0;
                  left: 0;
                  line-height: 2.083vw;
                  background: #cbcbcb;
                  opacity: 0.4;
                  color: white;
                  border-radius: 0vw 0vw 0.208vw 0.208vw;
                  cursor: pointer;
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
        .left3 {
          border-radius: 0.208vw;
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
          .tablebox {
            padding: 1.771vw 1.563vw;
            position: relative;
            .el-input,
        .el-input__inner {
          width: 7vw !important;
        }
            .gth {
              display: block;
              width: 0.781vw;
              height: 0.781vw;
              border-radius: 50%;
              background: url("../../../assets/img/gth.png") center no-repeat;
              background-size: 100%;
              position: absolute;
              left: 37.188vw;
              bottom: 5.573vw;
              z-index: 999;
              .tip {
                padding: 0.052vw 0.156vw;
                line-height: 0.625vw;
                position: absolute;
                bottom: 0;
                width: 16.146vw;
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
            .el-table .cell,
            .el-table__body-wrapper {
              overflow: visible !important;
            }
            a {
              cursor: pointer;
            }
            .red {
              color: red !important;
            }
            .bth {
              margin-top: 1.042vw;
              display: flex;
              justify-content: center;
            }
          }
        }
        .left4 {
          border-radius: 0.208vw;
          .title {
            padding-top: 1.042vw;
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
          > div {
            padding-right: 1.042vw;
            img {
              margin: 0 0.26vw;
              cursor: pointer;
            }
          }
          .left4_1 {
            display: flex;
            width: 65.26vw;
            height: 0;
            overflow: hidden;
            &.active {
              height: 35.208vw;
            }
            > ._left {
              width: 25.99vw;
              height: 35.208vw;
              border-right: 0.052vw solid #cbcbcb;
              span {
                display: block;
                width: 25.99vw;
                margin-top: 1.771vw;
                margin-bottom: 1.094vw;
                font-size: 0.833vw;
                color: #656565;
                text-align: center;
              }
              > div {
                position: relative;
                img:nth-of-type(1) {
                  display: block;
                  width: 22.344vw;
                  height: 29.635vw;
                  border-radius: 0.208vw;
                  margin: 0 auto;
                }
                .carme {
                  display: block;
                  width: 2.292vw;
                  height: 2.292vw;
                  border-radius: 50%;
                  overflow: hidden;
                  position: absolute;
                  right: 2.604vw;
                  bottom: 1.042vw;
                  transition: all 0.5s;
                  &.xuanzhuan {
                    transform: rotate(360deg);
                  }
                }
              }
            }
            > ._right {
              width: 37.292vw;
              border-right: 0.052vw solid #cbcbcb;
              ._top {
                width: 37.292vw;
                height: 5.052vw;
                display: flex;
                justify-content: center;
                align-items: center;
                .el-button {
                  margin-left: 0.521vw;
                  height: 1.458vw !important;
                  line-height: 1.458vw !important;
                }
                border-bottom: 0.052vw solid #cbcbcb;
              }
            }
            .middle {
              height: 25.26vw;
              display: flex;
              > ._left {
                height: 25.26vw;
                width: 10.417vw;
                overflow: scroll;
                scrollbar-width: none;
                box-sizing: border-box;
                text-align: center;
                border-right: 0.052vw solid #cbcbcb;
                > p {
                  padding: 1.667vw 0 1.146vw 0;
                }
                ._left1 {
                  width: 5.781vw;
                  height: 1.458vw;
                  flex-shrink: 0;
                  line-height: 1.458vw;
                  background: #ededed;
                  border-radius: 0.208vw;
                  text-align: center;
                  position: relative;
                  margin-bottom: 0.521vw;
                  margin-right: 0.313vw;
                  margin: 0.521vw auto;
                  i {
                    position: absolute;
                    width: 0.781vw;
                    height: 0.781vw;
                    text-align: center;
                    line-height: 0.677vw;
                    border-radius: 50%;
                    background: #3498db;
                    color: white;
                    transform: scale(0.8);
                    position: absolute;
                    right: -0.26vw;
                    top: -0.26vw;
                    cursor: pointer;
                  }
                  b {
                    width: 0;
                    height: 0;
                    border-top: 1.042vw solid #3498db;
                    border-left: 1.042vw solid transparent;
                    position: absolute;
                    top: 0;
                    right: 0;
                  }
                }
              }
              > ._right {
                width: 26.458vw;
                box-sizing: border-box;
                padding: 1.667vw 10.156vw 1.667vw 2.083vw;
                p {
                  margin-bottom: 1.615vw;
                }
                ._right1 {
                  // width: 5.208vw;
                  float: left;
                  width: 5.781vw;
                  height: 1.458vw;
                  flex-shrink: 0;
                  line-height: 1.458vw;
                  background: #ededed;
                  border-radius: 0.208vw;
                  text-align: center;
                  position: relative;
                  margin-bottom: 0.521vw;
                  margin-right: 1.042vw;
                  overflow: hidden;
                  i {
                    position: absolute;
                    width: 0.781vw;
                    height: 0.781vw;
                    text-align: center;
                    line-height: 0.677vw;
                    border-radius: 50%;
                    background: #3498db;
                    color: white;
                    transform: scale(0.8);
                    position: absolute;
                    right: -0.26vw;
                    top: -0.26vw;
                    cursor: pointer;
                  }
                  b {
                    width: 0;
                    height: 0;
                    border-top: 1.042vw solid #3498db;
                    border-left: 1.042vw solid transparent;
                    position: absolute;
                    top: 0;
                    right: 0;
                  }
                }
              }
            }
            .bottom {
              height: 4.792vw;
              display: flex;
              justify-content: center;
              align-items: center;
              border-top: 0.052vw solid #cbcbcb;
              .el-button:nth-of-type(1) {
                margin-right: 0.781vw;
              }
            }
          }
          .left4_2 {
            display: flex;
            height: 0;
            overflow: hidden;
            &.active {
              height: 37.865vw;
            }
            ._left {
              box-sizing: border-box;
              width: 29.01vw;
              height: 35.208vw;
              padding: 1.771vw 4.844vw 4.479vw 1.823vw;
              p {
                text-align: center;
                margin-bottom: 18px;
              }
              > div {
                position: relative;
                img:nth-of-type(1) {
                  display: block;
                  width: 22.344vw;
                  height: 29.635vw;
                  border-radius: 0.208vw;
                  margin: 0 auto;
                }
                .carme {
                  width: 2.292vw;
                  height: 2.292vw;
                  border-radius: 50%;
                  overflow: hidden;
                  position: absolute;
                  right: 1vw;
                  bottom: 1.042vw;
                }
              }
            }
            > ._right {
              width: 32.188vw;
              p {
                margin: 1.615vw 0;
                display: block;
              }
              ._right1 {
                display: block !important;
                > div {
                  display: flex;
                  > div + div {
                    margin-left: 0.26vw;
                  }
                  > div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                      display: block;
                      border: 0.052vw solid #000;
                      width: 5.156vw;
                      height: 3.698vw;
                      border-radius: 0.208vw;
                      margin-bottom: 0.521vw;
                    }
                  }
                }
              }
              ._right2 {
                margin-bottom: 0.781vw;
                > div {
                  display: flex;
                  > div + div {
                    margin-left: 0.781vw;
                  }
                  > div {
                    width: 3.646vw;
                    height: 1.458vw;
                    line-height: 1.458vw;
                    background: #ededed;
                    border-radius: 0.208vw;
                    text-align: center;
                    &.blue {
                      background: #3397db;
                      color: white;
                    }
                  }
                }
              }
              ._right3 {
                border-top: 0.052vw solid #cbcbcb;
                p {
                  margin: 1.042vw 0;
                }
                > div {
                  overflow: hidden;
                  > div + div {
                    margin-left: 0.26vw;
                  }
                  > div {
                    width: 3.854vw !important;
                    height: 1.979vw !important;
                    padding: 0.26vw;
                    float: left;
                    display: flex;
                    line-height: 0.938vw;
                    justify-content: center;
                    align-items: center;
                    width: 5.781vw;
                    flex-shrink: 0;
                    background: #ededed;
                    border-radius: 0.208vw;
                    text-align: center;
                    position: relative;
                    margin-bottom: 0.521vw;
                    overflow: hidden;
                    b {
                      width: 0;
                      height: 0;
                      border-top: 1.042vw solid #3498db;
                      border-left: 1.042vw solid transparent;
                      position: absolute;
                      top: 0;
                      right: 0;
                    }
                  }
                }
              }
              ._right4 {
                margin-top: 0.625vw;
                display: flex;
                justify-content: center;
                align-items: center;
                .el-button {
                  width: 5.208vw;
                  height: 1.875vw;
                  padding: 0vw !important;
                }
              }
            }
          }
          .left4_3 {
            > ._right ._right {
              padding: 0;
              img {
                display: block;
                margin: 0 auto;
                margin-top: 4.896vw;
              }
              p {
                color: #999999;
                text-align: center;
              }
              p:nth-of-type(1) {
                margin-top: 1.198vw;
              }
              p:nth-of-type(2) {
                margin-top: 4.323vw;
              }
            }
            .bottom {
              .gray {
                background: #cbcbcb !important;
                pointer-events: none;
              }
            }
          }
          .left4_4 {
            ._right .middle ._right ._right1 {
              margin-top: 0.781vw;
            }
            .bottom {
              .gray {
                background: #cbcbcb !important;
                pointer-events: none;
              }
            }
          }
          .left4_5 {
            height: 0;
            overflow: hidden;
            &.active {
              height: 35.156vw;
            }
            > ._left {
              p {
                margin-bottom: 1.094vw;
              }
              > div {
                img:nth-of-type(2) {
                  right: 1.042vw;
                }
              }
            }
            ._right {
              padding: 1.51vw 3.958vw 0 0;
              > div .gray {
                color: #656565;
              }
              > div:nth-of-type(2) {
                margin-top: 1.042vw;
              }
              > div:nth-of-type(3) {
                p {
                  margin: 2.083vw 0 1.042vw 0;
                }
                .el-button {
                  height: 1.563vw !important;
                  line-height: 1.563vw !important;
                  margin-left: 0.781vw;
                }
              }
              > div:nth-of-type(4) {
                > div {
                  display: flex;
                  margin-bottom: 1.042vw;
                  div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    img {
                      display: block;
                      width: 9.896vw;
                      height: 7.292vw;
                      border-radius: 0.208vw;
                      border: 0.052vw solid #000;
                      margin-bottom: 0.521vw;
                    }
                  }
                }
              }
            }
          }
        }
      }
      .right {
        width: 19.115vw;
        height: 40vw;
        overflow: scroll;
        border-radius: 0.208vw;
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
  }
</style>