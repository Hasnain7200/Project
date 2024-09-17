import React from 'react';
import unsplash from "../assets/unsplash.png"
import intercom from "../assets/intercom.png"
import notion from "../assets/notion.png"
import grammarly from "../assets/grammarly.png"
import descript from "../assets/descript.png"

const Companies = () => {
  return (
    <div className=' mt-[170px] flex flex-col mx-auto justify-center items-center w-[1076px] h-[146px] top-[918px] left-[130px]'>
      <h2 className='w-[720px] h-[48px] top-[918px] left-[360px] font-inter font-bold text-[40px] leading-[48,41] text-center'>More than 25,000 teams use Collabs</h2>
      <div className='flex justify-between gap-10 mt-10 w-[1076px] h-[38px] top-[1026px] left-[130px]'>
        <img src={unsplash} alt='' loading='lazy'></img>
        <img src={intercom} alt='' loading='lazy'></img>
        <img src={notion} alt='' loading='lazy'></img>
        <img src={grammarly} alt='' loading='lazy'></img>
        <img src={descript} alt='' loading='lazy'></img>
      </div>
    </div>
  )
}

export default Companies
