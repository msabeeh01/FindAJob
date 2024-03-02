import { Component, Input } from '@angular/core';
import { NgIconComponent, NgIconsModule, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapFileEarmark, bootstrapFileText, bootstrapGlobe } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-filecard',
  standalone: true,
  imports: [NgIconComponent],
  viewProviders: [
    provideIcons({
      bootstrapGithub,
      bootstrapFileEarmark,
      bootstrapFileText,
      bootstrapGlobe
      
    })
  ],
  templateUrl: './filecard.component.html',
  styleUrl: './filecard.component.scss'
})
export class FilecardComponent {
  //button title prop
  @Input() title: string = 'Button'

  //button icon
  @Input() icon: string = 'menu'
}
