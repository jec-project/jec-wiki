import { Component, OnInit } from '@angular/core';
import { RouteItem } from '../breadcrumb/route-item.interface';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-wikis',
  templateUrl: './wikis.component.html'
})
export class WikisComponent implements OnInit {

  constructor(public navigService: NavigationService) { }

  public routeList: RouteItem[] = null;

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Reference", route: "docs/wikis" }
    ];
  }

  public breadcrumbChangeHandler(routeItem: RouteItem): void {
    this.navigService.navigateTo(routeItem.route);
  }

}
