import Head from 'next/head';

import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import MainContent from '../components/MainContent';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

interface IUseFetchData {
  data: IData | null;
  isLoading: boolean;
}

interface IData {
  postReturn: { status: string };
  allRecipes: Recipes;
  currentRecipe: FetchedRecipeData;
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

export default function Home() {
  enum AppStatus {
    start,
    search,
    results,
  }

  const [fetchUrl, setFetchUrl] = useState({
    url: '',
    method: 'get',
    postdata: {},
  });
  const [status, setStatus] = useState(AppStatus.start);
  const { data, isLoading }: any = useFetch(fetchUrl);

  return (
    <>
      <div>
        <Head>
          <title>Eatty</title>
          <meta name="description" content="Eatty - recipe aggregator" />
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
         font-Oxygen
         text-[#615551]
        "
        >
          <section className="min-h-screen">
            <div className="lg:mt-10 md:mt-0 sm:mt-0"></div>
            <div className="max-w-5xl min-h-screen m-10 overflow-hidden bg-white rounded-md shadow-lg lg:block border-y-black md:m-0">
              {/* Header */}
              <Header
                setFetchUrl={setFetchUrl}
                setStatus={setStatus}
                data={data}
              />

              <div className="flex h-full grow">
                <div className="flex grow">
                  {/* Left sidebar */}
                  <LeftSidebar
                    isLoading={isLoading}
                    data={data}
                    status={status}
                    setStatus={setStatus}
                    setFetchUrl={setFetchUrl}
                  />
                  {/* main content */}
                  <MainContent
                    isLoading={isLoading}
                    data={data}
                    status={status}
                    setStatus={setStatus}
                  />
                </div>
              </div>
            </div>
            <div className="lg:mt-10 md:mt-0"></div>
          </section>
        </main>
      </div>
    </>
  );
}
