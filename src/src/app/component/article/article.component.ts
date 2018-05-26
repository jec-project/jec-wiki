import { Component } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";
import { ActivatedRoute } from "@angular/router";
import { AbstractViewComponent } from "../core/abstract-view.component";
import { environment } from '../../../environments/environment';

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html"
})
export class ArticleComponent extends AbstractViewComponent {
  
  constructor(
    navigService: NavigationService,
    private _route: ActivatedRoute
  ) {
    super(navigService);
  }

  public filesPath: string = null;

  public mdFileRef: string = null;

  public ngOnInit(): void {
    this.filesPath = environment.dataSource + "resources/articles/pages";
    this._route.params.subscribe(params => {
      this.mdFileRef = params["id"];
    });
    super.ngOnInit();
  }
  
  public onRendered(event: any): void {
    const articleTitle:string = document.getElementById(this.mdFileRef).innerText;
    this.routeList = [
      { label: "Home", route: "home" },
      { label: "Documentation", route: "docs" },
      { label: "Articles", route: "docs/articles" },
      { label: articleTitle, route: "docs/articles/" + this.mdFileRef }
    ];
  }
}
