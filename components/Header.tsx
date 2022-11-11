import React from 'react';
import { MdFastfood } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { BsBookmarkStar } from 'react-icons/bs';

function Header() {
  return (
    <>
      <div className="flex justify-between bg-[#F8EDEB] p-4 rounded-t-md">
        <div className="flex">
          <div className="w-12 h-12 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full left-0 shrink-0">
            <MdFastfood className="w-12 h-12 p-[0.4rem] fill-white mx-auto" />
          </div>
          <h1 className="text-5xl ml-2 font-Satisfy font-extralight">Eatty</h1>
        </div>
        <form className="flex align-middle bg-white rounded-full shadow-xl">
          <input
            type="search"
            placeholder="Search over 1,000,000 recipes..."
            className="p-2.5 rounded-full relative outline-none w-[19rem]"
          />
          <button className="w-[8rem] bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full relative pr-5 text-white flex items-center hover:scale-105 transition duration-300 ease-in-out ">
            <RiSearchLine className="fill-white w-5 h-5 mx-auto" />
            SEARCH
          </button>
        </form>

        <ul className="flex justify-evenly items-center">
          <li className="flex p-2  w-13 h-10  shrink-0 hover:bg-[#E8E8E4] cursor-pointer">
            <AiOutlineFileAdd className="fill-[#F08080] w-6 h-6 -mt-1" />
            ADD RECIPE
          </li>
          <li className="flex p-2  w-13 h-10  shrink-0 hover:bg-[#E8E8E4] cursor-pointer">
            <BsBookmarkStar className="fill-[#F08080] w-5 h-5" />
            BOOKMARKS
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
