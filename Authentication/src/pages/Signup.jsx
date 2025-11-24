// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { apiPost } from '../utils/api';
// const Signup = () => {
//   const [name, setName] = useState('');
//   const [lname, setLname] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [msg, setMsg] = useState(null)
//   const navigate = useNavigate();



//   async function handle(e) {
//     e.preventDefault();
//     setMsg(null);
//     try {
//       await apiPost('/auth/signup', { name, email, password });
//       // auto-login for demo
//       const login = await apiPost('/auth/login', { email, password });
//       localStorage.setItem('user', JSON.stringify({ id: login.id, name: login.name, email: login.email }));
//       navigate('/welcome');
//     } catch (err) {
//       setMsg(err?.body?.message || 'Signup failed');
//     }
//   }
//   return (

//     <form className='mx-auto ' onSubmit={handle}>
//       <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
//         <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: 1000 }}>
//           <div className="md:flex w-full">
//             {/* <img src="" alt="" /> */}
//             <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
//               <div className="text-center mb-10">
//                 <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
//                 <p>Enter your information to register</p>
//               </div>
//               <div>
//                 <div className="flex -mx-3">
//                   <div className="w-1/2 px-3 mb-5">
//                     <label htmlFor className="text-xs font-semibold px-1">First name</label>
//                     <div className="flex">
//                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
//                       <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
//                     </div>
//                   </div>
//                   <div className="w-1/2 px-3 mb-5">
//                     <label htmlFor className="text-xs font-semibold px-1">Last name</label>
//                     <div className="flex">
//                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-account-outline text-gray-400 text-lg" /></div>
//                       <input type="text" value={lname} onChange={e => setLname(e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="Smith" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex -mx-3">
//                   <div className="w-full px-3 mb-5">
//                     <label htmlFor className="text-xs font-semibold px-1">Email</label>
//                     <div className="flex">
//                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-email-outline text-gray-400 text-lg" /></div>
//                       <input
//                         type="email"
//                         placeholder="Email"
//                         value={email}
//                         onChange={e => setEmail(e.target.value)}
//                         className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
//                       />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex -mx-3">
//                   <div className="w-full px-3 mb-5">
//                     <label htmlFor className="text-xs font-semibold px-1">Password</label>
//                     <div className="flex">
//                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
//                       <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex -mx-3">
//                   <div className="w-full px-3 mb-12">
//                     <label htmlFor className="text-xs font-semibold px-1">Confirm Password</label>
//                     <div className="flex">
//                       <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"><i className="mdi mdi-lock-outline text-gray-400 text-lg" /></div>
//                       <input type="password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="************" />
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex -mx-3">
//                   <div className="w-full px-3 mb-5">
//                     <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold">REGISTER NOW</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {msg && <div style={{ color: 'red', marginTop: 10 }}>{msg}</div>}
//     </form>

//   )
// }

// export default Signup











// // <!-- component -->
// // <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.x.x/dist/alpine.js" defer></script>
// // <script src="https://cdnjs.cloudflare.com/ajax/libs/zxcvbn/4.4.2/zxcvbn.js"></script>

// // <style>@import url('https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css')</style>





import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiPost } from '../utils/api';

const Signup = () => {
  const [name, setName] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState(null);
  const navigate = useNavigate();

  async function handle(e) {
    e.preventDefault();
    setMsg(null);

    try {
      await apiPost('/signup', { name, email, password });

      const login = await apiPost('/login', { email, password });

      localStorage.setItem("user", JSON.stringify(login));
      navigate('/login');

    } catch (err) {
      setMsg(err?.body?.message || "Signup failed");
    }
  }

  return (
    <form className="mx-auto" onSubmit={handle}>
      <div className="min-w-screen min-h-screen bg-gray-900 flex items-center justify-center px-5 py-5">
        <div className="bg-gray-100 text-gray-500 rounded-3xl shadow-xl w-full overflow-hidden" style={{ maxWidth: 1000 }}>
          <div className="md:flex w-full">
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
              </div>

              <div>

                {/* First + Last Name */}
                <div className="flex -mx-3">
                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500"
                    />
                  </div>

                  <div className="w-1/2 px-3 mb-5">
                    <label className="text-xs font-semibold px-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Last Name"
                      value={lname}
                      onChange={e => setLname(e.target.value)}
                      className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="mb-5 px-3">
                  <label className="text-xs font-semibold px-1">Email</label>
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500"
                  />
                </div>

                {/* Password */}
                <div className="mb-5 px-3">
                  <label className="text-xs font-semibold px-1">Password</label>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    className="w-full pl-3 py-2 rounded-lg border-2 border-gray-200 focus:border-indigo-500"
                  />
                </div>

                <div className="px-3">
                  <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold">
                    REGISTER NOW
                  </button>
                  {msg && <div style={{ color: "red", marginTop: 10 }}>{msg}</div>}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </form>
  );
};

export default Signup;

