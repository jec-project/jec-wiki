import { Injectable } from "@angular/core";
import * as MarkdownIt from "markdown-it";
import * as hljs  from "highlight.js";

@Injectable()
export class JecMarkdownService {

  constructor() {
    this.init();
  }

  private _markdownIt: any = null;

  private init(): void {
    this._markdownIt = MarkdownIt().set({
      highlight: (str: string, lang: string) => {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (e) {}
        }
        return ""; // use external default escaping
      }
    });
  }

  public process(markdown: string): string {
    return this._markdownIt.render(markdown);
  }
}
