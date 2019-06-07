<template>
	<v-app>
		<v-content>
			<Topbar />
		</v-content>

		<v-content transition="slide-y-transition">
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
import Topbar from './components/Topbar.vue'

export default {
	name: 'App',
	components: {
		Topbar
	},
	data () {
		return {
			//
		}
	}
}
</script>
