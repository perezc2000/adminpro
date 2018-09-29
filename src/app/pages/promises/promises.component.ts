import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styles: []
})
export class PromisesComponent implements OnInit {

  constructor() {
    this.count3()
    .then (
      // () => {
      message => {
        console.log('Terminó!', message);
      }
    )
    .catch (
      error => console.error('Error en la promesa', error)
    );
  }

  ngOnInit() {
  }

  count3(): Promise<boolean> {
    return new Promise( (resolve, reject) => {
      let count = 0;
      const interval = setInterval( () => {
        count += 1;
        if (count === 3) {
          resolve(true);
          // reject('Simplemente hubo un error');
          clearInterval(interval);
        }
      }, 1000);
    });
  }
}
