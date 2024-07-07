import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center'>
      <div className="md:flex-[0.5] px-20  py-5 items-center">
        {/* <img src={logo} className='w-32 cursor-pointer' alt="Logo" /> */}
        <h1 className='text-white w-32 cursor-pointer font-semibold justify-between items-center'>L u m e n S A F E</h1>
      </div>
        {/* <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index)=> (
            <NavbarItem key={item + index} title={item}/>
        ))} */}
        {/* <div className="bg-[#0d9488] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#1e40af]">Login</div> */}
        {/* </ul> */}
    </div>
  )
}

export default Navbar
