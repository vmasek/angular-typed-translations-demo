import { Component, Inject } from '@angular/core';
import { Translation, TRANSLATION } from '../../i18n/utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(@Inject(TRANSLATION) public readonly lang: Translation) {
  }
}
