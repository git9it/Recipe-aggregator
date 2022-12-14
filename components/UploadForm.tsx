import { FiUploadCloud } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import useInput from "../hooks/useInput";
import UploadFormInput from "../elements/UploadFormInput";
import { useEffect } from "react";
import { IUploadForm } from "./types";

function UploadForm({ setIsUploadPopupOpen, isUploadPopupOpen, setFetchUrl, data }: IUploadForm) {
  const TITLE = useInput("", { isEmpty: true, minLength: 3 });
  const URL = useInput("", { isEmpty: true, isUrl: true });
  const IMAGEURL = useInput("", { isEmpty: true, isUrl: true });
  const PUBLISHER = useInput("", { isEmpty: true, minLength: 3 });
  const TIME = useInput("", { isEmpty: true });
  const SERVINGS = useInput("", { isEmpty: true });
  const INGRIDIENT1 = useInput("", { isIngridients: true });
  const INGRIDIENT2 = useInput("", { isIngridients: true });
  const INGRIDIENT3 = useInput("", { isIngridients: true });
  const INGRIDIENT4 = useInput("", { isIngridients: true });
  const INGRIDIENT5 = useInput("", { isIngridients: true });
  const INGRIDIENT6 = useInput("", { isIngridients: true });
  const INGRIDIENTSARR = [INGRIDIENT1, INGRIDIENT2, INGRIDIENT3, INGRIDIENT4, INGRIDIENT5, INGRIDIENT6];

  const getIngredientsObj = () => {
    let finalArray = [];
    for (const INGRIDIENT in INGRIDIENTSARR) {
      const obj = {
        quantity: INGRIDIENTSARR[INGRIDIENT]?.value?.split(",")[0],
        unit: INGRIDIENTSARR[INGRIDIENT]?.value?.split(",")[1],
        description: INGRIDIENTSARR[INGRIDIENT]?.value?.split(",")[2],
      };
      finalArray.push(obj);
    }
    return finalArray;
  };

  const postdata = {
    publisher: PUBLISHER.value,
    ingredients: getIngredientsObj(),
    source_url: URL.value,
    image_url: IMAGEURL.value,
    title: TITLE.value,
    servings: SERVINGS.value,
    cooking_time: TIME.value,
  };

  if (data?.postReturn?.status === "success") {
    console.log("success");
    PUBLISHER.value = "";
    URL.value = "";
    IMAGEURL.value = "";
    TITLE.value = "";
    SERVINGS.value = "";
    TIME.value = "";
    INGRIDIENT1.value = "";
    INGRIDIENT2.value = "";
    INGRIDIENT3.value = "";
    INGRIDIENT4.value = "";
    INGRIDIENT5.value = "";
    INGRIDIENT6.value = "";
  }

  return (
    <div className="relative">
      <div
        className={`${
          isUploadPopupOpen ? null : "hidden"
        } fixed inset-0 w-full h-full overflow-y-auto backdrop-blur-lg`}
        id="my-modal"
      ></div>
      <div
        className={`${
          isUploadPopupOpen ? null : "hidden"
        } fixed z-20 w-2/3 bg-white rounded-2xl left-[160px] top-[80px] drop-shadow-lg flex flex-col items-center`}
      >
        <AiOutlineCloseCircle
          onClick={() => setIsUploadPopupOpen(false)}
          className="w-10 h-10 mt-2 mr-2 cursor-pointer place-self-end"
        />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col m-2">
            <h2 className="text-3xl">Recipe Data</h2>

            <UploadFormInput name="Title" inputObj={TITLE} placeholder={"ex. Pizza"} />
            <UploadFormInput name="Url" inputObj={URL} placeholder={"Put receipt URL here"} />
            <UploadFormInput name="Image URL" inputObj={IMAGEURL} placeholder={"Put receipt Image URL here"} />
            <UploadFormInput name="Publisher" inputObj={PUBLISHER} placeholder={"ex. VkusnoItochka"} />
            <UploadFormInput name="Prep time" inputObj={TIME} placeholder={"55"} />
            <UploadFormInput name="Servings" inputObj={SERVINGS} placeholder={"4"} />
          </div>
          <div className="flex flex-col m-2">
            <h2 className="text-3xl">Ingridients</h2>
            <UploadFormInput name="Ingredient 1" inputObj={INGRIDIENT1} placeholder={"quantity,unit,description"} />
            <UploadFormInput name="Ingredient 2" inputObj={INGRIDIENT2} placeholder={"quantity,unit,description"} />
            <UploadFormInput name="Ingredient 3" inputObj={INGRIDIENT3} placeholder={"quantity,unit,description"} />
            <UploadFormInput name="Ingredient 4" inputObj={INGRIDIENT4} placeholder={"quantity,unit,description"} />
            <UploadFormInput name="Ingredient 5" inputObj={INGRIDIENT5} placeholder={"quantity,unit,description"} />
            <UploadFormInput name="Ingredient 6" inputObj={INGRIDIENT6} placeholder={"quantity,unit,description"} />
          </div>
        </div>
        <button
          disabled={
            !TITLE.inputValid ||
            !URL.inputValid ||
            !IMAGEURL.inputValid ||
            !PUBLISHER.inputValid ||
            !TIME.inputValid ||
            !SERVINGS.inputValid
          }
          onClick={() => {
            setFetchUrl({
              url: "https://forkify-api.herokuapp.com/api/v2/recipes?key=99187270-7ef2-40f7-9b20-cb31a126fbad",
              method: "post",
              postdata: postdata,
            });
          }}
          className="w-40 m-3 h-12 bg-gradient-to-r from-[#FEC89A] to-[#F08080] rounded-full relative pr-5
           text-white flex items-center text-left hover:scale-105 transition duration-300 ease-in-out disabled:scale-100 disabled:opacity-50 disabled:cursor-default"
        >
          <FiUploadCloud className="w-5 h-5 mx-2 ml-7" />
          UPLOAD
        </button>
      </div>
    </div>
  );
}

export default UploadForm;
