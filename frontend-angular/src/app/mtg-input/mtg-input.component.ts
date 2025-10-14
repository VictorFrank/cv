import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgIf, NgFor} from "@angular/common";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-mtg-input',
  standalone: true,
    imports: [FormsModule, NgIf, NgFor],
  templateUrl: './mtg-input.component.html',
  styleUrl: './mtg-input.component.css'
})
export class MtgInputComponent {
    private apiUrl = 'http://localhost:5234/weatherforecast';
    playerNumber: number = 2;

    constructor(private http: HttpClient) {}

    mtgFormData: {
        player1: string,
        player2: string,
        player3: string,
        player4: string,
        player5: string,
        commanderp1: string,
        commanderp2: string,
        commanderp3: string,
        commanderp4: string,
        commanderp5: string,
        startingPlayer: string | null,
        fb: string | null,
        fdeath: string | null,
        gametime: string,
        win: string | null,
        wmethod: string
    } = {
        player1: '',
        player2: '',
        player3: '',
        player4: '',
        player5: '',
        commanderp1: '',
        commanderp2: '',
        commanderp3: '',
        commanderp4: '',
        commanderp5: '',
        startingPlayer: null,
        fb: null,
        fdeath: null,
        gametime: '',
        win: null,
        wmethod: ''
    }

    winnerStates = {
        player1: false,
        player2: false,
        player3: false,
        player4: false,
        player5: false
    };

    players: string[] = [
        'Frank',
        'Jacob',
        'Adler',
        'Hong',
        'Jens',
        'Thobias',
        'Søren',
        'Bomann',
        'Ronni',
        'Clausen',
        'Guf',
        'Jonas'
    ]

    commanders: string[] = [
        'Krenko',
        'Muldrotha',
        'Loot',
        'The Gitrog Monster',
        'Burakos',
        'Edgar Markov',
        'Atraxa',
        'Niv-Mizzet',
        'Omnath',
        'Korvold'
    ]

    printFormData() {
        console.log(this.mtgFormData);
    }

    handlePlayerNumberChange(event: number): void {
        this.playerNumber = event
        console.log(`Player number changed to: ${this.playerNumber}`);
    }

    onWinnerChange(playerKey: string, event: Event): void {
        const checkbox = event.target as HTMLInputElement;
        const isChecked = checkbox.checked;

        if (isChecked) {
            // 1️⃣ Update the winner
            this.mtgFormData.win = playerKey;

            // 2️⃣ Uncheck all other boxes
            this.uncheckOtherWinners(playerKey);
        } else {
            // If unchecked and it was the winner, clear it
            if (this.mtgFormData.win === playerKey) {
                this.mtgFormData.win = null;
            }
        }

        console.log('Current winner:', this.mtgFormData.win);
    }

    submitForm(): void {
        console.log('Form submitted with data:', this.mtgFormData);

        /*this.http.post('http://localhost:5234/api/mtgform/submit', this.mtgFormData).subscribe({
            next: (response) => {
                alert('Form submitted successfully!');
                window.location.reload();
            },
            error: (err) => {
                console.error('Error sending form data to backend:', err);
            }
        })*/
    }

    testBackendCall(): void {
        this.http.get(this.apiUrl).subscribe({
            next: (data) => {
                console.log('Data from backend:', data);
            },
            error: (err) => {
                console.error('Api call error:', err)
            }
        });
    }

    uncheckOtherWinners(keepKey: string): void {
        for (const key in this.winnerStates) {
            if (key !== keepKey) {
                // @ts-ignore
                this.winnerStates[key] = false;
            }
        }
    }
}
