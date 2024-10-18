import React from 'react'

// const Header = ({data}) => {
 
//   return (
//     <div className='flex items-end justify-between'>
//         <h1 className='text-2xl font-medium'>hello 👏<br /><span className='text-3xl font-semibold'>{data.firstName}</span></h1>
//         <button className='bg-red-500 text-whikte px-5 py-2 rounded-smallingRounded'>Log Out</button>
//     </div>
//   )
// }
const Header = ({ data }) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium'>
        hello 👏<br />
        <span className='text-3xl font-semibold'>
          {data ? data.firstName : ''}
        </span>
      </h1>
      <button className='bg-red-500 text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  );
};


export default Header