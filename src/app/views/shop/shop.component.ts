import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeaderComponent } from '../../shared/layouts/header/header.component';

@Component({
    selector: 'app-shop',
    standalone: true,
    templateUrl: './shop.component.html',
    styleUrl: './shop.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class ShopComponent {

}
