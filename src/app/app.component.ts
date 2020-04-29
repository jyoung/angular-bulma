import { Component } from '@angular/core';
import { faCoffee, faCheck, faEnvelope, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-bulma';
  coffeeIcon = faCoffee;
  checkIcon = faCheck;
  envelopeIcon = faEnvelope;
  exclamationIcon = faExclamationTriangle;
}
