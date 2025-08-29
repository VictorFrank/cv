import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mtg-analysis',
  standalone: true,
  imports: [],
  templateUrl: './mtg-analysis.component.html',
  styleUrl: './mtg-analysis.component.css'
})
export class MtgAnalysisComponent implements OnInit{

    constructor(private http: HttpClient) {}

    stringData: string = ""

    ngOnInit(): void {
        console.log("ngOnInit called")

        this.http.get<{message: string}>('http://localhost:5234/api/mtgdata/data').subscribe({
            next: (response) => {
                this.stringData = response.message
            },
            error: (err) => {
                console.error('Error retrieving data from backend:', err);
            }
        })
    }

}
