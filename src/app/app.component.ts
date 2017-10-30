import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  gameNumber: number = 1;

  numberCollector(data: { gameNumber: number }) {
    this.gameNumber = data.gameNumber;
  }
}
