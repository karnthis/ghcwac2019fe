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
					<select v-model="answers.isClient">
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
					v-model="answers.pubAssist" 
					:value="radioFalse">
					 | 
					<label for="onPAT">Yes </label>
					<input type="radio" id="onPAT" 
					v-model="answers.pubAssist" 
					:value="radioTrue">
				</div>
				<div  class="formRow">
					<label for="">Does applicant meet age requirement?</label>
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

				<div>
					<!-- todo | add zipcode -->
				</div>
				<div  class="formRow">
					<label for="">Is applicant in eligible trimester?</label>
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
				<div  class="formRow">
					<label for="">Is applicant's child age-eligible?</label>
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
			<button @click="answerCompare">Click Me</button>
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
			isAClient: '',
			radioFalse: false,
			radioTrue: true,
			isClientRadio: '',
			isEligWithMyOrg: '',
			otherEligOrgs: [],
			answers: {
				isClient: 0,
				pubAssist: '',
				momAge: '',
				isPreg: '',
				infantAge: '',
				zip: 0
			}
			

		}
	},
	methods: {
		...mapActions(["fetchEligThings", "filterActives"]),
		makeClientFalse() {
			this.isAClient = false
			this.selected_org = 0
		},
		answerCompare() {
			this.otherEligOrgs = []
			const work = Object.assign({}, this.answers)
			this.filterActives(work)
			.then(res => {
				console.dir(res)
				const resK = Object.keys(res)
				console.dir(resK)
				let allMatch = true
				const myElig = Object.keys(this.checkMyOrgElig[0].elig_json)
				for (const k in myElig) {
					if (!resK.includes(myElig[k])) {
						allMatch = false
						break
					}
				}
				this.isEligWithMyOrg = allMatch
				for (const orgElig of this.checkAllOrgsElig) {
					let allMatch = true
					// console.dir(orgElig)
					const otherElig = Object.keys(orgElig.elig_json)
					for (const k of otherElig) {
						console.log(k)
						if (k == 'allReq') continue
						if (!resK.includes(k)) {
							allMatch = false
							break
						}
					}
					if (allMatch) this.otherEligOrgs.push(orgElig.provider_id)
				}
			})
			// .catch(err => console.dir(err))
			
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
