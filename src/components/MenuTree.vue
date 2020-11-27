<template>
  <div>
    <template v-for="menu in this.menuData">
      <el-submenu
        :key="menu.index"
        :index="menu.index"
        v-if="menu.children"
        :disabled="menu.disable"
      >
        <span slot="title" v-if="menu.index == '1-4'">{{ menu.name }}</span>
        <template slot="title" v-else>
          <i :class="menu.icon"></i>
          <span slot="title">
            {{ menu.name }}
          </span>
        </template>
        <menu-tree :menuData="menu.children"></menu-tree>
      </el-submenu>
      <el-menu-item
        :key="menu.index"
        :index="menu.index"
        v-else
        :disabled="menu.disable"
      >
        <i :class="menu.icon"></i>
        <span slot="title">{{ menu.name }}</span>
      </el-menu-item>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    menuData: {
      type: Array
    }
  },
  name: "MenuTree",
  methods: {
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

.el-submenu > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(-90deg);
  -ms-transform: rotate(-90deg);
  transform: rotateZ(-90deg);
}
/*菜单展开*/
.el-submenu.is-opened > .el-submenu__title .el-submenu__icon-arrow {
  -webkit-transform: rotateZ(0deg);
  -ms-transform: rotate(0deg);
  transform: rotateZ(0deg);
}

.el-menu--collapse .el-submenu__title span {
  height: 0;
  width: 0;
  overflow: hidden;
  visibility: hidden;
  display: inline-block;
}
.el-menu--collapse .el-submenu__icon-arrow {
  display: none;
}
</style>
