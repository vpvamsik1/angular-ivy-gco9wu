import { Component, OnInit, VERSION } from '@angular/core';
import { of, from, map, tap, take } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  ngOnInit() {
    // of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5])
      .pipe(
        tap((item) => console.log('emitted item...' + item)),
        map((item) => item * 2),
        map((item) => item - 10),
        map((item) => {
          if (item === 0) {
            throw new Error('zero detected');
          }
          return item;
        }),
        take(3)
        // you do not see error anymore because '0' is not being logged anymore because we are only taking the first 3 values
      )
      .subscribe({
        next: (item) => console.log(`resulting item .. ${item}`),
        error: (err) => console.log(`error occurred ${err}`),
        complete: () => console.log('complete'),
      });

    of('Apple 1', 'Apple 2', 'Apple 3')
      .pipe(map((item) => item + ' hello'))
      .subscribe({
        next: (apple) => console.log(`Apple emitted ${apple}`),
        error: (err) => console.log(`Error occurred: ${err}`),
        complete: () => console.log(`No more apples, go home`),
      });

    // from(['Apple 4', 'Apple 5', 'Apple 6']).subscribe({
    //   next: (apple) => console.log(`Apple emitted ${apple}`),
    //   error: (err) => console.log(`Error occurred: ${err}`),
    //   complete: () => console.log(`No more apples, go home 2`),
    // });
  }
}
