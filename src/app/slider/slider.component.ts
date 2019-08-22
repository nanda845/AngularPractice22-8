import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  allMonths = [
    { value: 0, name: 'Jan' },
    { value: 1, name: 'Feb' },
    { value: 2, name: 'Mar' },
    { value: 3, name: 'Apr' },
    { value: 4, name: 'May' },
    { value: 5, name: 'Jun' },
    { value: 6, name: 'Jul' },
    { value: 7, name: 'Aug' },
    { value: 8, name: 'Sep' },
    { value: 9, name: 'Oct' },
    { value: 10, name: 'Nov' },
    { value: 11, name: 'Dec' }
  ]
  constructor() { }

  ngOnInit() {
  }
 
  tdy = new Date();
  toDate = new Date(this.tdy.getFullYear(), this.tdy.getMonth(), this.tdy.getDate() + 90);
  minValue = this.tdy.getTime();
  maxValue = this.toDate.getTime();
  months = this.getMonths(this.tdy, this.toDate);
  selectMonth=this.months[0];
  getMonths(a, b) {
    var arr = [];
    var dateFrom = new Date(a);
    var dateTo = new Date(b);
    var fromYear = dateFrom.getFullYear();
    var toYear = dateTo.getFullYear();
    var diffYear = (12 * (toYear - fromYear)) + dateTo.getMonth();
    for (var i = dateFrom.getMonth(); i <= diffYear; i++) {
      let val = this.allMonths[i % 12];
      val['year'] = Math.floor(fromYear + (i / 12));
      arr.push(val);
    }
    return arr;
  }
  min = new Date(this.tdy.getFullYear(), this.tdy.getMonth(), 1).getTime();
  max = new Date(this.tdy.getFullYear(), this.tdy.getMonth() + 1, 0).getTime();
  value = this.minValue;
  selectedDate = new Date(this.value);

  selectedMonthChange(event) {
    this.min = new Date(event.year, event.value, 1).getTime();
    this.max = new Date(event.year, event.value + 1, 0).getTime();
    if (this.min < this.minValue) {
      this.value = this.minValue;
    }
    else {
      this.value = this.min;
    }
    this.selectedDate = new Date(this.value);
  }

  calulateDate(e) {
    if (e.value < this.minValue) {
      e.source.value = this.minValue;
      this.selectedDate = new Date(this.minValue);
    }
    else if (e.value > this.maxValue) {
      e.source.value = this.maxValue;
      this.selectedDate = new Date(this.maxValue);
    }
    else {
      this.selectedDate = new Date(this.value);
    }
  }

  formatRateLabel() {
    let dt = new Date(this.value);
    let val = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    return val;
  }
}
