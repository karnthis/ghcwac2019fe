import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		// URL: 'https://api.cwac2019.irl.technology/v2',
		URL: 'http://localhost:51515/v2',
		// loggedInID: 0,
		loggedInUser: {},
		myOrg: {},
		myOrgElig: {},
		myOrgInv: null,
		allOrgSummary: [],
		allOrgDetail: [],
		allOrgsElig: [],
		allOrgsInv: [],
		classes: [],
		referrals: [],
		errors: [],
  },
  mutations: {
		// increment (state, n) {
		// 	state.count += n
		// },
		// setLoggedInID(state, x) {
		// 	state.loggedInID = x
		// },
		setLoggedInUser(state, x) {
			state.loggedInUser = x
		},
		setMyOrg(state, x) {
			state.myOrg = x
		},
		setMyOrgElig(state, x) {
			state.myOrgElig = x
		},
		setMyOrgInv(state, x) {
			state.myOrgInv = x
		},
		// dispenseMyOrgInv(state) {
		// 	state.myOrgInv--
		// },
		setAllOrgs(state, x) {
			state.allOrgs = x
		},
		setAllOrgsElig(state, x) {
			state.allOrgsElig = x
		},
		setAllOrgsInv(state, x) {
			state.allOrgsInv = x
		},
		setClasses(state, x) {
			state.classes = x
		},
		setReferrals(state, x) {
			state.referrals = x
		},
		addError(state, x) {
			state.referrals.push(x)
		},
	},
	actions: {
		sendFetch({ state }, bundle) {
			const { path, method, body } = bundle
			// console.log(`method: ${method}`)
			const fetchObject = {
				method,
				mode: 'cors',
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				}
			}
			if (body) fetchObject.body = JSON.stringify(body)
			return fetch(`${state.URL}${path}`, fetchObject)
			.then(res => res.json().then(json => ({
				status: res.status,
				json
			})
			))
		},
		setupEligibility({ commit, state, dispatch }) {

		},
		setupInventory({ commit, state, dispatch }) {
			if (this.myOrgInv == null) {
				dispatch('sendFetch', {path:'/inv/myOrg', method:'GET'})
				.then(res => {
					console.log(res)
					if (res.status == 200) commit('setMyOrgInv',res.json.data.inv_count)
				})
			}
			
		},
		setupReferral({ commit, state, dispatch }) {

		},
		setupEvents({ commit, state, dispatch }) {

		},
		setupUserManage({ commit, state, dispatch }) {

		},
		setupOrgManage({ commit, state, dispatch }) {

		},

		// filterActives(_, x) {
		// 	for (const prop in x) {
		// 		if (!x[prop] || x[prop] === 0) delete x[prop]
		// 	}
		// 	x.allReq = true
		// 	return x
		// },
		// fetchAndUpdateCurrUser({ commit, state }) {
		// 	return fetch(`${state.URL}/users/one/${state.loggedInID}`)
		// 	.then(res => res.json())
		// 	.then(res => commit('setLoggedInUser', res.data))
		// 	.catch(err => commit('addError', err))
		// },
		// fetchAndUpdateMyOrg({ commit, state }) {
		// 	return fetch(`${state.URL}/provider/${state.loggedInUser.member_of}`)
		// 	.then(res => res.json())
		// 	.then(res => commit('setMyOrg', res.data))
		// 	.catch(err => commit('addError', err))
		// },
		// fetchAndUpdateAllOrgs({ commit, state }) {
		// 	return fetch(`${state.URL}/provider`)
		// 	.then(res => res.json())
		// 	.then(res => commit('setAllOrgs', res.data))
		// 	.catch(err => commit('addError', err))
		// },
		// async fetchEligThings({ commit, state }) {
		// 	console.log('running...')
		// 	console.log(state.myOrg.provider_id)
		// 	let _ = await fetch(`${state.URL}/eligibility/org/${state.myOrg.provider_id}`)
		// 	.then(res => res.json())
		// 	.then(res => {
		// 		console.dir(res)
		// 		commit('setMyOrgElig', res.data)
		// 	})
		// 	.catch(err => commit('addError', err))
		// 	_ = await fetch(`${state.URL}/eligibility/`)
		// 	.then(res => res.json())
		// 	.then(res => commit('setAllOrgsElig', res.data))
		// 	.catch(err => commit('addError', err))
		// 	_ = await fetch(`${state.URL}/inventory/byorg/${state.myOrg.provider_id}`)
		// 	.then(res => res.json())
		// 	.then(res => commit('setMyOrgInv', res.data))
		// 	.catch(err => commit('addError', err))
		// 	console.log('done')
		// 	return 'finished'
		// },
  },
	getters: {
		useURL: state => state.URL,
		// checkCurrID: state => state.loggedInID,
		checkCurrUser: state => state.loggedInUser,
		checkMyOrg: state => state.myOrg,
		checkMyOrgElig: state => state.myOrgElig,
		checkMyOrgInv: state => state.myOrgInv,
		checkAllOrgs: state => state.allOrgs,
		checkAllOrgsElig: state => state.allOrgsElig,
		checkAllOrgsInv: state => state.allOrgsInv,
		checkClasses: state => state.classes,
		checkReferrals: state => state.referrals,
		checkErrors: state => state.errors,
	}
})
