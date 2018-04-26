import { Component, OnInit } from "@angular/core";
import { RouteItem } from "../breadcrumb/route-item.interface";
import { NavigationService } from "../../service/navigation.service";
import { JecReferenceMenuService } from "../../service/jec-reference-menu.service";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.component.html"
})
export class ReferenceComponent implements OnInit {
  constructor(
    public navigService: NavigationService,
    private _referenceMenuService: JecReferenceMenuService
  ) {}

  public routeList: RouteItem[] = null;

  public treeData: any[] = null;

  public treeOptions: any = {};

  public mdFileRef: string = null;

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Reference", route: "docs/reference" }
    ];
    this._referenceMenuService.getData().subscribe(result => {
      this.treeData = result;
    });
  }

  public breadcrumbChangeHandler(routeItem: RouteItem): void {
    this.navigService.navigateTo(routeItem.route);
  }

  public onActivate(event: any): void {
    this.mdFileRef = event.node.data.file;
  }
}
