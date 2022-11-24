import { useState } from 'react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Loader from './Loader';

enum AppStatus {
  start,
  search,
  results,
}
interface IFetchUrl {
  url: string;
  method: string;
  postdata: object;
}
export interface AllRecipes {
  allRecipes: Recipes;
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
  data: AllRecipes | null;
  status: AppStatus;
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
  setFetchUrl: React.Dispatch<React.SetStateAction<IFetchUrl>>;
}

function LeftSidebar({
  isLoading,
  data,
  status,
  setStatus,
  setFetchUrl,
}: IleftSidebar) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const indexOfLastPost = currentPage * postsPerPage; // 10
  const indexOfFirstPost = indexOfLastPost - postsPerPage; // 0
  let maxPages;
  let currentPosts;
  let recipesData: RecipesEntity[] | null | undefined;
  if (data?.allRecipes?.data?.recipes) {
    recipesData = data.allRecipes.data.recipes;
  }

  if (recipesData) {
    maxPages = Math.ceil(recipesData.length / postsPerPage);
    currentPosts = recipesData.slice(indexOfFirstPost, indexOfLastPost);
  }

  return (
    <>
      <nav className="py-5 bg-white w-96 rounded-bl-md">
        {status !== AppStatus.start &&
          recipesData &&
          currentPosts &&
          currentPosts.map((post) => (
            <div
              onClick={() => {
                setFetchUrl({
                  url: `https://forkify-api.herokuapp.com/api/v2/recipes/${post.id}?key=99187270-7ef2-40f7-9b20-cb31a126fbad`,
                  method: 'get',
                  postdata: {},
                });
                setStatus(AppStatus.results);
              }}
              className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#FAE1DD] cursor-pointer"
            >
              <img
                src={post.image_url}
                alt=""
                className="w-[4rem] h-[4rem] rounded-full ml-4  m-2 shrink-0"
              />
              <div>
                <div className="text-[#F08080] block ml-2 text-sm">
                  {post.title.length > 31
                    ? (post.title =
                        post.title.slice(0, 31).toUpperCase() + '...')
                    : post.title.toUpperCase()}
                  {}
                </div>
                <div className="ml-2 text-sm">
                  {post.publisher.toUpperCase()}
                </div>
              </div>
            </div>
          ))}

        {isLoading && !recipesData && <Loader />}
        {status !== AppStatus.start && recipesData && (
          <div className="flex justify-around mt-5">
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
            {maxPages && currentPage < maxPages && (
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
          </div>
        )}
      </nav>
    </>
  );
}

export default LeftSidebar;
