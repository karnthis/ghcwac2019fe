<template>
  <v-content id="calendar">
    <v-layout>
      <v-flex>
        <v-sheet height="500">
          <v-calendar
					:now="today"
					:value="today"
					short-months="false"
					color="primary">
            <template v-slot:day="{ date }">
              <!-- <template v-for="event in eventsMap[date]">
                <v-menu :key="event.title" v-model="event.open" full-width offset-x>
                  <template v-slot:activator="{ on }">
                    <div
                      v-if="!event.time"
                      v-ripple
                      class="my-event"
                      v-on="on"
                      v-html="event.title"
                    ></div>
                  </template>
                  <v-card color="grey lighten-4" min-width="350px" flat>
                    <v-toolbar color="primary" dark>
                      <v-btn icon>
                        <v-icon>edit</v-icon>
                      </v-btn>
                      <v-toolbar-title v-html="event.title"></v-toolbar-title>
                      <v-spacer></v-spacer>
                      <v-btn icon>
                        <v-icon>favorite</v-icon>
                      </v-btn>
                      <v-btn icon>
                        <v-icon>more_vert</v-icon>
                      </v-btn>
                    </v-toolbar>
                    <v-card-title primary-title>
                      <span v-html="event.details"></span>
                    </v-card-title>
                    <v-card-actions>
                      <v-btn flat color="secondary">Cancel</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-menu>
              </template> -->
            </template>
          </v-calendar>
        </v-sheet>
      </v-flex>
    </v-layout>
		<v-layout>
		<v-flex
        
        xs2
        class="text-xs-right">
        <v-btn @click="$refs.calendar.prev()">
          <v-icon
            dark
            left>
            keyboard_arrow_left
          </v-icon>
          Prev
        </v-btn>
      </v-flex>
			<v-spacer></v-spacer>
      <v-flex
        
        xs2
        class="text-xs-left">
        <v-btn @click="$refs.calendar.next()">
          Next
          <v-icon
            right
            dark>
            keyboard_arrow_right
          </v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import UserInfo from '@/components/UserInfo.vue'

export default {
  name: "classes",
  // data: () => {
  //   return {};
  // },
  data: () => ({
    today: Date().toString() ,
    events: [
      {
        title: "Vacation",
        details: "Going to the beach!",
        date: "2018-12-30",
        open: false
			},
			{
        title: "Vacation",
        details: "Going to the beach!",
        date: "2018-12-25",
        open: false
      }
    ]
  }),
  computed: {
    	...mapGetters(["checkClasses"]),
    // convert the list of events into a map of lists keyed by date
    eventsMap() {
      const map = {};
      this.checkClasses.forEach(e => (map[e.date] = map[e.date] || []).push(e));
      return map;
    }
  },
  methods: {
    open(event) {
      alert(event.title);
    }
  },
  methods: {
    // ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
  },
  components: {},
  computed: {
    // 	...mapGetters(["checkCurrUser","checkMyOrg"])
  },
  created() {
    // this.fetchTodos();
  }
};
</script>

<style scoped>
</style>
