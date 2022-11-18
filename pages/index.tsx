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

  const [fetchUrl, setFetchUrl] = useState('');
  const [status, setStatus] = useState(AppStatus.start);
  const { data, isLoading, error } = useFetch(fetchUrl);

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
            <div className="max-w-5xl min-h-screen m-10 bg-white rounded-md shadow-lg lg:block border-y-black md:m-0">
              {/* Header */}
              <Header setFetchUrl={setFetchUrl} setStatus={setStatus} />

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
