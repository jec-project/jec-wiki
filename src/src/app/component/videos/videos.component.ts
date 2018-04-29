import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html"
})
export class VideosComponent extends AbstractViewComponent implements AfterViewInit {

  public videos: any[] = null;

  @ViewChild("viewport") viewport:ElementRef;

  constructor(navigService: NavigationService,
              private _sanitizer: DomSanitizer) {
    super(navigService);
  }

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Videos", route: "docs/videos" }
    ];

    this.videos = [
      { 
        title: "GlassCat Install",
        url: "https://www.youtube.com/embed/q9PLW8ghxkU",
        description: "See how easy it is to install a new GlassCat application server!"
      },
      {
        title: "Create RESTful APIs with JEC and GlassCat",
        url: "https://www.youtube.com/embed/N_85zglEfe4",
        description: "This video shows how you can create a fully testable RESTful microservice application in less than 3 minutes."
      }
    ];
  }

  public ngAfterViewInit(): void {
    this.viewport.nativeElement.style.maxHeight = "unset";
  }

  public getVideoUrl(url: string): SafeResourceUrl {
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
