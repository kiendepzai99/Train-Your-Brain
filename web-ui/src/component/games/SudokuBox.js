import React from "react";
import {DEFAULT_SUDOKU_BOARD_CELL, DEFAULT_SUDOKU_BOARD_SIZE} from "../../constants/BoardConstants";
import boardFactory from "../../service/BoardFactory";

export default class SudokuBox extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();

        this.state = {
            boardStatus: null
        }
    }

    drawBoard = () => {
        const canvas = this.canvasRef.current;
        const ctx = canvas.getContext('2d');

        boardFactory.getSudokuBoard(ctx, DEFAULT_SUDOKU_BOARD_CELL);
    }

    handleMove = (event) => {

    }

    componentDidMount() {
        this.drawBoard();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.boardStatus != null) {
            this.drawBoard();
        }
    }

    render() {
        return (
            <div className="col-6 text-center mt-4">
                <canvas id="board" ref={this.canvasRef}
                        width={DEFAULT_SUDOKU_BOARD_SIZE}
                        height={DEFAULT_SUDOKU_BOARD_SIZE}
                        onClick={this.handleMove}
                        onMouseOver={this.handleMouseOver}
                />
            </div>
        )
    }

}