<template>
  <div id="profile">
    <h2>个人资料界面</h2>
    <el-row>
      <el-col :span="10" :offset="7">
        <el-card style="width:600px;">
          <div slot="header" class="clearfix">
            <span style="float:left;">账户与安全</span>
          </div>
          <el-row>
            <el-col :span="15" :offset="2">
              <el-form label-width="80px" :model="formLabelAlign">
                <el-form-item label="用户名">
                  <el-input
                    v-model="formLabelAlign.name"
                    class="inputDeep"
                    @click.native="handleClick"
                  ></el-input>
                </el-form-item>
                <el-form-item v-if="isShow">
                  <el-button type="primary" size="small">提交</el-button>
                  <el-button size="small" @click="handleCancel">取消</el-button>
                </el-form-item>
              </el-form>
              <el-form label-width="80px" :model="formLabelAlign">
                <el-form-item label="密 码">
                  <el-input
                    v-model="formLabelAlign.name"
                    class="inputDeep"
                    @click.native="handleClick"
                  ></el-input>
                </el-form-item>
                <el-form-item v-if="isShow">
                  <el-button type="primary" size="small">提交</el-button>
                  <el-button size="small" @click="handleCancel">取消</el-button>
                </el-form-item>
              </el-form>
              <el-form label-width="80px" :model="formLabelAlign">
                <el-form-item label="手机号">
                  <el-input
                    v-model="formLabelAlign.name"
                    class="inputDeep"
                    @click.native="handleClick"
                  ></el-input>
                </el-form-item>
                <el-form-item v-if="isShow">
                  <el-button type="primary" size="small">提交</el-button>
                  <el-button size="small" @click="handleCancel">取消</el-button>
                </el-form-item>
              </el-form>
              <!-- <el-form-item label="密码">
                  <el-input v-model="formLabelAlign.region"></el-input>
                </el-form-item>
                <el-form-item label="">
                  <el-input v-model="formLabelAlign.type"></el-input>
                </el-form-item> -->
            </el-col>
          </el-row>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data: () => ({
    formLabelAlign: {
      name: "",
      region: "",
      type: ""
    },
    isShow: false
  }),
  methods: {
    handleClick() {
      this.isShow = true;
    },
    handleCancel() {
      this.isShow = false;
    }
  }
};
</script>

<style scoped>
#profile {
  text-align: center;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
.inputDeep >>> .el-input__inner {
  border-top-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-bottom-width: 1px;
}
</style>
