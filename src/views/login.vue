<template>
  <div class="login" @keydown.enter="handleSubmit">
    <div class="login-con">
      <el-card>
        <div slot="header">
          <i class="iconfont icon-huanyingqiapian" style="font-size: 15px;"/>欢迎登录
        </div>
        <div class="form-con">
          <el-form ref="loginForm" :model="form" :rules="rules">
            <el-form-item prop="userName">
              <el-input v-model="form.userName" placeholder="请输入用户名">
                <template slot="prepend">
                  <i class="iconfont icon-wode"/>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.password" placeholder="请输入密码">
                <template slot="prepend">
                  <i class="iconfont icon-mima-"/>
                </template>
              </el-input>
            </el-form-item>
            <el-button
              type="primary"
              style="width: 100%"
              :loading="loginLoading"
              @click="handleSubmit"
            >登录</el-button>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { LoginApi } from "@/server/login";

interface FormType {
  userName: any;
  password: any;
}

@Component({})
export default class Login extends Vue {
  form: FormType = {
    userName: null,
    password: null
  };
  shopData: any[] = [];
  loginLoading: boolean = false;
  rules: any = {
    userName: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
    password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
  };
  @Mutation setBasicInfo: any;
  handleSubmit() {
    (this.$refs.loginForm as any).validate((valid: boolean) => {
      if (valid) {
        this.loginLoading = true;
        LoginApi(this.form).then((res: any) => {
          this.loginLoading = false;
          if (res.code === 200) {
            let { userName } = res.data;
            let redirect: any = this.$route.query.redirect;
            let time = (new Date()).valueOf()
            window.localStorage.setItem(
              "userBasic",
              JSON.stringify({ userName, isLogin: true ,time})
            );
            this.$message.success("登录成功！");
            this.setBasicInfo({ userName });
            if (redirect && redirect != "/login") {
              this.$router.push(redirect);
            } else {
              this.$router.push("/");
            }
          }
        });
      }
    });
  }
  mounted() {
    localStorage.removeItem("userBasic");
  }
}
</script>
<style lang="scss">
@import "@/assets/style/login.scss";
</style>

