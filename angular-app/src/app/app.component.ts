import { Component, Input } from '@angular/core';

@Component({
  selector: 'angular-component-native',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-10-webcomponents-demo';

  @Input() msg: string = "empty";
}
