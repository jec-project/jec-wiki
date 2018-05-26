import { Component, ViewChild, ElementRef } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { JecArticlesService } from "../../service/jec-articles.service";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html"
})
export class ArticlesComponent extends AbstractViewComponent {

  public articles: any[] = null;

  @ViewChild("viewport") viewport:ElementRef;

  constructor(navigService: NavigationService,
              private _jecArticlesService: JecArticlesService) {
    super(navigService);
  }

  public ngOnInit(): void {
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Articles", route: "docs/articles" }
    ];
    this._jecArticlesService.getData().subscribe(result => {
      this.articles = result.data;
    });
  }
}
