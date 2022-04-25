import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CustomRoute } from 'src/app/code/types';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NavItemComponent {
  @Input() route: CustomRoute | undefined = undefined;
}
