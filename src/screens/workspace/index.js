import React, { Component } from 'react';
import Storage from '../../services/storage';
import API from '../../api';

class Workspace extends Component {
  constructor(props){
    super(props);
    this.userId = Storage.get('pb-user').userId;
    this.state = {
      userData: { lastname: '', username: '', email: '' }
    }
  }
  
  componentDidMount() {
    API.people.getUser(this.userId).then((response) => {
      return response.json().then((data) => {
        this.setState({ userData: data })
      })
    })
  }
  render() {
    const { userData } = this.state;
    return (
      <div>
        Workspace 
        <span>{userData.username}</span>
      </div>
    );
  }
  
};

export default Workspace;