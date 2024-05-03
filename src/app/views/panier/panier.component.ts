import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";

@Component({
    selector: 'app-panier',
    standalone: true,
    templateUrl: './panier.component.html',
    styleUrl: './panier.component.css',
    imports: [FooterComponent, HeadersComponent]
})
export class PanierComponent {

}
