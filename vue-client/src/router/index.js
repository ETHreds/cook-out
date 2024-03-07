import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'

import LandingView from '@/views/LandingView.vue'
import RecipesView from '@/views/RecipesView.vue'
import UserView from '@/views/UserView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: LandingView
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('../views/AuthView.vue')
    },    
    {
      path: '/meals/:mealId',
      name: 'mealDetails',
      component: RecipesView
    },
    {
      path: '/user',
      name: 'userview',
      component: UserView,
      meta: { requiresAuth: true }
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

// Navigation guard to check if route requires authentication
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (store.getters['auth/isAuthenticated']) {
      next(); 
    } else {
      next({ name: 'auth' }); 
    }
  } else {
    next(); 
  }
});

export default router
