<template>
  <v-container>
    <v-container>
      <v-tooltip
          v-model="linkCopied"
          top
      >
        <template v-slot:activator="{}">
          <v-alert type="info" dark @click="copyLink">
            {{ link }}
          </v-alert>
        </template>
        <span>Link copied to clipboard !</span>
      </v-tooltip>

    </v-container>
    <v-layout>
      <v-flex class="pr-8">
        <v-alert v-if="alertVisibility" :type="alertType" timeount="3000" transition="fade-out">{{
            alertValue
          }}
        </v-alert>
        <v-autocomplete
            :label="loading ? 'Loading countries please wait.' : 'Choose a country'"
            v-model="selectedCountry"
            :items="getCountryList"
            :loading="loading"
            :value="getSelectedCountry"
            @change="updateSelectedCountry"
        >
        </v-autocomplete>
      </v-flex>

      <v-flex class="mr-8">
        <DatePicker label="Start date" @clicked="updateStartDate" :value="getRange.startDate"></DatePicker>
      </v-flex>

      <v-flex>
        <DatePicker label="End date" @clicked="updateEndDate" :value="getRange.endDate"></DatePicker>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import CountryTempsApi from "@/data/CountryTempsApi";
import {mapGetters, mapActions} from "vuex";
import DatePicker from "@/components/DatePicker";

export default {
  name: 'filters',
  components: {DatePicker},
  data() {
    return {
      loading: false,
      alertVisibility: false,
      alertType: '',
      alertValue: '',
      search: null,
      selectedCountry: '',
      linkCopied: false,
    }
  },
  computed: {
    ...mapGetters({
      getCountryList: 'getCountryList',
      getSelectedCountry: 'getSelectedCountry',
      getRange: 'getRange',
    }),
    link: function () {
      let url = this.$route.path;
      return `${url}?country=${this.getSelectedCountry}&start_date=${this.getRange.startDate}&end_date=${this.getRange.endDate}`
    }
  },
  mounted() {
    if (!this.getCountryList.length) {
      this.loading = true;
      let vm = this;
      CountryTempsApi.getCountryList().then(response => {
        this.updateCountryList(response.data);
        this.selectedCountry = this.getSelectedCountry;
      }).catch(() => {
        vm.alertValue = 'An error occurred while fetching country list from api.'
        vm.alertType = 'error'
        vm.alertVisibility = true;
      }).finally(() => {
        vm.loading = false;
      });
    }
  },
  methods: {
    ...mapActions({
      updateCountryList: 'updateCountryList',
      updateStartDate: 'updateStartDate',
      updateEndDate: 'updateEndDate',
      updateSelectedCountry: 'updateSelectedCountry',
    }),
    copyLink() {
      navigator.clipboard.writeText(this.link);
      this.linkCopied = true;
      let vm = this;
      setTimeout( () => {
        vm.linkCopied = false;
      }, 3000);
    }
  }
}
</script>
<style>
.info {
  cursor: pointer;
}
</style>
