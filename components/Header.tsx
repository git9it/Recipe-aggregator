import React from 'react';
import { MdFastfood } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { BsBookmarkStar } from 'react-icons/bs';
import { useState } from 'react';

enum AppStatus {
  start,
  search,
  results,
}

interface IHeader {
  status: AppStatus;
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
  setFetchUrl: React.Dispatch<React.SetStateAction<string | null>>;
}

function Header({ setFetchUrl, setStatus }: IHeader) {
  const [inputData, setInputData] = useState('');
  function clickSearchHandle(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFetchUrl(
      `https://forkify-api.herokuapp.com/api/v2/recipes/?search=${inputData}`
    );
    setStatus(AppStatus.search);
  }
  return (
    <>
      <header className="flex justify-between bg-[#F8EDEB] p-4 rounded-t-md">
        <div className="flex">
          <div className="w-12 h-12 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full left-0 shrink-0">
            <MdFastfood className="w-12 h-12 p-[0.4rem] fill-white mx-auto" />
          </div>
          <h1 className="text-5xl ml-2 font-Satisfy font-extralight">Eatty</h1>
        </div>
        <form
          onSubmit={clickSearchHandle}
          className="flex align-middle bg-white rounded-full shadow-xl"
        >
          <input
            value={inputData}
            onChange={(event) => setInputData(event.target.value)}
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
      </header>
    </>
  );
}

export default Header;
