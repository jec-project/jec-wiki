import { Component, OnInit } from '@angular/core';
import { JecProjectsService } from '../../service/jec-projects.service';

@Component({
  selector: 'app-reference',
  templateUrl: './reference.component.html'
})
export class ReferenceComponent implements OnInit {

  constructor(private _jecProjectsService:JecProjectsService) { }

  public projects:any[] = null;

  public ngOnInit():void {
    this._jecProjectsService.getProjects().subscribe(result => {
      this.projects = result.projects;
    });
  }

}
