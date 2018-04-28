import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { RouteItem } from "../breadcrumb/route-item.interface";

export abstract class AbstractViewComponent implements OnInit {

  public routeList: RouteItem[] = null;
  
  constructor(public navigService:NavigationService) { }

  public ngOnInit():void {}

  public breadcrumbChangeHandler(routeItem: RouteItem): void {
    this.navigService.navigateTo(routeItem.route);
  }
}
