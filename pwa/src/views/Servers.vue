<template>
    <v-list three-line>
        <template>
            <v-subheader> Server List</v-subheader>
            <v-divider></v-divider>
            <v-list-item
                    v-for="(server, i) in serverList"
                    :key="i"
                    @click="goServer(server)"
            >
                <v-list-item-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Server {{i}}</v-list-item-title>
                    <v-list-item-subtitle v-html="server._id"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</template>

<script>
  export default {
    name: 'servers',
    data() {
      return {};
    },
    computed: {
      serverList() {
        return this.$store.state.serverList;
      },
    },
    beforeMount() {
      this.$store.dispatch('getServerList')
    },
    methods: {
      goServer(server) {
        this.$router.push({name: 'server', params: {id: server._id}});
      },
    },

  };
</script>