import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./component/home/home.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { DocsComponent } from "./component/docs/docs.component";
import { ReferenceComponent } from "./component/reference/reference.component";
import { ProjectsComponent } from "./component/projects/projects.component";
import { PresentationsComponent } from "./component/presentations/presentations.component";
import { VideosComponent } from "./component/videos/videos.component";
import { CommunicationKitComponent } from "./component/communication-kit/communication-kit.component";

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: "", component: HomeComponent },
      { path: "home", component: HomeComponent },
      { path: "docs", component: DocsComponent },
      { path: "docs/reference", component: ReferenceComponent },
      { path: "docs/presentations", component: PresentationsComponent },
      { path: "docs/videos", component: VideosComponent },
      { path: "docs/communication-kit", component: CommunicationKitComponent },
      { path: "docs/projects", component: ProjectsComponent },
      { path: "**", component: NotFoundComponent }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}