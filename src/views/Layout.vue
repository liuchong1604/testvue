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
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
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
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      isCollapse: false,
      tableData: Array(20).fill(item),
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
              name: "选项三",
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
      ]
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

/* .el-menu-item {
  background-color: rgb(238, 241, 246);
}
.el-button--info {
  color: #fff;
  background-color: #b3c0d1;
  border-color: #b3c0d1;
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotateZ(-90deg);
}

.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(0deg);
  -ms-transform: rotate(0deg);
  transform: rotateZ(0deg);
} */
</style>
