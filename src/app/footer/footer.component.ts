import { Component } from '@angular/core';
import {ContactComponent} from '../contact/contact.component';

@Component({
  selector: 'app-footer',
  imports: [ContactComponent],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
