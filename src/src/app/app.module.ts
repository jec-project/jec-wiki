/* Angular imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

/* Angular material imports */
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

/* Angular tree import */
import { TreeModule } from 'angular-tree-component';

/* App components imports */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DocsComponent } from './component/docs/docs.component';
import { ReferenceComponent } from './component/reference/reference.component';
import { ProjectsComponent } from './component/projects/projects.component';

import { MdViewportComponent } from './component/md-viewport/md-viewport.component';
import { BreadcrumbComponent } from './component/breadcrumb/breadcrumb.component';

/* App services imports */
import { JecProjectsService } from './service/jec-projects.service';
import { NavigationService } from './service/navigation.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    ReferenceComponent,
    ProjectsComponent,
    NotFoundComponent,
    BreadcrumbComponent,
    MdViewportComponent
  ],
  imports: [
    /* Angular Module */
    BrowserAnimationsModule,
    RouterModule,
    /* Angular Material Module */
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    /* Angular Tree Module */
    TreeModule,
    /* Routing Module */
    AppRoutingModule
  ],
  providers: [
    JecProjectsService,
    NavigationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
