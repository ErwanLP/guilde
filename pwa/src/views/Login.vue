<template>
    <div class="login">
        <h3>Sign In</h3>
        <button @click="login">Connection With Google</button>
    </div>
</template>

<script>
  import firebase from 'firebase';

  export default {
    name: 'login',
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      login() {
        const provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithPopup(provider).then(
            (result) => {
              this.$store.dispatch('signUp', result);
            },
        )
        ;
      },
    },
  };
</script>

<style scoped>  /* "scoped" attribute limit the CSS to this component only */
.login {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}

p {
    margin-top: 40px;
    font-size: 13px;
}

p a {
    text-decoration: underline;
    cursor: pointer;
}
</style>