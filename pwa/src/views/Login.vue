<template>
    <div class="login">
        <h3>Log In</h3>
        <button @click="login">Connection With Google</button>
    </div>
</template>

<script>
  import firebase from 'firebase';

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
                  () => this.$router.push({name: 'servers'}),
              );
            },
        )
        ;
      },
    },
  };
</script>