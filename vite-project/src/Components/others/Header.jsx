
// import { useState } from 'react';

// // const Header = ({data}) => {
 
// //   return (
// //     <div className='flex items-end justify-between'>
// //         <h1 className='text-2xl font-medium'>hello 👏<br /><span className='text-3xl font-semibold'>{data.firstName}</span></h1>
// //         <button className='bg-red-500 text-whikte px-5 py-2 rounded-smallingRounded'>Log Out</button>
// //     </div>
// //   )
// // }
// const Header = ({ data }) => {
//   const [ userName,seUserName] = useState('')
//   if(!data){
//     seUserName('Admin')
//   }else{
//     seUserName(data.firstName)
//   }
//   return (
//     <div className='flex items-end justify-between'>
//       <h1 className='text-2xl font-medium'>
//         hello 👏<br />
//         <span className='text-3xl font-semibold'>
//           {/* {data ? data.firstName : ''} */}
//           {userName}
//         </span>
//       </h1>
//       <button className='bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
//     </div>
//   );
// };


// export default Header


import { useState, useEffect } from 'react';

const Header = ({ data }) => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    // Update userName based on data when it changes
    if (!data) {
      setUserName('Admin');
    } else {
      setUserName(data.firstName);
    }
  }, [data]); // Dependency array ensures this runs only when 'data' changes

  const logOutUSER = ()=>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-blue-500'>
        hello 👏<br />
        <span className='text-3xl font-semibold'>
          {userName}
        </span>
      </h1>
      <button onClick={logOutUSER} className='bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  );
};

export default Header;
