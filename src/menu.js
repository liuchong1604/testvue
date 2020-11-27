const menus = [
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
];
export default menus;
