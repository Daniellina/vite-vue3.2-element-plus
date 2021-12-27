import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/home',
      component: () => import('../views/Home.vue'),
      children: [
        {
          path: '/onePage',
          name: 'onePage',
          component: () => import('../components/FirstPage.vue')
        },
        {
          path: '/secondPage',
          name: 'secondPage',
          component: () => import('../components/SecondPage.vue')
        }
      ],
    }
  ]
})