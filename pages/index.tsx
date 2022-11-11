import Head from 'next/head';

import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import MainContent from '../components/MainContent';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
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
              <Header />

              <div className="flex h-full  grow">
                <div className="flex grow">
                  {/* Left sidebar */}
                  <LeftSidebar isLoading={isLoading} />
                  {/* main content */}
                  <MainContent />
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
