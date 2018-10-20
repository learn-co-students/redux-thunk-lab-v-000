export default function catsReducer(
    state = { loading:false, pictures:[]}, 
    action) 
{
    //console.log("cats reducer", action, state);
    switch (action.type) {
        case "LOADING_CATS":
            return {...state, loading:true }
        case "FETCH_CATS":
        console.log("TEST FETCH CATS Reducer payload",action.payload);
            return { ...state, loading:false, pictures: action.payload };
        default:
            return state;
    }
}
         