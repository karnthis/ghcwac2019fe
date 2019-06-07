<template>
  <v-content id="topbar">
    <v-toolbar>
      <v-toolbar-title>
        <UserInfo/>
      </v-toolbar-title>

      <template v-slot:extension>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn>
            <router-link to="/login">Login</router-link>
          </v-btn>
          <v-btn>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn>
            <router-link to="/referals">Referrals</router-link>
          </v-btn>
          <v-btn>
            <router-link to="/classes">Classes</router-link>
          </v-btn>
          <v-menu>
            <template v-slot:activator="{on}">
              <v-btn v-on="on">Manage</v-btn>
            </template>
            <v-list>
              <v-list-tile>
                <router-link to="/inventory">Inventory</router-link>
              </v-list-tile>
              <v-list-tile>
                <router-link to="/eligibility">Eligibility</router-link>
              </v-list-tile>
              <v-list-tile>
                <router-link to="/myorg">Organization</router-link>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-toolbar-items>
        <v-spacer></v-spacer>
      </template>
      <v-spacer></v-spacer>
      <v-toolbar-side-icon></v-toolbar-side-icon>
    </v-toolbar>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserInfo from "@/components/UserInfo.vue";

export default {
  name: "topbar",
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* #topbar {
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
} */
</style>
