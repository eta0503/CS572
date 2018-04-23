import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  componentCounterValue: number;
  someText:string = "enhkh";

  constructor() {
  	this.componentCounterValue = 0;
  }

  onCounterChange(evt) {
  	this.componentCounterValue = evt;
  }

  change(){
    this.componentCounterValue = 100;
  }
}
