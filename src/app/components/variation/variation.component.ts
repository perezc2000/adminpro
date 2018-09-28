import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-variation',
  templateUrl: './variation.component.html',
  styles: []
})
export class VariationComponent implements OnInit {
  @Input() progress: number = 50;
  @Input() leyend: string = 'Title';

  @Output() returnValue: EventEmitter<number> = new EventEmitter();

  @ViewChild('fieldProgress') fieldProgress: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  changeField( newValue: number ) {
    if (newValue > 100) {
      this.progress = 100;
    } else if (newValue < 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.fieldProgress.nativeElement.value = this.progress;

    this.returnValue.emit ( this.progress );
  }

  changeProgress(value: number) {
    if ((this.progress + value) > 100 && (value > 0)) {
      return;
    }
    if ((this.progress + value) < 0 && (value < 0)) {
      return;
    }
    this.progress += value;

    this.returnValue.emit ( this.progress );

    this.fieldProgress.nativeElement.focus();
  }

}
