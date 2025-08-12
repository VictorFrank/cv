import { Component } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {

    navigateTo(url: string): void {
        window.location.href = url;
    }

}
