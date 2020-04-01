import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    {id:1, title:'Talk less but talk sense', description:'Kevin'},
    {id:2, title:'Talk less but talk sense', description:'Kevo'},
    {id:3, title:'Talk less but talk sense', description:'Munene'},
    {id:4, title:'Talk less but talk sense', description:'Kimathi'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
