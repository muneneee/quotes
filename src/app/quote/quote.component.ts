import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
   new Quote (1, 'Talk less but talk sense', 'Kevin', new Date(2020,1,1)),
   new Quote (2, 'Talk less but talk sense', 'Luke', new Date(2020,2,2)),
   new Quote (3, 'Talk less but talk sense', 'Munene', new Date(2020,3,1)),
   new Quote (4, 'Talk less but talk sense', 'Kimathi', new Date(2020,4,1)),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  completeQuote(isComplete, index){
    if (isComplete){
      this.quotes.splice(index,1);
    }
  }

  
  constructor() { }

  ngOnInit() {
  }

}
