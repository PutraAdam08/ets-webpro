import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
   login(Email, Password) {
    return axios
      .post(API_URL + "signin", {
        Email,
        Password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem("User", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("User");
  }

  register(Name, Email, Password) {
    return axios.post(API_URL + "signup", {
      Name,
      Email,
      Password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('User'));;
  }
}

export default new AuthService();
