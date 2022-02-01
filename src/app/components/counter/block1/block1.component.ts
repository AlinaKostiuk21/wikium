import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-block1',
  templateUrl: './block1.component.html',
  styleUrls: ['./block1.component.scss']
})
export class Block1Component implements OnInit {

  @Input() translation: any;
  @Input() counter: any;

  @Output() onIncreaseCounter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increaseCounter() {
    this.onIncreaseCounter.emit();
  }
}
