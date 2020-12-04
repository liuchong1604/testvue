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
        <el-submenu index="5" class="mainItem">
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
          <el-breadcrumb-item v-for="(arr, i) in links" :key="i" :to="arr.href">
            {{ arr.text }}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <div class="content" style="margin-top:35px">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import MenuTree from "components/MenuTree";
import menus from "@/menu";
export default {
  components: {
    MenuTree
  },
  data() {
    return {
      isCollapse: false,
      iconData: "el-icon-d-arrow-left",
      menuMap: {}
    };
  },
  computed: {
    menuList() {
      return menus;
    },
    links() {
      const arrl = this.$route.path.split("/");
      console.log(this.menuMap);
      const item1 = this.menuMap[arrl[1]].name;
      let str = arrl[1] + "/" + arrl[2];
      const item2 = this.menuMap[arrl[1]][str];
      const arrs = [
        {
          text: item1,
          disable: true,
          href: "/"
        },
        {
          text: item2,
          disabled: true
        }
      ];
      return arrs;
    }
  },
  created() {
    // console.log(menus.length);
    for (let i = 0; i < menus.length; i++) {
      // console.log(menus[i]);
      const pl = menus[i].index.slice(1);
      console.log(pl);
      this.menuMap[pl] = { name: menus[i].name };
      //console.log(this.menuMap);
      // console.log(menus[i].children);
      if (typeof menus[i].children !== "undefined") {
        //console.log(menus[i].children.length);
        for (let j = 0; j < menus[i].children.length; j++) {
          //console.log(menus[i].children[j].index.slice(1));
          this.menuMap[pl][menus[i].children[j].index.slice(1)] =
            menus[i].children[j].name;
          //console.log(this.menuMap);
        }
      }
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
