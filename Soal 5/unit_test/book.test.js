const book = require('./book');

/*

Installation : npm install
Running : jest


*/


test(`Library have 3 books which is (Books A, Books B, Books C) then Jack Borrowing a book from library with title Book A
    Jack borrow another book called "Book B", then returning "Book A" and "Book B"
    Library would have no more loaned books and have all of their books again.
    `, () => {
  try {
    // Get current available books
    const availableBooks = book.availableBooks();
    expect(availableBooks).toStrictEqual(book.books);
    console.log(`Available Books : ${availableBooks}`);

    // Set temp book name to borrow
    book.setTempBookName("Book A");
    expect(book.tempBookName).toBe("Book A");

    // Borrow book
    book.borrowBook();
    expect(book.booksLoanedList).toStrictEqual(["Book A"]);
    console.log(`Borrowed Book(s) : ${book.booksLoanedList}`);

    // Get available books left
    const availableBooksLeft = book.availableBooks();
    expect(availableBooksLeft).toStrictEqual(["Book B", "Book C"]);
    console.log(`Available Books left : ${availableBooksLeft}`);

    // Set temp book name to borrow 2nd book
    book.setTempBookName("Book B");
    expect(book.tempBookName).toBe("Book B");
    console.log(`Borrow Book : ${book.tempBookName}`);
    
    // Borrow 2nd book
    book.borrowBook();
    expect(book.booksLoanedList).toStrictEqual(["Book A", "Book B"]);
    console.log(`Borrowed Book(s) : ${book.booksLoanedList}`);
    
    // Get available books left
    const availableBooksLeft2 = book.availableBooks();
    expect(availableBooksLeft2).toStrictEqual(["Book C"]);
    console.log(`Available Books left : ${availableBooksLeft2}`);

    // Set temp book name to return
    book.setTempBookName("Book A");
    expect(book.tempBookName).toBe("Book A");
    console.log(`Returning Book : ${book.tempBookName}`);

    // Return book name and get loaned book left
    book.returnBook();
    expect(book.booksLoanedList).toStrictEqual(["Book B"]);
    console.log(`Borrowed Book(s) : ${book.booksLoanedList}`);
      
    // Set temp book name to return
    book.setTempBookName("Book B");
    expect(book.tempBookName).toBe("Book B");
    console.log(`Returning Book : ${book.tempBookName}`);

    // Return book name and get loaned book left
    book.returnBook();
    expect(book.booksLoanedList).toStrictEqual([]);
    console.log(`Borrowed Book(s) : ${book.booksLoanedList.length === 0 ? 'None' : book.booksLoanedList}`);

  } catch (error) {
    console.log(error);
  }
});