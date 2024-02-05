import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {TranslateModule} from "@ngx-translate/core";
import {MatListModule} from "@angular/material/list";
import {MatRippleModule} from "@angular/material/core";
import {RouterLink} from "@angular/router";

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
        TranslateModule,
        MatListModule,
        MatRippleModule,
        RouterLink
    ]
})
export class HeaderComponent {
  private _showSideNav = true;
  @Output() showSideNav = new EventEmitter<boolean>();

  public sideNavToggle(): void {
    this._showSideNav = !this._showSideNav;
    this.showSideNav.emit(this._showSideNav);
  }
}
