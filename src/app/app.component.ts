import { Component } from '@angular/core';
import { ThemeChangerService } from './theme-changer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private themeChangerService: ThemeChangerService) {

  }
  changeTheme() {
    this.themeChangerService.changeTheme();
  }
  title = 'tests';
}

