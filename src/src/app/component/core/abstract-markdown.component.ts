import { ViewChild } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { TreeComponent } from "angular-tree-component";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { environment } from '../../../environments/environment';
import { MenuService } from "../../service/menu.service";

export class AbstractMarkdownComponent extends AbstractViewComponent {

  constructor(filesPath: string,
              rootPath: string,
              defaultPage: string,
              navigService: NavigationService,
              private _menuService: MenuService,
              private _router: Router,
              private _location: Location) {
    super(navigService);
    this.filesPath = environment.dataSource + filesPath;
    this._rootPath = rootPath;
    this._defaultPage = defaultPage;
  }

  @ViewChild("navTree") public navTree: TreeComponent;

  public filesPath: string = null;

  public treeData: any[] = null;

  public treeOptions: any = {};

  public mdFileRef: string = null;

  private _rootPath: string = null;

  private readonly ANCHOR: string = "#";

  private readonly SLASH: string = "/";

  private _treeDataMap: Map<string, any> = new Map<string, any>();

  private _anchor: string = null;

  private _lastFilePath: string = null;

  private _defaultPage: string = null;

  public ngOnInit(): void {
    this._menuService.getData().subscribe(result => {
      this.treeData = result.data;
      this.flatten(this.treeData);
      setTimeout(()=> {
        this.navigate(this._router.url);
      }, 0);
    });
  }

  public onActivate(event: any): void {
    const file: string = event.node.data.file;
    const node: any = this.navTree.treeModel.getNodeById(event.node.id);
    if(file) {
      let path: string = this._rootPath + this.SLASH + file;
      if(this._anchor) path += this.ANCHOR + this._anchor;
      if(this._lastFilePath !== path) {
        this._lastFilePath = path;
        this.setMdFileRef(file);
        this._location.replaceState(path);
      }
    }
    if(!node.isActive) {
      node.toggleActivated();
    }
    if(!node.isExpanded) {
      node.toggleExpanded().ensureVisible();
    }
  }

  public onRendered(event: any): void {
    if(this._anchor) {
      document.getElementById(this._anchor).scrollIntoView();
      this._anchor = null;
    }
  }

  private setMdFileRef(file: string): void {
    this.mdFileRef = file;
  }

  private extractPageRoute(route: string): string {
    let result: string = this._rootPath;
    if(route !== this._rootPath) {
      result = route.substr(this._rootPath.length + 1);
    } else {
      result = this._defaultPage;
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
    let pageRef: string = this.extractPageRoute(route);
    const test: string[] = pageRef.split(this.ANCHOR);
    this._anchor = test[1];
    const item: any = this._treeDataMap.get(test[0]);
    if(item) {
      this.setMdFileRef(item.file);
      this.navTree.treeModel.getNodeById(item.id)
                            .toggleExpanded()
                            .ensureVisible()
                            .toggleActivated();
    } else {
      this.navigService.navigateTo("/not-found");
    }
  }
}
