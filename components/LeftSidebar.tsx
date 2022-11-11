import React from 'react';
import Image from 'next/image';
import kebab from '../public/images/kebab.jpg';
import kebab2 from '../public/images/kebab2.jpg';
import kebab3 from '../public/images/kebab3.jpg';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Loader from './Loader';

enum AppStatus {
  start,
  search,
  results,
}
export interface Recipes {
  count: number;
  recipes?: RecipesEntity[] | null;
}
export interface RecipesEntity {
  publisher: string;
  title: string;
  source_url: string;
  recipe_id: string;
  image_url: string;
  social_rank: number;
  publisher_url: string;
}

interface IleftSidebar {
  isLoading: boolean;
  data: Recipes;
  status: AppStatus;
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
  setRecipeId: React.Dispatch<React.SetStateAction<number>>;
}

function LeftSidebar({
  isLoading,
  data,
  status,
  setStatus,
  setRecipeId,
  setFetchUrl,
}: IleftSidebar) {
  return (
    <>
      <div className=" bg-white basis-1/3 py-5  rounded-bl-md">
        {status === AppStatus.search &&
          data?.recipes &&
          data.recipes.map((el) => (
            <div
              onClick={() => {
                setStatus(AppStatus.results);
                setFetchUrl(
                  `https://forkify-api.herokuapp.com/api/get?rId=${el.recipe_id}`
                );
                // setRecipeId(Number.parseInt(el.recipe_id));
              }}
              className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#F8EDEB] cursor-pointer"
            >
              <img
                src={el.image_url}
                alt=""
                className="w-[4rem] h-[4rem] rounded-full m-2 shrink-0"
              />
              <div>
                <div className="truncate text-[#F08080]">
                  {el.title.toUpperCase()}
                </div>
                <div>{el.publisher.toUpperCase()}</div>
              </div>
            </div>
          ))}
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
        {isLoading && <Loader />}
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
