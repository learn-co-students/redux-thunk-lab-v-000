export default function catsReducer(state = {
	loading: false,
	pictures: []
}, action) {
  switch (action.type) {

  	 case 'LOADING_CATS':
	    const data1 = {
	    	loading: true,
	    	pictures: []
	    }
	    return data1
 
    case 'FETCH_CATS':
    	debugger
	    const data = {
	    	loading: false,
	    	pictures: action.payload
	    }
	    return data
 
    default:
      return state;
  }
};