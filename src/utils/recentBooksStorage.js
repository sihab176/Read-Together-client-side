export const addRecentBook = (book, user) => {
  const key = user?.email ? `recentBooks_${user.email}` : `recentBooks_guest`;

  let recent = JSON.parse(localStorage.getItem(key)) || [];

  //duplicate
  recent = recent.filter((item) => item._id !== book._id);

  //add new book
  recent.unshift(book);

  //limit 10
  if (recent.length > 10) {
    recent.pop();
  }

  //save
  localStorage.setItem(key, JSON.stringify(recent));
};
