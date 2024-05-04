import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeaderComponent } from '../../shared/layouts/header/header.component';


@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FooterComponent, HeaderComponent]
})
export class ContactComponent {

}
