import React from "react";
import grp from "../assets/Group 212.png";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import play from "../assets/Group 215.png";
import group from "../assets/Group.png";
import circle from "../assets/Ellipse 59.png";
const Form = () => {
  return (
    <div className="flex flex-col items-center  mx-auto w-[full] h-[full] top-[3122px] bg-[#161C28]">
      {/* <upper part */}
      <div className="flex mt-[100px] gap-[100px]">
        {/* Text part */}
        <div className="flex flex-col w-[466px] h-[588px] top-[3252px] left-[130px]">
          <p className="w-[444px] h-[122px] top-[3252px] left-[130px] font-inter font-semibold text-[50px] leading-[60.51px] text-[#FFFFFF]">
            People are Saying About DoWhith
          </p>

          <p className="mt-5 w-[461px] h-[60px] top-[3394px] left-[130px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]">
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>

          <div className="flex flex-col mt-14 gap-10 w-[461px] h-[238px] top-[3496px] left-[135px]">
            <img
              src={grp}
              alt=""
              loading="lazy"
              className="w-[45px] h-[38px] top-[3496px] left-[135px]"
            ></img>
            <p className="w-[461px] h-[90px] top-[3574px] left-[135px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]">
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time 😍
            </p>
            <p className="w-[128px] h-[30px] top-[3704px] left-[135px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]">
              _ Aria Zinanrio
            </p>
          </div>

          <div className="flex gap-5">
            <img
              src={person1}
              alt=""
              loading="lazy"
              className="w-[66px] h-[66px] top-[3774px] left-[135px]"
            ></img>
            <img
              src={person2}
              alt=""
              loading="lazy"
              className="w-[66px] h-[66px] top-[3774px] left-[221px]"
            ></img>
            <img
              src={person3}
              alt=""
              loading="lazy"
              className="w-[66px] h-[66px] top-[3774px] left-[307px]"
            ></img>
            <img
              src={person4}
              alt=""
              loading="lazy"
              className="w-[66px] h-[66px] top-[3774px] left-[393px]"
            ></img>
            <img
              src={play}
              alt=""
              loading="lazy"
              className="w-[66px] h-[66px] top-[3774px] left-[479px]"
            ></img>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col items-center  w-[612px] h-[588px] top-[3252px] left-[697px] rounded-[20px] bg-[#222938]">
          <div className="mt-10 flex flex-col mx-auto items-center justify-center w-[178px] h-[132px] top-[40px] left-[222px] ">
            <img
              className="w-[72.06px] h-[86px] top-[40px] left-[269px] "
              src={group}
              alt=""
              loading="lazy"
            ></img>
            <h2 className="w-[168px] h-[36px] top-[136px] left-[222px] font-inter font-medium text-[30px] leading-[36.31px] text-[#FFFFFF]">
              Get Started
            </h2>
          </div>

          <form className="flex flex-col items-center  w-[440px] h-[340px] top-[182px] left-[86px] rounded-[10px]">
            {/* Email */}
            <div className=" mt-5 flex flex-col gap-3 w-[440px] h-[92px] top-[182px] left-[86px] rounded-[10px]">
              <label
                htmlFor="email"
                className="w-[51px] h-[22px] top-[182px] left-[86px] font-inter font-medium text-[18px] leading-[21.78px] text-[#FFFFFF]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-[440px] h-[50px] top-[224px]left-[86px] rounded-[10px] bg-[#FFFFFF]"
              ></input>
            </div>

            {/* Message */}
            <div className=" mt-5 flex flex-col gap-3 w-[440px] h-[122px] top-[294px] left-[86px] rounded-[10px]">
              <label
                htmlFor="message"
                className="w-[78px] h-[22px] top-[294px] left-[86px] font-inter font-medium text-[18px] leading-[21.78px] text-[#FFFFFF]"
              >
                Message
              </label>
              <input
                type="text"
                id="message"
                placeholder="What do you say?"
                className="w-[440px] h-[80px] top-[336px]left-[86px] rounded-[10px] bg-[#FFFFFF]"
              ></input>
            </div>

            <div className="mt-3 flex items-center justify-center w-[440px] h-[60px] top-[436px] left-[86px] rounded-[10px] bg-[#54BD96]">
              <p className=" w-[113px] h-[19px] top-[457px] left-[250px] font-inter font-medium text-[15px] leading-[19.36px] text-[#FFFFFF]">
                Request Demo
              </p>
            </div>

            <p className="ml-[300px] w-[117px] h-[16px] top-[506px] left-[409px] font-inter font-medium text-[14px] leading-[16.04px] text-[#A6A6A6]">
              or Start Free Trial
            </p>
          </form>
        </div>
      </div>

      {/* lowerpart mid part*/}
      <div className="flex gap-[200px] mt-[200px]">
        {/* left-part */}
        <div className="w-[410px] h-[180px] top-[4010px] left-[130px]">
          <h2 className="w-[160px] h-[30px] top-[4010px] left-[130px] font-inter font-semibold text-[50px] leading-[30px] text-[#54BD95]">
            Biccas
          </h2>
          <p className="mt-3 w-[286px] h-[30px] top-[4070px] left-[130px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]">
            Get started noew try our product
          </p>

          <div className=" flex flex-col mt-10">
            <input
              type="text"
              className=" w-[410px] h-[60px] top-[4130px] left-[130px] border border-white rounded-[70px] bg-[#161C28]"
              placeholder="Enter your Email here"
            ></input>
          </div>
        </div>

        {/* right-part */}
        <div className="flex w-[587px] h-[200px] top-[4010px] left-[697px]">
          {/* col1 */}
          <div className="flex flex-col w-[175px] top-[4010px] left-[697px]">
            <h2 className="w-[70px] h-[22px] top-[4010px] left-[607px] font-inter font-medium text-[18px] leading-[21.78px] text-[#FFFFFF]">
              Support
            </h2>
              <a href="/" className="mt-5 w-[100px] h-[22px] top-[4060px] left-[697px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Help Center</a>
              <a href="/" className="mt-2 w-[175px] h-[22px] top-[4104px] left-[697px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Account information</a>
              <a href="/" className="mt-2 w-[53px] h-[22px] top-[4164px] left-[697px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">About</a>
              <a href="/" className="mt-2 w-[94px] h-[22px] top-[4188px] left-[697px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Contact Us</a>
            
          </div>

          {/* col2 */}
          <div className="flex flex-col w-[152px] top-[4010px] left-[936px]">
            <h2 className="w-[152px] h-[22px] top-[4010px] left-[936px] font-inter font-medium text-[18px] leading-[21.78px] text-[#FFFFFF]">
              Help and Solution
            </h2>
              <a href="/" className="mt-5 w-[100px] h-[22px] top-[4060px] left-[697px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Talk to suport</a>
              <a  href="/" className="mt-2 w-[117px] h-[22px] top-[4104px] left-[936px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Support docs</a>
              <a href="/" className="mt-2 w-[123px] h-[22px] top-[4146px] left-[936px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">System status</a>
              <a  href="/" className="mt-2 w-[136px] h-[22px] top-[4188px] left-[936px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Covid responde</a>
            
          </div>

          {/* col3 */}
          <div className="ml-10 flex flex-col w-[132px] top-[4010px] left-[1152px]">
            <h2 className="w-[68px] h-[22px] top-[4010px] left-[1152px] font-inter font-medium text-[18px] leading-[21.78px] text-[#FFFFFF]">
              Product
            </h2>
              <a href="/" className="mt-5 w-[64px] h-[22px] top-[4062px] left-[1152px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Update</a>
              <a  href="/" className="mt-2 w-[72px] h-[22px] top-[4104px] left-[1152px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Security</a>
              <a href="/" className="mt-2 w-[78px] h-[22px] top-[4146px] left-[1152px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Beta test</a>
              <a  href="/" className="mt-2 w-[132px] h-[22px] top-[4188px] left-[1152px] font-inter font-medium text-[15px] leading-[21.78px] text-[#A6A6A6]">Pricing product</a>
            
          </div>
        </div>


      </div>
      {/* Last bottom texts */}
      <div className="flex mt-[100px] mb-[100px] gap-[400px]">
            <p className="w-[425px] h-[30px] top-[4269px] left-[130px] font-inter font-medium text-[18px] leading-[30px] text-[#FFFFFF]">© 2022 Biccas Inc. Copyright and rights reserved</p>
            <p className="w-[425px] h-[30px] top-[4269px] left-[130px] font-inter font-medium text-[18px] leading-[30px] text-[#FFFFFF]">Terms and Condtions . Privacy Policy</p>
        </div>
    </div>
  );
};

export default Form;
