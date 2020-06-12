export const CATEGORIES_LOADING = "CATEGORIES_LOADING";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_ERROR = "CATEGORIES_ERROR";

export const setCategoriesLoading = (bool) => {
  return {
    type: CATEGORIES_LOADING,
    payload: bool
  };
};

export const setCategoriesSuccess = (data) => {
  return {
    type: CATEGORIES_SUCCESS,
    payload: data
  };
};

export const setCategoriesError = (error) => {
  return {
    type: CATEGORIES_ERROR,
    payload: error
  };
};
