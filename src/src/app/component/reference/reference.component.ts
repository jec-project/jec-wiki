import { Component, ViewChild } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { JecReferenceMenuService } from "../../service/jec-reference-menu.service";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { TreeComponent } from "angular-tree-component";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.component.html"
})
export class ReferenceComponent extends AbstractViewComponent {

  constructor(navigService: NavigationService,
              private _referenceMenuService: JecReferenceMenuService,
              private _router: Router,
              private _navigService:NavigationService,
              private _location: Location) {
    super(navigService);
  }

  @ViewChild("navTree") public navTree: TreeComponent;

  public treeData: any[] = null;

  public treeOptions: any = {};

  public mdFileRef: string = null;

  private readonly ROOT_PATH: string = "/docs/reference";

  private _treeDataMap: Map<string, any> = new Map<string, any>();

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Reference", route: "docs/reference" }
    ];
    
    this._referenceMenuService.getData().subscribe(result => {
      this.treeData = result.data;
      this.flatten(this.treeData);
      setTimeout(()=> {
        this.navigate(this._router.url);
      }, 0);
    });
  }

  public onActivate(event: any): void {
    const file: string = event.node.data.file;
    if(file) {
      this.setMdFileRef(file);
      this._location.replaceState(this.ROOT_PATH + "/" + file);
    }
  }

  private setMdFileRef(file: string): void {
    this.mdFileRef = file;
  }

  private extractPageRoute(route: string): string {
    let result: string = this.ROOT_PATH;
    if(route !== this.ROOT_PATH) {
      result = route.substr(16);
    } else {
      result = "jec-reference";
    }
    return result;
  }

  private flatten(items: any): void {
    items.forEach(item => {
      this._treeDataMap.set(item.file, item);
      if (item.children) {
        this.flatten(item.children);
      }
    });
  }

  private navigate(route: string): void {
    const pageRef: string = this.extractPageRoute(route);
    const item: any = this._treeDataMap.get(pageRef);
    if(item) {
      this.setMdFileRef(item.file);
      this.navTree.treeModel.getNodeById(item.id)
                            .toggleActivated()
                            .toggleExpanded()
                            .ensureVisible();
    } else {
      this._navigService.navigateTo("/not-found");
    }
  }
}
