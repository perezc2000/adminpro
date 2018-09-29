import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  title: string;

  constructor(
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) {
    this.getPathRoute()
    .subscribe( path => {
      this.title = path;
      this._title.setTitle(path);

      const metaTag: MetaDefinition = {
        name: 'Description',
        content: path
      };
      this._meta.updateTag(metaTag);
    });
  }

  ngOnInit() {
  }

  getPathRoute() {
    return this._router.events
      .pipe(
        filter( event => event instanceof ActivationEnd ),
        filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
        map( (event: ActivationEnd) => event.snapshot.routeConfig.path )
      );
  }

}
