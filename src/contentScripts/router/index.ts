import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/user',
    name: 'user',
    children: [{
      path: 'course',
      name: 'course',
      meta: {
        title: '课程',
      },
      component: () => import('../views/CourseView.vue'),
    }, {
      path: 'index',
      name: 'home',
      meta: {
        title: '主页',
      },
      component: () => import('../views/HomeView.vue'),
    }],
  }],
},
)
