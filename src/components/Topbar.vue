<template>
  <div class="topbar">
		<UserInfo/>
		<div class="nav">
			<router-link to="/login">Login</router-link>
			<router-link to="/">Home</router-link>
			<router-link to="/inventory">Manage Inventory</router-link>
			<router-link to="/referals">Referrals</router-link>
			<router-link to="/classes">Classes</router-link>
			<router-link to="/myorg">Manage Organization</router-link>
      <router-link to="/eligibility">Check Eligibility</router-link>
    </div>
		<div class="admin">

		</div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import UserInfo from '@/components/UserInfo.vue'

export default {
	name: 'topbar',
	methods: {
    // ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDblClick(todo) {
      const updTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updTodo);
    }
	},
	components: {
    UserInfo
  },

	// computed: {
	// 	...mapGetters(["checkCurrUser","checkMyOrg"])
	// }
	created() {
    // this.fetchTodos();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topbar {
  padding: 10px;
	background-color: limegreen;
	display: grid;
	grid-template-columns: 250px 1fr 250px;
}
.nav {
	display: grid;
	grid-template-columns: repeat(7, max-content);
	justify-content: space-evenly;
	column-gap: 2ch;
}
</style>
