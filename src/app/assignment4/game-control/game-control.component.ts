import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('gameStart') start = new EventEmitter<{ gameNumber: number }>();
  
  timeCounter = 0
  timer: any

  constructor() { }

  ngOnInit() {
  }

  onGameStartClick() {
    this.timer = setInterval(() => {
      console.log(this.timeCounter++);
      this.start.emit({ gameNumber: this.timeCounter });
    }, 1000)
  }
  onGameStopClick() {
    clearTimeout(this.timer);
  }

}
