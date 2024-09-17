import React from 'react'

const Navbar = () => {
  return (
    <div className="relative flex  mx-auto ml-2 items-center justify-between  w-11/12  max-w-[1180px] h-[40px] top-[40px] left-[130px]  rounded-[10px]">
    {/* Heading of Navbar */}
    <h2 className=" w-[160px] h-[30px] top-[40px] left-[130px] font-inter font-semibold text-[50px] leading-[30px] text-[#54BD95]">
      Biccas
    </h2>

    {/* navbar content */}

    <nav className=" w-[408px] h-[22px] top-[49px] left-[629px]">
      <ul className="flex flex-row items-center justify-center gap-5 mx-auto">
        <li className="w-[51px] h-[22px] top-[49px] left-[629px] font-inter font-medium text-[18px] leading-[21.78px] text-[#000000]">
          Home
        </li>
        <li className="w-[61px] h-[19px] top-[51px] left-[720px] font-inter font-medium tetx-[16px] leading-[19.36px] text-[#A6A6A6]">
          Product
        </li>
        <li className="w-[31px] h-[19px] top-[51px] left-[821px] font-inter font-medium tetx-[16px] leading-[19.36px] text-[#A6A6A6]">
          FAQ
        </li>
        <li className="w-[34px] h-[19px] top-[51px] left-[829px] font-inter font-medium tetx-[16px] leading-[19.36px] text-[#A6A6A6]">
          Blog
        </li>
        <li className="w-[71px] h-[19px] top-[51px] left-[966px] font-inter font-medium tetx-[16px] leading-[19.36px] text-[#A6A6A6]">
          About Us
        </li>
      </ul>
    </nav>

    {/* Buttons */}
    <div className="flex items-center gap-5 w-[143px] h-[40px] top-[40px] left-[1167px] rounded-[10px]">
      <buttons className=" w-[43px] h-[19px] top-[51px] left-[1167px] font-inter font-medium font-[16px] leading-[19.36px] text-[#A6A6A6]">
        Login
      </buttons>
      <buttons className="flex items-center justify-center w-[80px] h-[40px] top-[40px] left-[1230px] rounded-[10px] font-inter font-medium text-[16px] text-[#F8F8FA] leading-[19.36px] bg-[#54BD95]">
        Sign Up
      </buttons>
    </div>

    <div className="absolute  w-[634px] h-[634px] top-[-364px] left-[581px] bg-[#FFD6D6] bg-opacity-5"></div>
  </div>
  )
}

export default Navbar
