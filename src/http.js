import axios from "axios";

//axios.defaults.headers.common["api_key"] = process.env.VUE_APP_WEATHER_API_KEY;
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000";

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    //Check if the error is an auth error and if so then logout the user out
    if (error.response.status == 401) {
        if (!(window.location.pathname === '/login')) { //If its not the login page then send the user to the login page
            window.location.href = "/logout";
        } else {
            return Promise.reject(error);
        }
    }
    return Promise.reject(error);
  });

export default axios;