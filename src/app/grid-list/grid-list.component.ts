import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {

  tiles = [
    {text: 'One', cols: 3, rows: 2, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 2, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    {text: 'Five', cols: 2, rows: 2, color: '#DDAAF1'},
    {text: 'Six', cols: 1, rows: 1, color: 'green'},
    {text: 'Seven', cols: 1, rows: 2, color: 'pink'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
