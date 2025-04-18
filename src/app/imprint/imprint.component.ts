import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeaderComponent } from '../shared/header/header.component';
import { HeaderMobileComponent } from '../shared/header-mobile/header-mobile.component';

@Component({
  selector: 'app-imprint',
  imports: [TranslateModule, HeaderComponent, HeaderMobileComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
}