import { AfterViewInit, Component, ElementRef } from '@angular/core';
import { RecoCardsComponent } from '../reco-cards/reco-cards.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface JobSearchResults {
  results: Job[];
}

interface Job {
  title: string;
  description: string;
  redirect_url: string;
  company: CompanyName;
}

interface CompanyName {
  display_name: string
}


@Component({
  selector: 'app-recommended',
  standalone: true,
  imports: [RecoCardsComponent, CommonModule],
  templateUrl: './recommended.component.html',
  styleUrl: './recommended.component.scss',
})
export class RecommendedComponent {
  jobs: Job[] = [];
  constructor(private http: HttpClient) {
        //get nearby jobs
        this.http
        .get<JobSearchResults>('http://localhost:5121/api/Jobs', {
          params: {
            what: 'developer',
            where: 'L5M7V1',
          },
        })
        .subscribe((res) => {
          //log the title
          console.log(res.results);
          //store the results
          this.jobs = res.results;
          

        });
  }
}
