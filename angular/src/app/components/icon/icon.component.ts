import {
  Component,
  Input,
  OnChanges,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import * as allIcons from '../../code/icons';

interface Lookup {
  [key: string]: string;
}

const ICONS = Object.values(allIcons);

const LOOKUP: Lookup = ICONS.reduce((acc: any, icon: any) => {
  acc[icon.iconName] = icon;
  return acc;
}, {});

@Component({
  selector: 'icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent implements OnChanges {
  @Input() icon: string = '';

  FALLBACK = LOOKUP['ban'];

  cIcon: any;

  ngOnChanges(changes: SimpleChanges): void {
    this.updateIcon(changes['icon']);
  }

  updateIcon(change: SimpleChange | null) {
    if (!change) {
      return;
    }

    if (!change.currentValue) {
      return;
    }

    const icon = LOOKUP[change.currentValue];
    if (!icon) {
      console.error(
        `[Icon] Cannot find icon '${this.icon}'. Has it been imported? See app/code/icons.ts`
      );
      this.cIcon = null;
      return;
    }

    this.cIcon = icon;
  }
}
