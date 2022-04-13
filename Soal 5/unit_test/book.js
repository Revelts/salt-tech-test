const { BookAlreadyLoanException, BookIsNotOnLoanException, DontHaveBookException } = require('./book-exception');

class Book
{
    constructor()
    {
        this.books = ['Book A', 'Book B', 'Book C'];
        this.booksLoanedList = [];
    }
    
    availableBooks()
    {
        return this.books;
    }
    
    setTempBookName(bookName)
    {
        this.tempBookName = bookName;
    }
    
    returnBook()
    {
        if (this.isLoaned()) {
            const bookIndex = this.booksLoanedList.findIndex(book => book === this.tempBookName);
            const book = this.booksLoanedList.splice(bookIndex, 1)[0];
            this.books.push(book);
            console.log(`Success return book ${this.tempBookName}`);
        } else {
            throw new BookIsNotOnLoanException(this.tempBookName);
        }
    }
    
    getIndexBook()
    {
        return this.booksLoanedList.findIndex(book => book === this.tempBookName);
    }
    
    borrowBook()
    {
        if (this.isHaveBook()) {
            if (!this.isLoaned()) {
                const bookIndex = this.books.findIndex(book => book === this.tempBookName);
                const book = this.books.splice(bookIndex, 1)[0];
                this.booksLoanedList.push(book);
            } else {
                throw new BookAlreadyLoanException(this.tempBookName);
            }
        }
    }
    
    isLoaned()
    {
        return this.booksLoanedList.find(book => book === this.tempBookName);
    }
    
    isHaveBook()
    {
        if (this.books.find(book => book === this.tempBookName)) {
            return true;
        } else {
            throw new DontHaveBookException(this.tempBookName);
        }
    }
}
module.exports = new Book();