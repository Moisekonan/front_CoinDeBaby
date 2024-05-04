import { Component } from '@angular/core';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";
import { HeaderComponent } from '../../shared/layouts/header/header.component';

@Component({
    selector: 'app-about',
    standalone: true,
    templateUrl: './about.component.html',
    styleUrl: './about.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class AboutComponent {


}
