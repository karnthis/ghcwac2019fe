import Vue from 'vue'
// import Vuetify from 'vuetify'
import './plugins/vuetify'
import App from './App.vue'
import store from './store'
import router from './router'

// Vue.use(Vuetify)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requireAuth)) {
		if (!store.getters.checkCurrUser.full_name) {
			store.dispatch('sendFetch', {path:'/heartbeat', method:'GET'})
			.then(res => {
				console.log(res)
				if (res.status == 200) {
					store.dispatch('loadUserInfo')
					next()
				} else {
					next({ name: 'login'})
				}
			})
		} else {
			next()
		}
	} else {
		next()
	}
	



	// if(to.matched.some(record => record.meta.requireAuth)) {
	// 	const lsUID = localStorage.getItem('user_id')
	// 	if (!store.getters.checkAuth && lsUID) {
	// 		fetch(`${store.getters.useURL}/users/one/${lsUID}`)
	// 		.then(res => {
	// 			if (res.status == 200) {
	// 				return res.json()
	// 			} else {
	// 				throw new Error('failure')
	// 			}
	// 		})
	// 		.then(async res => {
	// 			store.commit('setIsAuthed', true)
	// 			store.commit('setLoggedInUser', res.data)
	// 			const _b = await store.dispatch('fetchAndUpdateMyOrg')
	// 			const _c = await store.dispatch('fetchAndUpdateAllOrgs')
	// 			next()
	// 		})
	// 		.catch(_ => next({ name: 'login'}))
	// 	} else if (false) { //TODO
	// 		fetch(`${store.getters.useURL}/heartbeat`)
	// 		.then(res => {
	// 			if (res.status == 200) {
	// 				next()
	// 			} else {
	// 				throw new Error('failure')
	// 			}
	// 		})
	// 		.catch(_ => next({ name: 'login'}))
	// 	}

		// console.log()
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
			// console.log('auth req')
	// 		next()
	// } else {
	// 		next() 
	// }
}, (to, from, next) => {
	const url = store.getters.useURL
	//TODO
	if (!store.getters.checkCurrUser.full_name) {
		fetch(`${url}/user/mySummary`)
		.then(res => res.json())
		.then(res => {
			store.commit('setLoggedInUser', res[0])
		})
		.catch(err => console.log(err))
	}
	if (!store.getters.checkMyOrg.provider_name) {
		fetch(`${url}/org/myOrg`)
		.then(res => res.json())
		.then(res => {
			store.commit('setMyOrg', res[0])
		})
		.catch(err => console.log(err))
	}
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
