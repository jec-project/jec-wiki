import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class JecReferenceMenuService {

  constructor(private _http: HttpClient) { }

  public getData(): Observable<any> {
    return this._http.get("assets/resources/wiki/config.json");
  }
}
