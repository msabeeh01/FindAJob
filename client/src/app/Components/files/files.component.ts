import { Component } from '@angular/core';
import { FilecardComponent } from '../filecard/filecard.component';

@Component({
  selector: 'app-files',
  standalone: true,
  imports: [FilecardComponent],
  templateUrl: './files.component.html',
  styleUrl: './files.component.scss'
})
export class FilesComponent {

}
