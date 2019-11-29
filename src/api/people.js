import { baseURL } from './url';

const routs = {
  get   : 'people/',
  login : 'people/login'
}

class People {
  login(body) {
    return fetch(`${baseURL}${routs.login}`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });
  }

  get() {
    return fetch(`${baseURL}${routs.get}`, {
      method: 'GET'
    });
  }

  getUser(userId) {
    return fetch(`${baseURL}${routs.get}${userId}`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    });
  }
}

export default People;