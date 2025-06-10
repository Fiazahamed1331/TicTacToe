import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private way:Router){}
  name1:string="";
  name2:string="";
 
  warStarts()
  {
    this.way.navigate(['/playground'], {
      state: { message: {player1:this.name1,player2:this.name2} }
    });
  }
}
