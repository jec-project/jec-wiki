/* Angular imports */
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FlexLayoutModule } from '@angular/flex-layout';

/* Angular material imports */
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

/* Angular Popover Module */
import { MdePopoverModule } from '@material-extended/mde';

/* Angular tree import */
import { TreeModule } from "angular-tree-component";

/* App components imports */
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { HomeComponent } from "./component/home/home.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { DocsComponent } from "./component/docs/docs.component";
import { ReferenceComponent } from "./component/reference/reference.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { AbstractViewComponent } from "./component/core/abstract-view.component";
import { MdViewportComponent } from "./component/md-viewport/md-viewport.component";
import { PresentationsComponent } from "./component/presentations/presentations.component";
import { BreadcrumbComponent } from "./component/breadcrumb/breadcrumb.component";
import { VideosComponent } from "./component/videos/videos.component";
import { CommunicationKitComponent } from "./component/communication-kit/communication-kit.component";
import { CommunityComponent } from "./component/community/community.component";
import { ArticlesComponent } from "./component/articles/articles.component";
import { ArticleComponent } from "./component/article/article.component";

/* App services imports */
import { JecProjectsService } from "./service/jec-projects.service";
import { NavigationService } from "./service/navigation.service";
import { JecReferenceMenuService } from "./service/jec-reference-menu.service";
import { JecCommunityMenuService } from "./service/jec-community-menu.service";
import { JecMarkdownService } from "./service/jec-markdown.service";
import { JecArticlesService } from "./service/jec-articles.service";

/* Utils */
import { SanitizeHtmlPipe } from "./pipe/sanitize-html.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    ReferenceComponent,
    CommunityComponent,
    ProjectsComponent,
    PresentationsComponent,
    NotFoundComponent,
    BreadcrumbComponent,
    MdViewportComponent,
    VideosComponent,
    CommunicationKitComponent,
    ArticlesComponent,
    ArticleComponent,
    SanitizeHtmlPipe
  ],
  imports: [
    /* Angular Module */
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    FlexLayoutModule,
    /* Angular Material Module */
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCardModule,
    /* Angular Popover Module */
    MdePopoverModule,
    /* Angular Tree Module */
    TreeModule,
    /* Routing Module */
    AppRoutingModule
  ],
  providers: [
    JecProjectsService,
    NavigationService,
    JecReferenceMenuService,
    JecMarkdownService,
    JecCommunityMenuService,
    JecArticlesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
