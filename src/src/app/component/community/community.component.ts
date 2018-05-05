import { Component } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { JecCommunityMenuService } from "../../service/jec-community-menu.service";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { AbstractMarkdownComponent } from "../core/abstract-markdown.component";

@Component({
  selector: "app-community",
  templateUrl: "./community.component.html"
})
export class CommunityComponent extends AbstractMarkdownComponent {
  
  constructor(
    navigService: NavigationService,
    menuService: JecCommunityMenuService,
    router: Router,
    location: Location
  ) {
    super(
      "resources/community/pages",
      "/community",
      "jec-community",
      navigService,
      menuService,
      router,
      location
    );
  }
  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Community", route: "community" }
    ];
    super.ngOnInit();
  }
}
