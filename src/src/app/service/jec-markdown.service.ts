import { Injectable } from "@angular/core";
import * as MarkdownIt from "markdown-it";

const markdownIt:any = MarkdownIt;

@Injectable()
export class JecMarkdownService {

  constructor() { }

  public process(markdown: string): string {
    return markdownIt().render(markdown);
  }
}
