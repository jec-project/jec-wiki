import { Component, OnInit } from '@angular/core';
import { JecProjectsService } from '../../service/jec-projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html'
})
export class ProjectsComponent implements OnInit {

  constructor(private _jecProjectsService:JecProjectsService) { }

  public projects:any[] = null;

  public ngOnInit():void {
    this._jecProjectsService.getData().subscribe(result => {
      this.projects = result.projects;
    });
  }

}
