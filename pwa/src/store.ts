import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {},
        serverList: [],
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
            });
        },
    },
});
