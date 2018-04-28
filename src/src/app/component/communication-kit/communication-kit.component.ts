import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { AbstractViewComponent } from "../core/abstract-view.component";

@Component({
  selector: "app-communication-kit",
  templateUrl: "./communication-kit.component.html"
})
export class CommunicationKitComponent extends AbstractViewComponent implements AfterViewInit {

  @ViewChild("viewport") viewport:ElementRef;

  constructor(navigService: NavigationService) {
    super(navigService);
  }

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Communication Kit", route: "docs/communication-kit" }
    ];
  }

  public ngAfterViewInit(): void {
    this.viewport.nativeElement.style.maxHeight = "unset";
  }

  public downloadItem(item: string): void {
    window.location.href = item;
  }
}
