import React from "react";
import Image from "next/image";
import Button from "./Button"


const Services = () => {
  return (
    <div className="services text-center bg-[#18191f] py-[120px] ">
      <div>
        <p className="text-[24px] uppercase tracking-[0.5em] text-[#7b61ff] font-semibold">
          Services
        </p>
        <h2 className="uppercase text-[70px] font-extrabold outline-text gray-text">
          how we{" "}
        </h2>
        <h2 className=" uppercase text-[70px] font-extrabold text-white leading-[80px]">
          approach clients
        </h2>
      </div>

      <div className="image-content mx-auto mt-[75px] max-w-[1240px] flex text-left items-center gap-[30px]">
        <div className="left-col w-[50%] flex justify-center">
          <Image
            src="/woman-laptop.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-[550px] thumb"
          />
        </div>
        <div className="right-col w-[50%] px-[40px] pr-[100px] flex flex-col gap-[20px]">
          <div className="text-divider flex items-center gap-3">
            <span className="w-[30px] h-[4px] bg-[#7b61ff] inline-block"></span>
            <p className="uppercase text-[17px] text-[#ffffff83] font-semibold">
              ui / ux design
            </p>
          </div>
          <h3 className=" capitalize text-[36px] text-left max-w-[500px]">
            Effective mobile and web design for our client
          </h3>
          <p className="text-[#ffffff83]">
            As a Digital Agency, we not only provide attractive mobile and web
            designs , we will also ensure that the mobile I website is also
            effective in supporting your business activities in the digital
            world as it is today. Starting from getting leads to growing
            conversions that can be an investment for your business in the
            future.
          </p>
          <Button />
        </div>
      </div>

      <div className="image-content mx-auto mt-[120px] max-w-[1240px] flex text-left items-center gap-[30px]">
        <div className="right-col w-[50%] py-[40px] pr-[100px] flex flex-col gap-[20px]">
          <div className="text-divider flex items-center gap-3">
            <span className="w-[30px] h-[4px] bg-[#7b61ff] inline-block"></span>
            <p className="uppercase text-[17px] text-[#ffffff83] font-semibold">
              graphic design
            </p>
          </div>
          <h3 className=" capitalize text-[36px] text-left max-w-[500px]">
            creating beautiful design based client needs
          </h3>
          <p className="text-[#ffffff83]">
            Design not only needs to be good, but also sells Brand Strategy is
            applied in every process to provide maximum results in the business.
            We are ready to help you in this matter, every design made will take
            into account various factors that are expected to help develop your
            business. Professionally designed and done for you
          </p>
          <Button />
        </div>
        <div className="left-col w-[50%] flex justify-center">
          <Image
            src="/qr-code.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-[550px] thumb"
          />
        </div>
      </div>

      <div className="image-content mx-auto mt-[120px] max-w-[1240px] flex text-left items-center gap-[30px]">
        <div className="left-col w-[50%] flex justify-center">
          <Image
            src="/laptop.jpg"
            width={500}
            height={500}
            className="object-cover w-full h-[550px] thumb"
          />
        </div>
        <div className="right-col w-[50%] px-[40px] pr-[100px] flex flex-col gap-[20px]">
          <div className="text-divider flex items-center gap-3">
            <span className="w-[30px] h-[4px] bg-[#7b61ff] inline-block"></span>
            <p className="uppercase text-[17px] text-[#ffffff83] font-semibold">
              DIGITAL MARKETING
            </p>
          </div>
          <h3 className=" capitalize text-[36px] text-left max-w-[500px]">
            Provide Digital Marketing Strategy for Our Clients
          </h3>
          <p className="text-[#ffffff83]">
            As a Digital Agency, every service we provide will be prepared with
            a proven strategy and also in accordance with the rules to achieve
            the goals of your business. There are various kinds of marketing
            strategies, which can be applied to your business, ranging from
            Search Engine Optimization, Search Engine Marketing , Social Media
            Marketing such as Facebook and Instagram ads, and many more.
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Services;
