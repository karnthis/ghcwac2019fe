import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
			name: 'home',
			meta: { 
				requireAuth: true
			},
      component: Home
    },
    // {
    //   path: '/about',
		// 	name: 'about',
		// 	meta: { 
		// 		requireAuth: true
		// 	},
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		// },
		{
      path: '/login',
			name: 'login',
			meta: { 
				requireAuth: false
			},
      component: () => import('./views/Login.vue')
		},
		{
      path: '/inventory',
			name: 'inventory',
			meta: { 
				requireAuth: true
			},
      component: () => import('./views/Inventory.vue')
		},
		{
      path: '/referals',
			name: 'referals',
			meta: { 
				requireAuth: true
			},
      component: () => import('./views/Referrals.vue')
		},
		{
      path: '/classes',
			name: 'classes',
			meta: { 
				requireAuth: true
			},
      component: () => import('./views/Classes.vue')
		},
		{
      path: '/myorg',
			name: 'myorg',
			meta: { 
				requireAuth: true
			},
      component: () => import('./views/MyOrg.vue')
		},
		{
      path: '/eligibility',
			name: 'eligibility',
			meta: { 
				requireAuth: true
			},
      component: () => import('./views/Eligibility.vue')
		},
  ]
})
