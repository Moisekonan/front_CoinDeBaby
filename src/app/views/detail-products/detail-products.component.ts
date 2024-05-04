import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeaderComponent } from "../../shared/layouts/header/header.component";

@Component({
    selector: 'app-detail-products',
    standalone: true,
    templateUrl: './detail-products.component.html',
    styleUrl: './detail-products.component.css',
    imports: [FooterComponent, HeaderComponent]
})
export class DetailProductsComponent {

}
