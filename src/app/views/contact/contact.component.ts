import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";

@Component({
    selector: 'app-contact',
    standalone: true,
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.css',
    imports: [FooterComponent, HeadersComponent]
})
export class ContactComponent {

}
