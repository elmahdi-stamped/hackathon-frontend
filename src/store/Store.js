import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        startDate: '',
        endDate: '',
        countryList: [],
        stateList: [],
        selectedCountry: null,
    },
    getters: {
        getRange: state => {
            return {startDate: state.startDate, endDate: state.endDate};
        },
        getCountryList: state => {
            return state.countryList;
        },
        getStateList: state => country => {
            return state.stateList[country];
        },
        getSelectedCountry: state => {
            return state.selectedCountry;
        }
    },
    // are synchronous
    mutations: {
        setStartDate(state, value) {
            state.startDate = value;
        },
        setEndDate(state, value) {
            state.endDate = value;
        },
        setCountryList(state, value) {
            state.countryList = value;
        },
        setStateList(state, country, stateList) {
            state.stateList[country] = stateList
        },
        setSelectedCountry(state, value) {
            state.selectedCountry = value;
        }
    },
    // Actions can be asynchronous
    actions: {
        updateStartDate({commit}, value) {
            commit('setStartDate', value);
        },
        updateEndDate({commit}, value) {
            commit('setEndDate', value)
        },
        updateCountryList({commit}, value) {
            commit('setCountryList', value)
        },
        updateStateList({commit}, country, list) {
            commit('setStateList', country, list);
        },
        updateSelectedCountry({commit}, value) {
            commit('setSelectedCountry', value);
        }
    }
});

export default store;