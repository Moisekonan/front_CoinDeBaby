import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/layouts/header/header.component';
import { FooterComponent } from "./shared/layouts/footer/footer.component";
import { SlideComponent } from './shared/layouts/slide/slide.component';



@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HeaderComponent, FooterComponent , SlideComponent]
})
export class AppComponent {
  title = 'front-end_coindebaby';
}
