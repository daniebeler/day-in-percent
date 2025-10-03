import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, startWith } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class AppComponent {
  readonly secondsOfWholeDay = 86400;

  // Stream that emits every second
  readonly time$ = interval(1000).pipe(
    startWith(0), // emit immediately on load
    map(() => {
      const now = new Date();
      const seconds =
        now.getSeconds() +
        now.getMinutes() * 60 +
        now.getHours() * 3600;

      return {
        currentTime: now,
        percent: Math.floor((seconds / this.secondsOfWholeDay) * 100),
      };
    })
  );
}
