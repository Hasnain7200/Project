import React from "react";
import vector32 from "../assets/Vector 32.png";
import play from "../assets/Play.png";
import heroimg from "../assets/Frame 46.png";
import tick from "../assets/tick.png";
import tick2 from "../assets/Vector 25.png";
import bar from "../assets/bar-chart-2 1.png";
import message from "../assets/Group 48.png";
import card from "../assets/Frame 45.png";
import database from "../assets/Group 59.png"

const HeroSection = () => {
  return (
    <div className=" flex mx-auto w-[1291.68px] h-[578px] mt-[130px] top-[300px] left-[120px]">
      {/* Left Part */}
      <div className="flex flex-col gap-10 w-[555px] h-[578px] top-[210px] left-[130px]">
        <h2 className="w-[555px] h-[270px] top-[210px] left-[130px] font-inter font-extrabold text-[80px] leading-[90px] text-[#191A15]">
          We’re here to Increase your Productivity
        </h2>
        {/* image of the line */}
        <img
          src={vector32}
          className="w-[479px] h-[26px] top-[510px] left-[130px]"
          alt="vector-img"
          loading="lazy"
        ></img>

        {/* text part */}
        <p className="w-[461px] h-[90px] top-[586px] left-[130px] font-inter font-medium text-[18px] leading-[30px] text-[#000000]">
          Let's make your work more organize and easily using the Taskio
          Dashboard with many of the latest featuresin managing work every day.
        </p>

        {/* buttons */}
        <div className="flex gap-5">
          {/* button1 */}
          <div className="flex justify-center items-center w-[Hug(165px)] h-[Hug(62px)] top-[726px] left-[130px] rounded-[40px] gap-[10px] bg-[#54BD95] pt-[20px] pr-[30px] pb-[20px] pl-[30px]">
            <p className="w-[105px] h-[22px] font-inter font-medium text-[15px] leading-[21.78px] text-[#FFFFFF]">
              Try Free trial
            </p>
          </div>

          {/* Button2 */}
          <div className="flex items-center w-[Hug(152px)] h-[Hug(40px)] top-[737px] left-[335px] gap-[14px]">
            <img
              src={play}
              className="w-[40px] h-[40px]"
              alt="play-button"
              loading="lazy"
            ></img>
            <p className="w-[98px] h-[22px] font-inter font-medium text-[18px] leading-[21.78px] text-[#191A15]">
              View Demo
            </p>
          </div>
        </div>
      </div>

      {/* Ellipse38 */}
      <div className=" w-[634px] h-[634px] top-[219px] left-[376px] bg-[#FFFFFF]"></div>

      {/* Right Part */}
      <div className=" flex flex-col w-[701.68px] h-[558.99px] top-[210px] left-[720] border border-[#FFFFFF]">
        {/* Person img */}
        <img
          src={heroimg}
          alt="hero-img"
          className=" mt-0 absolute flex w-[410px] h-[526px] top-[210px] left-[900px] rounded-[10px] bg-[#52BD94]"
        ></img>

        {/* amount */}
        <div className="absolute flex justify-between  w-[262px] h-[78px] top-[240px] left-[720px] rounded-[10px] bg-[#FFFFFF]">
          <div className="flex flex-col ml-4 mt-3 gap-1">
            <p className="w-[77px] h-[18px] top-[254px] left-[738px] font-inter font-normal text-[12px] leading-[14.52px] text-[#A9A7B6]">
              Enter amount
            </p>
            <p className="w-[70px] h-[18px] top-[280px] left-[738px] font-inter font-medium text-[16px] leading-[19.36px] text-[#000000]">
              $450..00
            </p>
          </div>

          {/* Line */}
          <div className=" w-[227px] h-[1px] top-[303px] left-[738px] text-[#EEEEEE]"></div>
          {/* Send button */}
          <div className=" mt-7 mr-5 flex items-center justify-center w-[100px] h-[28px] top-[263px] left-[901px] rounded-[40px] bg-[#52BD94]">
            <p className="w-[32px] h-[18px] top-[268px] left-[917px] font-inter font-medium text-[13px] leading-[15.73px] text-[#FFFFFF]">
              Send
            </p>
          </div>
        </div>

        {/* tick */}
        <div className="flex items-center justify-center">
          <img
            src={tick}
            className="absolute w-[40px] h-[40px] top-[390.35px] left-[840px] rounded-[10px] rotate-[15]"
            alt=""
          ></img>
          <img
            src={tick2}
            className=" absolute w-[12px] h-[8px] top-[403px] left-[855px] "
            alt=""
          ></img>
        </div>

        {/* Income */}
        <div className="absolute w-[138px] h-[70px] top-[631px] left-[824px] rounded-[10px] bg-[#FFFFFF]">
          <div className=" flex justify-evenly w-[114px] h-[43px] top-[644px] left-[836px]">
            <div className="flex flex-col gap-3">
              <p className="mt-4 w-[73px] h-[15px] top-[644px] left-[836px] font-inter font-normal text-[12px] leading-[14.52px] text-[#A9A7B6]">
                Total Income
              </p>
              <p className="w-[65px] h-[19px] top-[668px] left-[837px] font-inter font-medium text-[16px] leading-[19.36px] text-[#000000]">
                $245.00
              </p>
            </div>
            {/* icon */}
            <div>
              <img
                src={bar}
                className=" mt-10 w-[20px] h-[20px] top-[667px] left-[930px]"
                alt=""
                loading="lazy"
              ></img>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="">
            <img src={message} className="absolute w-[40px] h-[40px] top-[720px] left-[1224.35px] rotate-[-15]" alt="" loading="lazy"></img>
        </div>

        {/* Credit Card */}
        <div className="">
            <img src={card} className="absolute w-[146px] h-[188px] top-[500px] left-[1280.66px] rounded-[10px] rotate-[-15]" alt="" loading="lazy"></img>
        </div>

        {/* database */}
        <div>
            <img src={database} className="absolute w-[59.49px] h-[59.49px] top-[236px] left-[1285px]" alt="" loading="lazy"></img>
        </div> 
      </div>

      {/* Ellipse37 */}
      <div className="w-[634px] h-[634px] top-[270px] left-[1123px] bg-[#54BE96] bg-opacity-5"></div>
    
    </div>
  );
};

export default HeroSection;
