// eslint 规范，可百度搜索eslint配置说明
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "@vue/prettier"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    semi: 0, // 强制语句
    "space-before-function-paren": 0,
    "no-console": "off",
    quotes: 0,
    "vue/html-closing-bracket-newline": 0,
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "any",
          normal: "any",
          component: "any"
        },
        svg: "any",
        math: "always"
      }
    ],
    "vue/singleline-html-element-content-newline": 0,
    "vue/max-attributes-per-line": 0,
    "arrow-parens": "off",
    "no-extend-native": ["error", { exceptions: ["Date"] }]
  }
};
