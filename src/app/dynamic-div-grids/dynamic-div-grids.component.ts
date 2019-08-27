import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-div-grids',
  templateUrl: './dynamic-div-grids.component.html',
  styleUrls: ['./dynamic-div-grids.component.css']
})
export class DynamicDivGridsComponent implements OnInit {
  it = [{ 'available': 0, 'fill': 200, 'total': 200 },
  { 'available': 137, 'fill': 63, 'total': 200 },
  { 'available': 80, 'fill': 120, 'total': 200 },
  { 'available': 60, 'fill': 140, 'total': 200 },
  { 'available': 160, 'fill': 40, 'total': 200 },
  { 'available': 60, 'fill': 140, 'total': 200 },
  { 'available': 160, 'fill': 40, 'total': 200 },
  { 'available': 137, 'fill': 63, 'total': 200 },
  { 'available': 80, 'fill': 120, 'total': 200 },
  { 'available': 60, 'fill': 140, 'total': 200 }]
  constructor() { }

  ngOnInit() {
  }

}
