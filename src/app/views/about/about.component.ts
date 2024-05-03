import { Component } from '@angular/core';
import { HeadersComponent } from "../../shared/layouts/headers/headers.component";
import { FooterComponent } from "../../shared/layouts/footer/footer.component";

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeadersComponent, FooterComponent]
})
export class AboutComponent {


}
