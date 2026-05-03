export const addRecentBook = (book) => {
  const key = `recentBooks_guest`;

  let recent = JSON.parse(localStorage.getItem(key)) || [];

  console.log("book", book);
  //duplicate
  recent = recent.filter((item) => item.id !== book.id);
  console.log("book------>", book);

  //add new book
  recent.unshift(book);

  //limit 10
  if (recent.length > 10) {
    recent.pop();
  }

  //save
  if (book) {
    localStorage.setItem(key, JSON.stringify(recent));
  }
};

export const clearRecentBooks = () => {
  const key = "recentBooks_guest";
  localStorage.removeItem(key);
};
