<template>
  <div>
    <h1 class="heading">
      <label class="neo">Neo</label>
      <label class="scrum">SCRUM</label>
    </h1>
    <div class="loginForm">
      <form @submit.prevent="register" class="shadow-lg p-3 mb-5 bg-white rounded loginForm">
        <fieldset>
          <legend>Admin</legend>
          <div class="form-group">
            <label for="username">Name:</label>
            <input
              type="text"
              class="form-control"
              id="username"
              placeholder="Enter Username"
              name="username"
              v-model.trim="$v.username.$model" :class="{'is-invalid':$v.username.$error, 
              'is-valid':!$v.username.$invalid}"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback"><span v-if="!$v.email.required">Username is required</span></div>
          </div>
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
            <label for="profile">Profile Image:</label>
            <input
              type="file"
              class="form-control"
              id="profile"
              name="profile"
              required
              accept="image/*"
              @change="filesChange"
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback"><span v-if="!$v.profile.required">Please upload profile picture</span></div>
          </div>
          <button @click="$router.push('login')" class="btn btn-secondary">Login</button>
          &nbsp;
          <button id="register" type="submit" class="btn btn-primary">Register</button>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import axios from "axios";
import { required } from 'vuelidate/lib/validators'
export default {
  name: "Register",
  components: {
    // HelloWorld
  },
  data() {
    return {
      username: "",
      email: "",
      profile: ""
    };
  },
  validations: {
      username:{
        required
      },
      email:{
          required
      },
      profile:{
          required
      }
  },
  methods: {
    filesChange(event) {
      const image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(image);
      reader.onload = e => {
        this.profile = e.target.result;
      };
    },
    register() {
      let data = new FormData();
      data.append("user_name", this.username);
      data.append("user_email", this.email);
      // data.append("name", "my-file");
      data.append("profile_image", this.profile);

      let config = {
        header: {
          "Content-Type": "multipart/form-data"
        }
      };
      axios
        .post("http://180.149.241.208:3000/registration", data, config)
        .then(response => {
          console.log("response>>", response);
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    }
    // },
  }
};
</script>

