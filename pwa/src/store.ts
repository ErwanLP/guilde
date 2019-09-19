import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        serverList: [],
        server: {},
        host: undefined,
        axiosInstance: undefined,
    },
    mutations: {
        SET_USER(state, user) {
            state.user = user;
        },
        SET_SERVER_LIST(state, serverList) {
            state.serverList = serverList;
        },
        SET_SERVER(state, server) {
            Vue.set(state.server, server._id, server)
        },
        SET_LOCATION_LIST(state, payload) {
            Vue.set(state.server[payload.serverId], 'locations', payload.locations)
        },
        SET_WORKER_LIST(state, payload) {
            Vue.set(state.server[payload.serverId], 'workers', payload.workers)
        },
        EDIT_HOST(state, payload) {
            state.host = payload;
            state.axiosInstance = axios.create({
                baseURL: state.host,
            });
        },
    },
    actions: {
        signUp({commit, state}, userData) {
            return state.axiosInstance.post('users/sign-up',
                {
                    uid: userData.user.uid,
                    displayName: userData.user.displayName,
                    photoURL: userData.user.photoURL,
                },
            ).then((r) => r.data).then((user) => {
                commit('SET_USER', user);
            });
        },
        getServerList({commit, state}) {
            return state.axiosInstance.get('servers',
                {},
            ).then((r) => r.data).then((servers) => {
                commit('SET_SERVER_LIST', servers);
                return servers
            });
        },
        getServer({commit, state}, id) {
            return state.axiosInstance.get('servers/' + id,
                {},
            ).then((r) => r.data).then((server) => {
                commit('SET_SERVER', server);
                return server
            });
        },
        getLocationList({commit, state}, id) {
            return state.axiosInstance.get('servers/' + id + '/locations/',
                {},
            ).then((r) => r.data).then((locations) => {
                commit('SET_LOCATION_LIST', {
                    serverId: id,
                    locations: locations
                });
            });
        },
        getWorkerList({commit, state}, id) {
            return state.axiosInstance.get('servers/' + id + '/workers/',
                {},
            ).then((r) => r.data).then((worker) => {
                commit('SET_WORKER_LIST', {
                    serverId: id,
                    workers: worker
                });
            });
        },
    },
});
