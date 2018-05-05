import { Observable } from "rxjs";

export interface MenuService {

  getData(): Observable<any>;
}
