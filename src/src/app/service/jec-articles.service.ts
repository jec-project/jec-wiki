import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AbstractMenuService } from "./AbstractMenuService";

@Injectable()
export class JecArticlesService extends AbstractMenuService {
  
  constructor(http: HttpClient) {
    super(http, "resources/articles");
  }
}
