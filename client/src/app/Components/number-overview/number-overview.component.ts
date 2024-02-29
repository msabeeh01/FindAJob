import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

interface ResponseData {
  accepted: number;
  rejected: number;
}

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
  username: string = '';

  // data fetch
  constructor(private http: HttpClient) {
    if (typeof window !== 'undefined') {
      this.username = JSON.parse(localStorage.getItem('currentUsername') ?? '') ;
    }
  }

  // on init, fetch data
  ngOnInit() {
    this.http.get<ResponseData>('http://localhost:5121/api/User/msabeeh01').subscribe({
      next: (data) => {
        this.accepted = data.accepted;
        this.rejected = data.rejected;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
}
