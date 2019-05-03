import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		isAuthed: false,
		loggedInUser: {
			full_name: 'Temperance Brennan'
		},
		myOrg: {
			provider_name: 'Jeffersonian'
		},
		myOrgElig: {},
		myOrgInv: 0,
		allOrgs: [],
		allOrgsElig: [],
		allOrgsInv: [],
		classes: [],
		referrals: [],
  },
  mutations: {

  },
  actions: {

  },
	getters: {
		checkAuth: state => state.isAuthed,
		checkCurrUser: state => state.loggedInUser,
		checkMyOrg: state => state.myOrg,
		checkMyOrgElig: state => state.myOrgElig,
		checkMyOrgInv: state => state.myOrgInv,
		checkAllOrgs: state => state.allOrgs,
		checkAllOrgsElig: state => state.allOrgsElig,
		checkAllOrgsInv: state => state.allOrgsInv,
		checkClasses: state => state.classes,
		checkReferrals: state => state.referrals,
	}
})
