import { Component, ViewEncapsulation } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { CustomRoutes } from '../code/types';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class LayoutComponent {
  routes: CustomRoutes = AppRoutingModule.ROUTES.filter((r) => r.component);
}
