import { Component, Input, Output, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JecMarkdownService } from "../../service/jec-markdown.service";

@Component({
  selector: "jec-md-viewport",
  templateUrl: "./md-viewport.component.html"
})
export class MdViewportComponent {

  @Output() rendered: EventEmitter<string> = new EventEmitter<string>();

  @Input() public set reference(value: string) {
    if(value) {
      const mdFilePath: string = `assets/resources/wiki/pages/${value}.md`;
      this._http.get(mdFilePath, MdViewportComponent.RESPONS_TYPE).subscribe(result => {
        this.textContent = this._markdown.process(result.toString());
        setTimeout(()=> {
          this.rendered.emit(this.textContent);
        }, 0);
      });
    } else {
      this.textContent = MdViewportComponent.EMPTY_CONTENT;
    }
  }
  
  public textContent:string = MdViewportComponent.EMPTY_CONTENT;

  private static readonly RESPONS_TYPE: any = { responseType: "text" };

  private static readonly EMPTY_CONTENT: any = "";

  constructor(private _http: HttpClient,
              private _markdown: JecMarkdownService) { }
}
