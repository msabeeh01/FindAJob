import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// button import
import { ButtonComponent } from './button/button.component';
import { NumberOverviewComponent } from './number-overview/number-overview.component';
import { RecommendedComponent } from './recommended/recommended.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    ButtonComponent,
    NumberOverviewComponent,
    RecommendedComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
