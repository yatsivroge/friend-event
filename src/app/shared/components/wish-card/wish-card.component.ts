import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgClass]
})
export class WishCardComponent {
  @Input() title!: string;
  @Input() themeIdx!: number;
}
