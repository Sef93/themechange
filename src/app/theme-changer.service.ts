import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangerService {
  theme: Theme = Theme.LIGHT;
  constructor() { }
  changeTheme() {
    if (this.theme == Theme.LIGHT) {
      this.theme = Theme.DARK;
      this.turnOnDarkMode();
    } else {
      this.theme = Theme.LIGHT;
      this.turnOnLightMode();
    }
  }

  private turnOnDarkMode() {
    document.body.classList.remove("light");
    document.body.classList.add("dark")
  }

  private turnOnLightMode() {
    document.body.classList.remove("dark");
    document.body.classList.add("light")
  }

}


enum Theme {
  LIGHT = "light",
  DARK = "dark"
}
