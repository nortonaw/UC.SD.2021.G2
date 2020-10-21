import { Component, OnInit } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { SelectItem } from 'primeng/api';

interface Book {
  name: string;
  author: string;
}

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  books: Book[];
  selectedBook: string;

  cities1: SelectItem[];

  cities2: City[];

  selectedCity1: City;

  selectedCity2: City;
    
  constructor() {  }

  ngOnInit(): void {

    this.books = [
      {name:'Book1', author:'Author1'},
      {name:'Book2', author:'Author2'},
      {name:'Book3', author:'Author3'},
      {name:'Book4', author:'Author4'},
      {name:'Book5', author:'Author5'},
    ];

    //SelectItem API with label-value pairs
    this.cities1 = [
      {label:'Select City', value:null},
      {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
      {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
      {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
      {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
      {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
    ];

    //An array of cities
    this.cities2 = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }

}
