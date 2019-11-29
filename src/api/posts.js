import { baseURL } from './url';

const routs = {
  get: 'posts',
}

class Posts {
  get() {
    return fetch(`${baseURL}${routs.get}`, {
      method: 'GET'
    });
  }
}

export default Posts;