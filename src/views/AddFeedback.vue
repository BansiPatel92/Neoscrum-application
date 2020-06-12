<template>
  <div>
    <div class="card" :key="data.receiver_id">
      <img
        class="card-img-top"
        :src="`${this.baseUrl}/${data.image_path}`"
        width="20px"
        alt="Receiver's Image"
      />
      <div class="card-body">
        <form v-bind:key="data.receiver_id">
          <h5 class="card-title">{{data.receiver_name}}</h5>
          <textarea
            class="card-text"
            :key="data.receiver_id"
            :id="data.receiver_id"
            v-model="feedback"
          ></textarea>
          <button
            class="btn btn-outline-success my-2 my-sm-0"
            :id="data.receiver_id"
            @click.prevent="sendFeedback(data.receiver_id, feedback)"
          >Send Feedback</button>
           <vue-instant-loading-spinner ref="Spinner"></vue-instant-loading-spinner>
          <p class="card-text">
            <small class="text-muted">Your feedback is important!!</small>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
import { environment } from "../../environments/environment.ts";
import userService from "../services/user.service.js";
import VueInstantLoadingSpinner from 'vue-instant-loading-spinner/src/components/VueInstantLoadingSpinner.vue'
export default {
  name: "AddFeedback",
  props: ["data"],
  components: {
    VueInstantLoadingSpinner
  },
  data() {
    return {
      feedback: "",
      baseUrl: "",
      userservice: new userService()
    };
  },
  methods: {
    sendFeedback(id, feedback) {
      this.$refs.Spinner.show();
      let obj = {
        receiver_id: id,
        feedback_data: feedback
      };

      this.userservice
        .addFeedback("/addfeedback", obj)
        .then(response => {
          console.log('Add feedback',response);
          this.$toasted.show(response.data.data.message).goAway(1500);
           this.$refs.Spinner.hide();
        })
        .catch(e => {
          console.log(e);
          this.$toasted.show(e.message).goAway(1500);
           this.$refs.Spinner.hide();
          // this.errors.push(e);
        });
    }
  },
  mounted: function() {
    this.baseUrl = environment.apiUrl;
  }
};
</script>
<style scoped>
</style>