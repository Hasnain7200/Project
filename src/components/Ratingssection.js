import { fromJSON } from 'postcss';
import stars from "../assets/Group 152.png"
import star from "../assets/Group 152 (1).png"
import activity from "../assets/activity 1.png";
import piechart from "../assets/pie-chart 1.png";
import command from "../assets/command 1.png"

const Ratingssection = () => {
  return (
    <div className=' mt-24 flex items-center justify-center mx-auto w-[1440px] h-[541px] top-[1194px] bg-[#F9F9FE] '>

    {/* Left Part */}
      <div className='flex flex-col gap-20 w-[664px] h-[421px] top-[1254px] left-[130px]'>
      <h2 className='w-[617px] h-[122px] top-[1254px] left-[130px] font-inter font-semibold text-[50px] leading-[60.51px] text-[#191A15]'>How we support our pratner all over the world</h2>
      <p 
      className='w-[644px] h-[90px] top-[1406px] left-[130px] font-inter font-medium text-[16px] leaing-[30px] text-[#A6A6A6]'
      >SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing software, DBMS software, management software</p>
      
      <div className='flex gap-10'>
        <div className='w-[142px] h-[106px] top-[1569px] left-[130px]'>
           <img src={stars} alt='' loading='lazy' className='w-[142px] h-[26px] top-[1569px] left-[130px]'></img>
           <p className='w-[112px] h-[22px] top-[1613px] left-[130px] font-inter font-bold text-[18px] leading-[21.78px text-[#191A15]'>4.9/5 rating</p>
           <p className='w-[95px] h-[22px] top-[1653px] left-[130px] font-inter  font-bold text-[18px] leading-[21.78px] text-[#A6A6A6]'>databricks</p>
        </div>

        <div className='w-[142px] h-[106px] top-[1569px] left-[130px]'>
           <img src={star} alt='' loading='lazy' className='w-[142px] h-[26px] top-[1569px] left-[352px]'></img>
           <p className='w-[112px] h-[22px] top-[1613px] left-[352px] font-inter font-bold text-[18px] leading-[21.78px text-[#191A15]'>4.9/5 rating</p>
           <p className='w-[95px] h-[22px] top-[1653px] left-[352px] font-inter  font-bold text-[18px] leading-[21.78px] text-[#A6A6A6]'>databricks</p>
        </div>

      </div>
      </div>




    {/* Right part */}
      <div className='flex flex-col gap-5'>
      {/* Publishing */}
        <div className='flex gap-5 w-[509px] h-[137px] top-[1254px] left-[801px]'>
            <img src={activity} className='mt-3 w-[30px] h-[30px] top-[1269px] left-[816px]' alt='' loading='lazy'></img>
            <div className='mt-3'>
            <h2 className='w-[145px] h-[34px] top-[1257px] left-[882px] font-inter font-bold text-[28px] leading-[33.89px] text-[#191A15]'>Publishing</h2>
            <p
            className='w-[428px] h-[90px] top-[1301px] left-[882px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]' 
            >Plan, collaborate, and publishing your contetn that drivees meaningful engagement and growth for your barnd</p>
            </div>
        </div>
        {/* Analytics */}
        <div className='flex gap-5 w-[509px] h-[137px] top-[1254px] left-[801px]'>
            <img src={piechart} className='mt-7 w-[30px] h-[30px] top-[1436px] left-[817px]' alt='' loading='lazy'></img>
           
           <div className='mt-5'>
           <h2 className='w-[130px] h-[34px] top-[1424px] left-[882px] font-inter font-bold text-[28px] leading-[33.89px] text-[#191A15]'>Analytics</h2>
           <p
           className='w-[428px] h-[60px] top-[1468px] left-[882px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]'
           >Analyze your performance and create goegeous report</p>
           </div>
        </div>
        {/* Engagement */}
        <div className='flex gap-5 w-[509px] h-[137px] top-[1254px] left-[801px]'>
            <img src={command} className='mt-7 w-[30px] h-[30px] top-[1573px] left-[816px]' alt='' loading='lazy'></img>
         <div className='mt-5'>
         <h2
         className='w-[174px] h-[34px] top-[1561px] left-[882px] font-inter font-bold text-[28px] leading-[33.89px] text-[#191A15]'
         >Engagement</h2>
         <p
          className='w-[428px] h-[60px] top-[1605px] left-[882px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]'
         >Quiuckly navigate you anda engage with your adience</p>
         </div>
        </div>
      </div>


    </div>
  )
}

export default Ratingssection
