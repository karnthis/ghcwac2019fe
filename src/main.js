import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if(to.matched.some(record => record.meta.requireAuth)) {
		console.log(store.getters.checkAuth)
			// if (localStorage.getItem('jwt') == null) {
			// 		next({
			// 				path: '/login',
			// 				params: { nextUrl: to.fullPath }
			// 		})
			// } else {
			// 		let user = JSON.parse(localStorage.getItem('user'))
			// 		if(to.matched.some(record => record.meta.is_admin)) {
			// 				if(user.is_admin == 1){
			// 						next()
			// 				}
			// 				else{
			// 						next({ name: 'userboard'})
			// 				}
			// 		}else {
			// 				next()
			// 		}
			// }
	} else {
			next() 
	}
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
