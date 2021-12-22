<template>
  <v-app id="inspire">
    <v-navigation-drawer
        v-model="drawer"
        :clipped="clipped"
        app
        dark
    >
      <v-list>
        <v-list-item-group
            v-model="group"
        >
          <router-link to="/home">
            <v-list-item>
              <v-list-item-title>
                Home
              </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/datatable">
            <v-list-item>
              <v-list-item-title>
                Data Table
              </v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue JS Front End - Stamped</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
import Moment from 'moment';

export default {
  data: () => ({
    drawer: false,
    group: null,
    clipped: false
  }),
  mounted() {
    // Initialize data from url.
    let startDate = this.$route.query.start_date || new Moment().format('YYYY-MM-DD');
    let endDate = this.$route.query.end_date || new Moment().subtract(30, 'days').format('YYYY-MM-DD');
    let country = this.$route.query.country || null;

    if (startDate !== undefined && startDate !== 'null') {
      this.updateStartDate(startDate);
    }
    if (endDate !== undefined && endDate !== 'null') {
      this.updateEndDate(endDate);
    }
    if (country !== undefined && country !== 'null') {
      this.updateSelectedCountry(country);
    }
  },
  watch: {
    group () {
      this.drawer = false;
    }
  },
  methods: {
    ...mapActions({
      updateStartDate: 'updateStartDate',
      updateEndDate: 'updateEndDate',
      updateSelectedCountry: 'updateSelectedCountry',
    })
  }
}
</script>