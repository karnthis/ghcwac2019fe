<template>
  <v-content id="inspire">
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs4>
          <v-card>
            <v-card-title>
              <span class="headline">Check Applicant</span>
            </v-card-title>
            <v-card-text>
              <v-container fluid>
                <v-layout row xs6>
                  <v-flex mt-4>
                    <span class="title">Applicant is a client of a partner agency:</span>
                  </v-flex>
                  <v-flex>
                    <v-switch v-model="isClientRadio" :label="`${isClientRadio.toString()}`"></v-switch>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-flex v-if="isClientRadio">
                <v-select :items="checkAllOrgSummary" label="Select Partner Agency"></v-select>
              </v-flex>

              <span>Applicant is using public assistance:</span>
              <v-switch v-model="answers.pubAssist" :label="`${answers.pubAssist.toString()}`"></v-switch>

              <span>Applicant is in eligible trimester:</span>
              <v-switch v-model="answers.isPreg" :label="`${answers.isPreg.toString()}`"></v-switch>

              <span>Applicant is age-eligible:</span>
              <v-switch v-model="answers.momAge" :label="`${answers.momAge.toString()}`"></v-switch>

              <span>Applicant's child is age-eligible:</span>
              <v-switch v-model="answers.infantAge" :label="`${answers.infantAge.toString()}`"></v-switch>

              <!-- <span>Applicant ddd:</span>
              <v-switch v-model="answers.pubAssist" :label="`${answers.pubAssist.toString()}`"></v-switch>-->

              <div class="entry">
                <button @click="processAnswers">Click Me</button>
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "home",
  data: () => {
    return {
      switchtrue: true,
      switchfalse: false,
      isAClient: false,
      radioFalse: false,
      radioTrue: true,
      isClientRadio: false,
      answers: {
        isClientOf: false,
        pubAssist: false,
        momAge: false,
        isPreg: false,
        infantAge: false
        // zip: ''
      }
    };
  },
  methods: {
    ...mapActions(["setupHome"]),
    sortEm(all, sub) {
      for (const key in sub) {
        if (!sub[key]) delete sub[key];
      }
      return (() => {
        return all.filter(obj => {
          return Object.keys(sub).every(c => {
            return obj[c] == sub[c];
          });
        });
      })();
    },
    processAnswers() {
      const passingOrgs = this.sortEm(this.checkAllOrgsElig, this.answers);
      if (passingOrgs.length) {
      }
    }
  },
  components: {},
  computed: {
    ...mapGetters(["checkAllOrgSummary", "checkAllOrgsElig", "checkAllOrgsInv"])
  },
  created() {
    // this.setupHome()
    this.$store.dispatch("setupHome");
    // this.fetchTodos();
  },
  beforeCreate() {}
};
</script>

<style scoped>
</style>
