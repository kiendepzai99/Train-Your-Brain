import React from "react";
import {DEFAULT_SUDOKU_BOARD_CELL, DEFAULT_SUDOKU_BOARD_SIZE} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";
import sudokuService from "../../service/SudokuService";
import {mockBoardStatus} from "../../mockData";
import Position from "../../utils/Position";

export default class SudokuBox extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();

        this.state = {
            boardStatus: null,
            pickingPosition: null

        }
    }

    drawBoard = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.clearBoard(canvas);
        boardFactory.getSudokuBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
        if (this.state.boardStatus != null) {
            sudokuService.displayBoard(ctx, this.state.boardStatus);
        }

        sudokuService.drawPickingCell(ctx, this.state.pickingPosition);
    }

    handleMouseOver = () => {
        this.canvasRef.current.style.cursor = "pointer";
    }

    handlePressKey = () => {

    }

    handleMove = (event) => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const position = new Position(x, y);
        const xy = position.getPosition();
        console.log(xy);

        this.setState({
            pickingPosition: xy
        })
    }

    componentDidMount() {
        this.drawBoard();
        this.setState({
            boardStatus: mockBoardStatus()
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.drawBoard();
    }

    render() {
        return (
            <canvas ref={this.canvasRef}
                    width={DEFAULT_SUDOKU_BOARD_SIZE}
                    height={DEFAULT_SUDOKU_BOARD_SIZE}
                    onClick={this.handleMove}
                    onMouseOver={this.handleMouseOver}
                    onKeyPress={this.handlePressKey}
            />
        )
    }
}