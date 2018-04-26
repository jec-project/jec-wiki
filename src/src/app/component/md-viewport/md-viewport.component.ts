import { Component, OnInit, Input } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { JecMarkdownService } from "../../service/jec-markdown.service";

@Component({
  selector: "jec-md-viewport",
  templateUrl: "./md-viewport.component.html"
})
export class MdViewportComponent implements OnInit {

  @Input() public set reference(value: string) {
    if(value) {
      const mdFilePath: string = `assets/resources/wiki/pages/${value}.md`;
      this._http.get(mdFilePath, { responseType: 'text' }).subscribe(result => {
        this.textContent = this._markdown.process(result);
      });
    } else {
      this.textContent = null;
    }
  }
  
  public textContent:string = null;

  constructor(private _http: HttpClient,
              private _markdown: JecMarkdownService) { }

  public ngOnInit():void {
  }
}
