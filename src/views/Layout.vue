<template>
  <el-container class="main-layout">
    <el-aside class="main-layout-nav" :width="nav.width">
      <div class="logo">
        <h1>{{nav.collapsed ? 'Jay' : 'Jay Blog'}}</h1>
      </div>
      <el-menu
        :collapse="nav.collapsed"
        :default-active="defaultPath"
        unique-opened
        router
        class="menu"
      >
        <template v-for="(item, index) in navList">
          <el-menu-item
            v-if="item.children.length == 1"
            :index="item.children[0].path"
            :key="index"
          >
            <i :class="item.icon"/>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
          <el-submenu v-else :key="index"  :index="item.path">
            <template slot="title">
              <i :class="item.icon"/>
              <span slot="title">{{ item.title }}</span>
            </template>
            <template v-for="child in item.children">
              <el-menu-item
                v-if="!child.hidden"
                :key="child.title"
                :index="child.path"
              >{{ child.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-aside>
    <el-container style="overflow-y: auto;">
      <el-header height="64px">
        <el-row>
          <el-col :span="12" style="padding-top: 20px;">
            <i :class="navIconCls" @click="collapse"></i>
          </el-col>
          <el-col :span="12" style="padding-top: 20px; text-align: right;">
            <span class="nav-user">
              您好，{{userName}}
              <i
                class="iconfont icon-tuichudenglu"
                style="color: #409EFF;font-size: 20px;cursor: pointer"
                title="退出"
                @click="handleLogout"
              />
            </span>
          </el-col>
        </el-row>
      </el-header>
      <main class="main-layout-content">
        <aside class="nav-link">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item
              v-for="(item, index) in $route.matched"
              :key="index"
              :to="{ path: item.path }"
            >{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
        </aside>
        <div class="main">
          <router-view></router-view>
        </div>
      </main>
    </el-container>
  </el-container>
</template>

<script lang='ts'>
import { Component, Vue, Watch} from 'vue-property-decorator';
import { State, Mutation} from 'vuex-class';
import { NavList } from '@/utils/navListjson'

interface NavType{
  width: string,
  collapsed: boolean
}

@Component
export default class Layout extends Vue {

  defaultPath: string =  ""
  navList: Array<object> = NavList 
  nav:NavType =  {
    width: "250px",
    collapsed: false
  }
  get navIconCls() {
    return [
      "nav-icon iconfont",
      this.nav.collapsed ? "icon-menufold-right" : "icon-menufold"
    ];
  }
  @State(state => state.UserBasic.userName) userName: any
  @Watch('$route.path')
  pathChange(val: any, oldVal: any) {
    this.changeDefaultPath(val.split("/"));
  }
  @Mutation setBasicInfo: any
  @Mutation clearBasicInfo: any
  created() {
    // this.navList = this.$router.options.routes;
    let _userBasic = window.localStorage.getItem("userBasic");
    let userBasic = _userBasic ? JSON.parse(_userBasic) : {};
    this.setBasicInfo(userBasic);
    this.changeDefaultPath(this.$route.path.split("/"));
    console.log('--->  store', this.$store.state)
  }
  collapse() {
    this.nav.collapsed = !this.nav.collapsed;
    this.nav.width = this.nav.collapsed ? "64px" : "250px";
  }
  changeDefaultPath(routerArr: Array<any>) {
    let defaultPath = "";
    if (routerArr.includes("banner")) {
      defaultPath = "/banner/list";
    } else if (routerArr.includes("music")) {
      defaultPath = "/music/list";
    } else if (routerArr.includes("blog")) {
      defaultPath = "/blog/list";
    } else if (routerArr.includes("musicSheet")) {
      defaultPath = "/musicSheet/list";
    } else if (routerArr.includes("hotSwiper")) {
      defaultPath = "/hotSwiper/list";
    } else if (routerArr.includes("book")) {
      defaultPath = "/book/list";
    } else if (
      routerArr.includes("blogTypeList") ||
      routerArr.includes("blogTypeEdit")
    ) {
      defaultPath = "/setting/blogTypeList";
    }
    this.defaultPath = defaultPath;
  }
  handleLogout() {
    this.$confirm("用户将退出登录,您确退出登录?", "退出登录", {
      confirmButtonText: "确定",
      cancelButtonText: "取消",
      type: "warning"
    }).then(() => {
      this.clearBasicInfo();
      this.$router.push("/login");
    });
  }
};
</script>
<style lang="scss">
  @import "@/assets/style/Layout.scss";
</style>
<style lang="scss">
.main-layout {
  .main-layout-nav {
    overflow-x: hidden !important;
  }
  .main-layout-content {
    padding: 20px;
    flex: 1;
    .nav-link {
      padding: 10px 0 15px 15px;
      background: #f0f2f5;
    }
    .main {
      padding: 30px 30px 50px 30px !important;
      .main-header {
        display: flex;
        justify-content: space-between;
        h3 {
          font-weight: 400;
        }
        .el-button {
          height: 36px;
          margin-top: 12px;
        }
      }
    }
  }
}
</style>
