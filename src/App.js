import React, { useState } from 'react';
import './App.css';
import Loader from './Loder';

const App = () => {

  const [users, setUsers] = useState([]);
  const [loader, updateLoader] = useState(false);
  const loadUsers = async () => {
    updateLoader(true);
    let url = "https://reqres.in/api/users?page=1";
    const response = await fetch(url);
    const jsonResponse = await response.json();
    setUsers(jsonResponse.data);
    updateLoader(false);
    console.log(users);
  }


  return (
    <div className="App">
      <div className="navbar">
        <span>GetUsersThroughAPI</span><button onClick={loadUsers}>Get Users</button>
      </div>
      <header className="App-header">
        <ul className="card-container">
          {loader && <Loader />}
          {users.map(({ id, email, first_name, last_name, avatar }) => (<>

            <div className="card">
              <img src={avatar} alt={first_name} />
              <h4>{first_name} {last_name}</h4>
              <p className="title">{email}</p>
            </div>

          </>))}
        </ul>
      </header>
    </div>
  );
}

export default App;
