import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";

@Component({
    selector: 'app-profil',
    standalone: true,
    templateUrl: './profil.component.html',
    styleUrl: './profil.component.css',
    imports: [FooterComponent, HeadersComponent]
})
export class ProfilComponent {

}
