export default function cats_reducer(
  state = {
    loading: false,
    pictures: []
    }, action) {

  switch(action.type) {
    
    case 'LOADING_CATS':
      return [...state, { loading: true }];
      
    case 'FETCH_CATS':
        return {
          loading: false, 
          pictures: action.payload
        };

    default: 
      return state; 
  } 

};