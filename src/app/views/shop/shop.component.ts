import { Component } from '@angular/core';
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";
import { FooterComponent } from "../../shared/layouts/footer/footer.component";

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class ShopComponent {

}
