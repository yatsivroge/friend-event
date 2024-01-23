import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    TranslateModule
  ]
})
export class HeaderComponent {
  @Output() showSideNav = new EventEmitter<boolean>();
  private _showSideNav = false;

  public sideNavToggle(): void {
    this._showSideNav = !this._showSideNav;

    this.showSideNav.emit(this._showSideNav);
  }
}
