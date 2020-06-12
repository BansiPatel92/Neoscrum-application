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
           <vue-instant-loading-spinner ref="Spinner"></vue-instant-loading-spinner>
        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators'
import userService from '../services/user.service.js'
import { environment } from '../../environments/environment.ts';
import VueInstantLoadingSpinner from 'vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue'
export default {
  name: "Register",
  components: {
    VueInstantLoadingSpinner
  },
  data() {
    return {
      username: "",
      email: "",
      profile: "",
      userservice: new userService(),
      baseUrl:""
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
       this.$refs.Spinner.show();
      let data = new FormData();
      data.append("user_name", this.username);
      data.append("user_email", this.email);
      data.append("profile_image", this.baseUrl+'/'+this.profile);

    

      this.userservice.Register('/registration',data)
      .then(response => {
        console.log('Register',response);
         this.$refs.Spinner.hide();
        })
        .catch(e => {
           this.$refs.Spinner.hide();
          console.log(e);
          this.errors.push(e);
        });
    }
  },
  mounted(){
this.baseUrl = environment.apiUrl;
  }
};
</script>

