export let NavList: any[] = [
    {
      path: '/banner',
      title: 'Banner',
      icon: 'iconfont icon-banner',
      children: [
        { path: '/banner/list', title: 'Banner List' }
      ]
    },
    {
      path: '/blog',
      title: 'Blog',
      icon: 'iconfont icon-huanyingqiapian',
      children: [
        { path: '/blog/list', title: 'Blog List' }
      ]
    },
    {
      path: '/music',
      title: 'Music',
      icon: 'iconfont icon-yinle',
      children: [
        { path: '/music/list', title: 'Music List' }
      ]
    },
    {
      path: '/book',
      title: 'Book',
      name: 'Book',
      icon: 'iconfont icon-shudan',
      redirect: '/book/list',
      children: [
        { path: '/book/list', title: 'Book List' }
      ]
    },
    {
      path: '/hotSwiper',
      title: 'HotSwiper',
      icon: 'iconfont icon-gongzuojingli',
      children: [
        { path: '/hotSwiper/list', title: 'HotSwiper List' }
      ]
    },
    {
      path: '/sheet',
      title: 'MusicSheet',
      icon: 'iconfont icon-yinle1',
      children: [
        { path: '/musicSheet/list', title: 'musicSheet List' }
      ]
    },
    {
      path: '/setting',
      title: 'Setting',
      icon: 'iconfont icon-huanyingqiapian',
      children: [
        { path: '/setting/blogTypeList', title: 'BlogType List' }
      ]
    }
  ] 