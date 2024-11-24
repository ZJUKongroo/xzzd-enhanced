import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/user',
    name: 'user',
    children: [{
      path: 'course',
      name: 'course',
      component: () => import('../views/CourseView.vue'),
    }, {
      path: 'index',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    }],
  }],
},
)
