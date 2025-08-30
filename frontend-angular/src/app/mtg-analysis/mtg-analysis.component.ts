import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-mtg-analysis',
  standalone: true,
  imports: [ NgForOf ],
  templateUrl: './mtg-analysis.component.html',
  styleUrl: './mtg-analysis.component.css'
})
export class MtgAnalysisComponent implements OnInit{

    constructor(private http: HttpClient) {}

    stringData: string = ""
    mtgData: any = []

    mockPlayerStats = [
        { name: 'Player 1', gamesPlayed: 10, wins: 6, losses: 4, winRate: '60%' },
        { name: 'Player 2', gamesPlayed: 10, wins: 4, losses: 6, winRate: '40%' },
        { name: 'Player 3', gamesPlayed: 10, wins: 5, losses: 5, winRate: '50%' },
        { name: 'Player 4', gamesPlayed: 10, wins: 7, losses: 3, winRate: '70%' },
        { name: 'Player 5', gamesPlayed: 10, wins: 3, losses: 7, winRate: '30%' }
    ]

    mockCommanderStats = [
        { name: 'Krenko', gamesPlayed: 10, wins: 6, losses: 4, winRate: '60%' },
        { name: 'Muldrotha', gamesPlayed: 10, wins: 4, losses: 6, winRate: '40%' },
        { name: 'Loot', gamesPlayed: 10, wins: 5, losses: 5, winRate: '50%' },
        { name: 'The Gitrog Monster', gamesPlayed: 10, wins: 7, losses: 3, winRate: '70%' },
        { name: 'Burakos', gamesPlayed: 10, wins: 3, losses: 7, winRate: '30%' }
    ]

    ngOnInit(): void {
        console.log("ngOnInit called")

        this.http.get<{message: string}>('http://localhost:5234/api/mtgdata/stringtest').subscribe({
            next: (response) => {
                this.stringData = response.message
            },
            error: (err) => {
                console.error('Error retrieving data from backend:', err);
            }
        })

        //Add real data retrieval here

    }

}
