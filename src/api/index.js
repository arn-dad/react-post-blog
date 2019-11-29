import People from './people';
import Posts from './posts';

class API {
  constructor() {
    this.people = new People();
    this.posts = new Posts();
  }
}

export default new API()