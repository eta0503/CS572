import {
	Component,
	OnInit,
	Input,
	Output,
	EventEmitter
} from '@angular/core';

@Component({
  selector: 'counter-component',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
	@Input('valueCounter') counterValue: number;
	@Output() counterChange = new EventEmitter();
  	constructor() {}

  	increaseCounter() {
  		this.counterValue = this.counterValue + 1 ;
  		this.emitCounterValue();
  		return false;
  	}

  	decreaseCounter() {
  		this.counterValue = this.counterValue - 1 ;
  		this.emitCounterValue();
  		return false;
  	}

  emitCounterValue() {
    this.counterChange.emit(this.counterValue);
  }

	ngOnInit() {
		this.counterValue = this.counterValue ? this.counterValue : 0;
	}
}