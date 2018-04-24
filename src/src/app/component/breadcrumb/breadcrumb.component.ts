import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { JecProjectsService } from '../../service/jec-projects.service';
import { RouteItem } from './route-item.interface';

@Component({
  selector: 'jec-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {

  constructor() { }

  @Input() public routeList:RouteItem[] = null;
  @Output() public onChange:EventEmitter<RouteItem> = new EventEmitter<RouteItem>();

  public ngOnInit():void { }

  public anchorClickHandler(routeItem:RouteItem):void {
    this.onChange.emit(routeItem);
  }
}
