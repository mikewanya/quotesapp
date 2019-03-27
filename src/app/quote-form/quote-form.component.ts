import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import{ Quote } from '../quote';
import { isDate } from 'util';
//ends here

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote= new Quote(0, "", "", "", new Date());

  //below is new code for submit quote
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote (){
    this.addQuote.emit(this.newQuote);
  }
//ends here
  constructor() { }

  ngOnInit() {
  }

}
