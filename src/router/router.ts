




import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/Layout.vue'

Vue.use(Router)


const BannerList = (r: any) => require.ensure([], () => r(require('@/views/banner/bannerList.vue')));
const BannerEdit = (r: any) => require.ensure([], () => r(require('@/views/banner/bannerEdit.vue')));
const BlogList = (r: any) => require.ensure([], () => r(require('@/views/blog/blogList.vue')));
const BlogEdit = (r: any) => require.ensure([], () => r(require('@/views/blog/blogEdit.vue')));
const MusicList = (r: any) => require.ensure([], () => r(require('@/views/music/musicList.vue')));
const MusicEdit = (r: any) => require.ensure([], () => r(require('@/views/music/musicEdit.vue')));
const BookList = (r: any) => require.ensure([], () => r(require('@/views/book/bookList.vue')));
const BookEdit = (r: any) => require.ensure([], () => r(require('@/views/book/bookEdit.vue')));
const HotSwiperList = (r: any) => require.ensure([], () => r(require('@/views/hotSwiper/hotSwiperList.vue')));
const HotSwiperEdit = (r: any) => require.ensure([], () => r(require('@/views/hotSwiper/hotSwiperEdit.vue')));
const MusicSheetList = (r: any) => require.ensure([], () => r(require('@/views/musicSheet/musicSheetList.vue')));
const MusicSheetEdit = (r: any) => require.ensure([], () => r(require('@/views/musicSheet/musicSheetEdit.vue')));
const BlogTypeList = (r: any) => require.ensure([], () => r(require('@/views/setting/blogType/blogTypeList.vue')));
const BlogTypeEdit = (r: any) => require.ensure([], () => r(require('@/views/setting/blogType/blogTypeEdit.vue')));


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/banner'
    },
    {
      path: '/login',
      component: () => import('@/views/login.vue'),
    },
    {
      path: '/banner',
      name: 'Banner',
      component: Layout,
      redirect: '/banner/list',
      children: [
        { path: '/banner/list', name: 'Banner list', component: BannerList },
        { path: '/banner/edit', name: 'Banner edit', component: BannerEdit },
      ]
    },
    {
      path: '/blog',
      name: 'Blog',
      component: Layout,
      redirect: '/blog/list',
      children: [
        { path: '/list', name: 'Blog list', component: BlogList},
        { path: '/edit', name: 'Blog edit', component: BlogEdit},
      ]
    },
    {
      path: '/music',
      name: 'Music',
      component: Layout,
      redirect: '/music/list',
      children: [
        { path: '/music/list', name: 'Music list', component: MusicList},
        { path: '/music/edit', name: 'Music edit', component: MusicEdit},
      ]
    },
    {
      path: '/book',
      name: 'Book',
      component: Layout,
      redirect: '/book/list',
      children: [
        { path: '/book/list', name: 'Book list', component: BookList },
        { path: '/book/edit', name: 'Book edit', component: BookEdit },
      ]
    },
    {
      path: '/hotSwiper',
      name: 'HotSwiper',
      component: Layout,
      redirect: '/hotSwiper/list',
      children: [
        { path: '/hotSwiper/list', name: 'HotSwiper list', component: HotSwiperList},
        { path: '/hotSwiper/edit', name: 'HotSwiper edit', component: HotSwiperEdit},
      ]
    },
    {
      path: '/sheet',
      name: 'MusicSheet',
      component: Layout,
      redirect: '/musicSheet/list',
      children: [
        { path: '/musicSheet/list', name: 'musicSheet list', component: MusicSheetList},
        { path: '/musicSheet/edit', name: 'musicSheet edit', component: MusicSheetEdit},
      ]
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Layout,
      redirect: '/setting/blogTypeList',
      children: [
        { path: '/setting/blogTypeList', name: 'BlogType list', component: BlogTypeList },
        { path: '/setting/blogTypeEdit', name: 'BlogType edit', component: BlogTypeEdit },
      ]
    },
    { 
      path: '/*',
      component: () => import('@/views/404.vue'),
    }
  ]
})

