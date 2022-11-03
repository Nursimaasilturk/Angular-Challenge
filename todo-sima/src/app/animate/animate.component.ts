import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-animate',
  templateUrl: './animate.component.html',
  styleUrls: ['./animate.component.scss'],
  animations: [
    trigger('myclick', [
      state(
        'true',
        style({
          backgrounColor: 'blue',
        })
      ),
      state(
        'false',
        style({
          backgrounColor: 'plum',
        })
      ),
      transition('true => false', animate('1000ms linear')),
      transition('false => true', animate('1000ms linear')),
    ]),
  ],
  // animations: [       // metadata array
  //     trigger('toggleClick', [     // trigger block
  //     state('true', style({      // final CSS following animation
  //       backgroundColor: 'green'
  //     })),
  //     state('false', style({
  //       backgroundColor: 'red'
  //     })),
  //     transition('true => false', animate('1000ms linear')),  // animation timing
  //     transition('false => true', animate('1000ms linear'))
  //   ])
  // ]        // end of trigger block
})
export class AnimateComponent implements OnInit {
  isFirst: string = 'true';
  constructor() {}
  clickIsCorrect() {
    this.isFirst = this.isFirst === 'true' ? 'false' : 'true';
    console.log('çalışıyor');
  }
  ngOnInit(): void {}
}
