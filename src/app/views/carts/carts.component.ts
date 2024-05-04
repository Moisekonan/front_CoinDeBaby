import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/layouts/header/header.component';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";

@Component({
    selector: 'app-carts',
    standalone: true,
    templateUrl: './carts.component.html',
    styleUrl: './carts.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class CartsComponent {

}
