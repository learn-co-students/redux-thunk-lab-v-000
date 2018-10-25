function manageCats(state = [], action) {
  switch (action.type) {
    case 'FETCH_CATS':
      return [...state, action.payload]

    default:
      return state
  }
}

export default manageCats;