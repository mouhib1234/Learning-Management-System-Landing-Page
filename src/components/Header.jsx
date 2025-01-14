import React from "react";
import AiPicture from "../../src/assets/AiPicture.png";

const Header = () => {


  return (
    <div className="relative bg-gradient-to-r from-green-900 to-green-700 md:py-96 overflow-hidden px-4 py-80" id="home" >
      {/* Decorative Elements */}
        {/* Circulair shape left*/}
         <div className="absolute transform top-[-55%] left-[-32%] translate-x-[5%] translate-y-1/2 w-[50rem] h-[50rem] animate-pulse">
        <div className="absolute inset-0 rounded-full  border-[2rem] border-white opacity-20"></div>
        <div className="absolute inset-24 rounded-full border-[2rem] border-white opacity-20"></div>
        <div className="absolute inset-48 rounded-full border-[2rem] border-white opacity-20"></div>
      </div>
       {/* Circulair shape Top*/}
       <div className="absolute transform top-[-50%] right-0 translate-x-[5%] translate-y-1 w-[40rem] h-[40rem] animate-pulse">
        <div className="absolute inset-0 rounded-full  border-[2rem] border-white opacity-20"></div>
        <div className="absolute inset-24 rounded-full border-[2rem] border-white opacity-20"></div>
        <div className="absolute inset-48 rounded-full border-[2rem] border-white opacity-20"></div>
      </div>
      {/* Circulair shape Bottom */}
      <div className="absolute transform bottom-0 right-0 translate-x-[5%] translate-y-1/2 w-[50rem] h-[50rem] animate-pulse">
        <div className="absolute inset-0 rounded-full  border-[2rem] border-white opacity-20"></div>
        <div className="absolute inset-24 rounded-full border-[2rem] border-white opacity-20"></div>
        <div className="absolute inset-48 rounded-full border-[2rem] border-white opacity-20"></div>
      </div>

      {/* Content Section */}
      <div className="px-4 lg:pl-24 md:pl-24 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* Content */}
          <div className="absolute lg:w-1/2 transform -translate-x-0 -translate-y-0 lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-white to-orange-400">
              Your Gateway To <br /> Success In Education.
            </h1>
            <p className="mt-6 text-xl text-white lg:max-w-xl">
              Join us for expert-guided trainings that elevate your skills and transform your career.
            </p>
            <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
              <a
                href="/login"
                className="mt-6 px-6 py-3 text-lg text-white bg-orange-500 rounded-lg hover:bg-orange-600">
                Get Started
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="absolute hidden md:hidden lg:block top-16 right-0 transform -translate-x-0 -translate-y-1/2">
            <img
              src={AiPicture}
              className="relative  h-[47rem] w-[47rem]"
              alt="Illustration"
            />

            {/* Metric Cards */}
            <div className="absolute top-64 right-28 transform -translate-x-1/6 -translate-y-1/2">
              {/* Card 1 */}
              <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-lg p-6">
                <div className="flex items-center">
                  {/* Visitor Count and Description */}
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
                    1000
                    </span>
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-300">Registered users</h3>
                  </div>
                </div>
              </div>
            </div>  
            <div className="absolute top-[26rem] left-28 transform -translate-x-1/6 -translate-y-1/2">
              {/* Card 1 */}
              <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-lg p-6">
                <div className="flex items-center">
                  {/* Visitor Count and Description */}
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
                    100
                    </span>
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-300">Posted Trainings</h3>
                  </div>
                </div>
              </div>
            </div>   
            <div className="absolute top-[35rem] right-28 transform -translate-x-1/6 -translate-y-1/2">
              {/* Card 1 */}
              <div className="bg-white dark:bg-zinc-900 shadow-2xl rounded-lg p-6">
                <div className="flex items-center">
                  {/* Visitor Count and Description */}
                  <div className="flex-shrink-0">
                    <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900 dark:text-white">
                    1000
                    </span>
                    <h3 className="text-base font-normal text-gray-500 dark:text-gray-300">Posted Exams</h3>
                  </div>
                </div>
              </div>
            </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
