import { Routes } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { NumberOverviewComponent } from './number-overview/number-overview.component';
import { RecommendedComponent } from './recommended/recommended.component';

export const routes: Routes = [
    { path: 'recommended', component: RecommendedComponent },
];
