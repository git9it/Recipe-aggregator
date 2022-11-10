import React from 'react';
import Image from 'next/image';
import kebab from '../public/images/kebab.jpg';
import kebab2 from '../public/images/kebab2.jpg';
import kebab3 from '../public/images/kebab3.jpg';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';

function LeftSidebar() {
  return (
    <>
      <div className=" bg-white basis-1/3 py-5  rounded-bl-md">
        <div className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB] cursor-pointer">
          <Image
            src={kebab}
            className="rounded-full m-2"
            width={60}
            height={60}
            alt=""
          />
          <div>
            <div className="truncate text-[#F08080]">SPICY CHIKEN KEBAB</div>
            <div>BBC GOODFOOD</div>
          </div>
        </div>
        <div className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB] cursor-pointer">
          <Image
            src={kebab2}
            className="rounded-full m-2"
            width={60}
            height={60}
            alt=""
          />
          <div>
            <div className="truncate text-[#F08080]">
              LAMB KEBABS WITH MINT PESTO
            </div>
            <div>EPICURIOUS </div>
          </div>
        </div>
        <div className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB] cursor-pointer">
          <Image
            src={kebab3}
            className="rounded-full m-2"
            width={60}
            height={60}
            alt=""
          />
          <div>
            <div className="truncate text-[#F08080]">KOFTA KEBAB</div>
            <div>ALL RECIPES</div>
          </div>
        </div>

        <ul className="flex justify-around mt-5">
          <button className="flex items-center bg-[#FAE1DD] rounded-full w-[4.8rem] h-6 hover:bg-[#FCD5CE] text-[#F08080] text-sm">
            <div className="flex">
              <BiLeftArrowAlt className="w-5 h-5 fill-[#F08080]" />
              Page 1
            </div>
          </button>

          <button className="flex items-center bg-[#FAE1DD] rounded-full w-[4.8rem] h-6 hover:bg-[#FCD5CE] text-[#F08080] text-sm">
            <div className="flex">
              Page 3
              <BiRightArrowAlt className="w-5 h-5 fill-[#F08080]" />
            </div>
          </button>
        </ul>
      </div>
    </>
  );
}

export default LeftSidebar;
