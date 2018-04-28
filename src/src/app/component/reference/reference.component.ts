import { Component, ViewChild } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { JecReferenceMenuService } from "../../service/jec-reference-menu.service";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { TreeComponent } from "angular-tree-component";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.component.html"
})
export class ReferenceComponent extends AbstractViewComponent {
  constructor(
    public navigService: NavigationService,
    private _referenceMenuService: JecReferenceMenuService
  ) {
    super(navigService);
  }

  @ViewChild("navTree") public navTree: TreeComponent;

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
      setTimeout(()=> {
        this.navTree.treeModel.getNodeById("1").toggleActivated().toggleExpanded();
      }, 0);
    });
  }

  public onActivate(event: any): void {
    this.mdFileRef = event.node.data.file;
  }
}
