import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterModule],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
  animations: [
    trigger('collapseMenu', [
      state('collapsed', style({display: 'none'})),
      state('expanded', style({display: 'block' , background: 'white'})),
      transition('collapsed <=> expanded', animate('0.3s ease' )),
    ])
  ],
})
export class HeadersComponent {

  state  : string = 'collapsed';
  public expand(): void {
    this.state = (this.state === 'expanded') ? 'collapsed'  : 'expanded';
  }
}
