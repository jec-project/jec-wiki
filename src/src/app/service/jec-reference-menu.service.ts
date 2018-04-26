import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class JecReferenceMenuService {

  constructor() { }

  public getData(): Observable<any> {
    const result:any = [
      {
        id: "1",
        name: "JEC Overview", file:"jec-overview",
        children: [
          { id: "1.1", name: "About these Docs", file:"about-jec-documentation" },
          { id: "1.2", name: "List of JEC Projects Repositories" },
          { id: "1.3", name: "JEC Publications",
            children: [
              { id: "1.31", name: "Presentations" },
              { id: "1.32", name: "Articles" },
              { id: "1.33", name: "Communication Kit" }
            ]
          },
          { id: "1.1000", name: "Roadmap",
            children: [
              { id: "1.1001", name: "Projects Progress" },
              { id: "1.1002", name: "JEC Projects TODOS" },
            ]
          },
        ]
      },
      {
        id: "2",
        name: "JEC APIs",
        children: [
          { id: "2.1", name: "Jslets" },
          { id: "2.2", name: "JARS" },
          { id: "2.3", name: "JDI" },
          { id: "2.4", name: "JUTA" }
        ]
      },
      {
        id: "3", name: "GlassCat Server", file: "glasscat-server"
      }
    ];
    return Observable.of(result);
  }
}
