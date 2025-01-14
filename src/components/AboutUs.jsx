import React from "react";
import DashboardPicture from "../../src/assets/DashboardPage.png";

const AboutUs = () => {
  return (
    <div>
      <section
        id="about"
        className="pb-8 pt-20 dark:bg-zinc-800 lg:pb-[70px] lg:pt-[120px] md:px-24 px-4"
      >
          <div>
            <div className="flex flex-wrap items-center -mx-4">
              {/* Right Section */}
              <div className="w-full px-4 lg:w-1/2 md:w-full">
                <div className="h-auto">   
                <img
                    src={DashboardPicture}
                    alt="about image"
                    className="object-cover object-center w-full h-full rounded-lg"
                  />
                </div>
              </div>
              {/* Left Section */}
              <div className="w-full px-4 lg:w-1/2">
                <div className="mb-12 max-w-[540px] lg:mb-0">
                  <h2 className="mb-5 text-4xl font-bold leading-tight text-dark dark:text-white sm:leading-[1.2]">
                    Discover the E-learny solution
                  </h2>
                  <p className="mb-10 text-lg max-wl-xl text-gray-800 dark:text-white">
                    The Tunisian Establishment for Agile Management is a consultancy and training firm driven by a passion for business and project management. 
                    Our expertise combines strong project management knowledge with diverse experience in public sector management, enabling us to empower businesses and enhance their performance.
                 </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center py-3 text-base font-medium bg-orange-500 rounded-lg text-white border-primary px-7 hover:border-blue-dark hover:bg-blue-dark"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
};

export default AboutUs;