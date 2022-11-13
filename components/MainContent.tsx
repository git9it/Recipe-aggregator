import React from 'react';
import { BsBookmarkStar } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { MdOutlinePeopleAlt } from 'react-icons/md';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { AiOutlineMinusCircle } from 'react-icons/ai';
import { BiRightArrowAlt } from 'react-icons/bi';
import { RiCheckFill } from 'react-icons/ri';
import { FaArrowUp } from 'react-icons/fa';
import Loader from './Loader';

enum AppStatus {
  start,
  search,
  results,
}

export interface FetchedRecipeData {
  status: string;
  data: { recipe: Recipe };
}

export interface Recipe {
  publisher: string;
  ingredients?: IngredientsEntity[] | null;
  source_url: string;
  image_url: string;
  title: string;
  servings: number;
  cooking_time: number;
  id: string;
}
export interface IngredientsEntity {
  quantity?: number | null;
  unit: string;
  description: string;
}

interface IMainContent {
  isLoading: boolean;
  data: FetchedRecipeData;
  status: AppStatus;
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
}

function MainContent({
  isLoading,
  data: fetchedRecipe,
  status,
  setStatus,
}: IMainContent) {
  function calcServings(currQuantity: number, newQuantity: number) {
    return (currQuantity / fetchedRecipe.data.recipe.servings) * newQuantity;
  }

  return (
    <>
      <article className=" bg-[#F8EDEB] flex-1 rounded-br-md">
        {isLoading && <Loader />}
        {}
        {!isLoading &&
        status === AppStatus.results &&
        fetchedRecipe.data.recipe?.title !== null ? (
          <>
            {console.log(fetchedRecipe)}
            <div>
              <div className="h-[20rem] w-full bg-[url('../public/images/kb.png')] bg-no-repeat bg-cover bg-center"></div>
            </div>

            <div className="flex justify-center">
              <h1
                className="text-5xl font-bold text-white -mt-8 bg-gradient-to-r from-[#FEC89A] to-[#F08080]
       shadow-xl pt-1 pb-1 -rotate-[3deg] w-1/2 text-center"
              >
                {fetchedRecipe.data.recipe && fetchedRecipe.data.recipe.title}
              </h1>
            </div>
            <div className="flex bg-[#F8EDEB] items-center h-[10rem] justify-around -mt-6">
              <ul className="flex">
                <li className="flex">
                  <BiTimeFive className="h-6 w-6 fill-[#F08080] mr-2" />
                  {fetchedRecipe.data.recipe?.cooking_time} MINUTES
                </li>

                <li className="flex pl-5">
                  <MdOutlinePeopleAlt className="h-6 w-6 fill-[#F08080] mr-2" />
                  {fetchedRecipe.data.recipe?.servings} SERVINGS
                </li>
                <AiOutlineMinusCircle className="h-5 w-5 fill-[#F08080] ml-2 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
                <AiOutlinePlusCircle className="h-5 w-5 fill-[#F08080] ml-1 hover:scale-110 transition duration-300 ease-in-out cursor-pointer" />
              </ul>

              <div className="bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full left-0 hover:scale-105 transition duration-300 ease-in-out cursor-pointer">
                <BsBookmarkStar className="w-12 h-12 p-[0.4rem] fill-white mx-auto" />
              </div>
            </div>
            <div className="pb-11 bg-[#E8E8E4]">
              <h2 className=" text-center py-10 text-transparent text-3xl bg-clip-text bg-gradient-to-r from-[#FEC89A] to-[#F08080] ">
                RECIPE INGRIDIENTS
              </h2>
              <ul className="grid grid-cols-2 gap-4">
                {fetchedRecipe.data?.recipe?.ingredients &&
                  fetchedRecipe.data.recipe.ingredients.map((el) => {
                    return (
                      <li className="flex ml-3">
                        <RiCheckFill className=" fill-[#F08080] w-6 h-6 shrink-0" />
                        {el.quantity} {el.unit} {el.description}
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
                This recipe was carefully designed and tested by Epicurious.
                Please check out directions at their website.
              </p>
              <div className="flex justify-center  rounded-br-md">
                <a
                  href={fetchedRecipe.data.recipe?.source_url}
                  className="flex w-[9rem] h-10 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full justify-center items-center my-10 hover:scale-105 transition duration-300 ease-in-out text-white"
                >
                  DIRECTIONS
                  <BiRightArrowAlt className="w-6 h-6 fill-white" />
                </a>
              </div>
            </div>
          </>
        ) : (
          <div className="min-h-screen w-full bg-[#F8EDEB] shrink-0 text-center">
            <h2 className="text-center p-10 text-transparent text-2xl bg-clip-text bg-gradient-to-r from-[#FEC89A] to-[#F08080]">
              <FaArrowUp className="w-7 h-7" />
              Start by searching for a recipe or an ingredient. Have fun!
            </h2>
          </div>
        )}
      </article>
    </>
  );
}

export default MainContent;
