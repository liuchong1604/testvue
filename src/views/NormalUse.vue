<template>
  <!-- 不使用递归，把所有子菜单加载出来  -->
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="auto" style="height:'100%';background-color: #545c64">
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        collapse-transition="false"
        @open="handleOpen"
        @close="handleClose"
      >
        <!-- <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-location" style="visibility:hidden;"></i>
            <span slot="title">测试平台</span>
          </template>
        </el-submenu> -->
        <el-menu-item index="5">
          <i class="el-icon-menu" style="visibility:hidden;"></i>
          <span slot="title">测试平台</span>
        </el-menu-item>
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
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
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      isCollapse: false,
      tableData: Array(20).fill(item),
      iconData: "el-icon-d-arrow-left"
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

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.el-menu-item {
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
</style>
