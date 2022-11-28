import { useState, useReducer } from 'react';
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCheckFill } from 'react-icons/ri';
import { FaArrowUp } from 'react-icons/fa';
import {IMainContent, AppStatus, Recipe} from './types'
import Loader from './Loader';



function MainContent({ isLoading, data, status, setStatus }: IMainContent) {
  const [currentServings, setCurrentServings] = useState(4);
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  let currentRecipe: Recipe | null | undefined;
  if (data?.currentRecipe && AppStatus.results) {
    console.log(AppStatus.results);
    console.log(data);
    currentRecipe = data.currentRecipe.data.recipe;
  }

  function calcServings(
    currQuantity: number | null | undefined,
    newQuantity: number
  ) {
    if (currentRecipe)
      if (typeof currQuantity === 'number')
        return ((currQuantity / currentRecipe.servings) * newQuantity).toFixed(
          1
        );
  }

  function addBookmark() {
    if (currentRecipe)
      localStorage[currentRecipe?.id] = JSON.stringify({
        ...currentRecipe,
        ...{ isBookmarked: true },
      });
    forceUpdate();
  }

  function deleteBookmark() {
    if (currentRecipe) delete localStorage[currentRecipe?.id];
    forceUpdate();
  }

  return (
    <>
      <article className=" bg-[#F8EDEB] flex-1 rounded-br-md ">
        {isLoading && <Loader />}

        {!isLoading && status === AppStatus.results && currentRecipe ? (
          <>
            {}
            <div>
              <img
                src={currentRecipe.image_url}
                alt=""
                className="h-[20rem] w-full object-cover"
              />
            </div>

            <div className="flex justify-center">
              <h1
                className="text-4xl font-bold text-white -mt-8 bg-gradient-to-r from-[#FEC89A] to-[#F08080]
       shadow-xl pt-1 pb-1 -rotate-[3deg] w-[28rem] text-center"
              >
                {currentRecipe && currentRecipe.title.toUpperCase()}
              </h1>
            </div>
            <div className="flex bg-[#F8EDEB] items-center h-[10rem] justify-around -mt-6">
              <ul className="flex">
                <li className="flex" key="minutes">
                  <BiTimeFive className="h-6 w-6 fill-[#F08080] mr-2" />
                  {currentRecipe.cooking_time} MINUTES
                </li>

                <li className="flex pl-5" key="servings">
                  <MdOutlinePeopleAlt className="h-6 w-6 fill-[#F08080] mr-2" />
                  {currentServings} SERVINGS
                </li>
                <button onClick={() => setCurrentServings((prev) => prev - 1)}>
                  <AiOutlineMinusCircle className="h-5 w-5 fill-[#F08080] ml-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
                </button>
                <button onClick={() => setCurrentServings((prev) => prev + 1)}>
                  <AiOutlinePlusCircle className="h-5 w-5 fill-[#F08080] ml-1 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
                </button>
              </ul>
              {localStorage[currentRecipe?.id] ? (
                <button
                  onClick={() => deleteBookmark()}
                  className="w-13 h-13 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full shrink-0 left-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                >
                  <BsBookmarkStarFill className="w-12 h-12  shrink-0 p-[0.4rem] fill-white mx-auto" />
                </button>
              ) : (
                <button
                  onClick={() => addBookmark()}
                  className="w-13 h-13 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full shrink-0 left-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer"
                >
                  <BsBookmarkStar className="w-12 h-12  shrink-0 p-[0.4rem] fill-white mx-auto" />
                </button>
              )}
            </div>
            <div className="pb-11 bg-[#E8E8E4]">
              <h2 className=" text-center py-10 text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#FEC89A] to-[#F08080] ">
                RECIPE INGRIDIENTS
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {currentRecipe.ingredients &&
                  currentRecipe.ingredients.map((ingridient, index) => {
                    return (
                      <li className="flex ml-3" key={index}>
                        <RiCheckFill className=" fill-[#F08080] w-6 h-6 shrink-0" />
                        {calcServings(ingridient.quantity, currentServings)}{' '}
                        {ingridient.unit} {ingridient.description}
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="bg-[#FAE1DD]  rounded-br-md">
              <h3 className=" text-center py-10 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#FEC89A] to-[#F08080] ">
                HOW TO COOK IT
              </h3>
              <p className="mx-5">
                This recipe was carefully designed and tested by{' '}
                {currentRecipe.publisher.toUpperCase()}. Please check out
                directions at their website.
              </p>
              <div className="flex justify-center rounded-br-md">
                <a
                  href={currentRecipe.source_url}
                  target="_blank"
                  className="flex w-[9rem] h-10 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full justify-center items-center my-10 hover:scale-105 transition duration-300 ease-in-out text-white"
                >
                  DIRECTIONS
                  <BiRightArrowAlt className="w-6 h-6 fill-white" />
                </a>
              </div>
            </div>
          </>
        ) : (
          <div>
            <div className="min-h-screen bg-[#F8EDEB] shrink-0 text-center mx">
              <h2 className=" text-center p-10 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#FEC89A] to-[#F08080]">
                <FaArrowUp className="w-7 h-7" />
                Start by searching for a recipe or an ingredient. Have fun!
              </h2>
            </div>
          </div>
        )}
      </article>
    </>
  );
}

export default MainContent;
