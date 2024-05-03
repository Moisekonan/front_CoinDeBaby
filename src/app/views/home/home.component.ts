import { Component } from '@angular/core';
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";
import { FooterComponent } from "../../shared/layouts/footer/footer.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class HomeComponent {

}
