import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-mtg-input',
  standalone: true,
    imports: [FormsModule, NgIf],
  templateUrl: './mtg-input.component.html',
  styleUrl: './mtg-input.component.css'
})
export class MtgInputComponent {
    playerNumber: number = 2;

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
    }

}
