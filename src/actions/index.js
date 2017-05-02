export function selectBook(book) {
  // SelectBook is an ActionCreator, it needs to return an object with a type property
  return {
    // type is always uppercase and underscored
      type: 'BOOK_SELECTED',
      book: book
  }
}
