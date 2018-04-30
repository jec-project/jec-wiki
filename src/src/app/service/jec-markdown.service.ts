import { Injectable } from "@angular/core";
import * as showdown from "showdown";
import * as showdownHighlight from "showdown-highlight";

@Injectable()
export class JecMarkdownService {

  constructor() {
    this.init();
  }

  private _converter: showdown.Converter = null;

  private init(): void {
    this._converter = new showdown.Converter({
      tables: true,
      ghCompatibleHeaderId: true,
      extensions: [showdownHighlight]
    });
  }

  public process(markdown: string): string {
    return this._converter.makeHtml(markdown);
  }
}
