import { Component, OnInit, VERSION } from '@angular/core';
import { of, from } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item .. ${item}`),
      error: (err) => console.log(`error occurred ${err}`),
      complete: () => console.log('complete'),
    });

    of('Apple 1', 'Apple 2', 'Apple 3').subscribe({
      next: (apple) => console.log(`Apple emitted ${apple}`),
      error: (err) => console.log(`Error occurred: ${err}`),
      complete: () => console.log(`No more apples, go home`),
    });

    from(['Apple 4', 'Apple 5', 'Apple 6']).subscribe({
      next: (apple) => console.log(`Apple emitted ${apple}`),
      error: (err) => console.log(`Error occurred: ${err}`),
      complete: () => console.log(`No more apples, go home 2`),
    });
  }
}
