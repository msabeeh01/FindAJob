import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-overview',
  standalone: true,
  imports: [],
  templateUrl: './number-overview.component.html',
  styleUrl: './number-overview.component.scss'
})
export class NumberOverviewComponent {
  @Input() accepted: number = 0;
  @Input() rejected: number = 0;
}
