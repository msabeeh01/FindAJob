import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reco-cards',
  standalone: true,
  imports: [],
  templateUrl: './reco-cards.component.html',
  styleUrl: './reco-cards.component.scss',
})
export class RecoCardsComponent {
  @Input() title: string = 'No title';
  @Input() company: string = 'No company';
  @Input() description: string =
    'Lorem Ispum Dolor Sit Amet Lorem Ispum Dolor Sit Amet Lorem Ispum Dolor Sit Amet Lorem Ispum Dolor Sit AmetLorem Ispum Dolor Sit Amet Lorem Ispum Dolor Sit AmetLorem Ispum Dolor Sit AmetLorem Ispum Dolor Sit Amet Lorem Ispum Dolor Sit Amet Lorem Ispum Dolor Sit AmetLorem Ispum Dolor Sit Amet';
  @Input() redirect_url: string = '#';  
}

