module.exports.BookIsNotOnLoanException = class BookIsNotOnLoanException extends Error {
    constructor (message) {
      super(message);
      this.name = 'BookIsNotOnLoanException';
    }
}

module.exports.BookAlreadyLoanException = class BookAlreadyLoanException extends Error {
    constructor (message) {
      super(message);
      this.name = 'BookAlreadyLoanException';
    }
}

module.exports.DontHaveBookException = class DontHaveBookException extends Error {
    constructor (message) {
      super(message);
      this.name = 'DontHaveBookException';
    }
}