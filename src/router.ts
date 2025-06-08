import { createRouter, createMemoryHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('./pages/RootPage.vue'),
  },
  {
    path: '/init',
    component: () => import('./pages/InitPage.vue'),
  },
  {
    path: '/home',
    component: () => import('./pages/HomePage.vue'),
  },
  {
    path: '/history',
    component: () => import('./pages/HistoryPage.vue'),
  },
  {
    path: '/questions',
    component: () => import('./pages/QuestionsPage.vue'),
  },
  {
    path: '/result',
    component: () => import('./pages/ResultPage.vue'),
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
