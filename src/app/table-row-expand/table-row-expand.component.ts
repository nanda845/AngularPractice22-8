import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-table-row-expand',
  templateUrl: './table-row-expand.component.html',
  styleUrls: ['./table-row-expand.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableRowExpandComponent implements OnInit {
  displayedColumns = ['expandRow', 'name', 'age'];
  data = [
    { name: 'ANK', age: 26, score: [{ subject: 'A', marks: 70 }, { subject: 'B', marks: 70 }, { subject: 'C', marks: 70 }] },
    { name: 'SN', age: 28, score: [{ subject: 'D', marks: 70 }, { subject: 'E', marks: 70 }, { subject: 'F', marks: 70 }] },
    { name: 'SNS', age: 27, score: [{ subject: '', marks: 70 }, { subject: '', marks: 70 }, { subject: '', marks: 70 }] },
    { name: 'ANK', age: 26, score: [{ subject: 'G', marks: 70 }, { subject: 'H', marks: 70 }, { subject: 'I', marks: 70 }] },
    { name: 'SN', age: 28, score: [{ subject: 'J', marks: 70 }, { subject: 'K', marks: 70 }, { subject: 'L', marks: 70 }] },
    { name: 'SNS', age: 27, score: [{ subject: 'M', marks: 70 }, { subject: 'N', marks: 70 }, { subject: 'O', marks: 70 }] },
    { name: 'ANK', age: 26, score: [{ subject: 'P', marks: 70 }, { subject: 'Q', marks: 70 }, { subject: 'R', marks: 70 }] },
    { name: 'SN', age: 28, score: [{ subject: 'S', marks: 70 }, { subject: 'T', marks: 70 }, { subject: 'U', marks: 70 }] },
    { name: 'SNS', age: 27, score: [{ subject: 'V', marks: 70 }, { subject: 'W', marks: 70 }, { subject: 'X', marks: 70 }] }
  ]
  expandedElement: any;
  // isExpandable=(i:number,row:object)=>row['score'].length>0;
  isExpansionDetailRow = (i: number, row: Object) => true;
  constructor() { }

  ngOnInit() {
  }

  
  expandProduct(element) {
    this.expandedElement = element;
  }

  collapseProduct() {
    this.expandedElement = '';
  }

}