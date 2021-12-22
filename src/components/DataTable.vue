<template>
  <div>
    <v-data-table
        :headers="headers"
        :items="rows"
        :loading="loading"
        class="elevation-1"
        :items-per-page="itemsPerPage"
    ></v-data-table>
  </div>
</template>

<script>
import TweetApi from "@/data/TweetApi";
export default {
  name: 'data-table',
  data () {
    return {
      itemsPerPage: 10,
      rows: [],
      loading: true,
      options: {},
      headers: [
        { text: 'Average Impact', align: 'start', value: 'average_impact_level' },
        { text: 'Count', value: 'tweet_count' },
        { text: 'Sentiment', value: 'sentiment' },
        { text: 'Date', sortable: false, value: 'date' },
      ],
    }
  },
  watch: {
    options: {
      handler () {
        this.getDataFromApi()
      },
      deep: true,
    },
  },
  mounted() {
    this.getDataFromApi();
  },
  methods: {
    getDataFromApi () {
      this.loading = true
      let vm = this;
      TweetApi.getTweets().then( response => {
        vm.rows = response.data
        vm.totalRows = response.data.length
      }).finally(() => {
        vm.loading = false
      });
    },
  },
}
</script>