import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

@Injectable()
export class JecProjectsService {

  constructor() { }

  public getData(): Observable<any> {
    const result:any = {
      projects: [
        { label: "jec-wiki" },
        { label: "jec-website" },
        { label: "jec-app-samples" },
        { label: "jec-jdi-mock" },
        { label: "jec-sokoke" },
        { label: "jec-glasscat-core" },
        { label: "jec-sandcat" },
        { label: "jec-tiger" },
        { label: "jec-jdi" },
        { label: "jec-glasscat-install" },
        { label: "jec-glasscat" },
        { label: "jec-exchange-mock" },
        { label: "jec-exchange" },
        { label: "jec-commons-node" },
        { label: "jec-commons" },
        { label: "jec-cli" },
        { label: "jec-cli-template" },
        { label: "jec-gpm-microservice" },
        { label: "jec-gpm-angular" },
        { label: "jec-gpm-basic" },
        { label: "jec-jars-mock" },
        { label: "jec-glasscat-metadata" },
        { label: "jec-wildcat" },
        { label: "jec-juta" },
        { label: "jec-jars" },
        { label: "jec-glasscat-commands" },
        { label: "jec-glasscat-cli" },
        { label: "jec-cheetoh" },
        { label: "jec-manx" },
        { label: "jec-jws" },
        { label: "jec-sample-tiger" }
      ]
  };
    return Observable.of(result);
  }
}
