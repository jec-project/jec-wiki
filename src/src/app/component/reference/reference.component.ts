import { Component, OnInit } from '@angular/core';
import { RouteItem } from '../breadcrumb/route-item.interface';
import { NavigationService } from '../../service/navigation.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html'
})
export class ReferenceComponent implements OnInit {

  constructor(public navigService: NavigationService) { }

  public routeList: RouteItem[] = null;

  public treeData: any[] = null;

  public treeOptions: any = {};

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Reference", route: "docs/reference" }
    ];

    this.treeData = [
      {
        id: 1,
        name: 'root1',
        children: [
          { id: 2, name: 'child1' },
          { id: 3, name: 'child2' }
        ]
      },
      {
        id: 4,
        name: 'root2',
        children: [
          { id: 5, name: 'child2.1' },
          {
            id: 6,
            name: 'child2.2',
            children: [
              { id: 7, name: 'subsub' }
            ]
          }
        ]
      }
    ];
  }

  public breadcrumbChangeHandler(routeItem: RouteItem): void {
    this.navigService.navigateTo(routeItem.route);
  }

}
