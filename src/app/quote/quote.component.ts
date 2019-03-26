import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})

/*#3
new code for wednesday starts here*/

export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1,'Marcus','Get busy living or get busy dying.','Stephen King', new Date(2019,1,12)),
    new Quote(3,'Joker','Those who dare to fail miserably can achieve greatly.', 'John F. Kenedy',new Date(2019,2,25)),
    new Quote(4,'Storm','I never knew how to worship until I knew how to love.','Henry Ward Beecher', new Date(2019,3,1)),
    new Quote(5,'Zac','Insanity: doing the same thing over and over again and expecting different results.','Albert Einstein', new Date(2018,6,16)),
    new Quote(6,'Superman','“A friend is someone who gives you total freedom to be yourself.','Jim Morrison', new Date(2018,3,30)),

]

revealDetails(i){
  this.quotes[i].showDetails = !this.quotes[i].showDetails;
}

upvote(i){
  this.quotes[i].upvotes+=1
}
downvote(i){
  this.quotes[i].downvotes+=1
}

deleteQuote(isComplete, index){
  if (isComplete){
    let toDelete=confirm(` Are you sure you want to delete; " ${this.quotes[index].message}"`)

    if (toDelete) {
      this.quotes.splice(index,1)
    }
  }
}

addNewQuote(quote){
  let quoteLength = this.quotes.length;
  quote.id=quoteLength+1;
  quote.inputDate = new Date(quote.inputDate);
  this.quotes.push(quote)
}
  constructor() { }

  ngOnInit() {
  }

}
