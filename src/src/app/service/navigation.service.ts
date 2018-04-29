import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class NavigationService {

  constructor(private _router:Router) { }

  public navigateTo(route:string):void {
    this._router.navigateByUrl(route);
  }

  public gotToUrl(url: string): void {
    document.location.href = url;
  }
}
