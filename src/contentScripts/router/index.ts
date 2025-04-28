import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/user',
      name: 'user',
      children: [{
        path: 'index',
        name: 'home',
        meta: {
          title: '主页',
        },
        component: () => import('../views/HomeView.vue'),
      }, {
        path: 'course',
        name: 'course',
        meta: {
          title: '课程',
        },
        component: () => import('../views/CourseView.vue'),
      }],
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于',
      },
      component: () => import('../views/Footer/AboutView.vue'),
    },
    {
      path: '/license',
      name: 'license',
      meta: {
        title: '许可',
      },
      component: () => import('../views/Footer/LicenseView.vue'),
    },
    {
      path: '/term-of-use',
      name: 'Term of Use',
      meta: {
        title: '使用条款',
      },
      component: () => import('../views/Footer/TermOfUseView.vue'),
    },
  ],
},
)
