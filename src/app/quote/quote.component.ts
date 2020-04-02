import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
   new Quote (1, 'Talk less but talk sense', 'Kevin'),
   new Quote (2, 'Talk less but talk sense', 'Luke'),
   new Quote (3, 'Talk less but talk sense', 'Munene'),
   new Quote (4, 'Talk less but talk sense', 'Kimathi'),
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  
  constructor() { }

  ngOnInit() {
  }

}
