import Head from 'next/head';
import { MdFastfood } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { CgFileAdd } from 'react-icons/cg';
import { BsBookmarkStar } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { RiCheckFill } from 'react-icons/ri';
import Image from 'next/image';
import kebab from '../public/images/kebab.jpg';
import kebab2 from '../public/images/kebab2.jpg';
import kebab3 from '../public/images/kebab3.jpg';

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>JRAT</title>
          <meta name="description" content="JRAT" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main
          className="
        flex
        flex-col 
        bg-gradient-to-r
        from-[#FAE1DD]
        to-[#F08080]
        items-center
         font-Chivo
         text-[#615551]
        "
        >
          <section className="min-h-screen">
            <h1 className="text-8xl font-bold underline text-blue-50 m-5">
              Hello world!
            </h1>
            <div className="block m-10 bg-white border-y-black shadow-lg rounded-md min-h-screen max-w-6xl">
              <div className="flex justify-between bg-[#F8EDEB] p-4 rounded-t-md">
                <div className="flex">
                  <div className="bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full left-0">
                    <MdFastfood className="w-12 h-12 p-[0.4rem] fill-white mx-auto" />
                  </div>
                  <h1 className="font-bold text-5xl ml-2">Haval</h1>
                </div>
                <form className="flex align-middle bg-white rounded-full shadow-xl">
                  <input
                    type="search"
                    placeholder="Search over 1,000,000 recipes..."
                    className="p-2.5 rounded-full relative outline-none w-[19rem]"
                  />
                  <button className="w-[8rem] bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full relative pr-5 text-white flex items-center hover:scale-105 transition duration-300 ease-in-out">
                    <RiSearchLine className="fill-white w-5 h-5 mx-auto" />
                    SEARCH
                  </button>
                </form>

                <ul className="flex justify-evenly items-center">
                  <li className="flex p-2 hover:bg-[#F08080]">
                    <CgFileAdd className=" w-6 h-6 mb-1" />
                    ADD RECIPE
                  </li>
                  <li className="flex p-2 hover:bg-[#F08080]">
                    <BsBookmarkStar className="w-5 h-5" />
                    BOOKMARKS
                  </li>
                </ul>
              </div>
              <div className="flex h-full  grow">
                <div className="flex grow">
                  <div className=" bg-white basis-1/3 py-5  rounded-bl-md">
                    <div className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB]">
                      <Image
                        src={kebab}
                        className="rounded-full m-2"
                        width={60}
                        height={60}
                        alt=""
                      />
                      <div>
                        <div>SPICY CHIKEN KEBAB</div>
                        <div>BBC GOODFOOD</div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB]">
                      <Image
                        src={kebab2}
                        className="rounded-full m-2"
                        width={60}
                        height={60}
                        alt=""
                      />
                      <div>
                        <div className="truncate ...">
                          LAMB KEBABS WITH MINT PESTO
                        </div>
                        <div>EPICURIOUS </div>
                      </div>
                    </div>
                    <div className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB]">
                      <Image
                        src={kebab3}
                        className="rounded-full m-2"
                        width={60}
                        height={60}
                        alt=""
                      />
                      <div>
                        <div>KOFTA KEBAB</div>
                        <div>ALL RECIPES</div>
                      </div>
                    </div>

                    <ul className="flex justify-around mt-5">
                      <li className="flex bg-stone-400 rounded-full w-20 h-8 text-center hover:bg-stone-500">
                        <BiLeftArrowAlt className="w-6 h-6 fill-white" />
                        Page 1
                      </li>
                      <li className="flex bg-stone-400 rounded-full w-20 h-8 text-center hover:bg-stone-500">
                        Page 3<BiRightArrowAlt className="w-6 h-6 fill-white" />
                      </li>
                    </ul>
                  </div>
                  <div className=" bg-[#E8E8E4] flex-1  rounded-br-md">
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
                          <MdOutlinePeopleAlt className="h-6 w-6 fill-[#F08080] mr-2" />
                          4 SERVINGS
                        </li>
                        <AiOutlineMinusCircle className="h-5 w-5 fill-[#F08080] ml-2" />
                        <AiOutlinePlusCircle className="h-5 w-5 fill-[#F08080] ml-1" />
                      </ul>

                      <div className="bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full left-0 hover:scale-105 transition duration-300 ease-in-out">
                        <BsBookmarkStar className="w-12 h-12 p-[0.4rem] fill-white mx-auto" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-2xl text-center py-10 text-[#F08080]">
                        RECIPE INGRIDIENTS
                      </h2>
                      <ul className="grid grid-cols-2 gap-4">
                        <li className="flex ">
                          <RiCheckFill className=" fill-[#F08080] w-6 h-6" />1
                          cup fresh mint leaves
                        </li>
                        <li className="flex">
                          <RiCheckFill className=" fill-[#F08080] w-6 h-6" />
                          1/2 cup fresh cilantro leaves
                        </li>
                        <li className="flex">
                          <RiCheckFill className=" fill-[#F08080] w-6 h-6" />2
                          tbsps pine nuts
                        </li>
                        <li className=" flex">
                          <RiCheckFill className=" fill-[#F08080] w-6 h-6" />2
                          tbsps freshly grated parmesan cheese
                        </li>
                        <li className="flex">
                          <RiCheckFill className=" fill-[#F08080] w-6 h-6" />1
                          tbsp fresh lemon juice
                        </li>
                        <li className="flex">
                          <RiCheckFill className=" fill-[#F08080] w-6 h-6" />1
                          medium garlic clove peeled
                        </li>
                      </ul>
                    </div>

                    <h2 className="text-2xl text-center py-10 text-[#F08080]">
                      HOW TO COOK IT
                    </h2>
                    <p className="mx-5">
                      This recipe was carefully designed and tested by
                      Epicurious. Please check out directions at their website.
                    </p>
                    <div className="flex justify-center">
                      <button className="flex w-[9rem] h-10 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full justify-center items-center my-10 hover:scale-105 transition duration-300 ease-in-out text-white">
                        DIRECTIONS
                        <BiRightArrowAlt className="w-6 h-6 fill-white" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <footer className="p-10 mt-10">here is footer</footer>
        </main>
      </div>
    </>
  );
}
