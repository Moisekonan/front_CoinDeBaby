import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './shared/layouts/headers/headers.component';
import { FooterComponent } from "./shared/layouts/footer/footer.component";



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeadersComponent, FooterComponent]
})
export class AppComponent {
  title = 'angulEcommerce';
}
