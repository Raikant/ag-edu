import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {LeftpanelComponent} from './leftpanel/leftpanel.component';
import {ContactComponent} from './contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FooterComponent, LeftpanelComponent, ContactComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'welcome';
}
