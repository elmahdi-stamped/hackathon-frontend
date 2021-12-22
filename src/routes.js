import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from "@/components/Home";
import DataTable from "@/components/DataTable";
Vue.use(VueRouter);

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/datatable',
        name: 'DataTable',
        component: DataTable
    },
];

// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router;