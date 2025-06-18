import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playground',
  imports: [CommonModule, FormsModule],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent {
  constructor(private router: Router) {
    let Ton = this.router.getCurrentNavigation();
    this.players = Ton?.extras?.state?.['message'];
  }
  pic: string[] = Array(9).fill('');
  player: string = 'Angel';
  win: string | null = null;
  draw: boolean = false
  players: any = {};

  makeMove(index: number): void {
    if (!this.pic[index]) {
      this.pic[index] = this.player;
      this.winner();

      if (!this.win) {
        this.player = this.player === 'Angel' ? 'Devil' : 'Angel';
      }

    }
  }

  winner(): void {
    const wins = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]
    for (const [a, b, c] of wins) {
      if (this.pic[a] &&
        this.pic[a] === this.pic[b] &&
        this.pic[a] === this.pic[c]
      ) {
        this.win = this.pic[a];
      }
      else {
        this.ifdraw()
      }

    }
  }

  ifdraw() {
  
    if (this.pic.every(cell => cell != '' && this.win==null)) {

      this.draw = true
    }
  }


  reset(): void {
    this.pic = Array(9).fill('');
    this.player = 'Angel';
    this.win = null;
    this.draw = false;
  }
}