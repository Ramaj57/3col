import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';






@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  @Input()
  description!: string;
  @Input()
  type!: string;   
  @Input()
  avatar!: string;
  @Input()
  buttonColor!: string;

  
  
  get pathImage() {
    return 'assets/' + this.avatar; 
  }

  }

