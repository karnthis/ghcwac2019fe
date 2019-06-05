<template>
	<div class="eligibility">
		<div class="entry">
			<form >
					<!-- @click="makeClientFalse" required> -->
				<div id="isCRDiv" class="formRow">
					<label for="isCRDiv">Is applicant a client of a partner agency?</label>
					<br>
					<label for="isCRF">No </label>
					<input type="radio" id="isCRF" name="isCR"
					:value="radioFalse"
					v-model="isClientRadio" />
					 | 
					<label for="isCRT">Yes </label>
					<input type="radio" id="isCRT" name="isCR"
					:value="radioTrue"
					v-model="isClientRadio" />
				</div>
				<!-- <div class="formRow hide"
				:class="{ show: isAClient }"> -->
				<div v-if="isClientRadio">
					<label for="ofWA">Which agency?</label>
					<br>
					<select id="ofWA" 
					v-model="checkMyOrgElig.isClient"
					@change="updateIsAClient($event.target.value)">
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
					<input type="radio" id="onPAF" name="onPA"
					:value="radioFalse" 
					v-model="checkMyOrgElig.pubAssist"
					@change="updateOnPA($event.target.value)" />
					 | 
					<label for="onPAT">Yes </label>
					<input type="radio" id="onPAT" name="onPA"
					:value="radioTrue"
					v-model="checkMyOrgElig.pubAssist"
					@change="updateOnPA($event.target.value)" />
				</div>
				
				<!-- <div>
					<input type="radio" name="frequency" :value="1" @change="updateFrequency($event.target.value)" />
					<input type="radio" name="frequency" :value="0" @change="updateFrequency($event.target.value)" />
				</div> -->

				<div>
					<!-- todo | add zipcode -->
				</div>
				<div id="isEPDiv" class="formRow">
					<label for="isEPDiv">Is applicant in eligible trimester?</label>
					<br>
					<label for="isEPF">No </label>
					<input type="radio" id="isEPF" name="isEP"
					v-model="checkMyOrgElig.isPreg" 
					:value="radioFalse"
					@change="updateIsEP($event.target.value)" />
					 | 
					<label for="isEPT">Yes </label>
					<input type="radio" id="isEPT" name="isEP"
					v-model="checkMyOrgElig.isPreg" 
					:value="radioTrue"
					@change="updateIsEP($event.target.value)" />
				</div>
				<div id="isAEDiv" class="formRow">
					<label for="isAEDiv">Is applicant age-eligible?</label>
					<br>
					<label for="isAEF">No </label>
					<input type="radio" id="isAEF" name="isAE"
					v-model="checkMyOrgElig.momAge" 
					:value="radioFalse"
					@change="updateIsAE($event.target.value)" />
					 | 
					<label for="isAET">Yes </label>
					<input type="radio" id="isAET" name="isAE"
					v-model="checkMyOrgElig.momAge" 
					:value="radioTrue"
					@change="updateIsAE($event.target.value)" />
				</div>
				<div id="isIEDiv" class="formRow">
					<label for="isIEDiv">Is applicant's child age-eligible?</label>
					<br>
					<label for="isIEF">No </label>
					<input type="radio" id="isIEF" name="isIE"
					v-model="checkMyOrgElig.infantAge" 
					:value="radioFalse"
					@change="updateIsIE($event.target.value)" />
					 | 
					<label for="isIET">Yes </label>
					<input type="radio" id="isIET" name="isIE"
					v-model="checkMyOrgElig.infantAge" 
					:value="radioTrue"
					@change="updateIsIE($event.target.value)" />
				</div>

			</form>
			<button @click="saveRequirements">Click Me</button>
		</div>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'eligibility',
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
		updateIsCR(newValue) {
			this.isClientRadio = newValue
		},
		updateIsAClient(newValue) {
			this.answers.isClient = newValue
			// console.log(this.answers.pubAssist)
		},
		updateOnPA(newValue) {
			this.answers.pubAssist = newValue
			// console.log(this.answers.pubAssist)
		},
		updateIsEP(newValue) {
			this.answers.pubAssist = newValue
			// console.log(this.answers.pubAssist)
		},
		updateIsAE(newValue) {
			this.answers.pubAssist = newValue
			// console.log(this.answers.pubAssist)
		},
		updateIsIE(newValue) {
			this.answers.pubAssist = newValue
			// console.log(this.answers.pubAssist)
		},
		// updateFrequency() {
		// 	this.$store.commit('setMyOrgElig', this.answers)
		// },
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
		saveRequirements() {
			
		}
	},
	components: {
		
	},
	computed: {
		...mapGetters(["checkMyOrgElig","checkAllOrgSummary"])
	},
	created() {
		this.$store.dispatch('setupEligibility')
	},
	beforeCreate() {
	}
}
</script>

<style scoped>

</style>
