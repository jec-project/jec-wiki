import { Injectable } from "@angular/core";
import * as MarkdownIt from "markdown-it";

@Injectable()
export class JecMarkdownService {

  constructor() {
    this.init();
  }

  private _markdownIt: any = null;

  private init(): void {
    this._markdownIt = MarkdownIt().set({
      html: false
    });
  }

  public process(markdown: string): string {
    return this._markdownIt.render(markdown);
  }
}
