import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-from-external-file',
  templateUrl: './data-from-external-file.component.html',
  styleUrls: ['./data-from-external-file.component.css']
})
export class DataFromExternalFileComponent implements OnInit {
  val:any=[];
  constructor(private http:HttpClient) {
    
  }

  ngOnInit() {
    this.http.get('../../assets/data.json').subscribe(res=>{
      console.log(res);
      this.val=res;
    })
  }

}
