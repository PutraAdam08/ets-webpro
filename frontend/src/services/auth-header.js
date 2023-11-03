export default function authHeader() {
    const User = JSON.parse(localStorage.getItem('User'));
  
    if (User && User.accessToken) {
      // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
      return { 'x-access-token': User.accessToken };       // for Node.js Express back-end
    } else {
      return {};
    }
  }