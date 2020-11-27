<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="auto" style="height:'100%';background-color: #545c64">
      <el-menu
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location" style="visibility:hidden;"></i>
            <span slot="title">测试平台</span>
          </template>
        </el-submenu>
        <menu-tree :menuData="menuList" :isCollapse="isCollapse"></menu-tree>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="font-size: 12px">
        <el-row type="flex" class="row-bg" justify="space-between">
          <el-col :span="20" style="border: 1px solid transparent;">
            <!--设置透明边框占位，防止被挤走-->
            <el-button type="info" :icon="iconData" circle @click="changeIcon">
            </el-button>
          </el-col>
          <el-col :span="2">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            王小虎
          </el-col>
        </el-row>
      </el-header>

      <el-main>
        <el-table
          ref="multipleTable"
          :data="
            tableData.slice(
              (queryInfo.pageNo - 1) * queryInfo.pageSize,
              queryInfo.pageNo * queryInfo.pageSize
            )
          "
          tooltip-effect="dark"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55"> </el-table-column>
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" show-overflow-tooltip>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pageView"
          v-if="queryInfo.paginationShow"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="queryInfo.pageNo"
          :page-sizes="[5, 10, 15, 20]"
          :page-size.sync="queryInfo.pageSize"
          layout="total,sizes,prev,pager,next"
          :pager-count="11"
          :total="queryInfo.totalCount"
        >
        </el-pagination>
        <div style="margin-top: 20px">
          <el-button @click="toggleSelection([tableData[1], tableData[2]])"
            >切换第二、第三行的选中状态</el-button
          >
          <el-button @click="toggleSelection()">取消选择</el-button>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuTree from "components/MenuTree";
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      isCollapse: false,
      multipleSelection: [],
      tableData: [
        {
          date: "2016-05-03",
          name: "1王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "2王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "3王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "4王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "5王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "6王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "7王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "8王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "9王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "10王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "11王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "12王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "13王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "14王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "15王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      iconData: "el-icon-d-arrow-left",
      menuList: [
        {
          index: "1",
          icon: "el-icon-location",
          name: "导航一",
          disable: false,
          children: [
            {
              index: "1-1",
              icon: "",
              name: "选项一",
              disable: false
            },
            {
              index: "1-2",
              icon: "",
              name: "选项二",
              disable: false
            },
            {
              index: "1-3",
              icon: "",
              name: "菜单数据",
              disable: false
            },
            {
              index: "1-4",
              icon: "",
              name: "选项四",
              disable: false,
              children: [
                {
                  index: "1-4-1",
                  icon: "",
                  name: "选项4-1",
                  disable: false
                }
              ]
            }
          ]
        },
        {
          index: "2",
          icon: "el-icon-menu",
          name: "导航二",
          disable: false
        },
        {
          index: "3",
          icon: "el-icon-document",
          name: "导航三",
          disable: true
        },
        {
          index: "4",
          icon: "el-icon-setting",
          name: "导航四",
          disable: false
        }
      ],
      queryInfo: {
        pageSize: 10,
        pageNo: 1,
        paginationShow: true,
        totalCount: 15
      }
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    changeIcon() {
      if (this.iconData == "el-icon-d-arrow-left") {
        this.iconData = "el-icon-d-arrow-right";
        this.isCollapse = true;
      } else {
        this.iconData = "el-icon-d-arrow-left";
        this.isCollapse = false;
      }
    },
    handleSizeChange() {
      console.log(this.queryInfo.pageNo, this.queryInfo.pageSize);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    clearDate() {
      this.$refs.multipleTable.clearSelection();
      this.multipleSelection = [];
      this.selectNum = [];
    },
    // 选择条数
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-main {
  height: 700px;
}
/* 控制pagination组件居中 */
.pageView {
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>
