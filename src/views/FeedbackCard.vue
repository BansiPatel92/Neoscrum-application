<template>
  <div>
    <div class="row carddiv" v-if="this.FeedbackData.length">
      <div
        class="col-sm-12 col-md-4 col-lg-3 card1 shadow-lg p-3 mb-5 bg-white rounded"
        v-for="(item,index) in FeedbackData"
        :unique-key="true"
        :key="index"
      >
        <AddFeedback v-bind:data="item" />
      </div>
    </div>
  </div>
</template>
<script>
import AddFeedback from "./AddFeedback.vue";
// import { environment } from '../environments/environment.ts'
import userService from '../services/user.service.js'
// import axios from "axios";
export default {
  name: "FeedbackCard",
  components: { AddFeedback },
  data() {
    return {
      FeedbackData: [
        // {
        //   flags: false,
        //   receiver_id: 286,
        //   image_path: "2019-04-11T05-45-38.907Z10.jpeg",
        //   receiver_name: "CD",
        //   sender_id: 306
        // },
        // {
        //   flags: false,
        //   receiver_id: 229,
        //   image_path: "2019-04-11T05-45-38.907Z10.jpeg",
        //   receiver_name: "Sagar Shinde",
        //   sender_id: 306
        // },
        // {
        //   flags: false,
        //   receiver_id: 293,
        //   image_path: "2019-04-11T05-45-38.907Z10.jpeg",
        //   receiver_name: "Bansi Patel",
        //   sender_id: 306
        // }
      ],
      userservice: new userService()
    };
  },
  methods: {
    GetReceiverData() {
      alert(0);
      this.userservice.getDashboardData('/dashboard')
      .then(response => {
        console.log('Feedback card',response.data.data);
        this.FeedbackData = response.data.data;
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    },
  },
  mounted: function() {
    this.GetReceiverData();
  } 
};
</script>