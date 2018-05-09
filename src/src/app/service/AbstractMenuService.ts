import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { MenuService } from "./menu.service";
import { Injector } from "@angular/core";

export class AbstractMenuService implements MenuService {
  
  constructor(private _http: HttpClient, private _resourcePath: string) {}

  public getData(): Observable<any> {
    return this._http.get<any>(environment.dataSource + this._resourcePath + "/config.json");
  }
}
