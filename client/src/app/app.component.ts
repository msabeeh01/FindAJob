import { APP_INITIALIZER, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

// button import
import { ButtonComponent } from './Components/button/button.component';
import { NumberOverviewComponent } from './Components/number-overview/number-overview.component';
import { RecommendedComponent } from './Components/recommended/recommended.component';
import { LoginComponent } from './Components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    ButtonComponent,
    NumberOverviewComponent,
    RecommendedComponent,
    LoginComponent,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'client';
}
