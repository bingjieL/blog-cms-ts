import router from '@/router/router';
import NProgress from 'nprogress'; // 进度条
import 'nprogress/nprogress.css'; // 进度条样式

const timeOut = 3 * 60 * 60 * 1000;

const whiteList: string[] = ['/login']; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start()
  let  LuserBasic: any =  localStorage.getItem('userBasic')
  let userBasic: any = JSON.parse(LuserBasic)
  let isLogin = userBasic ? userBasic.isLogin : false
  if (isLogin) {
    let time: any =  userBasic.time
    let timeStemp: any = (new Date()).valueOf()
    let sum = time + timeOut
    if (!time || timeStemp > sum ) {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next('/login')
        NProgress.done()
      }
    } else {
      next()
    } 
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
