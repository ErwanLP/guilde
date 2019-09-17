<template>
    <v-list three-line>
        <template>
            <v-subheader> Server List</v-subheader>
            <v-divider></v-divider>
            <v-list-item
                    v-for="(server, i) in serverList"
                    :key="i"
                    @click=""
            >
                <v-list-item-avatar>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title>Server  {{i}}</v-list-item-title>
                    <v-list-item-subtitle v-html="server._id"></v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </template>
    </v-list>
</template>

<script>
  export default {
    name: 'server',
    data() {
      return {};
    },
    computed: {
      serverList() {
        return this.$store.state.serverList;
      },
    },
    beforeMount() {
      this.$store.dispatch('getServerList').then(
          () => this.$router.push({name: 'servers'}),
      );
    },
    methods: {},

  };
</script>