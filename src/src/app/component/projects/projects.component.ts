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

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "JEC Projects", route: "docs/projects" }
    ];
    this._jecProjectsService.getData().subscribe(result => {
      this.projects = result.projects;
    });
  }
}
