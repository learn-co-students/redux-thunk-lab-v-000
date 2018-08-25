import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import * as actions from '../src/actions/catActions'
import expect, { createSpy, spyOn, isSpy } from 'expect'
import nock from 'nock'
import fetch from 'isomorphic-fetch';


// change to redux thunk
const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  // Note : Got tech support permission to comment this out as we are 99% sure it is a port issue, where C9 doesn't work with ports in the 4000 range and there is no obvious config file in the cat-api to make a port adjustment
  // it('uses redux-promise to create an action object with type of "FETCH_CATS" and a payload of cat images when fetchCats is dispatched', () => {
  //   nock('http://localhost:4000')
  //     .get('/db')
  //     .reply(200, { images: [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}] })
    
  //   const expectedActions = [
  //     {type: 'LOADING_CATS'},
  //     { type: "FETCH_CATS", payload: [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}] }
  //   ]

  //   const store = mockStore({})
  //   global.fetch = fetch

  //   return store.dispatch(actions.fetchCats())
  //     .then(() => { // return of async actions
  //       expect(store.getActions()).toEqual(expectedActions)
  //     })
  // })
})
