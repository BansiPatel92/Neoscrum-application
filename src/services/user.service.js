import Axios from 'axios';
import { environment } from '../../environments/environment.ts';

let registerHeader = {
  header: {
    "Content-Type": "multipart/form-data"
  }
};
export default class userService {
  constructor(){
  }
  addFeedback(RESOURCE_NAME, data) {
    return Axios.post(environment.apiUrl + RESOURCE_NAME,data);
  }
  Register(RESOURCE_NAME, data) {
    return Axios.post(environment.apiUrl + RESOURCE_NAME,data,registerHeader);
  }
  Login(RESOURCE_NAME, data) {
    return Axios.post(environment.apiUrl + RESOURCE_NAME, data);
  }
  getDashboardData(RESOURCE_NAME) {
    return Axios.get(environment.apiUrl + RESOURCE_NAME);
  }

}