import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shop-project';
  public showSideNav = false;

  public onSideNavChange(showNav: boolean): void {
    this.showSideNav = showNav;
  }
}
