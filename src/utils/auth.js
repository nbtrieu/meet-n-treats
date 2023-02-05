import decode from "jwt-decode";

class AuthService {
  getUser() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token ? true : false;
  }
  // This function checks if local storage has the "auth_token"

  isTokenExpired(token) {
    // Decode the token to get its expiration time that was set by the server
    const decoded = decode(token);
    // If the expiration time is less than the current time (in seconds), the token is expired and we return `true`
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    // If token hasn't passed its expiration time, return `false`
    return false;
  }

  getToken() {
    return localStorage.getItem("auth_token");
  }

  login(token) {
    localStorage.setItem("auth_token", token);
    window.location.assign("/");
  }

  logout() {
    localStorage.removeItem("auth_token");
    window.location.reload();
  }
}

export default new AuthService();
