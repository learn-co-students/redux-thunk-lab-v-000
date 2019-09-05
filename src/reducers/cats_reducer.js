

export default function cat_reducer(state = {
    loading: false, pictures: []
    }, action) {
        switch (action.type) {
            case 'LODAING_CATS':
             return {...state, loading: true}
           
        
              case 'FETCH_CATS':
               
                return {loading: false, pictures: action.payload}
       
            default:
              return state;
          }
        };