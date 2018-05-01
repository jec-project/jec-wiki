import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class JecProjectsService {
  constructor() {}

  public getData(): Observable<any> {
    const result: any = {
      projects: [
        { label: "JEC", description: "Solely contains presentation documents related to the JEC project.", progress: 100 },
        { label: "jec-wiki", description: "The official JEC wiki repository.", progress: 60 },
        { label: "jec-website", description: "The official JEC Website repository.", progress: 100 },
        { label: "jec-app-samples", description: "A collection of sample Enterprise JavaScript Projects (EJPs) that can be deployed in GlassCat application servers.", progress: 100 },
        { label: "jec-jdi-mock", description: "Mocking library for testing objects built over the JavaScript Dependency Injection API (JDI).", progress: 100 },
        { label: "jec-sokoke", description: "The Sokoke framework is the default implementation of the JavaScript Dependency Injection (JDI) specification.", progress: 60 },
        { label: "jec-glasscat-core", description: "The core components of the Glasscat Aplication Server.", progress: 90 },
        { label: "jec-sandcat", description: "The GlassCat implementation for building RESTful web services in TypeScript, based upon the JARS specification.", progress: 100 },
        { label: "jec-tiger", description: "Tiger is a unit testing framework for the TypeScript programming language based upon the JEC JUTA specification.", progress: 100 },
        { label: "jec-jdi", description: "The JavaScript Dependency Injection (JDI) framework provides the ability to inject components into a JEC application in a typesafe way.", progress: 80 },
        { label: "jec-glasscat-install", description: "Contains install utilities for the GlassCat application server.", progress: 90 },
        { label: "jec-glasscat", description: "GlassCat Application Server is the default JEC implementation.", progress: 100 , docRef: "glasscat/glasscat-server" },
        { label: "jec-exchange-mock", description: "Mocking library for testing objects built over the JEC Exchange API, including @WebJslets and @Bootstrap decorators.", progress: 80 },
        { label: "jec-exchange", description: "A standardized and portable way to provide JavaScript dynamic applications.", progress: 100 },
        { label: "jec-commons-node", description: "Node.js reusable components related to the JavaScript Enterprise Container (JEC) specification.", progress: 100 },
        { label: "jec-commons", description: "Reusable components related to the JavaScript Enterprise Container (JEC) specification.", progress: 100 },
        { label: "jec-cli", description: "CLI tool for managing JEC projects. You typically use JEC CLI to install and start a GlassCat application server.", progress: 55 },
        { label: "jec-cli-template", description: "Provides functionalities for creating JEC components from a Command Line Interface.", progress: 100 },
        { label: "jec-gpm-microservice", description: "A GlassCat Project Model (GPM) that deploys microservices based on the JavaScript API for REST Services (JARS).", progress: 100 },
        { label: "jec-gpm-angular", description: "A GlassCat Project Model (GPM) that deploys Angular applications with Material dependencies.", progress: 100 },
        { label: "jec-gpm-basic", description: "A GlassCat Project Model (GPM) that deploys standard Enterprise JavaScript Projects (EJPs).", progress: 100 },
        { label: "jec-jars-mock", description: "Mocking library for testing services built over the JavaScript API for Restful Services (JARS).", progress: 100 },
        { label: "jec-glasscat-metadata", description: "Contains utility tools for working with GlassCat server metadata.", progress: 100 },
        { label: "jec-wildcat", description: "The archetype manager for the GlassCat Application Server.", progress: 100 },
        { label: "jec-juta", description: "A simple API to write repeatable tests over common JavaScript unit testing frameworks.", progress: 100, docRef: "jec-apis/juta/jec-juta" },
        { label: "jec-jars", description: "Provides support for annotations that make it easy for developers to build RESTful web services.", progress: 100 },
        { label: "jec-glasscat-commands", description: "Contains default commands used by GlassCat CLI to manage utilities.", progress: 100 },
        { label: "jec-glasscat-cli", description: "Provides the GlassCat command-line user interface (CLI) API.", progress: 100 },
        { label: "jec-cheetoh", description: "The GlassCat Project Model (GPM) manager.", progress: 95 },
        { label: "jec-manx", description: "The Manx framework is the default implementation of the JavaScript WebSocket (JWS) specification.", progress: 0 },
        { label: "jec-jws", description: "The JavaScript WebSocket (JWS) framework enables full-duplex communication in JEC applications.", progress: 0 },
        { label: "jec-sample-tiger", description: "A sample project to show the JUTA default implementation: Tiger.", progress: 100 },
        { label: "jec-glasscat-commands", description: "Contains default commands used by GlassCat CLI to manage utilities.", progress: 80 },
      ]
    };
    result.projects.sort((a: any, b: any) => {
      const labelA = a.label; 
      const labelB = b.label;
      if (labelA < labelB) {
        return -1;
      }
      if (labelA > labelB) {
        return 1;
      }
      return 0;
    });
    return Observable.of(result);
  }
}
