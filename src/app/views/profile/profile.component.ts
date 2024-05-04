import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/layouts/header/header.component';
import { FooterComponent } from "../../shared/layouts/footer/footer.component";

@Component({
    selector: 'app-profile',
    standalone: true,
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.css',
    imports: [HeaderComponent, FooterComponent]
})
export class ProfileComponent {

}
