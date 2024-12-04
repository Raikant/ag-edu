import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {LeftpanelComponent} from './leftpanel/leftpanel.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, LeftpanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'welcome';
}
