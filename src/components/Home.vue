<template>
    <v-container class="fill-height">
      <v-row column>
        <v-col cols="12" class="pb-5">
          <Filters />
        </v-col>
          <v-col cols="8" class="chart-max-height">
            <LineChart v-if="tweetsLoaded" :datasets="tweetsDataSet"></LineChart>
            <Loading v-else />
          </v-col>
      </v-row>

    </v-container>
</template>

<script>
import Loading from "@/components/Loading";
import Filters from "@/components/Filters";
import LineChart from "@/components/Charts/LineChart";
import { mapGetters } from "vuex";

export default {
  name: 'home',
  data() {
    return {
      loaded: false,
      tweetsLoaded: false,
      tweets: null,
      tweetsDataSet: null,
    }
  },
  computed: {
    ...mapGetters(['getSelectedCountry', 'getRange']),
  },
  methods: {
  },
  mounted() {
    let average_impact = [];
    let sentiment = [];
    let tweet_count = [];
    for(let i = 0; i < 100; i++) {
      average_impact.push(Math.floor(Math.random() * 50));
      sentiment.push(Math.floor(Math.random() * 50));
      tweet_count.push(Math.floor(Math.random() * 50));
    }
    this.tweetsDataSet = [
      {
        label: 'Average Impact',
        data: average_impact,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      },
      {
        label: 'Sentiment',
        data: sentiment,
        fill: false,
        borderColor: 'rgb(192,75,79)',
        tension: 0.1
      },
    ]
    this.tweetsLoaded = true;
  },
  components: {
    LineChart,
    Loading,
    Filters,
  },
}
</script>
<style>
.chart-max-height {
  max-height: 300px;
}
</style>