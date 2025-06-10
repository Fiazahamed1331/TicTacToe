import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

})
export class AppComponent {
  title = 'TicTacToe';
  constructor(public o: Router){}
}
