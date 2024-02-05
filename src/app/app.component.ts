import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'friend-event';
  public showSideNav = true;

  constructor(translate: TranslateService) {
    translate.setDefaultLang('ua');
    translate.use('ua');
  }
  public onSideNavChange(showNav: boolean): void {
    this.showSideNav = showNav;
  }
}
