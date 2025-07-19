import { useState } from 'react'
import { saveAs } from 'file-saver'
import './MtgDataInput.css'
import * as React from "react";

function MtgDataInput() {
    const [playerNumber, setPlayerNumber] = useState(0);
    const [formData, setFormData] = useState({
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
        turns: '',
        win: '',
        wmethod: ''
    })

    const handlePlayerNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value, 10);
        setPlayerNumber(value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        const filteredData = Object.fromEntries(
            Object.entries(formData).filter(([_, value]) => value.trim() !== '')
        )
        const jsonData = JSON.stringify(filteredData, null, 2);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const now = new Date()
        const fileName = `mtg_game_data_${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}_${now.getHours()}-${now.getMinutes()}.json`;
        saveAs(blob, fileName);
    }

    return (
        <div className="centeredContainer">
            <h1>MTG Data Input</h1>
            <p>After a game, put in the game info. Will be used for later data visualization.</p>
            <form className="inputForm" onSubmit={handleSubmit}>
                <label htmlFor="playerNumber" >Players in game:</label>
                <input className="playerNumberInput" type="number" id="playerNumber" name="playerNumber" value={playerNumber} onChange={handlePlayerNumberChange} required />

                <h2>Players</h2>
                <div className="playerNameContainer">
                    <div className="individualPlayer">
                        <label htmlFor="player1">Player 1:</label>
                        <input type="text" id="player1" name="player1" value={formData.player1} onChange={handleInputChange} required />
                    </div>

                    <div className="individualPlayer">
                        <label htmlFor="player2">Player 2:</label>
                        <input type="text" id="player2" name="player2" value={formData.player2} onChange={handleInputChange} required />
                    </div>

                    <div className="individualPlayer">
                        {playerNumber > 2 && (
                            <>
                                <label htmlFor="player3">Player 3:</label>
                                <input type="text" id="player3" name="player3" value={formData.player3} onChange={handleInputChange} />
                            </>
                        )}
                    </div>

                    <div className="individualPlayer">
                        {playerNumber > 3 && (
                            <>
                                <label htmlFor="player4">Player 4:</label>
                                <input type="text" id="player4" name="player4" value={formData.player4} onChange={handleInputChange}/>
                            </>
                        )}
                    </div>

                    <div className="individualPlayer">
                        {playerNumber > 4 && (
                            <>
                                <label htmlFor="player5">Player 5:</label>
                                <input type="text" id="player5" name="player5" value={formData.player5} onChange={handleInputChange}/>
                            </>
                        )}
                    </div>
                </div>

                <h2>Commanders</h2>
                <div className="commanderNameContainer">
                    <div className="individualCommander">
                        <label htmlFor="commanderp1">Commander P1:</label>
                        <input type="text" id="commanderp1" name="commanderp1" value={formData.commanderp1} onChange={handleInputChange} required />
                    </div>

                    <div className="individualCommander">
                        <label htmlFor="commanderp2">Commander P2:</label>
                        <input type="text" id="commanderp2" name="commanderp2" value={formData.commanderp2} onChange={handleInputChange} required />
                    </div>

                    <div className="individualCommander">
                        {playerNumber > 2 && (
                            <>
                                <label htmlFor="commanderp3">Commander P3:</label>
                                <input type="text" id="commanderp3" name="commanderp3" value={formData.commanderp3} onChange={handleInputChange} />
                            </>
                        )}
                    </div>

                    <div className="individualCommander">
                        {playerNumber > 3 && (
                            <>
                                <label htmlFor="commanderp4">Commander P4:</label>
                                <input type="text" id="commanderp4" name="commanderp4" value={formData.commanderp4} onChange={handleInputChange} />
                            </>
                        )}
                    </div>

                    <div className="individualCommander">
                        {playerNumber > 4 && (
                            <>
                                <label htmlFor="commanderp5">Commander P5:</label>
                                <input type="text" id="commanderp5" name="commanderp5" value={formData.commanderp5} onChange={handleInputChange} />
                            </>
                        )}
                    </div>
                </div>

                <h2>Game Start</h2>
                <div className="gameStartContainer">
                    <div className="individualGameStart">
                        <label htmlFor="startingPlayer">Starting player:</label>
                        <input type="text" id="startingPlayer" name="startingPlayer" value={formData.startingPlayer} onChange={handleInputChange} required />
                    </div>

                    <div className="individualGameStart">
                        <label htmlFor="fb">First blood:</label>
                        <input type="text" id="fb" name="fb" value={formData.fb} onChange={handleInputChange} />
                    </div>

                    <div className="individualGameStart">
                        <label htmlFor="fdeath">First death:</label>
                        <input type="text" id="fdeath" name="fdeath" value={formData.fdeath} onChange={handleInputChange} />
                    </div>
                </div>

                <h2>Game End</h2>
                <div className="gameEndContainer">
                    <div className="individualGameEnd">
                        <label htmlFor="gametime">Estimated game time (minutes):</label>
                        <input type="text" id="gametime" name="gametime" value={formData.gametime} onChange={handleInputChange} />
                    </div>

                    <div className="individualGameEnd">
                        <label htmlFor="turns">Turns:</label>
                        <input type="text" id="turns" name="turns" value={formData.turns} onChange={handleInputChange} />
                    </div>

                    <div className="individualGameEnd">
                        <label htmlFor="win">Winning player:</label>
                        <input type="text" id="win" name="win" value={formData.win} onChange={handleInputChange} required />
                    </div>

                    <div className="individualGameEnd">
                        <label htmlFor="wmethod">Win method:</label>
                        <input type="text" id="wmethod" name="wmethod" value={formData.wmethod} onChange={handleInputChange} required />
                    </div>
                </div>

                <button className="submitButton" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default MtgDataInput