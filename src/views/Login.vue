<template>
  <div class="bg" style="height: 757px;">
    <el-row :gutter="20">
      <el-col :span="20" :offset="2">
        <div style="margin: 0 10%;width: 1020px;margin: 60px auto 0 auto;">
          <div class="invoice" style="height:100px;">
            <div class="invoice-logo" style="margin-bottom: 0;">
              <div class="invoice-logo-space" style="float:left;">
                <img src="../assets/img/logo.png" height="50" alt="" />
              </div>
              <div class="meta" style="float:right!important;">
                <p style="font-family: '微软雅黑';">
                  欢迎使用
                  <img
                    src="../assets/img/e7.png"
                    alt=""
                    style="height: 30px;"
                  />
                  管理平台
                  <br />
                  <span class="muted" style="float:right!important;">
                    <label style="visibility: hidden;"></label>
                    <label style="visibility: hidden;"></label>
                    <label style="visibility: hidden;"></label>
                    <label style="visibility: hidden;"></label>
                    <label
                      class="bold font-blue-dark"
                      style="color:deepskyblue;"
                    >
                      【
                    </label>
                    <label
                      class="bold font-green-haze"
                      style="color:deepskyblue;"
                      >集团版</label
                    >
                    <label
                      class="bold font-blue-dark"
                      style="color:deepskyblue;"
                      >/</label
                    >
                    <label
                      class="bold font-green-haze"
                      style="color:deepskyblue;"
                      >平台</label
                    >
                    <label
                      class="bold font-blue-dark"
                      style="color:deepskyblue;"
                      >】</label
                    >
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="18" :offset="3">
        <el-row
          style="overflow: hidden;border:10px solid rgba(255,255,255,0.2);box-sizing:border-box;"
        >
          <el-col :span="15">
            <el-carousel
              :interval="5000"
              arrow="always"
              ref="carousel"
              height="462px"
            >
              <el-carousel-item v-for="item in imgs" :key="item.url">
                <img :src="item.url" style="width:100%;height:100%;" />
              </el-carousel-item>
            </el-carousel>
          </el-col>
          <el-col :span="9">
            <el-card :body-style="{ height: '420px' }">
              <el-form
                v-model="dynamicValidateForm"
                ref="dynamicValidateForm"
                label-width="0px"
                class="demo-dynamic"
              >
                <el-menu
                  default-active="1"
                  class="el-menu-horizontal-demo"
                  mode="horizontal"
                  :collapse-transition="isCollapse"
                  v-if="isInput"
                >
                  <el-menu-item index="1" @click="isPhone = true">
                    免密登录
                  </el-menu-item>
                  <el-menu-item index="2" @click="isPhone = false">
                    用户登录
                  </el-menu-item>
                </el-menu>
                <div style="margin-top:35px" v-show="isPhone && isInput">
                  <el-form-item prop="name">
                    <el-input
                      placeholder="请输入手机号"
                      v-model="phone1"
                      class="input-with-select"
                      style="background-color:#FFF!important;"
                    >
                      <el-select
                        v-model="select"
                        slot="prepend"
                        placeholder="+86"
                        style="width:80px;"
                      >
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                      </el-select>
                    </el-input>
                  </el-form-item>
                  <el-form-item prop="name">
                    <el-row>
                      <el-col :span="16">
                        <el-input placeholder="请输入验证码" v-model="code">
                        </el-input>
                      </el-col>
                      <el-col :span="4">
                        <el-button
                          type="primary"
                          @click="countDown"
                          :disabled="disabled"
                          v-text="content"
                          style="width:120px;"
                        >
                        </el-button>
                      </el-col>
                    </el-row>
                  </el-form-item>
                  <div style="margin-top:24px">
                    <el-checkbox v-model="checked">记住我 </el-checkbox>
                  </div>
                  <div style="margin-top:24px">
                    <el-button
                      type="primary"
                      style="width:350px;"
                      @click="handleLoginByPhone"
                    >
                      注册/登录
                    </el-button>
                  </div>
                </div>
                <div style="margin-top:35px" v-show="!isPhone && isInput">
                  <el-form-item prop="name">
                    <el-input
                      v-model="phoneOrUsername"
                      class="inputDeep"
                      placeholder="手机号或用户名"
                    ></el-input>
                  </el-form-item>
                  <el-form-item prop="name">
                    <el-input
                      v-model="password"
                      class="inputDeep"
                      placeholder="密码"
                      show-password
                    ></el-input>
                  </el-form-item>
                  <div style="margin-top:24px;text-align:right;font-size:13px;">
                    <a href="#" style="text-decoration:none;">
                      忘记密码？
                    </a>
                  </div>
                  <div style="margin-top:24px">
                    <el-button
                      type="primary"
                      style="width:350px;"
                      @click="handleLoginByPwd"
                    >
                      登录
                    </el-button>
                  </div>
                </div>
                <div style="margin-top:24px" v-if="isInput">
                  <div style="color:grey;font-size:13px;text-align:left;">
                    未注册手机验证后自动登录，注册即代表同意
                    <a
                      href="#"
                      style="text-decoration:none;"
                      @click.prevent="agreement = true"
                    >
                      《知乎协议》&nbsp;&nbsp;
                    </a>
                    <a
                      href="#"
                      style="text-decoration:none;"
                      @click.prevent="
                        隐私;
                        privacy = true;
                      "
                    >
                      《隐私保护指引》
                    </a>
                  </div>
                  <el-dialog
                    title="知乎协议"
                    :visible.sync="agreement"
                    width="30%"
                    :before-close="handleClose"
                  >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="agreement = false">取 消</el-button>
                      <el-button type="primary" @click="agreement = false">
                        确 定
                      </el-button>
                    </span>
                  </el-dialog>
                  <el-dialog
                    title="隐私保护指引"
                    :visible.sync="privacy"
                    width="30%"
                    :before-close="handleClose"
                  >
                    <span>这是一段信息</span>
                    <span slot="footer" class="dialog-footer">
                      <el-button @click="privacy = false">取 消</el-button>
                      <el-button type="primary" @click="privacy = false">
                        确 定
                      </el-button>
                    </span>
                  </el-dialog>
                </div>
                <div class="ercode_tab swicth-ercode" v-if="isInput">
                  <svg
                    width="52"
                    height="52"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="currentColor"
                    @click="switchInput"
                  >
                    <defs>
                      <path
                        id="id-3938311804-a"
                        d="M0 0h48a4 4 0 0 1 4 4v48L0 0z"
                      ></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <mask id="id-3938311804-b" fill="#fff">
                        <use xlink:href="#id-3938311804-a"></use>
                      </mask>
                      <use fill="#0084FF" xlink:href="#id-3938311804-a"></use>
                      <image
                        width="52"
                        height="52"
                        mask="url(#id-3938311804-b)"
                        xlink:href="data:image/png;base64,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"
                      ></image>
                    </g>
                  </svg>
                </div>
                <div class="ercode_tab switch-input" v-else>
                  <svg
                    width="52"
                    height="52"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    fill="currentColor"
                    @click="switchInput"
                  >
                    <defs>
                      <path
                        id="id-14580708-a"
                        d="M0 0h48a4 4 0 0 1 4 4v48L0 0z"
                      ></path>
                    </defs>
                    <g fill="none" fill-rule="evenodd">
                      <mask id="id-14580708-b" fill="#fff">
                        <use xlink:href="#id-14580708-a"></use>
                      </mask>
                      <use fill="#0084FF" xlink:href="#id-14580708-a"></use>
                      <path
                        fill="#FFF"
                        d="M22.125 4h13.75A4.125 4.125 0 0 1 40 8.125v27.75A4.125 4.125 0 0 1 35.875 40h-13.75A4.125 4.125 0 0 1 18 35.875V8.125A4.125 4.125 0 0 1 22.125 4zm6.938 34.222c1.139 0 2.062-.945 2.062-2.11 0-1.167-.923-2.112-2.063-2.112-1.139 0-2.062.945-2.062 2.111 0 1.166.923 2.111 2.063 2.111zM21 8.333v24h16v-24H21z"
                        mask="url(#id-14580708-b)"
                      ></path>
                      <g mask="url(#id-14580708-b)">
                        <path
                          fill="#FFF"
                          d="M46.996 15.482L39 19.064l-7.996-3.582A1.6 1.6 0 0 1 32.6 14h12.8a1.6 1.6 0 0 1 1.596 1.482zM47 16.646V24.4a1.6 1.6 0 0 1-1.6 1.6H32.6a1.6 1.6 0 0 1-1.6-1.6v-7.754l8 3.584 8-3.584z"
                        ></path>
                        <path
                          fill="#0084FF"
                          d="M31 15.483v1.17l8 3.577 8-3.577v-1.17l-8 3.581z"
                          fill-rule="nonzero"
                        ></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div v-show="isErweima" style="text-align:center;">
                  <div class="Qrcode-title">扫码登录</div>
                  <div
                    class="qrcode"
                    ref="qrCodeUrl"
                    style="width: 200px; margin: 0 auto auto auto; border: 6px solid rgb(255, 255, 255);"
                  ></div>
                  <p>
                    打开
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      知乎APP
                    </a>
                  </p>
                  <p>在「我的」页面右上角打开扫一扫</p>
                </div>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import QRCode from "qrcodejs2";
import { sendSms } from "../common/common";
import { findUserByPhoneOrName } from "../common/user";
export default {
  name: "Login",
  data: () => ({
    isInput: true, // 是否是表单输入页面
    dynamicValidateForm: true,
    isCollapse: false, // 是否开启menu折叠动画
    isErweima: false, // 是否显示二维码
    count: 0, // 控制二维码只加载一次
    isPhone: true,
    imgs: [
      {
        url: require("../assets/img/cloud.jpg"),
        link: "/content1"
      },
      {
        url: require("../assets/img/join.jpg"),
        link: "/content1"
      },
      {
        url: require("../assets/img/moreSystem.jpg"),
        link: "/content1"
      },
      {
        url: require("../assets/img/platom.jpg"),
        link: "/content1"
      }
    ],
    phone1: "",
    code: "",
    password: "",
    phoneOrUsername: "",
    agreement: false,
    privacy: false,
    select: "",
    checked: "",
    name: "",
    content: "点击获取",
    content1: "登录",
    disabled: false,
    totalTime: 10
  }),
  methods: {
    switchInput() {
      this.isInput = !this.isInput;
      this.isErweima = !this.isErweima;
      console.log(this.isInput);
      console.log(this.isErweima);
      if (this.isErweima && this.count === 0) {
        this.createQrCode();
        this.count++;
      }
    },
    createQrCode() {
      new QRCode(this.$refs.qrCodeUrl, {
        text: "xxxx", //需要转换为二维码的内容
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    },
    handleClose(done) {
      done();
    },
    countDown() {
      const that = this;
      this.disabled = true;
      this.content = this.totalTime + "s后重试";
      const data = {
        phone: this.phone1
      };
      sendSms(this.$qs.stringify(data)).then(response => {
        console.log(response);
        if (response.status == 204) {
          this.$message({
            showClose: true,
            message: "发送成功",
            type: "success"
          });
        } else {
          this.$message({
            showClose: true,
            message: "发送失败，请重新尝试",
            type: "error"
          });
          this.content = "重新获取";
          this.totalTime = 60;
          this.disabled = false;
        }
      });

      that.cloak = setInterval(function() {
        // 定时器里面的this不是指向form组件
        that.totalTime--;
        if (that.totalTime > 0) {
          that.content = that.totalTime + "s后重试";
        }
        if (that.totalTime <= 0) {
          window.clearInterval(that.cloak); // 当倒计时小于等于0时清除定时器
          that.content = "重新获取";
          that.totalTime = 60;
          that.disabled = false; // 这里重新开启
        }
      }, 1000);
    },
    handleLoginByPhone() {
      // console.log("正在处理登录");
      const formData = {
        mobileno: this.phone1,
        code: this.code
      };
      this.$store
        .dispatch("Register", this.$qs.stringify(formData))
        .then(() => {
          this.$router.push({ path: "/" });
        })
        .catch(() => {
          console.log("出错了");
        });
    },
    handleLoginByPwd() {
      console.log("密码登录");
      const formData = {
        mobileno: this.phoneOrUsername,
        username: this.phoneOrUsername
      };
      findUserByPhoneOrName(this.$qs.stringify(formData))
        .then(resp => {
          console.log(resp);
          if (resp.data.flag == 1) {
            // flag == 1是用户名
            const formData1 = {
              username: this.phoneOrUsername,
              pwd: this.password
            };
            this.$store
              .dispatch("Login", this.$qs.stringify(formData1))
              .then(() => {
                this.$message({
                  showClose: true,
                  message: "登录成功",
                  type: "success"
                });
                this.$router.push({ path: "/" });
              })
              .catch(() => {
                console.log("出错了");
              });
          } else {
            // flag==2是手机号
            const formData2 = {
              mobileno: this.phoneOrUsername,
              pwd: this.password
            };
            this.$store
              .dispatch("Login", this.$qs.stringify(formData2))
              .then(() => {
                this.$message({
                  showClose: true,
                  message: "登录成功",
                  type: "success"
                });
                this.$router.push({ path: "/" });
              })
              .catch(() => {
                console.log("出错了");
              });
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style scoped>
.bg {
  background: linear-gradient(to top right, #2c324c, #9c877c);
  padding-right: 0px !important;
  overflow: hidden;
}
/* div {
  display: block;
} */
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.change {
  position: absolute;
  right: 10px;
  top: 20px;
  cursor: pointer;
  z-index: 1;
}
.ercode_tab {
  position: absolute;
  width: 52px;
  height: 52px;
  top: 0;
  right: 0;
}
.Qrcode-title {
  font-size: 24px;
  color: #1a1a1a;
  line-height: 33px;
  margin-bottom: 30px;
  margin-top: 30px;
}
.inputDeep >>> .el-input__inner {
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
</style>
