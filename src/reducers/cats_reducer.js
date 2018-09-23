


export default function catsReducer(state={loading:false, pictures:[]}, action) {
    // const cats = fetchCats();
    switch(action.type) {
        case "LOADING_CATS":
        return {...state, loading:true};

        case "FETCH_CATS":
        return {loading:false, pictures: action.payload};

        default:
        return state;
    }
}


// function booksReducer(state = [], action) {
//     let idx;
//     switch (action.type) {
//       case "ADD_BOOK":
//         return [...state, action.book];
   
//       case "REMOVE_BOOK":
//         idx = state.indexOf(action.id);
//         return [...state.slice(0, idx), ...state.slice(idx + 1)];
   
//       default:
//         return state;
//     }
//   }