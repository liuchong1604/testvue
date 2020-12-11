<template>
  <div>
    <h2>欢迎光临</h2>
    <h5>{{ message }}</h5>
    <div
      class="qrcode"
      ref="qrCodeUrl"
      style="width: 100px; margin: 0px auto; border: 6px solid rgb(255, 255, 255);"
    ></div>
  </div>
</template>

<script>
// import { testabc } from "common/test";
import QRCode from "qrcodejs2";
export default {
  name: "DashBoard",
  data: () => ({
    message: ""
  }),
  created() {
    // testabc()
    //   .then(resp => {
    //     console.log(resp);
    //     this.message = resp.data.message;
    //     this.$message({
    //       message: "恭喜你，这是一条成功消息",
    //       type: "success"
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //     this.$message({
    //       message: "fail",
    //       type: "error"
    //     });
    //   });
  },
  methods: {
    createQrCode() {
      new QRCode(this.$refs.qrCodeUrl, {
        text: "xxxx", //需要转换为二维码的内容
        width: 100,
        height: 100,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
    }
  },
  mounted() {
    this.createQrCode();
  }
};
</script>

<style type="text/less" lang="less" scoped></style>
