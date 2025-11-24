import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import NotLoggedIn from './Notlogin';

export const Homepage = () => {

  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || 'null');

  function logout() {
    localStorage.removeItem('user');
    navigate('/');
  }

 if(!user){
  return <NotLoggedIn/>
 }

  return (
    <div className="grid min-h-screen place-items-center bg-slate-900">
      <div className="w-full max-w-3xl rounded-lg bg-linear-to-br from-fuchsia-600 to-indigo-500 text-white">
        <div className='flex justify-between'>
          <h2>Welcome, {user.name}</h2>
          <button className="bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold" onClick={logout}>Logout</button>

        </div>
        <p className='p-5  text-3xl text-center'>Welcome to Home Page</p>
      </div>
    </div>
  )
}




