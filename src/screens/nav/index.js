import React from 'react';
import Storage from '../../services/storage';


const Nav = (props) => {
  const { tab, onChange } = props;
  const token = Storage.get('pb-token');

  return (
    <header className="outline app-header">
      <nav>
        <button onClick={() => { onChange("HOME") }} type="button" className="btn btn-link">Home</button>
        {!token && <button onClick={() => { onChange("LOGIN") }} type="button" className="btn btn-link">Login</button>}
        {token && <button onClick={() => { onChange("WORKSPACE") }} type="button" className="btn btn-link">Workspace</button>}
        {token && <span className="welcome-label">Hi username</span>}
      </nav>
   </header>
  );
};

export default Nav;