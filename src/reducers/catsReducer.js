// import { bindActionCreators } from "redux"

// add the catsReducer

const catsReducer = (state = {
    cats: [], loading: false
              }, action) => {
    
    switch (action.type) {
        case 'LOADING_CATS':
            return {
                ...state,
                cats: [...state.cats], loading: true
            }
        case 'ADD_CATS':
            return {
                ...state,
                cats: action.cats,
                // anything.... action.cats is a payload in this case.
                loading: false
            }
        default:
            return state; 
      }
    }

export default catsReducer;