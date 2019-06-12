<template>
  <v-content id="eligibility">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card>
            <v-card-title>
              <span class="headline">Check Applicant</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-layout align-start justify-space-between row fill-height>
                  <v-flex xs8 mt-4>
                    <span class="title">Applicant is a client of a partner agency:</span>
                  </v-flex>
                  <v-flex xs2>
                    <v-switch v-model="isClientRadio" :label="`${isClientRadio.toString()}`"></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout align-start justify-space-between row fill-height>
                  <!-- <v-flex xs8 v-if="isClientRadio"> -->
                  <v-flex xs8>
                    <v-select :items="checkAllOrgSummary" label="Select Partner Agency"></v-select>
                  </v-flex>
                </v-layout>
                <v-layout align-start justify-space-between row fill-height>
                  <v-flex xs8 mt-4>
                    <span class="title">Applicant is using public assistance:</span>
                  </v-flex>
                  <v-flex xs2>
                    <v-switch
                      v-model="answers.pubAssist"
                      :label="`${answers.pubAssist.toString()}`"
                    ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout align-start justify-space-between row fill-height>
                  <v-flex xs8 mt-4>
                    <span class="title">Applicant is in eligible trimester:</span>
                  </v-flex>
                  <v-flex xs2>
                    <v-switch v-model="answers.isPreg" :label="`${answers.isPreg.toString()}`"></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout align-start justify-space-between row fill-height>
                  <v-flex xs8 mt-4>
                    <span class="title">Applicant is age-eligible:</span>
                  </v-flex>
                  <v-flex xs2>
                    <v-switch v-model="answers.momAge" :label="`${answers.momAge.toString()}`"></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout align-start justify-space-between row fill-height>
                  <v-flex xs8 mt-4>
                    <span class="title">Applicant's child is age-eligible:</span>
                  </v-flex>
                  <v-flex xs2>
                    <v-switch
                      v-model="answers.infantAge"
                      :label="`${answers.infantAge.toString()}`"
                    ></v-switch>
                  </v-flex>
                </v-layout>
                <v-layout align-start justify-end row fill-height>
                  <v-flex xs7>
                    <v-btn @click="processAnswers">Click Me</v-btn>
                  </v-flex>
                  <!-- <span>Applicant ddd:</span>
                  <v-switch v-model="answers.pubAssist" :label="`${answers.pubAssist.toString()}`"></v-switch>-->
                </v-layout>
              </v-container>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
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
