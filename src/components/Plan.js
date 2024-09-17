import React from "react";
import tick from "../assets/Subtract.png";

const Plan = () => {
  return (
    <div className=" mt-12 flex flex-col  mx-auto text-center w-[1180px] h-[1069px] top-[1923px] left-[141px]">
      {/* heading */}
      <h2 className="flex mx-auto w-[492px] h-[146px] top-[1923px] left-[485px] font-inter font-extrabold text-[50px] leading-[73px] text-center">
        Choose Plan
        <br></br>
        That's Right For You
      </h2>

      <p className="mt-10 mx-auto w-[519px] h-[22px] top-[2109px] left-[472px] font-inter font-bold leading-[21.78px] text-[#A6A6A6]">
        Choose plan that works best for you, feel free to contact us
      </p>

      {/* buttons */}
      <div className="mt-10 mb-10 flex mx-auto items-center justify-center w-[340px] h-[70px] top-[2171px] left-[561px] rounded-[10px] bg-[#FFFFFF]">
        <div className="w-[97px] h-[30px] top-[2191px] left-[599px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
          Bil Monthly
        </div>
        <div className="flex items-center justify-center w-[160px] h-[56px] top-[2178px] left-[734px] rounded-[10px] bg-[#54BD96]">
          <p className=" w-[80px] h-[30px] top-[2191px] left-[774px] font-inter font-medium text-[18px] leading-[30px] text-[#FFFFFF]">
            Bil Yearly
          </p>
        </div>
      </div>

      {/* <cards */}
      <div className="mt-10 flex w-[1180px] h-[684px] top-[2308px] left-[141px]">
        {/* Card1 */}
        <div className="rounded-[10px] w-[374px] h-[644px] top-[2330px] left-[141px] flex flex-col mx-auto shadow-2xl box-shadow ">
          <div className="mt-10 flex flex-col items-center w-[210px] h-[169px] top-[2370px] left-[223px] mx-auto">
            <h2 className="w-[65px] h-[36px] top-[2370px] left-[296px] font-inter font-semibold text-[30px] leading-[36.31px] text-center text-[#191A15]">
              Free
            </h2>
            <p className="w-[210px] h-[54px] top-[2416px] left-[223px] font-inter font-medium text-[18px] leading-[27px] text-[#A6A6A6]">
              Have a go and test your superpowers
            </p>
            <div className="w-[50px] h-[56px] top-[2483px] left-[303px]">
              <p className="w-[12px] h-[30px] top-[2483px] left-[303px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]">
                $
              </p>
              <p className="w-[34px] h-[30px] top-[2509px] left-[319px] font-inter font-semibold text-[50px] leading-[30px] text-[#191A15]">
                0
              </p>
            </div>
          </div>

          {/* sub-card */}
          <div className=" mt-10 w-[334px] h-[380px] top-[2569px] left-[161px] rounded-10px bg-[#F9FAFB]">
            <div className=" flex flex-col gap-x-4 items-center mx-auto w-[260px] h-[329px] top-[2595px] left-[198px] rounded-[20px]">
              <ul className="mt-5 gap-3 text-start  flex flex-col ">
                <li className="flex  w-[107px] h-[30px] top-[2595px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[71px] h-[30px] top-[2595px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    2 Users
                  </p>
                </li>

                <li className="flex w-[97px] h-[30px] top-[2647px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[61px] h-[30px] top-[2647px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    2 Files
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    Public Share & Comments
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    Chat Support
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    New Income Apps
                  </p>
                </li>
              </ul>

              <div className="mt-5 flex items-center justify-center w-[260px] h-[64px] top-[2860px] left-[198px] rounded-[20px] bg-[#FFFFFF]">
                <p className="w-[130px] h-[30px] top-[2877px] left-[263px] font-inter font-semibold text-[18px] leading-[30px] text-[#54BC95]">
                  Signup for free
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card2 */}
        <div className="rounded-[10px] w-[374px] h-[648px] top-[2308px] left-[544px] flex flex-col mx-auto shadow-2xl  bg-[#54BD96]">
          <div className="mt-10 flex flex-col items-center w-[210px] h-[169px] top-[40px] left-[82px] mx-auto bg-[#FFFFFF] bg-opacity-5">
            <h2 className="w-[49px] h-[36px] top-[40px] left-[163px] font-inter font-semibold text-[30px] leading-[36.31px] text-center text-[#FFFFFF]">
              Pro
            </h2>
            <p className="w-[210px] h-[54px] top-[86px] left-[82px] font-inter font-medium text-[18px] leading-[27px] text-[#FFFFFF]">
              Experiment the power of infinite possibilities
            </p>

            <div className="w-[49px] h-[56px] top-[153px] left-[162px] rounded-[10px]">
              <p className="w-[12px] h-[30px] top-[153px] left-[162px] font-inter font-medium text-[18px] leading-[30px] text-[#FFFFFF]">
                $
              </p>
              <p className="w-[33px] h-[30px] top-[179px] left-[178px] font-inter font-semibold text-[50px] leading-[30px] text-[#FFFFFF]">
                8
              </p>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center mx-auto w-[130px] h-[40px] top-[255px] left-[122px] rounded-[10px] bg-[#85DAB9]">
            <p className=" mt-2 w-[109px] h-[30px] top-[230px] left-[133px] font-inter font-semibold text-[14px] leasding-[30px] text-[#FFFFFF]">Save $50 a year</p>
          </div>

          {/* sub-card */}
          <div className="mx-auto mb-5 mt-10 w-[334px] h-[380px] top-[280px] left-[20px] rounded-[10px] bg-[#F9FAFB]">
            <div className=" flex flex-col gap-x-4 items-center mx-auto w-[266px] h-[329px] top-[306px] left-[57px] rounded-[20px]">
              <ul className="mt-5 gap-3 text-start  flex flex-col ">
                <li className="flex  w-[107px] h-[30px] top-[2595px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[71px] h-[30px] top-[2595px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    4 Users
                  </p>
                </li>

                <li className="flex w-[97px] h-[30px] top-[2647px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[107px] h-[30px] top-[358px] left-[57px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    All apps
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[230px] h-[30px] top-[410px] left-[93px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    Unlimited editable exports
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[263px] h-[30px] top-[462px] left-[57px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[227px] h-[30px] top-[462px] left-[93px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    Foldres and collaborations
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    All Incoming Apps
                  </p>
                </li>
              </ul>

              <div className="mt-5 flex items-center justify-center w-[260px] h-[64px] top-[2860px] left-[198px] rounded-[20px] bg-[#FFFFFF]">
                <p className="w-[130px] h-[30px] top-[2877px] left-[263px] font-inter font-semibold text-[18px] leading-[30px] text-[#54BC95]">
                  Signup for free
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card3 */}
        <div className="rounded-[10px] shadow-2xl w-[374px] h-[644px] top-[2330px] left-[947px] flex flex-col mx-auto">
          <div className="mt-10 flex flex-col items-center w-[251px] h-[169px] top-[2370px] left-[1009px] mx-auto">
            <h2 className="w-[132px] h-[36px] top-[2370px] left-[1068px] font-inter font-semibold text-[30px] leading-[36.31px] text-center text-[#191A15]">
              Business
            </h2>
            <p className="w-[251px] h-[54px] top-[2416px] left-[1009px] font-inter font-medium text-[18px] leading-[27px] text-[#A6A6A6]">
              Unveil new superpowers and join the Design Leaque
            </p>
            <div className="w-[73px] h-[56px] top-[2483px] left-[1098px]">
              <p className="w-[12px] h-[30px] top-[2483px] left-[1098px] font-inter font-medium text-[18px] leading-[30px] text-[#A6A6A6]">
                $
              </p>
              <p className="w-[57px] h-[30px] top-[2509px] left-[1114px] font-inter font-semibold text-[50px] leading-[30px] text-[#191A15]">
                16
              </p>
            </div>
          </div>

          {/* sub-card */}
          <div className=" mt-10 w-[334px] h-[380px] top-[2569px] left-[161px] rounded-10px bg-[#F9FAFB]">
            <div className=" flex flex-col gap-x-4 items-center mx-auto w-[260px] h-[329px] top-[2595px] left-[198px] rounded-[20px]">
              <ul className="mt-5 gap-3 text-start  flex flex-col ">
                <li className="flex  w-[107px] h-[30px] top-[2595px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[71px] h-[30px] top-[2595px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    2 Users
                  </p>
                </li>

                <li className="flex w-[97px] h-[30px] top-[2647px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[61px] h-[30px] top-[2647px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    2 Files
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    Public Share & Comments
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    Chat Support
                  </p>
                </li>

                <li className="flex  items-center mx-auto w-[260px] h-[30px] top-[2699px] left-[198px]">
                  <img src={tick} alt="" loading="lazy"></img>
                  <p className="w-[224px] h-[30px] top-[2699px] left-[234px] font-inter font-medium text-[18px] leading-[30px] text-[#191A15]">
                    New Income Apps
                  </p>
                </li>
              </ul>

              <div className="mt-5 flex items-center justify-center w-[260px] h-[64px] top-[2860px] left-[198px] rounded-[20px] bg-[#FFFFFF]">
                <p className="w-[130px] h-[30px] top-[2877px] left-[263px] font-inter font-semibold text-[18px] leading-[30px] text-[#54BC95]">
                  Signup for free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
