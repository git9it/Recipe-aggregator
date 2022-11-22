import { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { AiOutlineCloseCircle } from 'react-icons/ai';

function UploadForm({
  setIsUploadPopupOpen,
  isUploadPopupOpen,
  setFetchUrl,
  data,
}) {
  const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLength, setMinLength] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [urlError, setUrlError] = useState(false);

    useEffect(() => {
      for (const validation in validations) {
        switch (validation) {
          case 'minLength':
            value.length < validations[validation]
              ? setMinLength(true)
              : setMinLength(false);
            break;
          case 'maxLength':
            value.length > validations[validation]
              ? setMinLength(true)
              : setMinLength(false);
            break;
          case 'isEmpty':
            value ? setEmpty(false) : setEmpty(true);
            break;
          case 'isUrl':
            const re =
              /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
            re.test(String(value).toLowerCase())
              ? setUrlError(false)
              : setUrlError(true);
            break;
        }
      }
    }, [value]);
    return {
      isEmpty,
      minLength,
      maxLengthError,
      urlError,
    };
  };

  const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
      setValue(e.target.value);
    };

    const onBlur = (e) => {
      setDirty(true);
    };

    return { value, onChange, onBlur, isDirty, ...valid };
  };

  const title = useInput('', { isEmpty: true, minLength: 3 });
  const url = useInput('', { isEmpty: true, minLength: 5, isUrl: true });

  const postdata = {
    publisher: 'Herovasto',
    ingredients: [
      {
        quantity: 1,
        unit: '',
        description: 'medium head cauliflower cut into florets',
      },
      { quantity: 1, unit: '', description: 'egg' },
      { quantity: 0.5, unit: 'cup', description: 'mozzarella shredded' },
      {
        quantity: 1,
        unit: 'tsp',
        description: 'oregano or italian seasoning blend',
      },
      { quantity: null, unit: '', description: 'Salt and pepper to taste' },
      { quantity: 1, unit: 'cup', description: 'chicken cooked and shredded' },
      { quantity: 0.5, unit: 'cup', description: 'barbecue sauce' },
      { quantity: 0.75, unit: 'cup', description: 'mozzarella shredded' },
      {
        quantity: null,
        unit: '',
        description: 'Red onion to taste thinly sliced',
      },
      { quantity: null, unit: '', description: 'Fresh cilantro to taste' },
    ],
    source_url:
      'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
    image_url:
      'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
    title: 'Pizza pitsa papajohn',
    servings: 4,
    cooking_time: 60,
  };
  return (
    <div className="relative">
      <div
        className={`${
          isUploadPopupOpen ? null : 'hidden'
        } fixed inset-0 w-full h-full overflow-y-auto backdrop-blur-lg`}
        id="my-modal"
      ></div>
      <div
        className={`${
          isUploadPopupOpen ? null : 'hidden'
        } fixed z-20 w-2/3 bg-white rounded-2xl left-1/4 top-[150px] drop-shadow-lg flex flex-col items-center`}
      >
        <AiOutlineCloseCircle
          onClick={() => setIsUploadPopupOpen(false)}
          className="w-10 h-10 mt-2 mr-2 cursor-pointer place-self-end"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col m-2">
            <h2 className="text-3xl">Recipe Data</h2>
            <div className="flex justify-between">
              <label className="mt-2 text-lg">Title</label>

              <input
                value={title.value}
                onChange={(e) => title.onChange(e)}
                onBlur={(e) => title.onBlur(e)}
                className="border-[#ddd] border-solid rounded-md border-[1px] outline-none block w-full m-2 p-1 pl-3 "
                type="text"
                name="Title"
              />
              {title.isDirty && title.isEmpty && (
                <div className="mt-2 text-xs text-red-500">
                  Cannot be empty!
                </div>
              )}
              {title.isDirty && title.minLength && (
                <div className="mt-2 text-xs text-red-500">Too short!</div>
              )}
            </div>

            <div className="flex justify-between">
              <label className="mt-2 text-lg">URL</label>
              <input
                value={url.value}
                onChange={(e) => url.onChange(e)}
                onBlur={(e) => url.onBlur(e)}
                className="border-[#ddd] border-solid rounded-md border-[1px] outline-none block w-full m-2 p-1 pl-3 "
                type="text"
                name="URL"
              />
              {url.isDirty && url.urlError && (
                <div className="mt-2 text-xs text-red-500">This isn't url!</div>
              )}
            </div>
            <div className="flex justify-between">
              <label className="mt-2">Image URL</label>
              <input
                className="border-[#ddd] border-solid rounded-md border-[1px] outline-none m-2 p-1 pl-3 max-h-8 shrink-0"
                type="text"
                name="Title"
              />
            </div>
            <label>Publisher</label>
            <input type="text" name="Title" />
            <label>Prep time</label>
            <input type="text" name="Title" />
            <label>Servings</label>
            <input type="text" name="Title" />
          </div>
          <div className="flex flex-col m-2">
            <h2 className="text-3xl">Ingridients</h2>
            <div className="flex justify-between">
              <label className="mt-2 shrink-0">Ingredient 1</label>
              <input
                className="border-[#ddd] border-solid rounded-md border-[1px] outline-none block w-full m-2 p-1 pl-3 "
                type="text"
                name="Title"
              />
            </div>
            <label>Ingredient 2</label>
            <input type="text" name="Title" />
            <label>Ingredient 3</label>
            <input type="text" name="Title" />
            <label>Ingredient 4</label>
            <input type="text" name="Title" />
            <label>Ingredient 5</label>
            <input type="text" name="Title" />
            <label>Ingredient 6</label>
            <input type="text" name="Title" />
          </div>
        </div>
        <button
          onClick={() => {
            setFetchUrl({
              url: 'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=99187270-7ef2-40f7-9b20-cb31a126fbad',
              method: 'post',
              postdata: postdata,
            });
            if (data?.postReturn) {
              console.log(data.postReturn);
            }
          }}
          className="w-40 m-3 h-12 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full relative pr-5
           text-white flex items-center text-left hover:scale-105 transition duration-300 ease-in-out "
        >
          <FiUploadCloud className="w-5 h-5 mx-2 ml-7" />
          UPLOAD
        </button>
      </div>
    </div>
  );
}

export default UploadForm;
