1. use Redux's createStore function to initialize your store in src/index.js.

  const store = createStore(rootReducer, applyMiddleware(thunk));

also, add all the imports needed:
  import React from 'react';
  import ReactDOM from 'react-dom'
  import {Provider} from 'redux';
    <!-- Provider ensures that our entire React application an potentially access data from the store.  -->
  import { createStore, applyMiddleware } from 'redux';
  import thunk from 'redux-thunk';
  import rootReducer from './reducers';
  import { WrapperApp } from './App'

2. Define your rootReducer in reducers/index.js to use the combineReducers function with your catsReducer

    const rootReducer =  combineReducers({
      cats: catsReducer
    });

also, add all the necessary imports
import { combineReducers } from 'redux';
import catsReducer from './cats_reducer';

3. pass it to the <Provider> component and wrap your <App> component in the <Provider> in src/index.js.

  const store = createStore(rootReducer, applyMiddleware(thunk));

  ReactDOM.render(
    <Provider store={store} >
      <WrapperApp />,
    </Provider>,
      document.getElementById('container')
  );

4. Define your catsReducer in src/reducers/cats_reducer. Your catsReducer should respond to one action, an action with a type of 'FETCH_CATS'.

      export default function catsReducer(state= {loading: false, pictures: []}, action) {
        switch (action.type) {
          case 'LOADING_CATS':
            return Object.assign({}, state, {loading: true})
          case 'FETCH_CATS':
            return {loading: false, pictures: action.payload}
          default:
            return state;
        }
      };


5. Define your action creator function, fetchCats in src/actions/catActions. This action should use fetch to make the web request for your cat pic JSON. It should use a then function to parse the JSON of the response to this request, and another .then function chained on that to grab the actual collection of cat pic image objects.

      import fetch from 'isomorphic-fetch';

      export function fetchCats() {
        return (dispatch) => {
          dispatch({ type: 'LOADING_CATS' });
          return fetch('http://localhost:4000/db')
          .then(response => response.json())
          .then(responseJson => {
                  dispatch({type: 'FETCH_CATS', payload: responseJson.images})
              })
            }
          }

6. Your App component should use connect(allows us to specify which data we're listening to (through mapStateToProps), and which component we are providin the data) and mapStateToProps to set a prop of catPics to the cats collection in state.

  inside of the render function:
    <CatList catPics={this.props.catPics} />

    <!-- function mapStateToProps(state){
      return {catPics: state.cats.pictures}
    } -->

7. Define the componentDidMount function so we can have the cat pics fetched when the App component is first loaded up.

    componentDidMount() {
      if (this.props.catPics.length === 0) {
          console.log('in component did mount')
          this.props.actions.fetchCats()
        }
      }

8. We'll need to use mapDispatchToProps in order to make our fetchCats function dispatch-able from within our component.

    function mapDispatchToProps(dispatch) {
      return {actions: bindActionCreators(actions, dispatch)}
    }
