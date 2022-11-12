import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Loader from './Loader';

enum AppStatus {
  start,
  search,
  results,
}
export interface Recipes {
  status: string;
  results: number;
  data: { recipes?: RecipesEntity[] | null };
}
export interface RecipesEntity {
  publisher: string;
  title: string;
  id: string;
  image_url: string;
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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage; // 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 0
  let maxPages;
  let currentPosts;
  if (data?.data.recipes) {
    maxPages = Math.ceil(data.data.recipes?.length / postsPerPage);
    currentPosts = data?.data.recipes.slice(indexOfFirstPost, indexOfLastPost);
  }

  return (
    <>
      <div className="bg-white w-96 py-5  rounded-bl-md">
        {status === AppStatus.search &&
          data?.data?.recipes &&
          currentPosts.map((el) => (
            <div
              onClick={() => {
                setStatus(AppStatus.results);
                console.log(el);
                setFetchUrl(
                  `https://forkify-api.herokuapp.com/api/v2/recipes/${el.id}`
                );
                // setRecipeId(Number.parseInt(el.recipe_id));
              }}
              className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#FAE1DD] cursor-pointer"
            >
              <img
                src={el.image_url}
                alt=""
                className="w-[4rem] h-[4rem] rounded-full m-2 shrink-0"
              />
              <div>
                <div className="text-[#F08080] block truncate">
                  {el.title.length > 28
                    ? (el.title = el.title.slice(0, 28).toUpperCase() + '...')
                    : el.title.toUpperCase()}
                  {}
                </div>
                <div>{el.publisher.toUpperCase()}</div>
              </div>
            </div>
          ))}

        {isLoading && <Loader />}
        {status === AppStatus.search && data?.data?.recipes && (
          <ul className="flex justify-around mt-5">
            {currentPage > 1 && (
              <button
                onClick={() => {
                  setCurrentPage((prevState) => prevState - 1);
                }}
                className="flex items-center bg-[#FAE1DD] rounded-full w-[4.8rem] h-6 hover:bg-[#FCD5CE] text-[#F08080] text-sm"
              >
                <div className="flex">
                  <BiLeftArrowAlt className="w-5 h-5 fill-[#F08080]" />
                  Page {currentPage - 1}
                </div>
              </button>
            )}
            {currentPage < maxPages && (
              <button
                onClick={() => {
                  setCurrentPage((prevState) => prevState + 1);
                }}
                className="flex items-center bg-[#FAE1DD] rounded-full w-[4.8rem] h-6 hover:bg-[#FCD5CE] text-[#F08080] text-sm"
              >
                <div className="flex">
                  Page {currentPage + 1}
                  <BiRightArrowAlt className="w-5 h-5 fill-[#F08080]" />
                </div>
              </button>
            )}
          </ul>
        )}
      </div>
    </>
  );
}

export default LeftSidebar;
