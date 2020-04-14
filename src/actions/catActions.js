export const loadCats = () => ({ type: "LOADING_CATS" });
export const addCats = (cats) => ({ type: "ADD_CATS", cats });

export const fetchCats = () => {
  return (dispatch) => {
    dispatch(loadCats());
    fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch(addCats(data.images));
      });
  };
};
