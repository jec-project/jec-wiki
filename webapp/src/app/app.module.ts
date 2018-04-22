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

/* App components imports */
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './component/home/home.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DocsComponent } from './component/docs/docs.component';

/* App services imports */
import { JecProjectsService } from './service/jec-projects.service';
import { ReferenceComponent } from './component/reference/reference.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    ReferenceComponent,
    NotFoundComponent
  ],
  imports: [
    /* Angular imports */
    BrowserAnimationsModule,
    RouterModule,
    /* Angular material imports */
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    /* Routing imports */
    AppRoutingModule
  ],
  providers: [
    JecProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
