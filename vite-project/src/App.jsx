// import React, { useContext, useEffect, useState } from 'react';
// import Login from './Components/Auth/Login';
// import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
// import AdminDashboard from './Components/Dashboard/AdminDashBoard';
// import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
// import { AuthContext } from './context/AuthProvider';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loggedInUserData, setloggedInUserData] = useState(null)
//   const authData = useContext(AuthContext);

//   // useEffect(() => {
//   //   const loggedInUser = localStorage.getItem('loggedInUser');
//   //   if (loggedInUser) {
//   //     const parsedUser = JSON.parse(loggedInUser);
//   //     setUser(parsedUser.role);
//   //   }
//   // }, [authData]);

//   const handleLogin = (email, password) => {
//     if (email === 'admin@me.com' && password === '123') {
//       const adminUser = { role: 'admin' }; // Corrected role assignment
//       setUser('admin');
//       localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
//       console.log('Logged in as admin');
//     } else if (authData) {
//       const employeeUser = { role: 'employee' }; // Corrected role assignment
//       const employee = authData.employee.find((e) => email === e.email && e.password === password);
//       if(employee){
//           setloggedInUserData(employee)
//       }
//       setUser('employee');
//       localStorage.setItem('loggedInUser', JSON.stringify(employeeUser));
//       console.log('Logged in as employee');
//     } else {
//       alert('Invalid credentials');
//     }
//   };

//   useEffect(() => {
//     setLocalStorage();
//     getLocalStorage(); // Optional, depending on your use case
//   }, []);

//   return (
//     <>
//       {!user ? (
//         <Login handleLogin={handleLogin} />
//       ) : user === 'admin' ? (
//         <AdminDashboard />
//       ) : ( user == 'employee' ?
//         <EmployeeDashboard data={loggedInUserData} />
//       )}
//     </>
//   );
// };

// export default App;



import React, { useContext, useEffect, useState } from 'react';
import Login from './Components/Auth/Login';
import EmployeeDashboard from './Components/Dashboard/EmployeeDashboard';
import AdminDashboard from './Components/Dashboard/AdminDashBoard';
import { getLocalStorage, setLocalStorage } from './utils/LocalStorage';
import { AuthContext } from './context/AuthProvider';

const ROLES = {
  ADMIN: 'admin',
  EMPLOYEE: 'employee',
};

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser);
      setUser(parsedUser.role);
      if (parsedUser.role === ROLES.EMPLOYEE) {
        const employee = authData.employee.find(e => e.role === ROLES.EMPLOYEE);
        setLoggedInUserData(employee);
      }
    }
  }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      const adminUser = { role: ROLES.ADMIN };
      setUser(ROLES.ADMIN);
      localStorage.setItem('loggedInUser', JSON.stringify(adminUser));
      console.log('Logged in as admin');
    } else if (authData) {
      const employee = authData.employee.find(e => email === e.email && e.password === password);
      if (employee) {
        setLoggedInUserData(employee);
        setUser(ROLES.EMPLOYEE);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: ROLES.EMPLOYEE }));
        console.log('Logged in as employee');
      } else {
        alert('Invalid credentials');
      }
    }
  };

  useEffect(() => {
    setLocalStorage();
    getLocalStorage(); // Optional, depending on your use case
  }, []);

  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === ROLES.ADMIN ? (
        <AdminDashboard  />
      ) : (
        user === ROLES.EMPLOYEE && <EmployeeDashboard  data={loggedInUserData} />
      )}
    </>
  );
};

export default App;

