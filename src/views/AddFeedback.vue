<template>
  <div>
    <div class="row carddiv">
      <div  v-for="item in FeedbackData" :key="item.receiver_id" class="col-sm-12 col-md-4 col-lg-3 card1 shadow-lg p-3 mb-5 bg-white rounded">
        <div class="card" >
          <img
            class="card-img-top"
            :src="item.image_path"
            width="20px"
            alt="Receiver's Image"
          />
          <div class="card-body">
            <form action>
              <h5 class="card-title">{{item.receiver_name}}</h5>
              <textarea class="card-text" id="textarea" required></textarea>
              <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                id="btn1"
                onclick="disableButton(this)"
              >Send Feedback</button>
              <p class="card-text">
                <small class="text-muted">Your feedback is important!!</small>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "AddFeedback",
  data(){
   return {
     FeedbackData:[]
   }
  },
  methods: {
    async GetReceiverData() {
    let currentuser = await JSON.parse(localStorage.getItem("currentuser"));
    let token = currentuser.token;
      let config = {
        headers: {
          "Authorization": token
        }
      };
      axios
        .get("http://180.149.241.208:3000/dashboard", config)
        .then(response => {
          this.FeedbackData = response.data.data;
        })
        .catch(e => {
          console.log(e);
          this.errors.push(e);
        });
    }
  },
  mounted: function() {
    this.GetReceiverData();
  }
};
</script>
<style scoped>
</style>