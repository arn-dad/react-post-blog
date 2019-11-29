import React, { useState } from 'react';
import API from '../../api';
import Storage from '../../services/storage';
import './login.css';

const Login = (props) => {
  const [state, setState] = useState({ error: false, loading: false }); 
  const [data, setData] = useState({ email: '', password: '' });

  const handleInputChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value
    })
  }

  const handelSubmit = (e) => {
    e.preventDefault()
    if (!data.email.trim() || !data.password.trim()) {
      setState({ ...state, error: true })
      return;
    }
    API.people.login(data).then(respone => {
      return respone.json().then((data) => {
          Storage.set('pb-token', data.id );
          props.changeNav('WORKSPACE');
        return data
      })
    })
  }

  return (
    <div className="main-login login-root">
      <div className="login-page">
        <form className="login-form">
          <div className="form-group">
            <input onChange={handleInputChange} name="email" type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="form-group">
            <input onChange={handleInputChange} name="password" type="password" className="form-control" placeholder="Password" />
          </div>
          <button className="btn btn-primary" onClick={handelSubmit} role="button" >Login</button>
        </form>
      </div>
    </div>
  
  );
};

export default Login;