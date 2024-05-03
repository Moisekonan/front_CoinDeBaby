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
  // animations: [
  //   trigger('collapseMenu', [
  //     state(
  //       'collapsed', 
  //       style(
  //         { 
  //           height: '100px',
  //           width: '100px',
  //           background: 'red'
  //         })
  //     ),
  //     state(
  //       'expanded', 
  //       style(
  //         {
  //           height: '500px',
  //           width: '500px',
  //           background: 'yellow'

  //         })
  //     ),
  //     transition('collapsed <=> expanded', animate('1s 200ms ease-in' )),
  //   ])
  // ],
})
export class HeadersComponent {
  // clixkinfi = 'collapsed';
  // isOpen = true;
  // onToggle() {
  //   this.isOpen = !this.isOpen;
  // }
  // ngOnInit() {
  //   setTimeout (() => {
  //     this.clixkinfi = 'expanded';
      
  //   } , 3000);  

  // }
  // state = 'collapsed'; 
  // expand() {
  //   this.state = (this.state === 'expanded') ? 'collapsed'  : 'expanded';
  //   console.log(this.state);
  //   alert(this.state);
  // }
  // affiche() {
  //   alert('hello');
  // }
}
