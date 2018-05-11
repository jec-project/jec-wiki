import { Component, AfterViewInit, ViewChild, ElementRef } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { AbstractViewComponent } from "../core/abstract-view.component";

@Component({
  selector: "app-presentations",
  templateUrl: "./presentations.component.html"
})
export class PresentationsComponent extends AbstractViewComponent implements AfterViewInit {

  public presentations: any[] = null;

  @ViewChild("viewport") viewport:ElementRef;

  constructor(navigService: NavigationService) {
    super(navigService);
  }

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Presentations", route: "docs/presentations" }
    ];

    this.presentations = [
      { title: "JEC Overview", img: "jec-overview-thumb", pdf: "jec-overview" },
      { title: "GlassCat Product Overview", img: "jec-glasscat-product-overview-thumb", pdf: "jec-glasscat-product-overview" },
      { title: "GlassCat Overview", img: "jec-glasscat-overview-thumb", pdf: "jec-glasscat-overview" },
      { title: "JCAD", img: "jec-jcad-thumb", pdf: "jec-jcad" },
      { title: "JARS Overview", img: "jec-jars-overview-thumb", pdf: "jec-jars-overview" },
      { title: "JUTA Overview", img: "jec-juta-overview-thumb", pdf: "jec-juta-overview" },
      { title: "App Sample", img: "jec-modular-app-sample-thumb", pdf: "jec-modular-app-sample" }
    ];
  }

  public ngAfterViewInit(): void {
    this.viewport.nativeElement.style.maxHeight = "unset";
  }

  public downloadPdf(item: string): void {
    const pdfUrl: string = `https://github.com/jec-project/JEC/raw/master/presentations/${item}.pdf`;
    window.location.href = pdfUrl;
  }
}
