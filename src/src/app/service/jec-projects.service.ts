import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable()
export class JecProjectsService {
  
  constructor(private _http: HttpClient) {}

  public getData(): Observable<any> {
    return this._http.get<any>(environment.dataSource + "resources/projects/config.json");
  }
}
