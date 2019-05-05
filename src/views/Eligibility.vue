<template>
	<div class="elig">
		<div class="entry">
			<form >
				<div  class="formRow">
					<!-- //TODO	update the IDs -->
					<label for="">Is applicant a client of a partner agency?</label>
					<br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="isClientRadio" 
					:value="radioFalse"
					@click="makeClientFalse">
					 | 
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
					<br>
					<label for="onPAF">No </label>
					<input type="radio" id="onPAF" 
					v-model="onPubAssist" 
					:value="radioFalse">
					 | 
					<label for="onPAT">Yes </label>
					<input type="radio" id="onPAT" 
					v-model="onPubAssist" 
					:value="radioTrue">
				</div>
				<div  class="formRow">
					<label for="">Does applicant meet age requirement?</label>
					<br>
					<label for="isAEF">No </label>
					<input type="radio" id="isAEF" 
					v-model="isAgeElig" 
					:value="radioFalse">
					 | 
					<label for="isAET">Yes </label>
					<input type="radio" id="isAET" 
					v-model="isAgeElig" 
					:value="radioTrue">
				</div>

				<div>
					<!-- todo | add zipcode -->
				</div>
				<div  class="formRow">
					<label for="">Is applicant in eligible trimester?</label>
					<br>
					<label for="isEPF">No </label>
					<input type="radio" id="isEPF" 
					v-model="enoughPreg" 
					:value="radioFalse">
					 | 
					<label for="isEPT">Yes </label>
					<input type="radio" id="isEPT" 
					v-model="enoughPreg" 
					:value="radioTrue">
				</div>
				<div  class="formRow">
					<label for="">Is applicant's child age-eligible?</label>
					<br>
					<label for="isIEF">No </label>
					<input type="radio" id="isIEF" 
					v-model="isInfantElig" 
					:value="radioFalse">
					 | 
					<label for="isIET">Yes </label>
					<input type="radio" id="isIET" 
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
			isAClient: '',
			radioFalse: false,
			radioTrue: true,
			isClientRadio: '',
			onPubAssist: '',
			isAgeElig: '',
			enoughPreg: '',
			isInfantElig: ''

		}
	},
	methods: {
		...mapActions(["fetchEligThings"]),
		makeClientFalse() {
			this.isAClient = false
			this.selected_org = 0
		}
	},
	components: {
		
	},
	computed: {
		...mapGetters(["checkMyOrgElig", "checkAllOrgsElig", "checkAllOrgs"])
	},
	created() {
		this.fetchEligThings()
		.then(res => console.log(res))
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
