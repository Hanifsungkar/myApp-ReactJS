// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useSelector, useDispatch } from 'react-redux'; 
import { fetchUsers } from './store/action';

function App() {
  const users = useSelector((state) => state.users)
  const dispatch = useDispatch()
  
  const handleFetchUsers = () => {
    dispatch(fetchUsers())
  }
 
  return (
    <div className='container'>
     <h1>User data</h1>
      <button className='btn btn-primary' onClick={handleFetchUsers}> Get Users </button>

     <table className='table table-stiped table-bordered'>
      <thead className='table-dark'>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map((user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          )))
        }
      </tbody>
     </table>
    </div>
  )
}

export default App
