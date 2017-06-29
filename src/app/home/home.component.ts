import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeTitle = "Welcome to NeighborHome";
  myString = "i like chicken";
  myBoolean = true;
  newHome = {
    address: "123 Main St",
    size: "2000sqft",
    price: 200000
  };

  alertMe(val){
    alert(val);
  };

  @Input() realtor;

  @Output() onYell = new EventEmitter();

  fireYellEvent(e){
    this.onYell.emit(e);
  }
  constructor() { }

  ngOnInit() {
  }

}
