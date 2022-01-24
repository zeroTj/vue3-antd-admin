import { createRouter, createWebHashHistory } from 'vue-router';
import { defineAsyncComponent } from 'vue'
// /createWebHistory  history
//createWebHashHistory hash 模式
const routerHistory = createWebHashHistory();

const router = createRouter({
  history: routerHistory,  // history
  routes: [
    {
      path: "/",
      name: "index",
      hidden: true,
      // redirect: '/login',
      meta: {
        title: "首页"
      },
      component: defineAsyncComponent({
        loader: () => import('@/views/login/login'),
        delay: 200,
        timeout: 3000,
      })

    }, {
      path: '/login',
      name: 'login',
      meta: {
        title: "登陆"
      },
      component: defineAsyncComponent({
        loader: () => import('@/views/login/login'),
        delay: 200,
        timeout: 3000,
      })
    },
    {
      path: '/home',
      name: 'home',
      meta: {
        title: "首页"
      },
      component: defineAsyncComponent({
        loader: () => import('@/views/home/index'),
        delay: 200,
        timeout: 3000,
      })
    }
  ]
});

export default router;