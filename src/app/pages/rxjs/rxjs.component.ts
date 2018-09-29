import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Subscriber } from 'rxjs/internal/Subscriber';
import { retry, map, filter } from 'rxjs/operators';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor() {

    this.subscription = this.returnObservable()
    .subscribe(
      count => { console.log('Subscribe', count); },
      error => { console.error('Observable Error', error); },
      () => { console.log('Observable Complete'); }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  returnObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let count = 0;
      const interval = setInterval( () => {
        count += 1;
        const response = {
          value: count
        };

        observer.next(response);
        // if (count === 3) {
        //   clearInterval(interval);
        //   observer.complete();
        // }
      }, 1000);
    })
    .pipe (
      map( response => {
        return response.value;
      }),
      filter( ( count, index ) => {
        if ( (count % 2) === 1 ) {
          return true;
        } else {
          return false;
        }
      })
    );
  }
}
