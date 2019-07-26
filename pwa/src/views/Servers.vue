<template>
    <div class="login">
        <h3>Server</h3>
        <h3>{{serverList}}</h3>
    </div>
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