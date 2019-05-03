<template>
	<div class="myself">
		<div class="myName">
		{{ checkCurrUser.full_name }}
		</div>
		<div class="myOrg">
		{{ checkMyOrg.provider_name }}
		</div>

	</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
	name: 'UserInfo',
	computed: {
		...mapGetters(["checkCurrUser","checkMyOrg"])
	}
}
</script>

<style scoped>

</style>
