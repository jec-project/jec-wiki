import { Component } from '@angular/core';
import { NavigationService } from './service/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(public navigService:NavigationService) {}
}
