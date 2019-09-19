<template>
    <v-card
    >
        <v-img
                class="white--text"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
        </v-img>

        <v-card-text>
            <span>Login</span>
        </v-card-text>

        <v-card-actions>
            <v-btn @click="login"
                   text
                   color="orange"
            >
                Log In With Google
            </v-btn>
        </v-card-actions>
    </v-card>


    <!--    <div class="login">
            <h3>Log In</h3>
            <button>Connection With Google</button>
        </div>-->
</template>

<script>
  import firebase from 'firebase';
  import localforage from 'localforage';

  export default {
    name: 'login',
    data() {
      return {};
    },
    methods: {
      login() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(
            (result) => {
              this.$store.dispatch('signUp', result).then(
                  () => {
                    localforage.setItem('USER_UID', result.user.uid, () => {
                      this.$router.push({name: 'servers'})
                    });
                  }
              );
            },
        )
        ;
      },
    },
  };
</script>