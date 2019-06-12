import { 
    createStore, 
    compose, 
    applyMiddleware, 
    combineReducers 
} from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './cats_reducer';

// For enhancers passed to createStore method
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// combine reducers
const rootReducer = combineReducers({
    cats: catsReducer
})

// create redux store

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)

export default store;