import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RecoCardsComponent } from '../reco-cards/reco-cards.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [RecoCardsComponent, CommonModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.scss'
})
export class RecommendedComponent{
  // for # of cards show reco-cards
  cards = [1, 2, 3, 4, 5];
}
