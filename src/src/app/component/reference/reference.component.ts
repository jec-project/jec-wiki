import { Component } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { JecReferenceMenuService } from "../../service/jec-reference-menu.service";
import { AbstractMarkdownComponent } from "../core/abstract-markdown.component";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-reference",
  templateUrl: "./reference.component.html"
})
export class ReferenceComponent extends AbstractMarkdownComponent {
  
  constructor(
    navigService: NavigationService,
    menuService: JecReferenceMenuService,
    router: Router,
    location: Location
  ) {
    super(
      "resources/wiki/pages",
      "/docs/reference",
      "jec-reference/jec-reference",
      navigService,
      menuService,
      router,
      location
    );
  }

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Reference", route: "docs/reference" }
    ];
    super.ngOnInit();
  }
}
