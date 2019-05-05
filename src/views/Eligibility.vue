<template>
	<div class="elig">
		<div class="entry">
			<form >
				<div  class="formRow">
					<!-- //TODO	update the IDs -->
					<label for="">Is applicant a client of a partner agency?</label>
					<br><br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="isClientRadio" 
					:value="radioFalse"
					@click="makeClientFalse">
					<br>
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" 
					v-model="isClientRadio" 
					:value="radioTrue"
					@click="isAClient=true">
				</div>
				<div class="formRow hide"
				:class="{ show: isAClient }">
					<select v-model="selected_org">
						<option 
						v-for="org in checkAllOrgs"
						:key="org.provider_id"
						:value="org.provider_id">
							{{org.provider_name}}
						</option>
					</select>
				</div>
				<div  class="formRow">
					<label for="">Is applicant using public assistance?</label>
					<br><br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="onPubAssist" 
					:value="radioFalse">
					<br>
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" 
					v-model="onPubAssist" 
					:value="radioTrue">
				</div>
				<div  class="formRow">
					<label for="">Does applicant meet age requirement?</label>
					<br><br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="isAgeElig" 
					:value="radioFalse">
					<br>
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" 
					v-model="isAgeElig" 
					:value="radioTrue">
				</div>

				<div>
					<!-- todo | add zipcode -->
				</div>
				<div  class="formRow">
					<label for="">Is applicant in eligible trimester?</label>
					<br><br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="enoughPreg" 
					:value="radioFalse">
					<br>
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" 
					v-model="enoughPreg" 
					:value="radioTrue">
				</div>
				<div  class="formRow">
					<label for="">Is applicant's child age-eligible?</label>
					<br><br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="isInfantElig" 
					:value="radioFalse">
					<br>
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" 
					v-model="isInfantElig" 
					:value="radioTrue">
				</div>

			</form>
		</div>
		
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import UserInfo from '@/components/UserInfo.vue'

export default {
	name: '',
	props: {
		// selected_org: '',
		// allOrgs: []
	},
	data: () => {
		return {
			selected_org: 0,
			isAClient: false,
			radioFalse: false,
			radioTrue: true,
			isClientRadio: false,
			onPubAssist: false,
			isAgeElig: false,
			enoughPreg: false,
			isInfantElig: false

		}
	},
	methods: {
		// ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
		makeClientFalse() {
			this.isAClient = false
			this.selected_org = 0
		}
	},
	components: {
		
	},
	computed: {
		...mapGetters(["checkAllOrgsElig"])
	},
	created() {
		
		// this.allOrgs.push(this.checkAllOrgs)
		// this.fetchTodos();
	}
}
</script>

<style scoped>
.hide {
	display: none;
}
.show {
	display: block;
}
</style>
