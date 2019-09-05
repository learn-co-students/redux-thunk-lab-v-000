
export const loadingCats = () => {
    return {
        type: 'LOADING_CATS'
    }
}

export const fetchingCats = cats => {
    return {
        type: 'FETCH_CATS',
        payload: cats.images
    }
}

export const fetchCats = () => {
    return function(dispatch){
        dispatch(loadingCats())

       return fetch('http://localhost:4000/db')
          .then(resp => resp.json())
              .then(cats => {
                  dispatch(fetchingCats(cats));
              })


    }
};

