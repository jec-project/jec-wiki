import { Component } from "@angular/core";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { NavigationService } from "../../service/navigation.service";

@Component({
  selector: "app-docs",
  templateUrl: "./docs.component.html"
})
export class DocsComponent extends AbstractViewComponent {

  constructor(public navigService: NavigationService) {
    super(navigService);
  }

  public ngOnInit():void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" }
    ];
  }
}
