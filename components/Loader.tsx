import React from 'react';

function Loader() {
  return (
    <div className="place-content-center w-20">
      <div className="flex items-center gap-2 text-gray-500">
        <span className="h-10 w-10 block rounded-full border-4 border-t-[#F08080] animate-spin"></span>
      </div>
    </div>
  );
}

export default Loader;
