import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";

@Component({
    selector: 'app-detail-products',
    standalone: true,
    templateUrl: './detail-products.component.html',
    styleUrl: './detail-products.component.css',
    imports: [FooterComponent, HeadersComponent]
})
export class DetailProductsComponent {

}
