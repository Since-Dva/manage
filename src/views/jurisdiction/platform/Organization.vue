<template>
  <div class="organization">
    <tabs></tabs>
    <div class="content">
      <div>
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      </div>
      <div>
        <el-button v-if="click>10" @click="showEditModal">编辑</el-button>
        <el-button v-if="click>10" @click="showDeteleModal">删除</el-button>
        <el-button class="deep" v-if="click<1000" @click="showAddModal">＋新增</el-button>
        <p>{{title}}</p>
        <p>{{click>1000?'':click>100?'共5人':click>10?'共2个小组 8个账号':'共7个部门 45个账号'}}</p>
      </div>
    </div>
    <!-- 新增 -->
    <el-dialog title="新增确认" :visible.sync="addModal" width="434.995px">
      <div class="dyrow">
        <span class="require">父级主体：</span>
        <p>{{father}}</p>
      </div>
      <div class="dyrow">
        <span class="require">{{click>1000?'':click>100?'个人':click>10?'小组':'部门'}}名称：</span>
        <el-input type="text" v-model="name" placeholder="（8个字以内）" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addModalOK">确 定</el-button>
        <el-button class="cancel" @click="addModalcancel">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 删除 -->
    <el-dialog title="删除确认" :visible.sync="deteleModal" width="434.995px">
      <span class="dyrow">是否确认删除{{click>1000?'':this.father}}？</span>
      <span class="dyrow" v-if="click<1000" :style="{fontSize:'10.003px'}">(若选择删除，对应部门所旗下所关联的所有{{click>1000?'':click>100?'个人':click>10?'小组':'部门'}}均会被删除)</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deteleModalOK">确 定</el-button>
        <el-button class="cancel" @click="deteleModalcancel">取 消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑 -->
    <el-dialog title="编辑确认" :visible.sync="editModal" width="434.995px">
      <div class="dyrow">
        <span class="require">父级主体：</span>
        <p>{{fatherTitle}}</p>
      </div>
      <div class="dyrow">
        <span class="require">{{click>1000?'个人':click>100?'小组':click>10?'部门':''}}名称：</span>
        <el-input type="text" v-model="father" placeholder="（8个字以内）" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editModalOK">确 定</el-button>
        <el-button class="cancel" @click="editModalcancel">取 消</el-button>
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
      title: "量子信云",
      click: 0,
      father: "量子信云",
      addtitle: "部门",
      name: null,
      addModal: false,
      deteleModal: false,
      editModal: false,
      data: [
        {
          label: "量子信云（45）",
          id: 1,
          children: [
            {
              label: "商务部（5）",
              id: 11,
              children: [
                {
                  label: "商务部1组",
                  id: 111,
                },
              ],
            },
            {
              label: "运营部（8）",
              id: 12,
              children: [
                {
                  label: "运营部一组（4）",
                  id: 121,
                  children: [
                    { label: "郭靖", id: 1211 },
                    { label: "黄蓉", id: 1212 },
                    { label: "小龙女", id: 1213 },
                    { label: "杨过", id: 1214 },
                  ],
                },
                {
                  label: "运营部二组（4）",
                  id: 122,
                  children: [
                    { label: "郭靖1", id: 1221 },
                    { label: "黄蓉2", id: 1222 },
                    { label: "小龙女3", id: 1223 },
                    { label: "杨过4", id: 1224 },
                  ],
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
    };
  },
  methods: {
    handleNodeClick(data) {
      this.father = data.label.split("（")[0];
      this.click = data.id;
      this.title = data.label;
    },
    showAddModal() {
      this.addModal = true;
    },
    showDeteleModal() {
      this.deteleModal = true;
    },
    showEditModal() {
      this.editModal = true;
    },
    addModalOK() {
      this.addModal = false;
    },
    addModalcancel() {
      this.addModal = false;
    },
    deteleModalOK() {
      this.deteleModal = false;
    },
    deteleModalcancel() {
      this.deteleModal = false;
    },
    editModalOK() {
      this.editModal = false;
    },
    editModalcancel() {
      this.editModal = false;
    },
  },
  computed: {
    fatherTitle(){
      this.data
      let arr= String(this.click).split('')
      arr.pop()
      if(arr.length>=3){
        return this.data[(arr[0]-1)*1].children[(arr[1]-1)*1].children[(arr[2]-1)*1].label
      }else if(arr.length>=2){
        return this.data[(arr[0]-1)*1].children[(arr[1]-1)*1].label
      }else if(arr.length>=1){
        return this.data[(arr[0]-1)*1].label
      }else{
        return false
      }
    }
  },
};
</script>

<style lang='scss'>
.organization {
  .content {
    width: 100%;
    height: 579.994px;
    background: white;
    > div:nth-of-type(1) {
      width: 268.8px;
      height: 579.994px;
      overflow-y: scroll;
      box-sizing: border-box;
      padding: 26.995px 33.005px;
      border-right: 0.998px solid #d8d8d8;
      .el-tree {
        background: white;
        .el-tree-node + .el-tree-node {
          margin-top: 15.36px;
        }
        .el-tree-node {
          .el-tree-node__content {
            margin-top: 15.36px;
            &.is-current {
            }
          }
          .el-tree-node__content {
            .el-tree-node__label {
              font-size: 15.994px;
            }
          }
          .el-tree-node__expand-icon {
            font-size: 20.006px;
          }
          &.is-current {
            > .el-tree-node__content {
              > .el-tree-node__label {
                color: #3498db;
              }
            }
          }
        }
      }
    }
    > div:nth-of-type(2) {
      padding: 30.01px 36px;
      p {
        margin-top: 24px;
      }
    }
  }
}
</style>