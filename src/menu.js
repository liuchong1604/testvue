const menus = [
  {
    icon: "el-icon-location",
    name: "首页",
    index: "/index",
    disable: false,
    children: [
      {
        name: "统计",
        index: "/index/dashboard"
      }
    ]
  },
  {
    index: "/daohang1",
    icon: "el-icon-location",
    name: "导航一",
    disable: false,
    children: [
      {
        index: "/daohang1/1-1",
        icon: "",
        name: "选项一",
        disable: false
      },
      {
        index: "/daohang1/tableData2",
        icon: "",
        name: "菜单数据2",
        disable: false
      },
      {
        index: "/daohang1/tableData",
        icon: "",
        name: "菜单数据",
        disable: false
      },
      {
        index: "/daohang1/1-4",
        icon: "",
        name: "选项四",
        disable: false,
        children: [
          {
            index: "/1-4-1",
            icon: "",
            name: "选项4-1",
            disable: false
          }
        ]
      }
    ]
  },
  {
    index: "/2",
    icon: "el-icon-menu",
    name: "导航二",
    disable: false
  },
  {
    index: "/3",
    icon: "el-icon-document",
    name: "导航三",
    disable: true
  },
  {
    index: "/user",
    icon: "el-icon-setting",
    name: "个人设置",
    disable: false,
    children: [
      {
        index: "/user/settings",
        icon: "",
        name: "账户设置",
        disable: false
      }
    ]
  }
];

export default menus;
