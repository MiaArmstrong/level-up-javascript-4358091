/**To run this file cd into the start folder and run node 01_01_available_books.js */

class book {
  constructor (title, author, isbn, numCopies) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.numCopies = numCopies;
  }
  getAvailability(){
    if(this.numCopies === 0){
      return "out of stock";
    }else if(this.numCopies < 10){
      return "low stock"
    }
    return "in stock"
  }

  sell(numSold = 1){
    this.numCopies = this.numCopies - numSold;
  }

  restock(numStocked = 5){
    this.numCopies = this.numCopies + numStocked;
  }
}

const HungerGames = new book("Hunger Games", "Suzanne Collins", 123919, 5);
console.log(HungerGames.getAvailability());

HungerGames.restock(12);
console.log(HungerGames.getAvailability());

HungerGames.sell(17);
console.log(HungerGames.getAvailability());