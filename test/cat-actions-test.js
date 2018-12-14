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

})
