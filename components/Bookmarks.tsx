import { useEffect, useState } from 'react';
import { IBookmarks, AppStatus } from './types';

function Bookmarks({ setFetchUrl, setStatus }: IBookmarks): JSX.Element | null {
  const [isSSR, setIsSSR] = useState(false);
  useEffect(() => setIsSSR(true), []);
  let recipesArr = [];

  if (isSSR && localStorage.length > 0)
    for (let key in localStorage) {
      if (!localStorage.hasOwnProperty(key)) {
        continue;
      }
      let bookmark;
      if (key !== 'ally-supports-cache') {
        const item = localStorage.getItem(key);
        if (item !== null) bookmark = JSON.parse(item);
        recipesArr.push(bookmark);
      }
    }
  if (recipesArr.length > 0) {
    return (
      <>
        {recipesArr.map((post) => (
          <>
            <div
              onClick={() => {
                setFetchUrl({
                  url: `https://forkify-api.herokuapp.com/api/v2/recipes/${post.id}?key=99187270-7ef2-40f7-9b20-cb31a126fbad`,
                  method: 'get',
                  postdata: {},
                });
                setStatus(AppStatus.results);
              }}
              className="flex items-center mt-1 max-h-13 hover:bg-[#FAE1DD] cursor-pointer"
            >
              <img
                src={post.image_url}
                alt=""
                className="w-[3rem] h-[3rem] rounded-full m-2 shrink-0"
              />
              <div>
                <div className="text-[#F08080] block ml-2 text-xs">
                  {post.title?.length > 37
                    ? (post.title =
                        post.title.slice(0, 37).toUpperCase() + '...')
                    : post.title?.toUpperCase()}
                  {}
                </div>
                <div className="ml-2 text-xs">
                  {post.publisher?.toUpperCase()}
                </div>
              </div>
            </div>
          </>
        ))}
      </>
    );
  } else {
    return null;
  }
}

export default Bookmarks;
