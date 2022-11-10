import React from 'react';
import { BsBookmarkStar } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCheckFill } from 'react-icons/ri';

function MainContent() {
  return (
    <>
      <div className=" bg-[#F8EDEB] flex-1">
        <div>
          <div className="h-[20rem] w-full bg-[url('../public/images/kb.png')] bg-no-repeat bg-cover bg-center"></div>
        </div>

        <div className="flex justify-center">
          <h1
            className="text-5xl font-bold text-white -mt-8 bg-gradient-to-r from-[#FEC89A] to-[#F08080]
       shadow-xl pt-1 pb-1 -rotate-[3deg] w-1/2 text-center"
          >
            Lamb Kebabs
          </h1>
        </div>
        <div className="flex bg-[#F8EDEB] items-center h-[10rem] justify-around -mt-6">
          <ul className="flex">
            <li className="flex">
              <BiTimeFive className="h-6 w-6 fill-[#F08080] mr-2" />
              90 MINUTES
            </li>

            <li className="flex pl-5">
              <MdOutlinePeopleAlt className="h-6 w-6 fill-[#F08080] mr-2" />4
              SERVINGS
            </li>
            <AiOutlineMinusCircle className="h-5 w-5 fill-[#F08080] ml-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
            <AiOutlinePlusCircle className="h-5 w-5 fill-[#F08080] ml-1 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
          </ul>

          <div className="bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full left-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
            <BsBookmarkStar className="w-12 h-12 p-[0.4rem] fill-white mx-auto" />
          </div>
        </div>
        <div className="pb-11 bg-[#E8E8E4]">
          <h2 className="text-2xl text-center py-10 text-[#F08080]">
            RECIPE INGRIDIENTS
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            <li className="flex ml-3">
              <RiCheckFill className=" fill-[#F08080] w-6 h-6" />1 cup fresh
              mint leaves
            </li>
            <li className="flex ml-3">
              <RiCheckFill className=" fill-[#F08080] w-6 h-6" />
              1/2 cup fresh cilantro leaves
            </li>
            <li className="flex ml-3">
              <RiCheckFill className=" fill-[#F08080] w-6 h-6" />2 tbsps pine
              nuts
            </li>
            <li className="flex ml-3">
              <RiCheckFill className=" fill-[#F08080] w-6 h-6" />2 tbsps freshly
              grated parmesan cheese
            </li>
            <li className="flex ml-3">
              <RiCheckFill className=" fill-[#F08080] w-6 h-6" />1 tbsp fresh
              lemon juice
            </li>
            <li className="flex ml-3">
              <RiCheckFill className=" fill-[#F08080] w-6 h-6" />1 medium garlic
              clove peeled
            </li>
          </ul>
        </div>
        <div className="bg-[#FAE1DD]">
          <h2 className="text-2xl text-center py-10 text-[#F08080]">
            HOW TO COOK IT
          </h2>
          <p className="mx-5">
            This recipe was carefully designed and tested by Epicurious. Please
            check out directions at their website.
          </p>
          <div className="flex justify-center">
            <button className="flex w-[9rem] h-10 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full justify-center items-center my-10 hover:scale-105 transition duration-300 ease-in-out text-white">
              DIRECTIONS
              <BiRightArrowAlt className="w-6 h-6 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainContent;
