import { Component } from "@angular/core";
import { JecProjectsService } from "../../service/jec-projects.service";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { NavigationService } from "../../service/navigation.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html"
})
export class ProjectsComponent extends AbstractViewComponent {
  constructor(
    navigService: NavigationService,
    private _jecProjectsService: JecProjectsService
  ) {
    super(navigService);
  }

  public projects: any[] = null;

  private _projects: any[] = null;

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "JEC Projects", route: "docs/projects" }
    ];
    this._jecProjectsService.getData().subscribe(result => {
      this._projects = result.projects;
      this.filterProjects(null);
    });
  }

  public filterProjects(token: string):void {
    if(token && token.length >= 3) {
      this.projects = this._projects.filter((value: any) => {
        const result: boolean = value.label.indexOf(token) !== -1 ||
                                value.description.indexOf(token) !== -1;
        return result;
      });
    } else {
      this.projects = this._projects;
    }
  }

  public navigateToGithub(project: string): void {
    this.navigService.gotToUrl("https://github.com/jec-project/" + project);
  }

  public navigateToDocRef(docRef: string): void {
    this.navigService.gotToUrl("./docs/reference/" + docRef);
  }

  public navigateToApiRef(apiRef: string): void { }

  public getDisabledStatus(ref: string): boolean {
    return (ref === null || ref === undefined || ref === "") ? true : false;
  }
}
