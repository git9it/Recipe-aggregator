import { useEffect } from 'react';

function Bookmarks() {
  let recipesArr = [];
  if (typeof window !== 'undefined' && localStorage)
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      let bookmark = JSON.parse(localStorage.getItem(key));
      recipesArr.push(bookmark);
    }
  return recipesArr.map((post) => (
    <div
      onClick={() => {}}
      className="flex items-center mt-1 max-h-13 hover:scale-105 transition duration-300 ease-in-out hover:bg-[#FAE1DD] cursor-pointer"
    >
      <img
        src={post.image_url}
        alt=""
        className="w-[4rem] h-[4rem] rounded-full m-2 shrink-0"
      />
      <div>
        <div className="text-[#F08080] block ml-2 text-sm">
          {post.title?.length > 31
            ? (post.title = post.title.slice(0, 31).toUpperCase() + '...')
            : post.title?.toUpperCase()}
          {}
        </div>
        <div className="ml-2 text-sm">{post.publisher?.toUpperCase()}</div>
      </div>
    </div>
  ));
}

export default Bookmarks;
