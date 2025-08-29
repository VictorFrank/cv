import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-frontpage',
  standalone: true,
  imports: [],
  templateUrl: './frontpage.component.html',
  styleUrl: './frontpage.component.css'
})
export class FrontpageComponent {

    constructor(private router: Router) {}

    navigateTo(url: string): void {
        this.router.navigate([url])
    }

}
