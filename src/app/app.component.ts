import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angSlider';
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
  thumbLabel = true;
  tdy = new Date();
  minValue = this.tdy.getTime();
  months = this.getMonths(this.tdy.getMonth())
  getMonths(val) {
    let arr = []
    for (let i = 0; i < 3; i++) {
      arr.push(this.allMonths[(val + i)%12]);
    }
    return arr;
  }
  min = new Date(this.tdy.getFullYear(), this.tdy.getMonth(), 1).getTime();
  max = new Date(this.tdy.getFullYear(), this.tdy.getMonth() + 1, 0).getTime();
  value = this.minValue;
  selectedDate = new Date(this.value);
  selectedMonthChange(event) {
    this.min = new Date(this.tdy.getFullYear(), event, 1).getTime();
    this.max = new Date(this.tdy.getFullYear(), event + 1, 0).getTime();
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
    else {
      this.selectedDate = new Date(this.value);
    }
  }
  formatRateLabel() {
    // return new Date(this.value).toDateString().slice(4,10);
    let dt = new Date(this.value);
    let val = dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    return val;
  }
}
