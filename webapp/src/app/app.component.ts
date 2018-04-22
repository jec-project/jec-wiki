import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private _router:Router) { }

  public navigateTo(route:string):void {
    this._router.navigateByUrl(route);
  }
}
