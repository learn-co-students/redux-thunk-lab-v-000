import rootReducer from '../src/reducers/index'
import expect from 'expect'

describe('cats reducer', () => {
  it('should return the initial state', () => {
    expect(
      rootReducer(undefined, {})
    ).toEqual({cats: {loading: false, cats: []}})
  })

  it('should handle the FETCH_CATS action', () => {
    const catPics = [{url: "www.example.com/cat1"}, {url: 'www.example.com/cat2'}]
    expect(
      rootReducer(undefined, {
        type: 'FETCH_CATS',
        pictures:  catPics
      })
    ).toEqual({cats: {loading: false, cats: catPics}})
  })
})
