import router from '@/router/router';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; // 进度条样式

const whiteList: string[] = ['/login']; // 不重定向白名单
let lUserBasic: any = localStorage.getItem('userBasic')
const userBasic: any = lUserBasic ? JSON.parse(unescape(lUserBasic)) : {};

router.beforeEach((to: any, from: any, next: any) => {
  NProgress.start()
  if (userBasic.isLogin) {
    next()
  } else {
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
