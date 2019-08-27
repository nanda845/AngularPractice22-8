import { Directive, Input, ElementRef } from '@angular/core';

export interface dispdata {
  available: number,
  fill: number,
  total: number
}
@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
  @Input('test') item?: dispdata;

  constructor(private elementRef: ElementRef<any>) { }
  wid: any;
  wid2: any;
  div1width: any;
  div2width: any;
  ngOnInit() {
    console.log(this.item);

    this.wid = (this.item.fill / this.item.total) * 100;
    this.wid2 = 100 - this.wid;
    this.div1width = this.wid + "%";
    this.div2width = this.wid2 + "%";

    // creating element
    if (this.wid > 0) {
      var divv = document.createElement('div');
      divv.innerHTML = "<p>Fill</p><p>" + this.item.fill + "</p>";
      divv.style.width = this.div1width;
      divv.style.border = "1px solid black";
      if (this.wid == 100) {
        divv.style.background = "green";
      }
      else {
        divv.style.background = "#abf7bc";
      }
      // divv.setAttribute(
      //   "style", "width:this.div1width;border:1px solid black;")
      this.elementRef.nativeElement.appendChild(divv);
    }

    if (this.wid2 > 0) {
      var divv2 = document.createElement('div');
      divv2.innerHTML = "<p>Available</p><p>" + this.item.available + "</p>";
      divv2.style.width = this.div2width;
      divv2.style.border = "1px solid black";
      this.elementRef.nativeElement.appendChild(divv2);
    }
  }
}
