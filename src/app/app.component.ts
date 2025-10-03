import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    standalone: false
})
export class AppComponent {
  currentTime = new Date();

  secondsOfWholeDay = 86400;

  seconds = 0;
  percent = 0;

  constructor(
  ) {
    this.updateTime();
    setInterval(() => { this.updateTime(); }, 1000);
  }

  updateTime() {
    this.currentTime = new Date();
    this.seconds = this.currentTime.getSeconds() + (60 * this.currentTime.getMinutes()) + (60 * 60 * this.currentTime.getHours());
    this.percent = Math.floor(this.seconds / this.secondsOfWholeDay * 100);
  }
}
