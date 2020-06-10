<template>
  <div>
    <h1 class="heading">
      <label class="neo">Neo</label>
      <label class="scrum">SCRUM</label>
    </h1>
    <div class="loginForm">
      <form @submit.prevent="login" class="shadow-lg p-3 mb-5 bg-white rounded loginForm">
        <fieldset>
          <legend>User-login</legend>
          <div class="form-group">
            <label for="email">Email:</label>
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter Email"
              name="email"
              v-model.trim="$v.email.$model" :class="{'is-invalid':$v.email.$error, 
              'is-valid':!$v.email.$invalid}"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback"><span v-if="!$v.email.required">Email is required</span></div>
          </div>
          <div class="form-group">
            <label for="pwd">Password:</label>
            <input
              type="password"
              class="form-control"
              id="password"
              placeholder="Enter Password"
              name="password"
               v-model.trim="$v.password.$model" :class="{'is-invalid':$v.password.$error, 
              'is-valid':!$v.password.$invalid}"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback"> <span v-if="!$v.password.required">Password is required.</span></div>
          </div>

          <button id="login" type="submit" class="btn btn-primary">Login</button>
          &nbsp;
          <button
            @click="$router.push('register')"
            class="btn btn-secondary"
          >Registration</button>
          <!-- <button id="register" class="btn btn-primary">Register</button> -->

          <!-- <button type="submit" class="btn btn-primary">Login</button>
          <a href="admin.html">Registration</a>-->
        </fieldset>
      </form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { required } from 'vuelidate/lib/validators'
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  validations: {
      email:{
          required
      },
      password:{
          required
      }
  },
  methods: {
    login() {
      axios
        .post(`http://180.149.241.208:3000/login`, {
          user_email: this.email,
          user_pass: this.password
        })
        .then(response => {
          console.log("response>>", response.data);
          this.$toasted.show(response.data.message).goAway(1500);
          const parsed = JSON.stringify(response.data);
          localStorage.setItem("currentuser", parsed);
          this.$router.push('/')
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
          this.$toasted.errors("Error", this.errors);
        });
    }
  }
};
</script>

