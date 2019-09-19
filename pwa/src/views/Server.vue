<template>
    <v-list two-line subheader>
        <v-subheader inset>Locations</v-subheader>
        <v-list-item
                v-for="(location, index) in locations"
                :key="location._id"
                @click=""
        >
            <v-list-item-avatar>
                <v-icon
                        :class="[location.iconClass]"
                        v-text="location.icon"
                ></v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>Localisation {{index}}</v-list-item-title>
                <v-list-item-subtitle>
                    <v-chip pill v-for="fertility in location.fertilityList">
                        <v-avatar small
                                  left
                                  color="blue"
                        >
                            {{fertility.ratio}}
                        </v-avatar>
                        {{fertility.itemType}}
                    </v-chip>
                </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon v-if="location.player">
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>

        <v-divider inset></v-divider>

        <v-subheader inset>Worker</v-subheader>

        <v-list-item
                v-for="worker in workers"
                :key="worker._id"
                @click=""
        >
            <v-list-item-avatar>
                <v-icon
                        :class="[worker.iconClass]"
                        v-text="worker.icon"
                ></v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{worker.workerName}}</v-list-item-title>
                <v-list-item-subtitle v-text="worker.subtitle"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
                <v-btn icon>
                    <v-icon color="grey lighten-1">mdi-information</v-icon>
                </v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script>
  export default {
    name: 'server',
    data() {
      return {};
    },
    computed: {
      locations() {
        return (this.$store.state.server[this.$route.params.id] &&
            this.$store.state.server[this.$route.params.id].locations) ?
            this.$store.state.server[this.$route.params.id].locations.map(
                l => ({
                  icon: 'folder',
                  iconClass: 'grey lighten-1 white--text',
                  title: 'Photos',
                  subtitle: 'Jan 9, 2014',
                  fertilityList: l.fertilityList,
                  player: l.player,
                }),
            ) :
            [];
      },
      workers() {
        return (this.$store.state.server[this.$route.params.id] &&
            this.$store.state.server[this.$route.params.id].workers) ?
            this.$store.state.server[this.$route.params.id].workers.map(
                w => ({
                  icon: 'assignment',
                  iconClass: 'blue white--text',
                  title: 'Photos',
                  subtitle: 'Jan 9, 2014',
                  workerName: w.workerName,
                }),
            ) :
            [];
      },
    },
    beforeMount() {
      this.$store.dispatch('getServer', this.$route.params.id).then(
          server => {
            this.$store.dispatch('getLocationList', server._id);
            this.$store.dispatch('getWorkerList', server._id);
          },
      );

    },
    methods: {},

  };
</script>