<template>
    <form @submit.prevent="handleLogin">
      <div>
        <label>Username:</label>
        <input v-model="userName" type="text" required />
      </div>
      <div>
        <label>Password:</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">Login</button>
      <button>Signup</button>
    </form>
  </template>
  
  <script>
  import axios from "axios";
  import ConstantURL from '@/script/resources/ConstantURL';
  export default {
    data() {
      return {
        userName: '',
        password: '',
      };
    },
    methods: {
      handleLogin() {
        try {
          const me = this;
          axios
          .get(`${ConstantURL.BaseDomain}Users/login`, {
            params: {
              userName: me.userName,
              password: me.password
            }
          })
          .then(res => {
            if(res) {
              this.$router.push('/')
            }
          })
          .catch(err => {
              console.error(err); 
          })
        } catch (error) {
            console.log(error);
        }
      },
    },
  };
  </script>
  