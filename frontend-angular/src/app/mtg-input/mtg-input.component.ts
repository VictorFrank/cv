import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgIf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {response} from "express";

@Component({
  selector: 'app-mtg-input',
  standalone: true,
    imports: [FormsModule, NgIf],
  templateUrl: './mtg-input.component.html',
  styleUrl: './mtg-input.component.css'
})
export class MtgInputComponent {
    private apiUrl = 'http://localhost:5234/weatherforecast';
    playerNumber: number = 2;

    constructor(private http: HttpClient) {}

    mtgFormData= {
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
        startingPlayer: '',
        fb: '',
        fdeath: '',
        gametime: '',
        win: '',
        wmethod: ''
    }

    printFormData() {
        console.log(this.mtgFormData);
    }

    handlePlayerNumberChange(event: number): void {
        this.playerNumber = event
        console.log(`Player number changed to: ${this.playerNumber}`);
    }

    submitForm(): void {
        console.log('Form submitted with data:', this.mtgFormData);

        this.http.post('http://localhost:5234/api/mtgform/submit', this.mtgFormData).subscribe({
            next: (response) => {
                console.log('Form data successfully sent to backend:', response);
            },
            error: (err) => {
                console.error('Error sending form data to backend:', err);
            }
        })
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
}
