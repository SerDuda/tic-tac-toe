import React, { useState } from 'react';
import './Game.css'
import Board from './Board';
import {calculateWinner} from '../helper'

const Game = () => {

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXIsNext] = useState(true)
    const winner = calculateWinner(board)

    const handleClick = (index) => {
        const boardCopy = [...board]
    
    // Определить был ли клик по ячейки.
        if(winner || boardCopy[index]) return
    // Определить чей ход
        boardCopy[index] = xIsNext ? 'X' : 'O'
    //Обновить наш стейт
    setBoard(boardCopy)
    setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return (
            <button className='start__btn' onClick={() => setBoard(Array(9).fill(null))}>
                Очистить поле
            </button>
        )
    }
    return (
        <div className='wrapper'>
            {startNewGame()}
            <Board squares={board} click={handleClick}/>
            <p className='game__info'>
                {winner ? `Победиель ${winner}` : `Ходит ${(xIsNext ? 'X' : 'O')}`}
            </p>
        </div>
    );
}

export default Game;
