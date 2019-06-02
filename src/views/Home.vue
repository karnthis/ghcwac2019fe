<template>
	<div class="home">
		<div class="entry">
			<form >
					<!-- @click="makeClientFalse" required> -->
				<div id="isCRDiv" class="formRow">
					<label for="isCRDiv">Is applicant a client of a partner agency?</label>
					<br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" 
					v-model="isClientRadio" 
					:value="radioFalse"
					@click="isAClient=false">
					 | 
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" 
					v-model="isClientRadio" 
					:value="radioTrue"
					@click="isAClient=true">
				</div>
				<!-- <div class="formRow hide"
				:class="{ show: isAClient }"> -->
				<div v-if="isAClient">
					<label for="ofWA">Which agency?</label>
					<br>
					<select id="ofWA" v-model="answers.isClient">
						<option 
						v-for="org in checkAllOrgSummary"
						:key="org.provider_id"
						:value="org.provider_id">
							{{org.provider_name}}
						</option>
					</select>
				</div>
				<div id="onPADiv" class="formRow">
					<label for="onPADiv">Is applicant using public assistance?</label>
					<br>
					<label for="onPAF">No </label>
					<input type="radio" id="onPAF" 
					v-model="answers.pubAssist" 
					:value="radioFalse">
					 | 
					<label for="onPAT">Yes </label>
					<input type="radio" id="onPAT" 
					v-model="answers.pubAssist" 
					:value="radioTrue">
				</div>
				

				<div>
					<!-- todo | add zipcode -->
				</div>
				<div id="isEPDiv" class="formRow">
					<label for="isEPDiv">Is applicant in eligible trimester?</label>
					<br>
					<label for="isEPF">No </label>
					<input type="radio" id="isEPF" 
					v-model="answers.isPreg" 
					:value="radioFalse">
					 | 
					<label for="isEPT">Yes </label>
					<input type="radio" id="isEPT" 
					v-model="answers.isPreg" 
					:value="radioTrue">
				</div>
				<div id="isAEDiv" class="formRow">
					<label for="isAEDiv">Is applicant age-eligible?</label>
					<br>
					<label for="isAEF">No </label>
					<input type="radio" id="isAEF" 
					v-model="answers.momAge" 
					:value="radioFalse">
					 | 
					<label for="isAET">Yes </label>
					<input type="radio" id="isAET" 
					v-model="answers.momAge" 
					:value="radioTrue">
				</div>
				<div id="isIEDiv" class="formRow">
					<label for="isIEDiv">Is applicant's child age-eligible?</label>
					<br>
					<label for="isIEF">No </label>
					<input type="radio" id="isIEF" 
					v-model="answers.infantAge" 
					:value="radioFalse">
					 | 
					<label for="isIET">Yes </label>
					<input type="radio" id="isIET" 
					v-model="answers.infantAge" 
					:value="radioTrue">
				</div>

			</form>
			<!-- <button @click="processAnswers">Click Me</button> -->
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
// import UserInfo from '@/components/UserInfo.vue'

export default {
	name: 'home',
	data: () => {
		return {
			isAClient: false,
			radioFalse: false,
			radioTrue: true,
			isClientRadio: false,
			answers: {
				isClient: false,
				pubAssist: false,
				momAge: false,
				isPreg: false,
				infantAge: false,
				// zip: ''
			}
		}
	},
	methods: {
		...mapActions(["setupHome"]),
		sortEm(all, sub) {
			for (const key in sub) {
				if (!sub[key]) delete sub[key]
			}
			return (() => {
				return all.filter((obj) => {
					return Object.keys(sub).every((c) => {
						return obj[c] == sub[c];
					});
				});
			})()
		},
		processAnswers() {
			const passingOrgs = this.sortEm(this.checkAllOrgsElig, this.answers)
			if (passingOrgs.length) {

			}
		}
	},
	components: {
		
	},
	computed: {
		...mapGetters(["checkAllOrgSummary","checkAllOrgsElig","checkAllOrgsInv"])
	},
	created() {
		// this.setupHome()
		this.$store.dispatch('setupHome')
		// this.fetchTodos();
	},
	beforeCreate() {
	}
}
</script>

<style scoped>

</style>
