import Head from 'next/head';

import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import MainContent from '../components/MainContent';
import { useState } from 'react';
import useFetch from '../hooks/useFetch';

export default function Home() {
  enum AppStatus {
    start,
    search,
    results,
  }

  const [fetchUrl, setFetchUrl] = useState(null);
  const [status, setStatus] = useState(AppStatus.start);
  const { data, isLoading, error } = useFetch(fetchUrl);
  const [recipeId, setRecipeId] = useState(0);

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
            <div className="block m-10 bg-white border-y-black shadow-lg rounded-md min-h-screen max-w-6xl">
              {/* Header */}
              <Header
                setFetchUrl={setFetchUrl}
                data={data}
                error={error}
                status={status}
                setStatus={setStatus}
              />

              <div className="flex h-full  grow">
                <div className="flex grow">
                  {/* Left sidebar */}
                  <LeftSidebar
                    isLoading={isLoading}
                    data={data}
                    error={error}
                    status={status}
                    setStatus={setStatus}
                    setRecipeId={setRecipeId}
                    setFetchUrl={setFetchUrl}
                  />
                  {/* main content */}
                  <MainContent
                    isLoading={isLoading}
                    data={data}
                    error={error}
                    status={status}
                    setStatus={setStatus}
                  />
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
