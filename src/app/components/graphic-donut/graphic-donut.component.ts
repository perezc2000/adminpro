import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-graphic-donut',
  templateUrl: './graphic-donut.component.html',
  styles: []
})
export class GraphicDonutComponent implements OnInit {
  @Input() title: string = 'Gráfica de torta';
  @Input() donutData: any[] = [];
  @Input() donutLabels: any[] = [];
  @Input() donutType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

}
