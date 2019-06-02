<template>
	<div class="login">
		<div>
			<label for="username">Enter Username:</label>
			<input 
			type="text"
			name="username"
			id="username"
			v-model="username">
		</div>
		<div>
			<label for="password">Enter Password:</label>
			<input 
			type="password"
			name="password"
			id="password"
			v-model="password">
		</div>
		<button @click="logInUser"> Log In </button>
	</div>
</template>

<script>
import router from '../router'
import { mapActions, mapMutations, mapGetters } from 'vuex'
// import UserInfo from '@/components/UserInfo.vue'

export default {
	name: 'login',
	data: () => {
		return {
			username: '',
			password: '',
		}
	},
	methods: {
		...mapActions(["sendFetch", "loadUserInfo"]),
		...mapMutations(["setLoggedInUser", "setMyOrg"]),
		logInUser: function() {
			this.sendFetch({path:'/login', method:'POST', body:{
					username: this.username,
					password: this.password
				}})
			.then(async res => {
						// console.log(res)
				if (res.status == 200) {
					this.loadUserInfo()
					router.push('/')
				}
				
			})
		},
		
		// submitLogin: async function() {
		// 	const _ = await fetch(`${this.useURL}/login`, {
		// 		method: "POST",
		// 		headers: {
		// 			"Content-Type": "application/json",
		// 		},
		// 		body: JSON.stringify({
		// 			username: this.username,
		// 			password: this.password
		// 		})
		// 	})
		// 	.then(res => res.json())
		// 	.then(async (res) => {
		// 		if (res.data && res.data.length) {
		// 			localStorage.setItem('user_id', res.data[0])
		// 			this.setIsAuthed(true)
		// 			this.setLoggedInID(res.data[0])
		// 			let _a = await this.fetchAndUpdateCurrUser()
		// 			let _b = await this.fetchAndUpdateMyOrg()
		// 			let _c = await this.fetchAndUpdateAllOrgs()
		// 			router.push('/home')
		// 		}
		// 		return res
		// 	})
		// 	.catch(err => console.dir(err))
		// 	console.log('logged!')
		// }
	},
	components: {
		
	},
	computed: {
		// ...mapGetters(["checkCurrID", "useURL"])
	},
	created() {
		// this.fetchTodos();
	}
}
</script>

<style scoped>

</style>
