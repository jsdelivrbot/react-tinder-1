// state arg is not application state, only the state this reducer is recieving
export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.book;
  }
  return state
}
