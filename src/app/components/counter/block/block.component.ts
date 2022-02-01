import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.scss']
})
export class BlockComponent implements OnInit {

  translationObject: any;
  counter: number = 0;

  constructor() {}

  ngOnInit(): void {
  }

  increaseCounter() {
    if (this.counter > 5) {
      return;
    }
    this.counter ++;
  }
}
