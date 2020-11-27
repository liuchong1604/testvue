<template>
  <el-container style="height: 100%; border: 1px solid #eee">
    <el-aside width="auto" style="height:'100%';background-color: #545c64">
      <el-menu
        class="el-menu-vertical-demo"
        :default-active="$route.path"
        :collapse="isCollapse"
        background-color="#545c64"
        text-color="#fff"
        router
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
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item v-for="(arr, i) in links" :key="i">{{
            arr.text
          }}</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content">
          <router-view></router-view>
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
      iconData: "el-icon-d-arrow-left",
      menuMap: {},
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
              index: "/tableData2",
              icon: "",
              name: "菜单数据2",
              disable: false
            },
            {
              index: "/tableData",
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
      ]
    };
  },
  computed: {
    links() {
      let test = this.menuList;
      console.log(test);
      test.forEach(m => {
        const pl = m.index.slice(1);
        this.menuMap[pl] = { name: m.title };
        m.children.forEach(i => {
          this.menuMap[pl][i.index.slice(1)] = i.title;
        });
      });
      const arrl = this.$route.path.split("/");
      const item1 = this.menuMap[arrl[1]].name;
      const item2 = this.menuMap[arrl[1]][arrl[2]];
      const arrs = [
        {
          text: item1,
          disable: true,
          href: "#"
        },
        {
          text: item2,
          disabled: true
        }
      ];
      return arrs;
    }
  },
  methods: {
    changeIcon() {
      if (this.iconData == "el-icon-d-arrow-left") {
        this.iconData = "el-icon-d-arrow-right";
        this.isCollapse = true;
      } else {
        this.iconData = "el-icon-d-arrow-left";
        this.isCollapse = false;
      }
    },
    goBack() {
      console.log("go back");
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
