<template>
	<div class="inventory">
		<div>
			<div>
				Current Inventory Count
			</div>
			<div>
				{{ checkMyOrgInv }}
			</div>
		</div>
		<div>
			<div>
				<button @click="submitDispense">Dispense Crib</button>
			</div>
			<div>
				<div>
					Update Inventory Count
				</div>
				<div>
					<label for="invInput">New Count</label>
					<input 
					type="number"
					name="invInput"
					id="invInput"
					v-model="invInput">
				</div>
				<div>
					<button @click="submitInvUpdate">Update</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
// import UserInfo from '@/components/UserInfo.vue'

export default {
	name: 'inventory',
	data: () => {
		
		return {
			invInput: ''
		}
	},
	methods: {
		...mapActions(["sendFetch", "setupInventory"]),
		...mapMutations(["setMyOrgInv"]),

		submitDispense: async function() {
			this.sendFetch({path:'/inv/myOrgDispense', method:'PUT'})
			.then(res => {
				if (res.status == 200) this.setMyOrgInv(res.json.data.inv_count)
			})
		},
		submitInvUpdate: async function() {
			this.sendFetch({path:'/inv/myOrg', method:'PUT', body:{newInvCount: this.invInput}})
			.then(res => {
				if (res.status == 200) this.setMyOrgInv(res.json.data.inv_count)
			})
		}
	},
	components: {
		
	},
	computed: {
		...mapGetters(["checkMyOrgInv"])
	},
	beforeMount() {
		this.setupInventory()
	}
}
</script>

<style scoped>

</style>
