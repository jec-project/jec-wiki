import { Component, OnInit } from "@angular/core";
import { NavigationService } from "../../service/navigation.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

  constructor(public navigService:NavigationService) { }

  ngOnInit() {
  }
}
