import { Component, Inject } from '@angular/core';
import { Translation, TRANSLATION } from '../../i18n/utils';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
})
export class InfoComponent {
  constructor(@Inject(TRANSLATION) public readonly lang: Translation) {
  }
}
