//uploadForm

export interface IFetchUrl {
  url: string;
  method: string;
  postdata: object;
}

export interface IPostReturn {
  postReturn: { status: string };
}

export interface IUploadForm {
  setIsUploadPopupOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isUploadPopupOpen: boolean;
  setFetchUrl: React.Dispatch<React.SetStateAction<IFetchUrl>>;
  data: IPostReturn | null;
}

//MainContent
export enum AppStatus {
  start,
  search,
  results,
}

export interface currentRecipe {
  currentRecipe: FetchedRecipeData;
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

export interface IMainContent {
  isLoading: boolean;
  data: currentRecipe | null;
  status: AppStatus;
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
}

//LeftSidebar
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

export interface IleftSidebar {
  isLoading: boolean;
  data: AllRecipes | null;
  status: AppStatus;
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
  setFetchUrl: React.Dispatch<React.SetStateAction<IFetchUrl>>;
}

//Header
export interface IPostReturn {
  postReturn: { status: string };
}

export interface IFetchUrl {
  url: string;
  method: string;
  postdata: object;
}

export interface IHeader {
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
  setFetchUrl: React.Dispatch<React.SetStateAction<IFetchUrl>>;
  data: IPostReturn | null;
}

//Bookmarks

export interface IBookmarks {
  setStatus: React.Dispatch<React.SetStateAction<AppStatus>>;
  setFetchUrl: React.Dispatch<React.SetStateAction<IFetchUrl>>;
}
